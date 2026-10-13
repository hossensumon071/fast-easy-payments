import Tag from './Tag'
import { h2 } from './ui'

export default function SectionHead({ tag, children, text, dark }) {
  return (
    <div className="mb-8 flex flex-col items-start gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
      <div>
        <Tag dark={dark}>{tag}</Tag>
        <h2 className={`mt-5 ${h2}`}>{children}</h2>
      </div>
      {text && <p className={`max-w-[340px] text-[0.95rem] ${dark ? 'text-cream/85' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
