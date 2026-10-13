import { ArrowRight } from 'lucide-react'
import { SITE } from '../config'

const sizes = {
  md: 'min-h-[52px] py-1.5 pl-6 pr-1.5 text-[0.95rem]',
  sm: 'min-h-11 py-[5px] pl-5 pr-[5px] text-[0.9rem]',
}

//h

const variants = {
  light: 'bg-[#fffbe6] text-dark',
  gold: 'bg-gold text-dark',
  dark: 'bg-dark text-cream',
  outline: 'border border-gold/70 text-gold',
}
const arrowColor = {
  light: 'bg-dark text-white',
  gold: 'bg-dark text-gold',
  dark: 'bg-gold text-dark',
}
const arrowSize = { md: 'size-[38px]', sm: 'size-[34px]' }

/**
 * Pill button used everywhere.
 * variant: light | gold | dark | outline     size: sm | md
 */
export default function Button({ children, variant = 'light', size = 'md', href = SITE.getStartedUrl, icon, className = '', ...rest }) {
  const external = /^https?:/.test(href)
  const outline = variant === 'outline'
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3.5 whitespace-nowrap rounded-full font-medium transition duration-200 hover:-translate-y-0.5 ${
        outline ? 'min-h-[52px] justify-center gap-2.5 px-6 text-[0.95rem]' : `justify-between ${sizes[size]}`
      } ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {!icon && (
        <span
          aria-hidden="true"
          className={`grid shrink-0 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-[3px] ${arrowSize[size]} ${arrowColor[variant]}`}
        >
          <ArrowRight size={16} />
        </span>
      )}
    </a>
  )
}
