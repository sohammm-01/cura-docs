import { motion } from 'framer-motion'

// Path coordinates span roughly:
//   x: -600 → 750   y: -220 → 900
// viewBox is set to that full range so paths populate top-to-bottom.
// preserveAspectRatio="none" lets the SVG stretch to the container's
// full height regardless of page length.

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="-600 -220 1400 1200"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.12 + path.id * 0.025}
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  )
}

export function BackgroundPaths() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        color: 'rgba(212,168,67,0.4)',
      }}
      aria-hidden
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  )
}
