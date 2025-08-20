import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import BankruptcyCalculator from '@/components/BankruptcyCalculator'
import Lawyers from '@/components/Lawyers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <BankruptcyCalculator />
      <Lawyers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}