import Button from './Button'
import PhoneImage from './PhoneImage'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate mx-2.5 mt-2.5 overflow-hidden rounded-t-[28px] bg-grad-hero text-white lg:min-h-[clamp(780px,100vh,1060px)]"
    >
      {/* dotted texture */}
      <div aria-hidden="true" className="bg-dots mask-b-35 pointer-events-none absolute inset-0 -z-10 opacity-55" />
      {/* fade into the cream background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[28%] bg-grad-fade lg:h-[36%]" />

      <div className="container grid gap-6 pt-[120px] lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:pt-[170px]">
        <h1 className="max-w-[14ch] text-[clamp(2.3rem,9vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.02em] lg:max-w-[520px] lg:text-[clamp(2.2rem,4.2vw,4rem)]">
          Payment solutions built around <em className="font-semibold">your business.</em>
        </h1>

        <PhoneImage className="relative z-10 order-3 mx-auto -mb-10 mt-4 w-[min(78vw,400px)] lg:order-none lg:mb-0 lg:mt-0 lg:w-[clamp(270px,30vw,450px)]" />

        <div className="relative z-30 order-2 flex max-w-[480px] flex-col items-start gap-5 lg:order-none lg:max-w-[330px] lg:self-center lg:justify-self-end lg:pt-[140px]">
          <p className="text-[1.02rem] leading-snug">
            Modern POS and payment processing solutions designed to help your business accept payments, get paid faster, and operate with confidence.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
}
