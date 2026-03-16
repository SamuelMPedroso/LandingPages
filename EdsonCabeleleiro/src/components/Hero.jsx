export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary to-gray-900 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Seu Estilo,
            <span className="text-accent"> Nossa Especialidade</span>
          </h1>
          <p className="text-lg text-gray-300">
            Bem-vindo à Barbearia Edson, onde tradicional encontra moderno. Oferecemos cortes de qualidade, finalizações impeccáveis e um espaço acolhedor para você relaxar.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#agendamento" className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition transform hover:scale-105">
              Agendar Agora
            </a>
            <a 
              href="https://wa.me/5519996478404?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Barbearia%20Edson."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition transform hover:scale-105 inline-flex items-center gap-2"
            >
              💬 Conversar no WhatsApp
            </a>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative">
          <div className="bg-gradient-to-br from-accent to-yellow-600 rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-700 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m0 0h6M6 12a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1599351431202-924373718618?w=600&h=400&fit=crop" 
              alt="Barbearia Edson"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-accent rounded-full opacity-10"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
