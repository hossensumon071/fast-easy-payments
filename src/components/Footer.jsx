import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import IconDot from './IconDot'
import { NAV } from '../data'
import { SITE } from '../config'

const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

const colCls = 'flex flex-col items-start gap-3 text-[0.88rem]'
const colTitle = 'mb-2 text-[0.95rem] font-medium text-white'
const linkCls = 'transition-colors hover:text-gold'
const contactCls = 'flex items-center gap-2.5 break-words'

export default function Footer() {
  return (
    <footer className="px-2.5 pb-2.5">
      <div className="relative overflow-hidden rounded-[28px] bg-grad-dark px-5 pt-8 text-cream sm:px-8 lg:px-16 lg:pt-14">
        <div aria-hidden="true" className="bg-dots mask-b-55 pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-[1360px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10">
          <div>
            <img src="/images/logo.webp" alt="Fast Easy Payments" width="70" height="56" className="mb-3.5 h-14 w-auto" />
            <p className="max-w-[26ch] text-[0.9rem]">Payment processing and POS solutions built around how your business actually gets paid.</p>
            <div className="mt-[18px] flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-gold text-dark transition hover:-translate-y-[3px]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className={colCls}>
            <h4 className={colTitle}>Navigation</h4>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={linkCls}>{n.label}</a>
            ))}
          </div>

          <div className={colCls}>
            <h4 className={colTitle}>Legal</h4>
            <a href="#" className={linkCls}>Terms of Service</a>
            <a href="#" className={linkCls}>Privacy Policy</a>
          </div>

          <div className={colCls}>
            <h4 className={colTitle}>Contact Us</h4>
            <a href={`mailto:${SITE.email}`} className={contactCls}>
              <IconDot tone="gold" size="sm"><Mail size={15} /></IconDot>
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className={contactCls}>
              <IconDot tone="gold" size="sm"><Phone size={15} /></IconDot>
              {SITE.phoneDisplay}
            </a>
            <span className={contactCls}>
              <IconDot tone="gold" size="sm"><MapPin size={15} /></IconDot>
              {SITE.address}
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-[1360px] flex-col gap-1.5 border-t border-gold/50 pt-[18px] text-[0.9rem] sm:flex-row sm:justify-between sm:gap-4">
          <span>© {new Date().getFullYear()} Fast Easy Payments</span>
          <span>Payment processing built around your business.</span>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto -mb-[0.06em] max-w-[1360px] select-none whitespace-nowrap bg-grad-gold-text bg-clip-text pt-6 text-center text-[clamp(3.4rem,17.5vw,15.5rem)] font-extrabold leading-[0.82] tracking-[-0.02em] text-transparent"
        >
          FAST EASY
        </div>
      </div>
    </footer>
  )
}
