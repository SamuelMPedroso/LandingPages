export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600">
            Tem dúvidas? Estaremos felizes em ajudar!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Localização</h3>
            <p className="text-gray-600 mb-2">Rua Principal, 123</p>
            <p className="text-gray-600">Bairro - São Paulo, SP</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Telefone</h3>
            <p className="text-gray-600 mb-1">
              <a href="tel:+551199647-8404" className="hover:text-accent transition font-semibold">
                (19) 99647-8404
              </a>
            </p>
            <p className="text-gray-600 mt-4">
              <a href="https://wa.me/5519996478404?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Edson." className="hover:text-accent transition font-semibold text-green-600" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp: (19) 99647-8404
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Horário de Funcionamento</h3>
            <p className="text-gray-600 text-sm">
              Seg-Sex: 09:00 - 18:00<br/>
              Sáb: 09:00 - 15:00<br/>
              Dom: Fechado
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="Mapa da Barbearia Edson"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.015633562584!2d-46.6383!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMTYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold hover:bg-opacity-90 transition transform hover:scale-110"
            >
              f
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold hover:bg-opacity-90 transition transform hover:scale-110"
            >
              📷
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold hover:bg-opacity-90 transition transform hover:scale-110"
            >
              🎵
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
