import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

const projects = [
  {
    nameKey: 'map.projects.1.name',
    nameFallback: 'MesaDigital',
    cityKey: 'map.projects.1.city',
    cityFallback: 'Vallenar',
    image: '/mesa-digital.png',
    imageAlt: 'MesaDigital - Carta Digital y Software para Restaurantes en Vallenar',
    imageTitle: 'MesaDigital implementado en Vallenar',
    top: '45%',
    left: '40%',
    color: 'var(--primary)',
  },
  {
    nameKey: 'map.projects.2.name',
    nameFallback: 'Farmacia Comunal',
    cityKey: 'map.projects.2.city',
    cityFallback: 'Copiapo',
    image: '/farmacia-comunal.png',
    imageAlt: 'Sistema de Gestión de Farmacia Comunal en Copiapó y Vallenar',
    imageTitle: 'Software Farmacia Comunal desarrollado para la región',
    top: '35%',
    left: '45%',
    color: '#EF4444',
  },
  {
    nameKey: 'map.projects.3.name',
    nameFallback: 'Gestion Gimnasios',
    cityKey: 'map.projects.3.city',
    cityFallback: 'Caldera',
    image: '/gestion-gimnasios.png',
    imageAlt: 'Software de Gestión de Gimnasios para clientes en Caldera y Vallenar',
    imageTitle: 'Sistema web para Gimnasios en Atacama',
    top: '32%',
    left: '30%',
    color: '#F59E0B',
  },
];

const MapSection: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappDiagnosticoHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero solicitar un diagnostico digital gratuito para mi negocio.')}`
    : '#contacto';
  const ref = useScrollReveal();

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
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chile_relief_location_map.jpg/612px-Chile_relief_location_map.jpg)',
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

              {projects.map((project, index) => (
                <div
                  key={project.nameKey}
                  style={{
                    position: 'absolute',
                    top: project.top,
                    left: project.left,
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'transform 0.3s var(--ease-spring)',
                  }}
                  onMouseEnter={(event) => {
                    (event.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                    const tooltip = event.currentTarget.querySelector('.map-tooltip') as HTMLElement;
                    if (tooltip) tooltip.style.opacity = '1';
                  }}
                  onMouseLeave={(event) => {
                    (event.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    const tooltip = event.currentTarget.querySelector('.map-tooltip') as HTMLElement;
                    if (tooltip) tooltip.style.opacity = '0';
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: `2px solid ${project.color}`,
                      animation: 'pulse-ring 2s ease-out infinite',
                      animationDelay: `${index * 600}ms`,
                    }}
                  />
                  <span
                    className="material-icons"
                    style={{ color: project.color, fontSize: '36px', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}
                  >
                    place
                  </span>
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
                    <EditableText as="span" contentKey={project.nameKey} fallback={project.nameFallback} multiline={false} />
                    <br />
                    <EditableText
                      as="span"
                      contentKey={project.cityKey}
                      fallback={project.cityFallback}
                      multiline={false}
                      style={{ fontWeight: 400, opacity: 0.8 }}
                    />
                  </div>
                </div>
              ))}

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
                  <span className="material-icons" style={{ fontSize: 16, color: 'var(--accent)' }}>
                    public
                  </span>
                  <EditableText
                    as="span"
                    contentKey="map.overlay.title"
                    fallback="Casos locales verificados"
                    multiline={false}
                  />
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {projects.map((project) => (
                    <div
                      key={`${project.nameKey}-card`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(event) => {
                        (event.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                      }}
                      onMouseLeave={(event) => {
                        (event.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        title={project.imageTitle}
                        loading="lazy"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: '10px',
                          objectFit: 'cover',
                          border: '2px solid rgba(0,0,0,0.06)',
                        }}
                      />
                      <div>
                        <EditableText
                          as="p"
                          contentKey={project.nameKey}
                          fallback={project.nameFallback}
                          multiline={false}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        />
                        <EditableText
                          as="p"
                          contentKey={project.cityKey}
                          fallback={project.cityFallback}
                          multiline={false}
                          style={{
                            fontSize: '0.65rem',
                            color: 'var(--text-muted)',
                            margin: 0,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <EditableText
                as="span"
                className="section-badge"
                contentKey="map.header.badge"
                fallback="Cobertura Nacional"
                multiline={false}
              />
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
              <EditableText
                as="span"
                contentKey="map.header.title.line1"
                fallback="Atencion remota 100% en"
                multiline={false}
              />{' '}
              <EditableText
                as="span"
                className="gradient-text"
                contentKey="map.header.title.line2"
                fallback="todo Chile"
                multiline={false}
              />
            </h2>
            <EditableText
              as="p"
              className="animate-on-scroll delay-200"
              contentKey="map.header.subtitle"
              fallback="Trabajamos con pymes de comercio y servicios en cualquier region, sin barreras geograficas. Proceso completo online, con foco en resultados rapidos y medibles."
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
              }}
            />

            <a
              href={whatsappDiagnosticoHref}
              className="animate-on-scroll delay-600 btn-primary"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <EditableText
                as="span"
                contentKey="map.cta.diagnostico"
                fallback="Solicitar diagnostico gratuito"
                multiline={false}
              />
              <span className="material-icons" style={{ fontSize: 18 }}>
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
