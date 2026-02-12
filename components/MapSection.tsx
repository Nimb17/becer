import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MapSection: React.FC = () => {
  const ref = useScrollReveal();

  const projects = [
    {
      name: 'MesaDigital',
      city: 'Vallenar',
      image: '/mesa-digital.png',
      top: '45%',
      left: '40%',
      color: 'var(--primary)',
    },
    {
      name: 'Farmacia Comunal',
      city: 'Copiapó',
      image: '/farmacia-comunal.png',
      top: '35%',
      left: '45%',
      color: '#EF4444',
    },
    {
      name: 'Gestión Gimnasios',
      city: 'Caldera',
      image: '/gestion-gimnasios.png',
      top: '32%',
      left: '30%',
      color: '#F59E0B',
    },
  ];

  const checkItems = [
    'Lenguaje hiperlocal: "para tu minimarket en Vallenar" o "ferretería Copiapó".',
    'Casos reales de la zona para aumentar identificación y tasa de contacto.',
    'Estrategia simple, medible y pensada para pymes sin endeudarse.',
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #f6f6f8 0%, #ffffff 100%)',
        position: 'relative',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                height: '520px',
                background: 'linear-gradient(135deg, #e2e8f0, #f1f5f9)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {/* Map background */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chile_relief_location_map.jpg/612px-Chile_relief_location_map.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(1) contrast(1.1)',
                  opacity: 0.15,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.8) 100%)',
                }}
              />

              {/* Map Pins */}
              {projects.map((p, i) => (
                <div
                  key={p.name}
                  style={{
                    position: 'absolute',
                    top: p.top,
                    left: p.left,
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'transform 0.3s var(--ease-spring)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                    const tooltip = e.currentTarget.querySelector('.map-tooltip') as HTMLElement;
                    if (tooltip) tooltip.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    const tooltip = e.currentTarget.querySelector('.map-tooltip') as HTMLElement;
                    if (tooltip) tooltip.style.opacity = '0';
                  }}
                >
                  {/* Pulse ring */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: `2px solid ${p.color}`,
                      animation: `pulse-ring 2s ease-out infinite`,
                      animationDelay: `${i * 600}ms`,
                    }}
                  />
                  <span
                    className="material-icons"
                    style={{ color: p.color, fontSize: '36px', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                  >
                    place
                  </span>
                  {/* Tooltip */}
                  <div
                    className="map-tooltip"
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '8px',
                      padding: '8px 14px',
                      background: 'var(--primary)',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    {p.name}
                    <br />
                    <span style={{ fontWeight: 400, opacity: 0.8 }}>{p.city}</span>
                  </div>
                </div>
              ))}

              {/* Bottom card overlay */}
              <div
                className="glass"
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span className="material-icons" style={{ fontSize: 16, color: 'var(--accent)' }}>public</span>
                  Casos locales verificados
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {projects.map((p) => (
                    <div
                      key={p.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: '10px',
                          objectFit: 'cover',
                          border: '2px solid rgba(0,0,0,0.06)',
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {p.name}
                        </p>
                        <p
                          style={{
                            fontSize: '0.65rem',
                            color: 'var(--text-muted)',
                            margin: 0,
                          }}
                        >
                          {p.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <span className="section-badge">Cobertura Nacional</span>
            </div>
            <h2
              className="animate-on-scroll delay-100"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Atención remota 100% en{' '}
              <span className="gradient-text">todo Chile</span>
            </h2>
            <p
              className="animate-on-scroll delay-200"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
              }}
            >
              Trabajamos con pymes de comercio y servicios en cualquier región,
              sin barreras geográficas. Proceso completo online, con foco en
              resultados rápidos y medibles.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '36px' }}>
              {checkItems.map((item, i) => (
                <li
                  key={i}
                  className={`animate-on-scroll delay-${(i + 3) * 100}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    marginBottom: '16px',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0,212,170,0.04)',
                    border: '1px solid rgba(0,212,170,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,170,0.08)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,170,0.04)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ color: 'var(--accent)', fontSize: '20px', marginTop: '2px', flexShrink: 0 }}
                  >
                    check_circle
                  </span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="animate-on-scroll delay-600 btn-primary"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Solicitar diagnóstico gratuito
              <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
