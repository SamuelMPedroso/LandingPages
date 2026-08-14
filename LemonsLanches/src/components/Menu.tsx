import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  { src: '/images/menu/Pasteis.jpeg', alt: 'Pastéis crocantes recheados' },
  { src: '/images/menu/Batata.jpeg', alt: 'Porção de batata frita' },
  { src: '/images/menu/Tapiocas.jpeg', alt: 'Tapiocas recheadas' },
  { src: '/images/menu/HotDog.jpeg', alt: 'Hot dog completo' },
  { src: '/images/menu/PaoLinguica.jpeg', alt: 'Pão com linguiça' },
  { src: '/images/menu/ComboFrango.jpeg', alt: 'Combo de frango' },
  { src: '/images/menu/AguaCoco.jpeg', alt: 'Água de coco gelada' },
  { src: '/images/menu/ComboContraFile.jpeg', alt: 'Combo contra filé' },
  { src: '/images/menu/Promo.jpeg', alt: 'Promoção especial do dia' },
];

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setProgress(0);
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2; // 2% per 100ms = 100% in 5 seconds
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-secondary-600 font-bold text-sm tracking-wide uppercase mb-3">
            Cardápio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
            Nosso <span className="text-secondary-600">Cardápio</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-xl mx-auto">Conheça nossos deliciosos lanches!</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-primary-50 rounded-2xl overflow-hidden shadow-elevated flex items-center justify-center">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-600 p-2 sm:p-3 rounded-full shadow-card transition-colors z-10 focus-ring"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-600 p-2 sm:p-3 rounded-full shadow-card transition-colors z-10 focus-ring"
            aria-label="Próximo slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-primary-100 rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-secondary-600 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-5">
            {carouselImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all focus-ring ${
                  index === currentIndex
                    ? 'bg-secondary-600 w-7'
                    : 'bg-primary-100 w-2.5 hover:bg-primary-200'
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3 text-ink-muted text-sm font-semibold">
            {currentIndex + 1} / {carouselImages.length}
          </div>
        </div>
      </div>
    </section>
  );
}
