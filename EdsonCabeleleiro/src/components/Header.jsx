import { useEffect, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent">✂️ Barbearia Edson</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-accent transition">Início</a>
            <a href="#servicos" className="text-white hover:text-accent transition">Serviços</a>
            <a href="#galeria" className="text-white hover:text-accent transition">Galeria</a>
            <a href="#contato" className="text-white hover:text-accent transition">Contato</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <a 
              href="https://wa.me/5519996478404?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Edson."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition inline-flex items-center gap-1"
            >
              💬 WhatsApp
            </a>
            <a href="#agendamento" className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block text-white hover:text-accent transition py-2">Início</a>
            <a href="#servicos" className="block text-white hover:text-accent transition py-2">Serviços</a>
            <a href="#galeria" className="block text-white hover:text-accent transition py-2">Galeria</a>
            <a href="#contato" className="block text-white hover:text-accent transition py-2">Contato</a>
            <a 
              href="https://wa.me/5519996478404?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Edson."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-center mt-2"
            >
              💬 WhatsApp
            </a>
            <a href="#agendamento" className="block bg-accent text-primary px-4 py-2 rounded-lg font-semibold text-center">Agendar</a>
          </div>
        )}
      </nav>
    </header>
  )
}
