import React, { useMemo, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';
import ServiceModal from './ServiceModal';

const solutions = [
  {
    icon: 'place',
    titleKey: 'solutions.card1.title',
    titleFallback: 'Google Maps y Posicionamiento Local',
    priceKey: 'solutions.card1.price',
    priceFallback: '$110.000',
    descriptionKey: 'solutions.card1.description',
    descriptionFallback: 'Aparece primero cuando busquen tu rubro en tu ciudad.',
    modalSubtitleKey: 'solutions.card1.modal.subtitle',
    modalSubtitleFallback: 'Servicio ideal para mejorar visibilidad local desde la primera semana.',
    modalContentKey: 'solutions.card1.modal.content',
    modalContentFallback:
      'Optimizamos tu ficha de Google Business Profile, categorias, servicios, publicaciones y resenas para captar consultas de alto intento en tu zona.',
    gradient: 'linear-gradient(135deg, #00D4AA, #00B894)',
  },
  {
    icon: 'table_chart',
    titleKey: 'solutions.card2.title',
    titleFallback: 'Sistema de Gestion Automatizado',
    priceKey: 'solutions.card2.price',
    priceFallback: 'Desde $160.000',
    descriptionKey: 'solutions.card2.description',
    descriptionFallback:
      'Excel o Google Sheets con reportes instantaneos, menos errores y control real de stock y ventas, hecho a tu medida.',
    modalSubtitleKey: 'solutions.card2.modal.subtitle',
    modalSubtitleFallback: 'Control operativo claro, sin software complejo.',
    modalContentKey: 'solutions.card2.modal.content',
    modalContentFallback:
      'Creamos un sistema automatizado a medida para tu operacion: ventas, stock, costos, alertas y paneles de seguimiento para decisiones rapidas.',
    gradient: 'linear-gradient(135deg, #6C5CE7, #a29bfe)',
  },
  {
    icon: 'language',
    titleKey: 'solutions.card3.title',
    titleFallback: 'Web Rapida',
    priceKey: 'solutions.card3.price',
    priceFallback: 'Desde $200.000',
    descriptionKey: 'solutions.card3.description',
    descriptionFallback:
      'Sitio profesional, responsive y optimizado para que cargue al instante y venda tu producto o servicio 24/7.',
    modalSubtitleKey: 'solutions.card3.modal.subtitle',
    modalSubtitleFallback: 'Tu vitrina digital para convertir visitas en consultas.',
    modalContentKey: 'solutions.card3.modal.content',
    modalContentFallback:
      'Disenamos una web enfocada en conversion con arquitectura clara, velocidad de carga, SEO tecnico base y llamados a la accion conectados a WhatsApp.',
    gradient: 'linear-gradient(135deg, #0F2D3A, #1a4a5e)',
  },
  {
    icon: 'phone_iphone',
    titleKey: 'solutions.card4.title',
    titleFallback: 'App Movil Personalizada',
    priceKey: 'solutions.card4.price',
    priceFallback: 'Desde $800.000',
    descriptionKey: 'solutions.card4.description',
    descriptionFallback: 'Catalogo y pedidos simples para fidelizar clientes desde su bolsillo.',
    modalSubtitleKey: 'solutions.card4.modal.subtitle',
    modalSubtitleFallback: 'Canal directo de venta y fidelizacion.',
    modalContentKey: 'solutions.card4.modal.content',
    modalContentFallback:
      'Desarrollamos una app movil pensada para tus clientes: catalogo, pedidos simples y experiencia de compra rapida para aumentar recurrencia.',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
  },
  {
    icon: 'settings_suggest',
    titleKey: 'solutions.card5.title',
    titleFallback: 'Software de Gestion Integral',
    priceKey: 'solutions.card5.price',
    priceFallback: 'A cotizar',
    descriptionKey: 'solutions.card5.description',
    descriptionFallback: 'Te entregamos un prototipo visual y luego desarrollamos la solucion a medida.',
    modalSubtitleKey: 'solutions.card5.modal.subtitle',
    modalSubtitleFallback: 'Primero validamos, luego desarrollamos.',
    modalContentKey: 'solutions.card5.modal.content',
    modalContentFallback:
      'Partimos con prototipo visual para validar flujos y alcance. Luego construimos software a medida con etapas claras y control de entregables.',
    gradient: 'linear-gradient(135deg, #334155, #475569)',
  },
  {
    icon: 'trending_up',
    titleKey: 'solutions.card6.title',
    titleFallback: 'SEO Local',
    priceKey: 'solutions.card6.price',
    priceFallback: 'Mensual desde $120.000',
    descriptionKey: 'solutions.card6.description',
    descriptionFallback: 'Mantencion de SEO local para sostener posicionamiento y consultas calificadas.',
    modalSubtitleKey: 'solutions.card6.modal.subtitle',
    modalSubtitleFallback: 'Posicionamiento sostenido para no desaparecer del mapa.',
    modalContentKey: 'solutions.card6.modal.content',
    modalContentFallback:
      'Monitoreamos ranking local, optimizamos contenidos y reforzamos relevancia geografica para mantener flujo estable de clientes potenciales.',
    gradient: 'linear-gradient(135deg, #0EA5E9, #22D3EE)',
  },
  {
    icon: 'campaign',
    titleKey: 'solutions.card7.title',
    titleFallback: 'Ads Efectivos y Google Mi Negocio',
    priceKey: 'solutions.card7.price',
    priceFallback: 'Mensual desde $180.000',
    descriptionKey: 'solutions.card7.description',
    descriptionFallback:
      'Campanas orientadas a conversion y gestion de Google Mi Negocio (ficha, posts y resenas).',
    modalSubtitleKey: 'solutions.card7.modal.subtitle',
    modalSubtitleFallback: 'Publicidad y presencia local trabajando en conjunto.',
    modalContentKey: 'solutions.card7.modal.content',
    modalContentFallback:
      'Ejecutamos campanas con foco en conversion y gestion continua de Google Mi Negocio para elevar alcance, confianza y tasa de contacto.',
    gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
  },
];

const Solutions: React.FC = () => {
  const ref = useScrollReveal();
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

  const activeCard = useMemo(
    () => (activeCardIndex === null ? null : solutions[activeCardIndex]),
    [activeCardIndex]
  );

  const modalWhatsappHref =
    whatsappNumber && activeCard
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hola, quiero contratar el servicio: ${activeCard.titleFallback}.`
        )}`
      : '#contacto';

  return (
    <section
      id="soluciones"
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #f6f6f8 0%, #f0fdf9 50%, #f6f6f8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <EditableText
            as="span"
            className="section-badge"
            contentKey="solutions.header.badge"
            fallback="La Solucion Becer"
            multiline={false}
          />
          <EditableText
            as="h2"
            className="section-title"
            contentKey="solutions.header.title"
            fallback="Herramientas digitales que venden"
            multiline={false}
          />
          <EditableText
            as="p"
            className="section-subtitle"
            contentKey="solutions.header.subtitle"
            fallback="Todo lo que tu pyme necesita para dominar el mundo digital de tu ciudad."
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {solutions.map((solution, index) => (
            <div
              key={solution.titleKey}
              className={`animate-on-scroll delay-${(index + 1) * 100}`}
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                cursor: 'default',
                transition: 'all 0.5s var(--ease-out-expo)',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
              onMouseEnter={(event) => {
                (event.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (event.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-xl)';
                (event.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.2)';
                const iconBg = event.currentTarget.querySelector('.sol-icon-bg') as HTMLElement;
                if (iconBg) {
                  iconBg.style.transform = 'scale(1.1) rotate(-5deg)';
                }
              }}
              onMouseLeave={(event) => {
                (event.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (event.currentTarget as HTMLElement).style.boxShadow = 'none';
                (event.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                const iconBg = event.currentTarget.querySelector('.sol-icon-bg') as HTMLElement;
                if (iconBg) {
                  iconBg.style.transform = 'scale(1) rotate(0)';
                }
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '140px',
                  height: '140px',
                  background: solution.gradient,
                  borderRadius: '50%',
                  opacity: 0.06,
                  filter: 'blur(20px)',
                }}
              />

              <div
                className="sol-icon-bg"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  background: solution.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'transform 0.4s var(--ease-spring)',
                  boxShadow: `0 8px 24px ${
                    solution.gradient.includes('#00D4AA') ? 'rgba(0,212,170,0.2)' : 'rgba(15,45,58,0.15)'
                  }`,
                }}
              >
                <span className="material-icons" style={{ color: 'white', fontSize: '28px' }}>
                  {solution.icon}
                </span>
              </div>

              <EditableText
                as="h3"
                contentKey={solution.titleKey}
                fallback={solution.titleFallback}
                multiline={false}
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              />
              <EditableText
                as="p"
                contentKey={solution.priceKey}
                fallback={solution.priceFallback}
                multiline={false}
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  margin: '0 0 12px',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  background: 'rgba(15,45,58,0.08)',
                  border: '1px solid rgba(15,45,58,0.14)',
                }}
              />
              <EditableText
                as="p"
                contentKey={solution.descriptionKey}
                fallback={solution.descriptionFallback}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              />

              <button
                type="button"
                onClick={() => setActiveCardIndex(index)}
                style={{
                  marginTop: '16px',
                  padding: '0',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                Ver mas detalles
                <span className="material-icons" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {activeCard && (
        <ServiceModal
          isOpen={activeCardIndex !== null}
          onClose={() => setActiveCardIndex(null)}
          titleKey={activeCard.titleKey}
          titleFallback={activeCard.titleFallback}
          subtitleKey={activeCard.modalSubtitleKey}
          subtitleFallback={activeCard.modalSubtitleFallback}
          contentKey={activeCard.modalContentKey}
          contentFallback={activeCard.modalContentFallback}
          priceKey={activeCard.priceKey}
          priceFallback={activeCard.priceFallback}
          whatsappHref={modalWhatsappHref}
        />
      )}
    </section>
  );
};

export default Solutions;
