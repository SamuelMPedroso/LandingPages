import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import WhatsAppCTA from './components/WhatsAppCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="bg-white">
      <FloatingWhatsApp />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <WhatsAppCTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
