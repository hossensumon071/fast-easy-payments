const tones = { gold: 'bg-gold text-dark', dark: 'bg-dark text-cream' }

export default function Chip({ children, tone = 'gold', dot = true, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium ${tones[tone]} ${className}`}>
      {dot && <i className="size-[7px] rounded-full bg-current" />}
      {children}
    </span>
  )
}
