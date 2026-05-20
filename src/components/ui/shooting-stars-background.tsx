import { useEffect, useRef } from 'react'

interface Streak {
  x: number
  y: number
  vx: number
  vy: number
  len: number
  life: number
  maxLife: number
  width: number
}

export default function ShootingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    const streaks: Streak[] = []

    const W = () => canvas.width
    const H = () => canvas.height

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = () => {
      const angleDeg = 195 + Math.random() * 30
      const angle = (angleDeg * Math.PI) / 180
      const speed = 12 + Math.random() * 16
      streaks.push({
        x: W() * 0.2 + Math.random() * W() * 1.1,
        y: -20 + Math.random() * H() * 0.55,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 90 + Math.random() * 160,
        life: 0,
        maxLife: 55 + Math.random() * 45,
        width: 0.7 + Math.random() * 1.3,
      })
    }

    // static background stars
    const bgStars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1,
      o: 0.15 + Math.random() * 0.55,
    }))

    // seed a few streaks immediately
    for (let i = 0; i < 4; i++) spawn()

    let frame = 0

    const draw = () => {
      raf = requestAnimationFrame(draw)

      // dark background
      ctx.fillStyle = '#07050300'
      ctx.clearRect(0, 0, W(), H())
      ctx.fillStyle = '#080503'
      ctx.fillRect(0, 0, W(), H())

      // static stars
      for (const s of bgStars) {
        ctx.beginPath()
        ctx.arc(s.x * W(), s.y * H(), s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,245,220,${s.o})`
        ctx.fill()
      }

      // spawn rhythm
      frame++
      if (frame % 22 === 0) spawn()

      // streaks
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i]
        s.x += s.vx
        s.y += s.vy
        s.life++

        if (s.life >= s.maxLife) { streaks.splice(i, 1); continue }

        const t = s.life / s.maxLife
        const alpha = t < 0.15 ? t / 0.15 : t > 0.6 ? 1 - (t - 0.6) / 0.4 : 1

        const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
        const nx = s.vx / spd
        const ny = s.vy / spd
        const tx = s.x - nx * s.len
        const ty = s.y - ny * s.len

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y)
        grad.addColorStop(0, 'rgba(255,255,255,0)')
        grad.addColorStop(0.55, `rgba(255,240,200,${alpha * 0.22})`)
        grad.addColorStop(1, `rgba(255,255,255,${alpha * 0.95})`)

        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = s.width
        ctx.lineCap = 'round'
        ctx.stroke()

        // bright head
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.width * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      }
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
