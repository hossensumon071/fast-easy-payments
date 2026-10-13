import { CLIENTS } from '../data'

export default function Clients() {
  return (
    <section className="relative z-30 -mt-3 pb-14 lg:-mt-10 lg:pb-24">
      <div className="container">
        <p className="mb-7 text-center text-base">Built for developers, sales teams and marketing partners</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 lg:gap-x-[52px]">
          {CLIENTS.map((c) => (
            <li key={c.alt}>
              <img src={c.src} alt={c.alt} loading="lazy" className="h-8 w-auto mix-blend-multiply sm:h-10 lg:h-[46px]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
