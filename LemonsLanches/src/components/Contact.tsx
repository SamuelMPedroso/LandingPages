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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📍</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Localização</h3>
                  <p className="text-gray-700">Rua das Flores, 123</p>
                  <p className="text-gray-700">Bairro Central - Fortaleza, CE</p>
                  <a
                    href="https://maps.google.com/?q=Rua+das+Flores,+123"
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
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">⏰</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-700"><strong>Segunda - Sexta:</strong> 11h - 23h</p>
                  <p className="text-gray-700"><strong>Sábado:</strong> 11h - 00h</p>
                  <p className="text-gray-700"><strong>Domingo:</strong> 12h - 22h</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📱</div>
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Contato Direto</h3>
                  <a
                    href="https://wa.me/5585999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold hover:underline block mb-2"
                  >
                    WhatsApp: (85) 99999-9999
                  </a>
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

          {/* Order Form */}
          <div className="bg-gradient-to-br from-secondary to-orange-500 rounded-lg p-8 shadow-lg text-white">
            <h3 className="text-3xl font-bold mb-6">Faça seu Pedido!</h3>

            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  placeholder="(85) 99999-9999"
                  className="w-full px-4 py-2 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">O que você quer pedir?</label>
                <textarea
                  rows={4}
                  placeholder="Descreva seu pedido aqui..."
                  className="w-full px-4 py-2 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
              >
                Enviar Pedido 🚀
              </button>

              <p className="text-sm text-center mt-4 opacity-90">
                Ou clique no botão abaixo para pedir direto no WhatsApp
              </p>

              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition text-center"
              >
                💬 Abrir WhatsApp
              </a>
            </form>
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
