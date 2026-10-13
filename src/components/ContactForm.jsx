import { useState } from 'react'
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, Mail, MapPin, MessageSquare, Phone, Store, User } from 'lucide-react'
import Tag from './Tag'
import IconDot from './IconDot'
import { SITE } from '../config'
import { BUSINESS_TYPES } from '../data'
import { h2, sectionY } from './ui'

const EMPTY = { name: '', business: '', email: '', phone: '', date: '', type: '', details: '', botcheck: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!v.phone.trim()) e.phone = 'Please enter your phone number'
  else if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number'
  if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Please enter a valid email'
  return e
}

const inputWrap = (error, extra = '') =>
  `flex min-h-12 items-center gap-2.5 rounded-xl border bg-[#fbfaf5] px-3.5 text-[#77735f] transition focus-within:border-dark focus-within:bg-white focus-within:ring-[3px] focus-within:ring-gold/45 ${
    error ? 'border-[#d64545]' : 'border-[#ddd8c4]'
  } ${extra}`
const inputCls = 'w-full min-w-0 bg-transparent text-[0.9rem] text-ink outline-none placeholder:text-[#9c9884]'

function Field({ label, required, error, full, children }) {
  return (
    <label className={`flex min-w-0 flex-col gap-2 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-[0.85rem] font-medium">
        {label}
        {required && ' *'}
      </span>
      {children}
      {error && (
        <span className="text-[0.78rem] text-[#d64545]" role="alert">
          {error}
        </span>
      )}
    </label>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    // Honeypot: bots fill hidden fields, humans don't
    if (values.botcheck) return

    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!SITE.web3formsKey) {
      setStatus('error')
      setErrorMsg('The form is not connected yet (missing access key). Please call or email us instead.')
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `New inquiry from ${values.name} – ${SITE.name}`,
          from_name: `${SITE.name} Website`,
          Name: values.name,
          'Business Name': values.business,
          Email: values.email,
          Phone: values.phone,
          'Preferred Date': values.date,
          'Business Type': values.type,
          'Business Details': values.details,
          ...(values.email.trim() ? { replyto: values.email.trim() } : {}),
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed')
      setStatus('success')
      setValues(EMPTY)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong while sending. Please try again, or call or email us directly.')
    }
  }

  const contactLink = 'flex items-center gap-3 break-words text-[0.9rem]'

  return (
    <section id="contact" className={`${sectionY} bg-grad-dark text-cream`}>
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="flex flex-col justify-between gap-8 lg:gap-12">
          <div>
            <Tag dark>Get Started</Tag>
            <h2 className={`mb-[18px] mt-5 text-white ${h2}`}>
              Let's find the right payment <em>solution for you.</em>
            </h2>
            <p className="max-w-[36ch] text-cream/90">
              Tell us a little about your business and we'll help you explore the payment and POS options that fit your needs.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="mb-1 text-[0.95rem] font-medium">Contact Us</h4>
            <a href={`mailto:${SITE.email}`} className={contactLink}>
              <IconDot tone="gold" size="lg"><Mail size={16} /></IconDot>
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className={contactLink}>
              <IconDot tone="gold" size="lg"><Phone size={16} /></IconDot>
              {SITE.phoneDisplay}
            </a>
            <span className={contactLink}>
              <IconDot tone="gold" size="lg"><MapPin size={16} /></IconDot>
              {SITE.address}
            </span>
          </div>
        </div>

        <div className="rounded-[18px] bg-white p-5 text-ink sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 px-3 py-12 text-center text-[#1f8f4e]" role="status">
              <CheckCircle2 size={56} />
              <h3 className="text-[1.6rem] text-ink">Thank you!</h3>
              <p className="max-w-[38ch] text-muted">
                We received your details and will get back to you shortly with the best payment options for your business.
              </p>
              <button type="button" className="mt-2 font-medium text-dark underline" onClick={() => setStatus('idle')}>
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="relative">
              <div className="grid gap-x-4 gap-y-[18px] sm:grid-cols-2">
                <Field label="Name" required error={errors.name}>
                  <span className={inputWrap(errors.name)}>
                    <User size={16} className="shrink-0" />
                    <input className={inputCls} type="text" name="name" autoComplete="name" placeholder="Enter your full name" value={values.name} onChange={set('name')} />
                  </span>
                </Field>

                <Field label="Business Name">
                  <span className={inputWrap()}>
                    <Store size={16} className="shrink-0" />
                    <input className={inputCls} type="text" name="business" autoComplete="organization" placeholder="Enter your business name" value={values.business} onChange={set('business')} />
                  </span>
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <span className={inputWrap(errors.email)}>
                    <Mail size={16} className="shrink-0" />
                    <input className={inputCls} type="email" name="email" autoComplete="email" placeholder="Enter your email" value={values.email} onChange={set('email')} />
                  </span>
                </Field>

                <Field label="Number" required error={errors.phone}>
                  <span className={inputWrap(errors.phone)}>
                    <Phone size={16} className="shrink-0" />
                    <input className={inputCls} type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000" value={values.phone} onChange={set('phone')} />
                  </span>
                </Field>

                <Field label="Date">
                  <span className={inputWrap()}>
                    <Calendar size={16} className="shrink-0" />
                    <input className={inputCls} type="date" name="date" value={values.date} onChange={set('date')} />
                  </span>
                </Field>

                <Field label="Business Type">
                  <span className={inputWrap(false, 'relative')}>
                    <select className={`${inputCls} cursor-pointer appearance-none py-3 pr-6`} name="type" value={values.type} onChange={set('type')}>
                      <option value="">Select</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute right-3.5 text-dark" />
                  </span>
                </Field>

                <Field label="Business Details" full>
                  <span className={inputWrap(false, '!items-start pt-3.5')}>
                    <MessageSquare size={16} className="shrink-0" />
                    <textarea className={`${inputCls} min-h-[110px] resize-y`} name="details" rows={4} placeholder="Type your message here..." value={values.details} onChange={set('details')} />
                  </span>
                </Field>
              </div>

              {/* honeypot – hidden from people */}
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" value={values.botcheck} onChange={set('botcheck')} className="absolute -left-[9999px] size-px opacity-0" aria-hidden="true" />

              {status === 'error' && (
                <p className="mt-4 rounded-[10px] bg-[#fde8e8] px-3.5 py-3 text-[0.88rem] text-[#9b2c2c]" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-5 flex min-h-[52px] w-full items-center justify-between gap-3 rounded-full bg-grad-submit py-1.5 pl-6 pr-1.5 text-[0.95rem] font-medium text-gold transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span>{status === 'sending' ? 'Sending…' : 'Get my payment options'}</span>
                <span className="grid size-[38px] place-items-center rounded-full bg-gold text-dark">
                  <ArrowRight size={16} />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
