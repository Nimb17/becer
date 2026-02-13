import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

const painData = [
  {
    icon: 'visibility_off',
    accentIcon: 'search_off',
    titleKey: 'pain.card1.title',
    titleFallback: 'Invisible en Google y sin confianza online',
    descriptionKey: 'pain.card1.description',
    descriptionFallback:
      'Cuando no apareces en Google ni tienes presencia digital profesional, los clientes te comparan mal y terminan eligiendo a otro.',
    statKey: 'pain.card1.stat',
    statFallback: '90%',
    statLabelKey: 'pain.card1.statLabel',
    statLabelFallback: 'busca primero en Google',
    color: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, rgba(245, 158, 11, 0.02) 100%)',
  },
  {
    icon: 'trending_down',
    accentIcon: 'money_off',
    titleKey: 'pain.card2.title',
    titleFallback: 'Publicidad que se pierde',
    descriptionKey: 'pain.card2.description',
    descriptionFallback:
      'Pagas por volantes que terminan en la basura. El marketing digital es medible y mucho mas economico.',
    statKey: 'pain.card2.stat',
    statFallback: '3x',
    statLabelKey: 'pain.card2.statLabel',
    statLabelFallback: 'mas caro sin digital',
    color: '#EF4444',
    bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(239, 68, 68, 0.02) 100%)',
  },
  {
    icon: 'sentiment_dissatisfied',
    accentIcon: 'shield',
    titleKey: 'pain.card3.title',
    titleFallback: 'Atiendes tarde y pierdes consultas',
    descriptionKey: 'pain.card3.description',
    descriptionFallback:
      'Mensajes sin respuesta, cotizaciones demoradas y seguimiento manual hacen que los interesados se enfrien antes de comprar.',
    statKey: 'pain.card3.stat',
    statFallback: '58%',
    statLabelKey: 'pain.card3.statLabel',
    statLabelFallback: 'abandona sin respuesta rapida',
    color: '#F97316',
    bgGradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.06) 0%, rgba(249, 115, 22, 0.02) 100%)',
  },
];

const PainPoints: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="problemas"
      ref={ref}
      style={{
        padding: '100px 0',
        background: '#ffffff',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <EditableText as="span" className="section-badge" contentKey="pain.header.badge" fallback="Diagnostico" multiline={false} />
          <EditableText as="h2" className="section-title" contentKey="pain.header.title" fallback="Te identificas con esto?" multiline={false} />
          <EditableText
            as="p"
            className="section-subtitle"
            contentKey="pain.header.subtitle"
            fallback="La mayoria de los emprendedores en Atacama enfrentan los mismos obstaculos invisibles que frenan su crecimiento."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painData.map((pain, index) => (
            <div
              key={pain.titleKey}
              className={`animate-on-scroll delay-${(index + 1) * 100} card-premium`}
              style={{
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: pain.bgGradient,
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                }}
                className="group-hover-bg"
              />

              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontSize: '120px',
                  color: pain.color,
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                <span className="material-icons" style={{ fontSize: 'inherit' }}>
                  {pain.icon}
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  background: `${pain.color}10`,
                  border: `1px solid ${pain.color}20`,
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: pain.color,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <EditableText as="span" contentKey={pain.statKey} fallback={pain.statFallback} multiline={false} />
                </span>
                <EditableText
                  as="span"
                  contentKey={pain.statLabelKey}
                  fallback={pain.statLabelFallback}
                  multiline={false}
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: pain.color,
                    opacity: 0.8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                  }}
                >
                </EditableText>
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: `${pain.color}12`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <span className="material-icons" style={{ color: pain.color, fontSize: '26px' }}>
                  {pain.accentIcon}
                </span>
              </div>

              <EditableText
                as="h3"
                contentKey={pain.titleKey}
                fallback={pain.titleFallback}
                multiline={false}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              />
              <EditableText
                as="p"
                contentKey={pain.descriptionKey}
                fallback={pain.descriptionFallback}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '32px',
                  right: '32px',
                  height: '3px',
                  background: `linear-gradient(90deg, ${pain.color}, transparent)`,
                  borderRadius: '100px',
                  opacity: 0.3,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
