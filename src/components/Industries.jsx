import SectionHead from './SectionHead'
import Button from './Button'
import Chip from './Chip'
import { INDUSTRIES } from '../data'
import { sectionY } from './ui'

// Cards are "sticky": as you scroll, each card slides up and stacks over the previous one.
// --stack-top = where the first card sticks, --peek = how much of the previous card stays visible.
export default function Industries() {
  return (
    <section id="industries" className={sectionY}>
      <div className="container">
        <SectionHead tag="Industries" text="Flexible payment options designed around the way your customers prefer to pay.">
          Built for the way your <br />
          <em>business works.</em>
        </SectionHead>

        <div className="flex flex-col gap-7 [--peek:52px] [--stack-top:84px] sm:[--peek:60px] lg:[--peek:80px] lg:[--stack-top:96px]">
          {INDUSTRIES.map((it, i) => {
            const gold = i % 2 === 1
            return (
              <article
                key={it.tag}
                style={{ '--i': i }}
                className={`sticky top-[calc(var(--stack-top)_+_var(--i)_*_var(--peek))] rounded-[20px] p-4 shadow-[0_-12px_32px_rgba(0,0,0,0.18)] lg:rounded-3xl lg:p-[22px] ${
                  gold ? 'bg-gold text-dark' : 'bg-grad-dark text-cream'
                }`}
              >
                <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-6">
                  <Chip tone={gold ? 'dark' : 'gold'} className="order-1 ml-1.5 mt-1 self-start justify-self-start lg:order-none lg:col-start-1 lg:row-start-1 lg:ml-[34px] lg:mt-3">
                    {it.tag}
                  </Chip>

                  <div className="order-3 flex flex-col items-start gap-3.5 px-1.5 pb-1.5 lg:order-none lg:col-start-1 lg:row-start-2 lg:gap-5 lg:self-end lg:pb-3 lg:pl-[34px] lg:pr-0">
                    <h3 className="max-w-[22ch] text-[clamp(1.4rem,2.2vw,2rem)] font-medium leading-tight">{it.title}</h3>
                    <p className="max-w-[46ch] text-[0.92rem] sm:text-[0.98rem]">{it.text}</p>
                    <Button variant={gold ? 'dark' : 'light'}>Get Started</Button>
                  </div>

                  <img
                    src={it.img}
                    alt={it.tag}
                    loading="lazy"
                    className="order-2 aspect-[2/1] w-full rounded-[14px] object-cover sm:aspect-[1.8/1] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-[1.6/1] lg:h-full lg:min-h-[280px]"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
