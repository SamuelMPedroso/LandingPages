export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Barbearia Edson</h3>
            <p className="text-gray-300 text-sm">
              Oferecendo os melhores serviços de corte e cuidado pessoal com profissionalismo e excelência há anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-accent transition">Início</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-accent transition">Serviços</a></li>
              <li><a href="#galeria" className="text-gray-300 hover:text-accent transition">Galeria</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-accent transition">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="text-gray-300 hover:text-accent transition">Corte Clássico</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-accent transition">Corte Moderno</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-accent transition">Barba Completa</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-accent transition">Pacote Completo</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Receba nossas promoções e novidades.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input 
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
              />
              <button 
                className="w-full bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition text-sm"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Barbearia Edson. Todos os direitos reservados.
            </p>
            <div className="md:text-right">
              <p className="text-gray-400 text-sm">
                Desenvolvido com ❤️ para excelência em estilo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
