import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Tag from './Tag'
import { TESTIMONIALS } from '../data'
import { sectionY } from './ui'

function Avatar({ name, src }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(' ').map((w) => w[0]).join('')
  return failed ? (
    <span className="grid size-10 place-items-center rounded-full bg-dark text-[0.8rem] font-semibold text-gold">{initials}</span>
  ) : (
    <img className="size-10 rounded-full object-cover" src={src} alt={name} onError={() => setFailed(true)} />
  )
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = TESTIMONIALS.length
  const t = TESTIMONIALS[i]

  return (
    <section id="testimonials" className={`${sectionY} text-center`}>
      <div className="container">
        <Tag>Testimonials</Tag>
        <figure key={i} className="mx-auto mt-7 max-w-[1020px] animate-fade" aria-live="polite">
          <blockquote className="text-[clamp(1.3rem,2.6vw,2.2rem)] font-medium leading-[1.35] tracking-[-0.01em]">“{t.quote}”</blockquote>
          <figcaption className="mt-9 inline-flex items-center gap-3 text-left">
            <Avatar name={t.name} src={t.img} />
            <span>
              <strong className="block text-[1.1rem] font-medium">{t.name}</strong>
              <small className="text-[0.9rem] text-muted">{t.role}</small>
            </span>
          </figcaption>
        </figure>

        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={() => setI((i - 1 + n) % n)}
            aria-label="Previous testimonial"
            className="grid size-10 place-items-center rounded-full border border-dark/10 bg-[#fffbe6] text-dark transition hover:scale-110"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => setI((i + 1) % n)}
            aria-label="Next testimonial"
            className="grid size-10 place-items-center rounded-full bg-dark text-gold transition hover:scale-110"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
