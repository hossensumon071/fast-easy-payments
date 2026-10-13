import { Eye, Handshake } from 'lucide-react'
import Tag from './Tag'
import Button from './Button'
import IconDot from './IconDot'
import { card, sectionY } from './ui'

const cardBase = `${card} flex flex-col justify-between gap-14 md:min-h-[360px] md:gap-10`

export default function About() {
  return (
    <section id="about" className={`${sectionY} !pt-10 lg:!pt-20`}>
      <div className="container">
        <div className="mx-auto mb-10 max-w-[1000px] text-center lg:mb-[72px]">
          <Tag>About us</Tag>
          <p className="mt-7 text-[clamp(1.35rem,2.5vw,2.1rem)] font-medium leading-[1.38] tracking-[-0.01em]">
            Fast Easy Payments helps businesses of all types accept payments, operate more efficiently, and grow with confidence. We provide simple, reliable payment solutions designed around the unique needs of every business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className={cardBase}>
            <IconDot tone="dark" size="xl"><Eye size={18} /></IconDot>
            <div>
              <h3 className="mb-2.5 text-[1.45rem] font-normal leading-tight">Clear Vision</h3>
              <p className="max-w-[36ch] text-[0.95rem] text-muted">
                To be a trusted payment partner for businesses of all types, providing modern solutions that make payments simple, secure, and accessible.
              </p>
            </div>
          </article>

          <article className={cardBase}>
            <IconDot tone="dark" size="xl"><Handshake size={18} /></IconDot>
            <div>
              <h3 className="mb-2.5 text-[1.45rem] font-normal leading-tight">Our Commitment</h3>
              <p className="max-w-[36ch] text-[0.95rem] text-muted">
                We work closely with our merchants, offering reliable technology, honest communication, and dedicated support to help them succeed.
              </p>
            </div>
          </article>

          <article className="flex min-h-[260px] flex-col justify-between gap-10 rounded-[14px] bg-grad-stat p-[22px] text-white md:col-span-2 md:min-h-[240px] lg:col-span-1 lg:min-h-[360px]">
            <div>
              <p className="text-[clamp(2rem,3vw,2.6rem)] font-medium leading-tight">1000+</p>
              <p className="mt-1 text-[clamp(1.2rem,1.8vw,1.6rem)]">Businesses Supported</p>
            </div>
            <Button className="w-full">Get Started</Button>
          </article>
        </div>
      </div>
    </section>
  )
}
