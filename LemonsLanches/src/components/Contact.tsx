import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark mb-4">
            Venha nos <span className="text-secondary">conhecer</span>
          </h2>
          <p className="text-xl text-gray-600">Estamos sempre prontos para atender você!</p>
        </div>

        {/* Google Maps */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Localização Lemons Lanches"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9867819843367!2d-45.07500932346069!3d-23.412685167301937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d9c7c5b8c5b8c5%3A0x5c5c5c5c5c5c5c5c!2sAv.%20Franklin%20de%20Tol%C3%AAdo%20Piza%20-%20Ten%C3%B3rio%2C%20Ubatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          ></iframe>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-dark mb-8">
            <span className="text-secondary">Galeria</span> de Fotos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { image: '/images/Pastel.jpeg', title: 'Pastéis Crocantes' },
              { image: '/images/Sanduiche.jpeg', title: 'Sanduíches Suculentos' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
