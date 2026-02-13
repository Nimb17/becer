import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

const steps = [
  {
    number: '01',
    titleKey: 'process.step1.title',
    titleFallback: 'Auditoria Gratuita',
    descriptionKey: 'process.step1.description',
    descriptionFallback: 'Analizamos tu presencia actual en Google y redes sociales sin costo alguno.',
    icon: 'search',
    accent: '#00D4AA',
  },
  {
    number: '02',
    titleKey: 'process.step2.title',
    titleFallback: 'Plan a Medida',
    descriptionKey: 'process.step2.description',
    descriptionFallback: 'Disenamos una estrategia que se ajuste a tu presupuesto y tipo de negocio.',
    icon: 'architecture',
    accent: '#6C5CE7',
  },
  {
    number: '03',
    titleKey: 'process.step3.title',
    titleFallback: 'Lanzamiento',
    descriptionKey: 'process.step3.description',
    descriptionFallback: 'Implementamos las mejoras y empezamos a medir resultados de inmediato.',
    icon: 'rocket_launch',
    accent: '#F59E0B',
  },
];

const Process: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)',
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
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll" style={{ marginBottom: '72px' }}>
          <EditableText as="span" className="section-badge" contentKey="process.header.badge" fallback="Proceso" multiline={false} />
          <EditableText as="h2" className="section-title" contentKey="process.header.title" fallback="Como trabajamos?" multiline={false} />
          <EditableText
            as="p"
            className="section-subtitle"
            contentKey="process.header.subtitle"
            fallback="Simple, directo y sin tecnicismos. Tres pasos para transformar tu negocio."
          />
        </div>

        <div style={{ position: 'relative' }}>
          <div
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '80px',
              left: '15%',
              right: '15%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary), #F59E0B)',
              opacity: 0.2,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`animate-on-scroll delay-${(index + 1) * 200}`}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    marginBottom: '28px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: `2px solid ${step.accent}20`,
                      background: `${step.accent}06`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '50%',
                      border: `2px dashed ${step.accent}30`,
                      animation: 'orbit 20s linear infinite',
                      animationDelay: `${index * -5}s`,
                    }}
                  />
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 24px ${step.accent}30`,
                      transition: 'transform 0.4s var(--ease-spring)',
                    }}
                    onMouseEnter={(event) => {
                      (event.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(event) => {
                      (event.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    <span className="material-icons" style={{ color: 'white', fontSize: '28px' }}>
                      {step.icon}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: step.accent,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  Paso {step.number}
                </div>

                <EditableText
                  as="h3"
                  contentKey={step.titleKey}
                  fallback={step.titleFallback}
                  multiline={false}
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                />

                <EditableText
                  as="p"
                  contentKey={step.descriptionKey}
                  fallback={step.descriptionFallback}
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '280px',
                    margin: '0 auto',
                  }}
                />

                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '24px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span className="material-icons" style={{ transform: 'rotate(90deg)' }}>
                      arrow_forward
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
