import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

const projects = [
  {
    image: '/mesa-digital.png',
    titleKey: 'portfolio.card1.title',
    titleFallback: 'MesaDigital',
    locationKey: 'portfolio.card1.location',
    locationFallback: 'Vallenar, Chile',
    descriptionKey: 'portfolio.card1.description',
    descriptionFallback:
      'Ecosistema integral que digitaliza la operacion del restaurante. Reduce tiempos de espera en un 40% y aumenta ventas con menus QR inteligentes.',
    tags: [
      { label: 'SaaS', color: '#0F2D3A' },
      { label: 'Restaurantes', color: '#3B82F6' },
    ],
  },
  {
    image: '/farmacia-comunal.png',
    titleKey: 'portfolio.card2.title',
    titleFallback: 'Farmacia Comunal',
    locationKey: 'portfolio.card2.location',
    locationFallback: 'Copiapo, Chile',
    descriptionKey: 'portfolio.card2.description',
    descriptionFallback:
      'Sistema integral de gestion para farmacias comunales. Trazabilidad completa de medicamentos y cumplimiento normativo al 100%.',
    tags: [
      { label: 'Salud', color: '#16A34A' },
      { label: 'Normativa', color: '#F59E0B' },
    ],
  },
  {
    image: '/gestion-gimnasios.png',
    titleKey: 'portfolio.card3.title',
    titleFallback: 'Gestion Gimnasios',
    locationKey: 'portfolio.card3.location',
    locationFallback: 'Atacama, Chile',
    descriptionKey: 'portfolio.card3.description',
    descriptionFallback:
      'Sistema de gestion de clientes para gimnasios. Automatiza inscripciones, validacion por RUT y reportes de ingresos en tiempo real.',
    tags: [
      { label: 'Google Sheets', color: '#7C3AED' },
      { label: 'Gimnasios', color: '#3B82F6' },
    ],
  },
];

const Portfolio: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const demoWhatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, quiero solicitar una demo de sus soluciones digitales.')}`
    : '#contacto';
  const ref = useScrollReveal();

  return (
    <section
      id="proyectos"
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
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <EditableText
            as="span"
            className="section-badge"
            contentKey="portfolio.header.badge"
            fallback="Portafolio"
            multiline={false}
          />
          <h2 className="section-title">
            <EditableText as="span" contentKey="portfolio.header.title.line1" fallback="Proyectos reales en" multiline={false} />{' '}
            <EditableText as="span" className="gradient-text" contentKey="portfolio.header.title.line2" fallback="Atacama" multiline={false} />
          </h2>
          <EditableText
            as="p"
            className="section-subtitle"
            contentKey="portfolio.header.subtitle"
            fallback="Resultados medibles para negocios reales de nuestra region."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className={`animate-on-scroll delay-${(index + 1) * 100}`}
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid var(--border)',
                transition: 'all 0.5s var(--ease-out-expo)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onMouseEnter={(event) => {
                (event.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                (event.currentTarget as HTMLElement).style.boxShadow =
                  '0 24px 64px rgba(0,212,170,0.12), 0 8px 20px rgba(0,0,0,0.06)';
                const image = event.currentTarget.querySelector('.project-img') as HTMLElement;
                if (image) image.style.transform = 'scale(1.08)';
                const overlay = event.currentTarget.querySelector('.project-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(event) => {
                (event.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (event.currentTarget as HTMLElement).style.boxShadow = 'none';
                const image = event.currentTarget.querySelector('.project-img') as HTMLElement;
                if (image) image.style.transform = 'scale(1)';
                const overlay = event.currentTarget.querySelector('.project-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.titleFallback}
                  className="project-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s var(--ease-out-expo)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.85) 100%)',
                  }}
                />

                <div
                  className="project-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,212,170,0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <span className="material-icons" style={{ color: 'white', fontSize: 40, marginBottom: 8 }}>
                    visibility
                  </span>
                  <EditableText
                    as="span"
                    contentKey="portfolio.card.overlayLabel"
                    fallback="Ver proyecto"
                    multiline={false}
                    style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}
                  />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <EditableText
                  as="h3"
                  contentKey={project.titleKey}
                  fallback={project.titleFallback}
                  multiline={false}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 12px',
                  }}
                />
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  <span className="material-icons" style={{ fontSize: 14 }}>
                    place
                  </span>
                  <EditableText as="span" contentKey={project.locationKey} fallback={project.locationFallback} multiline={false} />
                </p>
                <EditableText
                  as="p"
                  contentKey={project.descriptionKey}
                  fallback={project.descriptionFallback}
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    flex: 1,
                    margin: 0,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll delay-500" style={{ marginTop: '56px' }}>
          <a
            href={demoWhatsappHref}
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span className="material-icons" style={{ fontSize: 18 }}>
              grid_view
            </span>
            <EditableText as="span" contentKey="portfolio.cta.demo" fallback="Solicitar una demo" multiline={false} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
