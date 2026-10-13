import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Solutions from './components/Solutions'
import Pos from './components/Pos'
import Industries from './components/Industries'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import CtaBand from './components/CtaBand'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Solutions />
        <Pos />
        <Industries />
        <WhyUs />
        <HowItWorks />
        <ContactForm />
        <Testimonials />
        <CtaBand />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
