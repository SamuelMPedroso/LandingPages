export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Empresário",
      content: "Melhor barbearia da região! O Edson sempre faz cortes impecáveis. Voltarei com certeza!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Advogado",
      content: "Profissionalismo do início ao fim. Ambiente acolhedor e preços justos. Recomendo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      role: "Técnico em TI",
      content: "Atendimento excepcional! O Edson ouve o que você quer e executa perfeitamente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop"
    }
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Depoimentos de Clientes</h2>
          <p className="text-lg text-gray-600">
            Veja o que nossos clientes satisfeitos dizem sobre a Barbearia Edson
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
            >
              {/* Rating */}
              <div className="mb-4 text-2xl">{renderStars(testimonial.rating)}</div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
