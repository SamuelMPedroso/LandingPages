import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/images/menu/Pasteis.jpeg',
  '/images/menu/Batata.jpeg',
  '/images/menu/Tapiocas.jpeg',
  '/images/menu/HotDog.jpeg',
  '/images/menu/PaoLinguica.jpeg',
  '/images/menu/ComboFrango.jpeg',
  '/images/menu/AguaCoco.jpeg',
  '/images/menu/ComboContraFile.jpeg',
  '/images/menu/Promo.jpeg',
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
    <section id="menu" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark mb-4">
            Nosso <span className="text-secondary">Cardápio</span>
          </h2>
          <p className="text-xl text-gray-600">Conheça nossos deliciosos lanches!</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative w-full h-[600px] bg-gradient-to-b from-yellow-100 to-orange-100 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={carouselImages[currentIndex]}
              alt="Carousel slide"
              className="max-w-full max-h-full object-contain transition-opacity duration-500"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-secondary transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-secondary w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-600 font-semibold">
            {currentIndex + 1} / {carouselImages.length}
          </div>
        </div>
      </div>
    </section>
  );
}
