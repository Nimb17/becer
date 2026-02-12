import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const solutions = [
  {
    icon: 'language',
    title: 'Web Rápida',
    description: 'Sitios optimizados que cargan al instante y venden tu servicio 24/7.',
    gradient: 'linear-gradient(135deg, #0F2D3A, #1a4a5e)',
    size: 'large',
  },
  {
    icon: 'place',
    title: 'Google Maps',
    description: 'Aparece primero cuando busquen tu rubro en el mapa.',
    gradient: 'linear-gradient(135deg, #00D4AA, #00B894)',
    size: 'small',
  },
  {
    icon: 'trending_up',
    title: 'SEO Local',
    description: 'Posicionamiento estratégico para clientes de tu zona.',
    gradient: 'linear-gradient(135deg, #6C5CE7, #a29bfe)',
    size: 'small',
  },
  {
    icon: 'campaign',
    title: 'Ads Efectivos',
    description: 'Campañas que traen clientes reales, no solo likes.',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
    size: 'large',
  },
];

const Solutions: React.FC = () => {
  const ref = useScrollReveal();

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
      {/* Decorative elements */}
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
        {/* Header */}
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <span className="section-badge">La Solución Becer</span>
          <h2 className="section-title">
            Herramientas digitales que{' '}
            <span className="gradient-text">venden</span>
          </h2>
          <p className="section-subtitle">
            Todo lo que tu pyme necesita para dominar el mundo digital de tu ciudad.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`animate-on-scroll delay-${(i + 1) * 100}`}
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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-xl)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.2)';
                const iconBg = e.currentTarget.querySelector('.sol-icon-bg') as HTMLElement;
                if (iconBg) {
                  iconBg.style.transform = 'scale(1.1) rotate(-5deg)';
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                const iconBg = e.currentTarget.querySelector('.sol-icon-bg') as HTMLElement;
                if (iconBg) {
                  iconBg.style.transform = 'scale(1) rotate(0)';
                }
              }}
            >
              {/* Decorative gradient orb */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '140px',
                  height: '140px',
                  background: sol.gradient,
                  borderRadius: '50%',
                  opacity: 0.06,
                  filter: 'blur(20px)',
                }}
              />

              {/* Icon */}
              <div
                className="sol-icon-bg"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  background: sol.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'transform 0.4s var(--ease-spring)',
                  boxShadow: `0 8px 24px ${sol.gradient.includes('#00D4AA') ? 'rgba(0,212,170,0.2)' : 'rgba(15,45,58,0.15)'}`,
                }}
              >
                <span className="material-icons" style={{ color: 'white', fontSize: '28px' }}>
                  {sol.icon}
                </span>
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {sol.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {sol.description}
              </p>

              {/* Arrow indicator */}
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                Saber más
                <span className="material-icons" style={{ fontSize: '16px' }}>arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;