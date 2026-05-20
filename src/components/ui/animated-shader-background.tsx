import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AnoAI() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene    = new THREE.Scene()
    const camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    // cap pixel ratio — halves GPU load on retina screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    container.appendChild(renderer.domElement)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime:       { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2  iResolution;

        // 2 octaves instead of 3 — ~33% cheaper fbm
        #define NUM_OCTAVES 2

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u  = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          return mix(
            mix(rand(ip),              rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0,1.0)), rand(ip + vec2(1.0,1.0)), u.x),
            u.y
          );
        }

        float fbm(vec2 x) {
          float v  = 0.0;
          float a  = 0.3;
          vec2  shift = vec2(100.0);
          mat2  rot   = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x  = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        // grid-based star field with twinkle
        float stars(vec2 fragCoord, float time) {
          vec2 grid = floor(fragCoord / 4.0);
          vec2 cell = fract(fragCoord / 4.0);
          float h = rand(grid);
          if (h > 0.018) return 0.0;
          vec2 pos = vec2(rand(grid + 0.3), rand(grid + 0.7));
          float d = length(cell - pos);
          float twinkle = 0.55 + 0.45 * sin(time * (1.8 + h * 4.0) + h * 6.28318);
          return smoothstep(0.28, 0.0, d) * twinkle;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5)
                   / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec4 o = vec4(0.0);

          // fbm called once, outside the loop
          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          // 18 iterations instead of 35 — ~half the GPU cost, visually identical
          for (float i = 0.0; i < 18.0; i++) {
            vec2 v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5
                       + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);

            // CURA palette: amber-gold (#D4A843) → copper (#C17A50)
            vec4 auroraColors = vec4(
              0.65 + 0.28 * sin(i * 0.20 + iTime * 0.40),  // R: warm amber-red  0.37–0.93
              0.32 + 0.22 * cos(i * 0.30 + iTime * 0.50),  // G: gold-honey       0.10–0.54
              0.03 + 0.05 * sin(i * 0.40 + iTime * 0.30),  // B: near-zero        0.00–0.08
              1.0
            );

            vec4 contribution = auroraColors
              * exp(sin(i * i + iTime * 0.8))
              / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));

            float thin = smoothstep(0.0, 1.0, i / 18.0) * 0.6;
            o += contribution * thin;
          }

          // dark amber base so it reads as deep gold, not blown-out white
          vec4 darkBase = vec4(0.05, 0.03, 0.01, 1.0);
          o = tanh(pow(o / 100.0, vec4(1.6)));
          vec4 aurora = mix(darkBase, o * 1.3, 0.82);

          // star field — warm white dots that twinkle independently
          float s = stars(gl_FragCoord.xy, iTime);
          vec4 starColor = vec4(1.0, 0.93, 0.80, 1.0) * s * 0.75;

          gl_FragColor = aurora + starColor;
        }
      `,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh     = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let frameId = 0
    let paused  = false

    const animate = () => {
      if (!paused) {
        material.uniforms.iTime.value += 0.016
        renderer.render(scene, camera)
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()

    // pause when tab is hidden — no GPU work while invisible
    const onVisibility = () => { paused = document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', onVisibility)
      container.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width:  '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
