import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    image: '/mesa-digital.png',
    title: 'MesaDigital',
    location: 'Vallenar, Chile',
    tags: [
      { label: 'SaaS', color: '#0F2D3A' },
      { label: 'Restaurantes', color: '#3B82F6' },
    ],
    description: 'Ecosistema integral que digitaliza la operación del restaurante. Reduce tiempos de espera en un 40% y aumenta ventas con menús QR inteligentes.',
  },
  {
    image: '/farmacia-comunal.png',
    title: 'Farmacia Comunal',
    location: 'Copiapó, Chile',
    tags: [
      { label: 'Salud', color: '#16A34A' },
      { label: 'Normativa', color: '#F59E0B' },
    ],
    description: 'Sistema integral de gestión para farmacias comunales. Trazabilidad completa de medicamentos y cumplimiento normativo al 100%.',
  },
  {
    image: '/gestion-gimnasios.png',
    title: 'Gestión Gimnasios',
    location: 'Atacama, Chile',
    tags: [
      { label: 'Google Sheets', color: '#7C3AED' },
      { label: 'Gimnasios', color: '#3B82F6' },
    ],
    description: 'Sistema de gestión de clientes para gimnasios. Automatiza inscripciones, validación por RUT y reportes de ingresos en tiempo real.',
  },
];

const Portfolio: React.FC = () => {
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
      {/* Background accents */}
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
        {/* Header */}
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <span className="section-badge">Portafolio</span>
          <h2 className="section-title">
            Proyectos reales en{' '}
            <span className="gradient-text">Atacama</span>
          </h2>
          <p className="section-subtitle">
            Resultados medibles para negocios reales de nuestra región.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-on-scroll delay-${(i + 1) * 100}`}
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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 64px rgba(0,212,170,0.12), 0 8px 20px rgba(0,0,0,0.06)';
                const img = e.currentTarget.querySelector('.project-img') as HTMLElement;
                if (img) img.style.transform = 'scale(1.08)';
                const overlay = e.currentTarget.querySelector('.project-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('.project-img') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.project-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s var(--ease-out-expo)',
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.85) 100%)',
                  }}
                />

                {/* Hover overlay with "Ver caso" */}
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
                  <span className="material-icons" style={{ color: 'white', fontSize: 40, marginBottom: 8 }}>visibility</span>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>Ver proyecto</span>
                </div>

                {/* Tags */}
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

              {/* Content */}
              <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
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
                  <span className="material-icons" style={{ fontSize: 14 }}>place</span>
                  {project.location}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
                <a
                  href="#contacto"
                  style={{
                    marginTop: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = '10px';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = '6px';
                  }}
                >
                  Ver caso completo
                  <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll delay-500" style={{ marginTop: '56px' }}>
          <a
            href="#contacto"
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span className="material-icons" style={{ fontSize: 18 }}>grid_view</span>
            Solicitar una demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
