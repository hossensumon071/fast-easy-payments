import { useState } from 'react'
import SectionHead from './SectionHead'
import IconDot from './IconDot'
import { SOLUTIONS } from '../data'
import { sectionY } from './ui'

export default function Solutions() {
  // first card is "active" (dark) until you hover/focus another one
  const [active, setActive] = useState(0)

  return (
    <section id="solutions" className={sectionY}>
      <div className="container">
        <SectionHead tag="Payment Solutions" text="Flexible payment options designed around the way your customers prefer to pay.">
          One platform. <br />
          <span className="inline-block pl-[0.2em]">
            Every way to <em>get paid.</em>
          </span>
        </SectionHead>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" onMouseLeave={() => setActive(0)}>
          {SOLUTIONS.map(({ icon: Icon, title, text }, i) => {
            const on = i === active
            return (
              <article
                key={title}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex min-h-[250px] flex-col justify-between gap-10 rounded-[14px] p-[22px] transition-colors duration-300 ${
                  on ? 'bg-grad-card text-white' : 'bg-white text-ink'
                }`}
              >
                <IconDot tone={on ? 'gold' : 'soft'}>
                  <Icon size={18} />
                </IconDot>
                <div>
                  <h3 className="mb-2 text-[1.45rem] font-normal leading-tight">{title}</h3>
                  <p className={`text-[0.9rem] transition-colors duration-300 ${on ? 'text-white/85' : 'text-muted'}`}>{text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
