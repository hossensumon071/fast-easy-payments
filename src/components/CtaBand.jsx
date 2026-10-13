import { Phone } from 'lucide-react'
import Tag from './Tag'
import Button from './Button'
import PhoneImage from './PhoneImage'
import { SITE } from '../config'

export default function CtaBand() {
  return (
    <section className="overflow-hidden bg-grad-dark text-cream">
      <div className="container grid items-center lg:min-h-[420px] lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div className="pb-2 pt-12 lg:py-20">
          <Tag dark>Get Started</Tag>
          <h2 className="mb-3.5 mt-5 max-w-[14ch] text-[clamp(2rem,3.8vw,3.2rem)] font-normal leading-[1.12] tracking-[-0.01em] text-white">
            Payment solutions for <em>every business.</em>
          </h2>
          <p className="max-w-[44ch] text-cream/90">
            Turn everyday transactions into lasting revenue and measurable business growth — with hardware and support that scales with you.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 [&>a]:w-full sm:[&>a]:w-auto">
            <Button variant="gold">Get Started</Button>
            <Button variant="outline" href={SITE.phoneHref} icon={<Phone size={18} />}>
              {SITE.phoneDisplay}
            </Button>
          </div>
        </div>

        <div className="relative min-h-[300px] self-end lg:h-full lg:min-h-[360px]" aria-hidden="true">
          <span className="absolute -bottom-[55%] left-1/2 aspect-square w-[min(440px,90%)] -translate-x-1/2 rounded-full bg-gold lg:-bottom-[46%] lg:w-[min(560px,100%)]" />
          <PhoneImage className="absolute bottom-0 left-1/2 w-[min(230px,55%)] -translate-x-1/2 lg:w-[min(280px,60%)]" alt="" />
        </div>
      </div>
    </section>
  )
}
