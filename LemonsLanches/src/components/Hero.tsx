export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 animate-fadeIn"
    >
      <div className="container text-center">
        <div className="mb-8 animate-slideUp">
          <img src="/images/Logo-removebg-preview.png" alt="Logo Lemons Lanches" className="h-32 w-auto mx-auto" />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-dark mb-4 animate-slideUp">
          Lemons <span className="text-secondary">Lanches</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slideUp">
          Os melhores lanches da região! Feitos com amor e ingredientes de qualidade.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-slideUp">
          <a
            href="#menu"
            className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition transform hover:scale-105"
          >
            📋 Ver Cardápio
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-4xl mb-2">⚡</p>
            <h3 className="font-bold text-xl text-secondary mb-2">Rápido</h3>
            <p className="text-gray-600">Seus lanches ficam prontos em minutos</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-4xl mb-2">🎯</p>
            <h3 className="font-bold text-xl text-secondary mb-2">De Qualidade</h3>
            <p className="text-gray-600">Ingredientes frescos e selecionados</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-4xl mb-2">💰</p>
            <h3 className="font-bold text-xl text-secondary mb-2">Preço Justo</h3>
            <p className="text-gray-600">Melhor custo-benefício da região</p>
          </div>
        </div>
      </div>
    </section>
  );
}
