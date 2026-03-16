export default function Services() {
  const services = [
    {
      id: 1,
      title: "Corte Clássico",
      description: "Corte tradicional com acabamento impecável e detalhe na barba",
      price: "R$ 45,00",
      icon: "✂️"
    },
    {
      id: 2,
      title: "Corte Moderno",
      description: "Penteados modernos com técnicas de fade, degradê e designs",
      price: "R$ 55,00",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Barba Completa",
      description: "Alinhamento, desenho e finalização da barba com produtos premium",
      price: "R$ 35,00",
      icon: "👨‍🦱"
    },
    {
      id: 4,
      title: "Pacote Completo",
      description: "Corte + Barba + Massagem facial e hidratação",
      price: "R$ 85,00",
      icon: "💎"
    },
    {
      id: 5,
      title: "Coloração",
      description: "Coloração de cabelo com produtos de qualidade internacional",
      price: "R$ 60,00",
      icon: "🎭"
    },
    {
      id: 6,
      title: "Sobrancelha",
      description: "Design e alinhamento perfeito de sobrancelhas",
      price: "R$ 20,00",
      icon: "👀"
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços profissionais para atender todas as suas necessidades de beleza e cuidado pessoal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-accent">{service.price}</span>
                <button className="text-primary hover:text-accent transition font-semibold">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
