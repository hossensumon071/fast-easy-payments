import { useState } from 'react'
import SectionHead from './SectionHead'
import { POS } from '../data'
import { sectionY } from './ui'

export default function Pos() {
  const [active, setActive] = useState(0)

  return (
    <section id="hardware" className={`${sectionY} bg-grad-dark text-cream`}>
      <div className="container">
        <SectionHead dark tag="POS Hardware" text="Choose hardware that fits your business, your workflow, and the way your customers pay.">
          The right POS for <br />
          the way <em>you work.</em>
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2" onMouseLeave={() => setActive(0)}>
          {POS.map((p, i) => (
            <article
              key={p.title}
              onMouseEnter={() => setActive(i)}
              className={`overflow-hidden rounded-[14px] border bg-[#4a4220] transition duration-300 hover:-translate-y-[3px] ${
                i === active ? 'border-gold/70' : 'border-transparent'
              }`}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="aspect-[1.75/1] w-full object-cover" />
              <div className="px-[22px] pb-[22px] pt-[18px]">
                <span className="text-[0.8rem] text-gold">{p.tag}</span>
                <h3 className="mb-2 mt-1 text-[clamp(1.3rem,1.9vw,1.7rem)] font-medium text-white">{p.title}</h3>
                <p className="text-[0.85rem] text-cream/85">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
