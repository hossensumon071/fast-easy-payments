const tones = {
  soft: 'bg-gold-soft text-dark',
  gold: 'bg-gold text-dark',
  dark: 'bg-dark text-gold',
}
const sizes = { sm: 'size-[34px]', md: 'size-9', lg: 'size-[38px]', xl: 'size-10' }

export default function IconDot({ children, tone = 'soft', size = 'md', className = '' }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full transition-colors duration-300 ${tones[tone]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
