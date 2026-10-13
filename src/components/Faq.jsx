import { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Tag from './Tag'
import Button from './Button'
import { FAQS } from '../data'
import { h2, sectionY } from './ui'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={sectionY}>
      <div className="container">
        <Tag>Frequently Asked Questions</Tag>
        <h2 className={`mb-8 mt-5 lg:mb-14 ${h2}`}>
          Have <em>questions</em> ?
        </h2>

        <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-x-16 xl:grid-cols-[280px_1fr] xl:gap-x-24">
          <aside className="flex min-h-[170px] flex-col justify-between gap-6 rounded-[14px] bg-grad-faq p-[22px] text-white lg:sticky lg:top-[110px]">
            <p className="text-[1.05rem] font-medium leading-snug">
              Find the right <br />
              solution for you now
            </p>
            <Button className="self-start">Contact Us</Button>
          </aside>

          <div>
            {FAQS.map((f, i) => {
              const isOpen = i === open
              return (
                <div key={f.q} className="border-b border-dark/15">
                  <button
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-medium sm:text-[1.1rem]"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-200 ${
                        isOpen ? 'bg-dark text-gold' : 'bg-white text-dark'
                      }`}
                    >
                      {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[62ch] pb-[22px] text-[0.92rem] text-muted sm:pr-14">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
