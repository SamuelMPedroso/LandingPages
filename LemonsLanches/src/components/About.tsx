import { useState } from 'react';
import { CheckCircle2, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: CheckCircle2,
    title: 'Ingredientes Frescos',
    description: 'Comprados diariamente para garantir qualidade',
  },
  {
    icon: Award,
    title: 'Atendimento Excelente',
    description: 'Rápido, atencioso e com muito carinho',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada pedido é especial para nós',
  },
];

export default function About() {
  const carouselImages = [
    { src: '/images/realIMG/dois-coquetéis-de-seltzer-duro-na-praia-verão-cocktails-rígido-bebidas-refrigeradas-bela-em-segundo-plano-conceito-barra-223651264.webp', alt: 'Bebidas geladas servidas na praia' },
    { src: '/images/realIMG/Gemini_Generated_Image_p7em3ip7em3ip7em.png', alt: 'Foto do ambiente Lemons Lanches' },
    { src: '/images/realIMG/Gemini_Generated_Image_xoupw0xoupw0xoup.png', alt: 'Foto de produtos Lemons Lanches' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-primary-50/60">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-secondary-600 font-bold text-sm tracking-wide uppercase mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-6">
              Sobre a <span className="text-secondary-600">Lemons</span>
            </h2>
            <p className="text-lg text-ink-muted mb-4 leading-relaxed">
              A Lemons Lanches nasceu com uma missão: trazer os melhores lanches feitos com amor e dedicação para o bairro.
            </p>
            <p className="text-lg text-ink-muted mb-4 leading-relaxed">
              Desde o início, nos comprometemos com a qualidade dos ingredientes, a higiene e a rapidez no atendimento.
            </p>
            <p className="text-lg text-ink-muted mb-8 leading-relaxed">
              Cada lanche é preparado pensando em você e sua família. Venha experimentar!
            </p>

            <div className="space-y-5">
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-white text-secondary-600 shadow-soft">
                    <Icon size={20} strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-dark">{title}</h3>
                    <p className="text-ink-muted text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <h3 className="text-2xl font-bold text-center text-dark mb-6">
                <span className="text-secondary-600">Galeria</span> de Fotos
              </h3>
              <div className="relative overflow-hidden rounded-2xl shadow-elevated aspect-[4/3] sm:aspect-[16/10] bg-white">
                <img
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 sm:p-3 shadow-card text-secondary-600 transition-colors focus-ring"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 sm:p-3 shadow-card text-secondary-600 transition-colors focus-ring"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-2.5">
                {carouselImages.map((image, idx) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors focus-ring ${
                      idx === currentIndex ? 'bg-secondary-600' : 'bg-primary-200 hover:bg-primary-300'
                    }`}
                    aria-label={`Foto ${idx + 1}`}
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

