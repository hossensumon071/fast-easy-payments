import { CreditCard, Landmark, FileText, Globe, Repeat, Smartphone } from 'lucide-react'

export const NAV = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'hardware', label: 'POS Hardware' },
  { id: 'industries', label: 'Industries' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact', dot: true },
]

export const CLIENTS = [
  { src: '/images/clients/mellow.webp', alt: 'Mellow Nail Artistry' },
  { src: '/images/clients/satel.webp', alt: 'Satel Realty' },
  { src: '/images/clients/3bean.webp', alt: '3 Bean Coffee Roasters' },
  { src: '/images/clients/leen.webp', alt: 'Leen Cosmetics' },
  { src: '/images/clients/skulpt.webp', alt: 'Skulpt' },
  { src: '/images/clients/aljedaie.webp', alt: 'Al Jedaie Office Furniture' },
  { src: '/images/clients/habib.webp', alt: 'Mohammad Al Habib' },
  { src: '/images/clients/bussma.webp', alt: 'Bussma' },
]

export const SOLUTIONS = [
  { icon: CreditCard, title: 'Credit & Debit Cards', text: 'Accept major card payments with reliable processing built for everyday business.' },
  { icon: Landmark, title: 'ACH / eCheck', text: 'Offer convenient bank-based payment options for customers and businesses.' },
  { icon: FileText, title: 'Invoicing', text: 'Send professional invoices and make it easier for customers to pay.' },
  { icon: Globe, title: 'Hosted Payment Pages', text: 'Give customers a simple and secure way to complete payments online.' },
  { icon: Repeat, title: 'Recurring Billing', text: 'Make repeat payments easier to manage for ongoing services and subscriptions.' },
  { icon: Smartphone, title: 'Text to Pay', text: 'Give customers a fast way to pay directly from their phone.' },
]

export const POS = [
  { tag: 'Countertop POS', title: 'Dejavoo P1', text: 'Best for restaurants, retail, and counter-based businesses.', img: '/images/pos-countertop.webp' },
  { tag: 'Portable POS', title: 'Dejavoo P8 / Clover Flex', text: 'Best for tableside, mobile, and on-the-go payments.', img: '/images/pos-portable.webp' },
  { tag: 'Smart POS', title: 'Dejavoo P18 / Clover Duo', text: 'Best for businesses that need a complete POS experience.', img: '/images/pos-smart.webp' },
  { tag: 'Self - Service', title: 'Self-Service POS / Kiosk', text: 'Best for kiosks and high-volume customer environments.', img: '/images/pos-kiosk.webp' },
]

export const INDUSTRIES = [
  {
    tag: 'Restaurants',
    title: 'Faster Checkout for Busy Restaurants',
    text: 'Keep tables turning and tips flowing with reliable tableside and counter payments built for the pace of your restaurant.',
    img: '/images/pos-smart.webp',
  },
  {
    tag: 'Retail',
    title: 'Smarter Payments for Modern Retail',
    text: 'Accept payments quickly, keep transactions moving, and give your customers a smooth checkout experience with reliable POS and payment solutions built for your retail business.',
    img: '/images/industry-retail.webp',
  },
  {
    tag: 'Professional Services',
    title: 'Single platform delivering total financial clarity.',
    text: 'Give your clients convenient ways to pay while keeping transactions organized, secure, and easy to manage.',
    img: '/images/pos-portable.webp',
  },
]

export const WHY = {
  pricing: {
    title: 'Transparent Pricing',
    text: 'We offer clear, competitive pricing built around your business needs, so you get the best value from your payment solutions.',
    points: ['Flexible pricing options', 'Solutions for businesses of all sizes', 'Clear and upfront communication', 'No long-term commitments'],
  },
  tech: {
    title: 'Reliable Technology',
    text: 'We provide modern POS and payment solutions designed to keep your business running smoothly and securely.',
  },
  support: {
    title: 'Dedicated Support',
    text: "We're here to support you with real people, quick response times, and guidance whenever you need it.",
    points: ['On-Time Setup', 'Consistent Support', 'Clear Communication', 'A True Partner in Your Success'],
  },
}

export const STEPS = [
  { img: '/images/step-1.webp', title: 'Tell Us About Your Business', text: 'Complete a short inquiry so we can understand your business and payment needs.' },
  { img: '/images/step-2.webp', title: 'Choose Your Solution', text: "We'll help identify the right payment and POS setup for your business." },
  { img: '/images/step-3.webp', title: 'Start Taking Payments', text: 'Get set up with the right tools and start accepting payments.' },
]

export const BUSINESS_TYPES = ['Retail Store', 'Restaurant', 'Gas Station', 'C-Store', 'Professional Services', 'Other']

export const TESTIMONIALS = [
  { name: 'Ryan Carter', role: 'Business Owner', img: '/images/avatars/1.jpg', quote: 'Fast Easy Payments made our payment process much simpler. Everything feels faster and more organized, and our customers now have a smoother checkout experience.' },
  { name: 'Daniel Brooks', role: 'Business Owner', img: '/images/avatars/2.jpg', quote: 'The process was quick and easy from the beginning. We now have a more convenient way to accept payments, and our customers appreciate having flexible payment options.' },
  { name: 'Ethan James', role: 'Restaurant Owner', img: '/images/avatars/3.jpg', quote: 'We needed a payment solution that could keep up with our busy restaurant. The setup was straightforward, the system is reliable, and our team can process payments without slowing down service.' },
  { name: 'Liam Foster', role: 'Business Owner', img: '/images/avatars/4.jpg', quote: 'As our business grew, we needed a payment system that could grow with us. Fast Easy Payments helped us set up a reliable solution without unnecessary complexity or hidden surprises.' },
  { name: 'Jake Mitchell', role: 'Business Owner', img: '/images/avatars/5.jpg', quote: 'What I liked most was how simple everything was. Fast Easy Payments helped us find a solution that actually fits the way our business operates instead of forcing us into a complicated setup.' },
  { name: 'Sophia Reed', role: 'Business Owner', img: '/images/avatars/6.jpg', quote: 'The team took the time to understand our business before recommending a solution. The result was a payment setup that feels simple for our staff and convenient for our customers.' },
]

export const FAQS = [
  { q: 'What payment methods can I accept?', a: 'Fast Easy Payments supports credit and debit cards, ACH/eCheck, invoicing, hosted payment pages, recurring billing, and text-to-pay options.' },
  { q: 'What POS systems are available?', a: 'We offer countertop, portable, smart, and self-service POS options, including Dejavoo P1, Dejavoo P8 / Clover Flex, Dejavoo P18 / Clover Duo, and kiosks. We will help you match the right one to your business.' },
  { q: 'Do you support gas stations and C-stores?', a: 'Yes. We work with gas stations, convenience stores, retail shops, restaurants, and many other business types. Tell us about your setup and we will recommend the right solution.' },
  { q: 'Can I accept ACH or eCheck payments?', a: 'Yes. ACH / eCheck lets your customers pay directly from their bank account, a convenient option for invoices, recurring billing, and larger payments.' },
  { q: 'How quickly can I get started?', a: 'Once you send us a short inquiry, our team will reach out to understand your needs and guide you through the setup step by step.' },
  { q: 'Can you help me choose the right POS?', a: 'Absolutely. Share a few details about your business and our team will walk you through the options and recommend the best fit.' },
  { q: 'Can I use my existing hardware?', a: 'In many cases, yes. Compatibility depends on your current equipment, so get in touch and we will review your setup.' },
]
