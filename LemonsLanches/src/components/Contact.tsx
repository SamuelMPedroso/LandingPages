import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_LINK, CONTACT } from '../config/site';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-secondary-600 font-bold text-sm tracking-wide uppercase mb-3">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
            Venha nos <span className="text-secondary-600">conhecer</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-xl mx-auto">
            Estamos sempre prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 bg-primary-50/60 rounded-2xl p-7 sm:p-8 flex flex-col gap-6">
            <address className="not-italic flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-white text-secondary-600 shadow-soft">
                  <MapPin size={20} strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-dark mb-0.5">Endereço</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-white text-secondary-600 shadow-soft">
                  <Clock size={20} strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-dark mb-0.5">Horário</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{CONTACT.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-white text-secondary-600 shadow-soft">
                  <Phone size={20} strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-dark mb-0.5">Telefone</h3>
                  <a href={`tel:+${CONTACT.phoneDisplay.replace(/\D/g, '')}`} className="text-ink-muted text-sm hover:text-secondary-600 transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </address>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-soft transition-colors focus-ring"
            >
              <MessageCircle size={19} strokeWidth={2.5} />
              Fazer pedido pelo WhatsApp
            </a>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card min-h-[320px]">
            <iframe
              title="Localização Lemons Lanches"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9867819843367!2d-45.07500932346069!3d-23.412685167301937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d9c7c5b8c5b8c5%3A0x5c5c5c5c5c5c5c5c!2sAv.%20Franklin%20de%20Tol%C3%AAdo%20Piza%20-%20Ten%C3%B3rio%2C%20Ubatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

