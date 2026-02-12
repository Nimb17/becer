import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SercotecBanner: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, #0A1F29 50%, #1a3a4e 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative mesh */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div
            className="animate-on-scroll"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(0,212,170,0.15)',
                border: '1px solid rgba(0,212,170,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-icons" style={{ color: 'var(--accent)', fontSize: '28px' }}>
                verified
              </span>
            </div>

            {/* Text */}
            <div style={{ maxWidth: '700px' }}>
              <h3
                style={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                Acelerar tu crecimiento
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Asesoría opcional para postulación a fondos públicos (Sercotec y Corfo cuando haya
                convocatorias activas) y oportunidades en Mercado Público (licitaciones y Compra Ágil
                por ChileCompra). Valor agregado, no requisito.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '100px',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Solicitar asesoría opcional
              <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SercotecBanner;
