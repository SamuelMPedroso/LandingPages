export default function WhatsAppCTA() {
  const whatsappNumber = "5519996478404"
  const message = "Olá! Gostaria de agendar um horário na Barbearia Edson."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Conveniência
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Agende Direto pelo
              <span className="text-green-100"> WhatsApp</span>
            </h2>
            <p className="text-lg text-green-50">
              Envie uma mensagem rápida para nós e receba confirmação instantânea do seu horário. Resposta rápida e atendimento personalizado!
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition transform hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                💬 Abrir WhatsApp
              </a>
              <a 
                href={`tel:+55199647-8404`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition"
              >
                📞 Ligar
              </a>
            </div>
            <p className="text-sm text-green-100">
              ⏱️ Disponível de Segunda a Sábado
            </p>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white text-green-600 rounded-2xl p-8 shadow-2xl">
              {/* Chat Bubble Simulation */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-green-100 text-green-900 px-4 py-3 rounded-3xl rounded-tr-none max-w-xs">
                    <p className="text-sm">Olá! Gostaria de agendar um horário na Barbearia Edson.</p>
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex justify-start">
                  <div className="bg-green-500 text-white px-4 py-3 rounded-3xl rounded-tl-none max-w-xs">
                    <p className="text-sm">🎉 Ótimo! Qual serviço você deseja agendar?</p>
                  </div>
                </div>

                {/* User message 2 */}
                <div className="flex justify-end">
                  <div className="bg-green-100 text-green-900 px-4 py-3 rounded-3xl rounded-tr-none max-w-xs">
                    <p className="text-sm">Corte Moderno, por favor!</p>
                  </div>
                </div>

                {/* Bot response 2 */}
                <div className="flex justify-start">
                  <div className="bg-green-500 text-white px-4 py-3 rounded-3xl rounded-tl-none max-w-xs">
                    <p className="text-sm">✅ Perfeito! Qual dia e horário você prefere?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-700 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-green-400 bg-opacity-20 rounded-lg p-6">
            <p className="text-3xl mb-2">⚡</p>
            <p className="font-semibold">Resposta em segundos</p>
          </div>
          <div className="bg-green-400 bg-opacity-20 rounded-lg p-6">
            <p className="text-3xl mb-2">📱</p>
            <p className="font-semibold">Direto no seu celular</p>
          </div>
          <div className="bg-green-400 bg-opacity-20 rounded-lg p-6">
            <p className="text-3xl mb-2">✓</p>
            <p className="font-semibold">Confirmação automática</p>
          </div>
        </div>
      </div>
    </section>
  )
}
