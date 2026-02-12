import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const plans = [
  {
    name: 'Visibilidad Local',
    label: 'Básico',
    price: '$450.000 – $650.000',
    description: 'Ideal para activar presencia digital y captar clientes cercanos.',
    features: [
      'Web simple (5-7 secciones: home, servicios, contacto, mapa y WhatsApp directo)',
      'Optimización completa de Google Business Profile (fotos, horarios, reseñas, posts)',
      'Configuración básica de Google Ads local para búsquedas "cerca de mí"',
    ],
    popular: false,
    accent: 'var(--primary)',
  },
  {
    name: 'Control + Ventas',
    label: 'Estándar',
    price: '$700.000 – $900.000',
    description: 'Para dueños que necesitan control operativo y mejor conversión.',
    features: [
      'Todo lo del Básico',
      'Sistema de gestión ligero',
      'Ventas, inventario básico y costos simples',
      'App web o móvil muy simple para el dueño',
    ],
    popular: true,
    accent: 'var(--accent)',
  },
  {
    name: 'Pedidos Online',
    label: 'Completo',
    price: '$850.000 – $1.000.000',
    description: 'Para pymes que quieren vender online sin complejidad técnica.',
    features: [
      'Todo lo del Estándar',
      'App móvil básica (catálogo + pedidos por WhatsApp o formulario simple)',
      'Alternativa de e-commerce muy ligero',
    ],
    popular: false,
    accent: 'var(--accent-secondary)',
  },
];

const additionalServices = [
  { name: 'Apps para dispositivos móviles', price: 'Desde $500.000' },
  { name: 'Creación de páginas web', price: 'Desde $200.000' },
  { name: 'Perfil de negocios en Google', price: '$120.000' },
  { name: 'Sistema de Gestión (Automatización)', price: 'Desde $100.000' },
  { name: 'Prueba de Software Empresarial', price: 'Gratis' },
];

const Pricing: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="precios"
      ref={ref}
      style={{
        padding: '100px 0',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(0,212,170,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center animate-on-scroll" style={{ marginBottom: '64px' }}>
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">
            Planes <span className="gradient-text">Digital Local</span> Rápido
          </h2>
          <p className="section-subtitle">
            Paquetes claros y accesibles para pymes de Atacama.
            Precios desde $450.000 hasta $1.000.000 + IVA.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" style={{ alignItems: 'stretch' }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`animate-on-scroll delay-${(i + 1) * 100}`}
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: plan.popular ? '40px 32px' : '36px 28px',
                position: 'relative',
                background: plan.popular ? 'var(--primary)' : '#ffffff',
                border: plan.popular ? 'none' : '1px solid var(--border)',
                color: plan.popular ? '#ffffff' : 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.5s var(--ease-out-expo)',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
                zIndex: plan.popular ? 2 : 1,
                boxShadow: plan.popular
                  ? '0 24px 64px rgba(15,45,58,0.25), 0 8px 20px rgba(15,45,58,0.1)'
                  : 'none',
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-xl)';
                } else {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                } else {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                }
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '24px',
                    background: 'linear-gradient(135deg, var(--accent), #00B894)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '0 0 12px 12px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    boxShadow: '0 4px 12px rgba(0,212,170,0.3)',
                  }}
                >
                  Más popular
                </div>
              )}

              {/* Plan label */}
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: plan.popular ? 'rgba(255,255,255,0.6)' : 'var(--accent)',
                  marginBottom: '8px',
                }}
              >
                Paquete {plan.label}
              </span>

              {/* Plan name */}
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  opacity: plan.popular ? 0.8 : 1,
                  color: plan.popular ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)',
                  marginBottom: '24px',
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: plan.popular ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Desde
                </div>
                <span
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    opacity: 0.6,
                    marginLeft: '6px',
                  }}
                >
                  + IVA
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: plan.popular ? 'rgba(255,255,255,0.15)' : 'var(--border)',
                  marginBottom: '24px',
                }}
              />

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, marginBottom: '28px' }}>
                {plan.features.map((feature, fi) => (
                  <li
                    key={fi}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '14px',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{
                        fontSize: '18px',
                        marginTop: '2px',
                        flexShrink: 0,
                        color: plan.popular ? 'var(--accent)' : 'var(--accent)',
                      }}
                    >
                      check_circle
                    </span>
                    <span style={{ opacity: plan.popular ? 0.9 : 1, color: plan.popular ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contacto"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  textAlign: 'center',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  ...(plan.popular
                    ? {
                      background: 'linear-gradient(135deg, var(--accent), #00B894)',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(0,212,170,0.3)',
                    }
                    : {
                      background: 'transparent',
                      color: 'var(--primary)',
                      border: '2px solid var(--primary)',
                    }),
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLElement).style.background = 'var(--primary)';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  } else {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,212,170,0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--primary)';
                  } else {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,212,170,0.3)';
                  }
                }}
              >
                Solicitar diagnóstico gratuito
              </a>
            </div>
          ))}
        </div>

        {/* Custom pricing note */}
        <div
          className="animate-on-scroll delay-500"
          style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '20px',
          }}
        >
          <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
            Precios personalizados tras diagnóstico gratuito, accesible para pymes de Atacama.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
            Resultados sin endeudarte.
          </p>
        </div>

        {/* Additional Services */}
        <div
          className="animate-on-scroll delay-600"
          style={{
            marginTop: '56px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)',
            background: '#fafafa',
            padding: '40px 36px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              Servicios puntuales
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              También disponibles por separado o incluidos en los planes.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '12px',
            }}
          >
            {additionalServices.map((service) => (
              <div
                key={service.name}
                style={{
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-md)',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.3)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    marginBottom: '6px',
                  }}
                >
                  {service.name}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    margin: 0,
                  }}
                >
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginTop: '20px',
            }}
          >
            Valores referenciales. Precio final definido tras diagnóstico gratuito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
