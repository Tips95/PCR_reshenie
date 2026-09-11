import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Lawyers from '@/components/Lawyers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Lawyers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
