import { Utensils, MessageCircle, Zap, Target, Wallet } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/site';

const FEATURES = [
  {
    icon: Zap,
    title: 'Rápido',
    description: 'Seus lanches ficam prontos em minutos',
  },
  {
    icon: Target,
    title: 'De Qualidade',
    description: 'Ingredientes frescos e selecionados',
  },
  {
    icon: Wallet,
    title: 'Preço Justo',
    description: 'Melhor custo-benefício da região',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary-100/50 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/images/Logo-removebg-preview.png"
            alt="Lemons Lanches"
            className="h-24 w-auto mx-auto mb-6 motion-safe:animate-slideUp"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark tracking-tight leading-[1.1] mb-5 motion-safe:animate-slideUp">
            Lemons <span className="text-secondary-600">Lanches</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-muted mb-9 max-w-xl mx-auto leading-relaxed motion-safe:animate-slideUp">
            Os melhores lanches da região! Feitos com amor e ingredientes de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center motion-safe:animate-slideUp">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-secondary-600 text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-card hover:bg-secondary-700 hover:-translate-y-0.5 transition-all focus-ring"
            >
              <Utensils size={19} strokeWidth={2.5} />
              Ver Cardápio
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink border border-primary-200 px-7 py-3.5 rounded-xl text-base font-bold shadow-soft hover:border-secondary-300 hover:-translate-y-0.5 transition-all focus-ring"
            >
              <MessageCircle size={19} strokeWidth={2.5} className="text-whatsapp" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20 max-w-4xl mx-auto">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-soft border border-primary-100/60 text-center sm:text-left"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-secondary-50 text-secondary-600 mb-4">
                <Icon size={22} strokeWidth={2.25} />
              </div>
              <h3 className="font-bold text-lg text-dark mb-1">{title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

