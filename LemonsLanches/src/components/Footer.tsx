import logoImage from '/images/Logo-removebg-preview.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="Lemons Lanches" className="h-12 w-12 object-contain" />
              <h3 className="text-xl font-bold">Lemons Lanches</h3>
            </div>
            <p className="text-gray-400">
              Os melhores lanches da região, feitos com amor e ingredientes de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-primary transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition text-2xl"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition text-2xl"
                title="Facebook"
              >
                👍
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="text-center text-gray-400">
          <p>
            © {currentYear} Lemons Lanches. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com 💛 para os melhores lanches do bairro
          </p>
        </div>
      </div>
    </footer>
  );
}
