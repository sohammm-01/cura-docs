import { useEffect, useRef } from 'react'

export function SilkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef   = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    const speed          = 0.018
    const scale          = 2
    const noiseIntensity = 0.75

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const noise = (x: number, y: number) => {
      const G  = 2.71828
      return (G * Math.sin(G * x) * G * Math.sin(G * y) * (1 + x)) % 1
    }

    const animate = () => {
      const { width, height } = canvas
      const tOffset = speed * time

      // Allocate fresh imageData — every pixel will be written
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      // Fill entire image with dark base first
      for (let i = 0; i < data.length; i += 4) {
        data[i]     = 12
        data[i + 1] = 8
        data[i + 2] = 4
        data[i + 3] = 255
      }

      // Silk pattern — sample every 2px, fill 2×2 blocks for coverage
      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width)  * scale
          const v = (y / height) * scale

          const tex_x = u
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset)

          const pattern =
            0.6 + 0.4 * Math.sin(
              5.0 * (tex_x + tex_y +
                Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                0.02 * tOffset) +
              Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
            )

          const rnd       = noise(x, y)
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity)

          // Dark warm amber-gold at 36% of original brightness (−64%)
          const r = Math.floor(56 * intensity)
          const g = Math.floor(36 * intensity)
          const b = Math.floor(13 * intensity)

          // Write 2×2 block so no gaps
          for (let dx = 0; dx < 2 && x + dx < width; dx++) {
            for (let dy = 0; dy < 2 && y + dy < height; dy++) {
              const idx = ((y + dy) * width + (x + dx)) * 4
              data[idx]     = r
              data[idx + 1] = g
              data[idx + 2] = b
              data[idx + 3] = 255
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Deep vignette so edges stay dark
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.65
      )
      vignette.addColorStop(0, 'rgba(0,0,0,0)')
      vignette.addColorStop(1, 'rgba(0,0,0,0.72)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, width, height)

      time++
      animRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width:  '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
