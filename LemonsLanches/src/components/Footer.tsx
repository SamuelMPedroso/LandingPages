export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/images/Logo-removebg-preview.png" alt="Lemons Lanches" className="h-11 w-11 object-contain" />
              <h3 className="text-lg font-bold">Lemons Lanches</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Os melhores lanches da região, feitos com amor e ingredientes de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-white/90">Links Rápidos</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors focus-ring rounded">
                  Início
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary-400 transition-colors focus-ring rounded">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors focus-ring rounded">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors focus-ring rounded">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="text-center text-white/50 text-sm">
          <p>
            © {currentYear} Lemons Lanches. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com 💛 para os melhores lanches do bairro
          </p>
        </div>
      </div>
    </footer>
  );
}

