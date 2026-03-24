import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark mb-4">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">Estamos sempre prontos para atender você!</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Localização</h3>
                  <p className="text-gray-700">Av. Franklin de Tolêdo Piza - Tenório (Praia Vermelha)</p>
                  <p className="text-gray-700">Ubatuba - SP | CEP: 11680-000</p>
                  <a
                    href="https://maps.google.com/?q=Av.+Franklin+de+Tolêdo+Piza,+Tenório,+Ubatuba,+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-bold hover:underline mt-2 inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-700"><strong>Segunda - Sexta:</strong> 11h - 23h</p>
                  <p className="text-gray-700"><strong>Sábado:</strong> 11h - 00h</p>
                  <p className="text-gray-700"><strong>Domingo:</strong> 12h - 22h</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Contato Direto</h3>
                  <a
                    href="tel:+558599999999"
                    className="text-secondary font-bold hover:underline"
                  >
                    Telefone: (85) 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-dark mb-8">
            <span className="text-secondary">Galeria</span> de Fotos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🍔', title: 'Burgers Deliciosos' },
              { emoji: '🌭', title: 'Hot-Dogs Especiais' },
              { emoji: '🥤', title: 'Bebidas Geladas' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg h-64 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <p className="text-8xl mb-4">{item.emoji}</p>
                <p className="text-xl font-bold text-dark">{item.title}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Fotos reais em breve! 📸
          </p>
        </div>
      </div>
    </section>
  );
}
