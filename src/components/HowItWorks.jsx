import Tag from './Tag'
import Chip from './Chip'
import { STEPS } from '../data'
import { h2, sectionY } from './ui'

export default function HowItWorks() {
  return (
    <section id="how" className={`${sectionY} !pt-0`}>
      <div className="container">
        <div className="mb-8 text-center lg:mb-14">
          <Tag>How it works</Tag>
          <h2 className={`mt-5 ${h2}`}>
            Get started in 3 <em>simple steps.</em>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <article key={s.title} className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className={`mb-6 aspect-[1.19/1] w-full rounded-[14px] object-cover ${i === 2 ? 'sm:aspect-[2.2/1] lg:aspect-[1.19/1]' : ''}`}
              />
              <Chip dot={false}>Step {i + 1}</Chip>
              <h3 className="mb-2 mt-3.5 text-[1.15rem] font-medium">{s.title}</h3>
              <p className="max-w-[36ch] text-[0.9rem] text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
