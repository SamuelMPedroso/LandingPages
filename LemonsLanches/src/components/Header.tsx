import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container flex justify-between items-center py-4">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
        >
          <img src="/images/Logo-removebg-preview.png" alt="Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold text-secondary">Lemons</h1>
          <span className="text-sm text-primary font-semibold">Lanches</span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-secondary transition font-semibold"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-gray-700 hover:text-secondary transition font-semibold"
          >
            Cardápio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-secondary transition font-semibold"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-secondary transition font-semibold"
          >
            Contato
          </button>
        </nav>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-yellow-200 py-4">
          <div className="container flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-gray-700 hover:text-secondary transition font-semibold py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-gray-700 hover:text-secondary transition font-semibold py-2"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-secondary transition font-semibold py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-secondary transition font-semibold py-2"
            >
              Contato
            </button>

          </div>
        </nav>
      )}
    </header>
  );
}
