export default function Tag({ children, dark = false }) {
  return (
    <span
      className={`inline-block rounded-full border px-[18px] py-1.5 text-[0.95rem] leading-snug ${
        dark ? 'border-gold/60 text-gold' : 'border-dark/50'
      }`}
    >
      {children}
    </span>
  )
}
