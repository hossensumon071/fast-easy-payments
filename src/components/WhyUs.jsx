import Tag from './Tag'
import PhoneImage from './PhoneImage'
import { WHY } from '../data'
import { card, h2, sectionY } from './ui'

function Points({ items }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((p) => (
        <li
          key={p}
          className="relative pl-[22px] text-[0.95rem] before:absolute before:left-1 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-ink before:content-['']"
        >
          {p}
        </li>
      ))}
    </ul>
  )
}

const cardCls = `${card} flex flex-col justify-between gap-8 md:min-h-[420px] lg:min-h-[480px]`
const titleCls = 'mb-2 text-[1.6rem] font-normal leading-tight'

export default function WhyUs() {
  return (
    <section id="why-us" className={sectionY}>
      <div className="container">
        <div className="mb-8 text-center lg:mb-14">
          <Tag>Why us</Tag>
          <h2 className={`mt-5 ${h2}`}>
            Why Businesses <em>Choose Us</em>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className={cardCls}>
            <div>
              <h3 className={titleCls}>{WHY.pricing.title}</h3>
              <p className="text-[0.92rem] text-muted">{WHY.pricing.text}</p>
            </div>
            <Points items={WHY.pricing.points} />
          </article>

          <article className="flex min-h-[420px] flex-col justify-between gap-8 overflow-hidden rounded-[14px] bg-grad-why px-[22px] pt-[22px] text-white md:col-span-2 md:min-h-[360px] lg:col-span-1 lg:min-h-[480px]">
            <div>
              <h3 className={titleCls}>{WHY.tech.title}</h3>
              <p className="text-[0.92rem] text-white/85">{WHY.tech.text}</p>
            </div>
            <PhoneImage className="mx-auto -mb-[30px] w-[min(200px,55%)]" alt="" />
          </article>

          <article className={cardCls}>
            <div>
              <h3 className={titleCls}>{WHY.support.title}</h3>
              <p className="text-[0.92rem] text-muted">{WHY.support.text}</p>
            </div>
            <Points items={WHY.support.points} />
          </article>
        </div>
      </div>
    </section>
  )
}
