import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/site';

const NAV_LINKS = [
  { id: 'home', label: 'Início' },
  { id: 'menu', label: 'Cardápio' },
  { id: 'about', label: 'Sobre' },
  { id: 'contact', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-card' : 'shadow-none'
      }`}
    >
      <div className="container flex justify-between items-center py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 rounded-lg focus-ring"
        >
          <img src="/images/Logo-removebg-preview.png" alt="Lemons Lanches" className="h-11 w-auto" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-xl font-extrabold text-secondary-600 tracking-tight">Lemons</span>
            <span className="text-xs font-semibold text-primary-600 tracking-wide">LANCHES</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 rounded-lg text-ink-muted hover:text-secondary-600 hover:bg-secondary-50 transition-colors font-semibold text-sm focus-ring"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-soft transition-colors focus-ring"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Pedir agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary-600 p-1.5 rounded-lg focus-ring"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav aria-label="Navegação móvel" className="md:hidden bg-white border-t border-primary-100 py-4">
          <div className="container flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-ink-muted hover:text-secondary-600 hover:bg-secondary-50 transition-colors font-semibold py-2.5 px-3 rounded-lg focus-ring"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-600 text-white px-5 py-3 rounded-lg font-bold text-sm shadow-soft transition-colors focus-ring"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              Pedir pelo WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

