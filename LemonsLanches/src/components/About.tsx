export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-dark mb-6">
              Sobre a <span className="text-secondary">Lemons</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              A Lemons Lanches nasceu com uma missão: trazer os melhores lanches feitos com amor e dedicação para o bairro.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Desde o início, nos comprometemos com a qualidade dos ingredientes, a higiene e a rapidez no atendimento.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Cada lanche é preparado pensando em você e sua família. Venha experimentar!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="font-bold text-lg text-dark">Ingredientes Frescos</h3>
                  <p className="text-gray-600">Comprados diariamente para garantir qualidade</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <h3 className="font-bold text-lg text-dark">Atendimento Excelente</h3>
                  <p className="text-gray-600">Rápido, atencioso e com muito carinho</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">💚</span>
                <div>
                  <h3 className="font-bold text-lg text-dark">Feito com Amor</h3>
                  <p className="text-gray-600">Cada pedido é especial para nós</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <p className="text-6xl text-center mb-4">🍋🌟</p>
                <div className="text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">+500</p>
                  <p className="text-xl text-gray-700 font-semibold">Clientes Satisfeitos</p>
                  <hr className="my-4 border-yellow-300" />
                  <p className="text-5xl font-bold text-primary mb-2">4.9★</p>
                  <p className="text-xl text-gray-700 font-semibold">Avaliação Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
