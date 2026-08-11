import { useState } from 'react';

export default function About() {
  const carouselImages = [
    '/images/realIMG/dois-coquetéis-de-seltzer-duro-na-praia-verão-cocktails-rígido-bebidas-refrigeradas-bela-em-segundo-plano-conceito-barra-223651264.webp',
    '/images/realIMG/Gemini_Generated_Image_p7em3ip7em3ip7em.png',
    '/images/realIMG/Gemini_Generated_Image_xoupw0xoupw0xoup.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <img src="/images/Logo-removebg-preview.png" alt="Logo Lemons" className="h-24" />
              <h2 className="text-5xl font-bold text-dark">
                Sobre a <span className="text-secondary">Lemons</span>
              </h2>
            </div>
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
            <div className="w-full max-w-3xl">
              <h3 className="text-3xl font-bold text-center text-dark mb-6">
                <span className="text-secondary">Galeria</span> de Fotos
              </h3>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[16/9] max-h-[28rem] bg-gray-100">
                <img
                  src={carouselImages[currentIndex]}
                  alt={`Galeria ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
                >
                  ›
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 w-3 rounded-full ${idx === currentIndex ? 'bg-secondary' : 'bg-gray-300'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
