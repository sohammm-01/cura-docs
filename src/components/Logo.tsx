export function Logo({ size = 22 }: { size?: number }) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      <span className="logo-word">cura</span>
      <span className="logo-mark" aria-hidden />
    </span>
  )
}
