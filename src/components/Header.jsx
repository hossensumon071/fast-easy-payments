import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { NAV } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'

const IDS = NAV.map((n) => n.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-2.5 z-50 px-2.5">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 rounded-[20px] border border-gold/10 bg-dark/80 py-2 pl-5 pr-3 backdrop-blur-xl lg:pl-7 lg:pr-3.5">
        <a href="#hero" onClick={close} aria-label="Fast Easy Payments – home">
          <img src="/images/logo.webp" alt="Fast Easy Payments" width="55" height="44" className="h-11 w-auto" />
        </a>

        <nav className="hidden gap-2 lg:flex" aria-label="Main navigation">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.95rem] transition-colors hover:text-gold xl:px-3.5 xl:text-base ${
                active === n.id ? 'text-gold' : 'text-cream'
              }`}
            >
              {n.dot && <i className="size-[7px] rounded-full bg-[#2ee66b] shadow-[0_0_8px_#2ee66b]" aria-hidden="true" />}
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm">Get Started</Button>
        </div>

        <button className="p-2 text-cream lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-h-[calc(100vh-90px)] max-w-[1500px] flex-col gap-4 overflow-auto rounded-[20px] bg-dark/95 p-5 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={close} className="border-b border-gold/15 px-1 py-3.5 text-[1.15rem] text-cream">
                {n.label}
              </a>
            ))}
          </nav>
          <Button onClick={close}>Get Started</Button>
        </div>
      )}
    </header>
  )
}
