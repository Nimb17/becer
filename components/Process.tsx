import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Auditoría Gratuita',
    description: 'Analizamos tu presencia actual en Google y redes sociales sin costo alguno.',
    icon: 'search',
    accent: '#00D4AA',
  },
  {
    number: '02',
    title: 'Plan a Medida',
    description: 'Diseñamos una estrategia que se ajuste a tu presupuesto y tipo de negocio.',
    icon: 'architecture',
    accent: '#6C5CE7',
  },
  {
    number: '03',
    title: 'Lanzamiento',
    description: 'Implementamos las mejoras y empezamos a medir resultados de inmediato.',
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
      {/* Decorative */}
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
        {/* Header */}
        <div className="text-center animate-on-scroll" style={{ marginBottom: '72px' }}>
          <span className="section-badge">Proceso</span>
          <h2 className="section-title">
            ¿Cómo trabajamos?
          </h2>
          <p className="section-subtitle">
            Simple, directo y sin tecnicismos. Tres pasos para transformar tu negocio.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line - desktop */}
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
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-on-scroll delay-${(i + 1) * 200}`}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Number + Icon container */}
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
                  {/* Background ring */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: `2px solid ${step.accent}20`,
                      background: `${step.accent}06`,
                    }}
                  />
                  {/* Animated accent ring */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '50%',
                      border: `2px dashed ${step.accent}30`,
                      animation: 'orbit 20s linear infinite',
                      animationDelay: `${i * -5}s`,
                    }}
                  />
                  {/* Inner circle */}
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
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    <span className="material-icons" style={{ color: 'white', fontSize: '28px' }}>
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Step number */}
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

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '280px',
                    margin: '0 auto',
                  }}
                >
                  {step.description}
                </p>

                {/* Arrow connector on mobile */}
                {i < steps.length - 1 && (
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