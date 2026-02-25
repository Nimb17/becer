import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

const Hero: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20digitalizar%20mi%20negocio.`
    : '#contacto';
  const ref = useScrollReveal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        paddingTop: '140px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #f6f6f8 0%, #ffffff 40%, #f0fdf9 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)',
            animation: 'blob-morph 12s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)',
            animation: 'blob-morph 15s ease-in-out infinite reverse',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '30%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(15,45,58,0.06) 0%, transparent 70%)',
            animation: 'blob-morph 18s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="animate-on-scroll"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '200ms',
          }}
        >
          <EditableText
            as="span"
            className="section-badge"
            style={{ marginBottom: '28px' }}
            contentKey="hero.badge"
            fallback="Atencion remota 100% · Todo Chile"
            multiline={false}
          />
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '400ms',
          }}
        >
          <EditableText contentKey="hero.title.line1" fallback="Digitaliza tu pyme y" multiline={false} />
          <br className="hidden md:block" />
          <EditableText
            as="span"
            className="gradient-text"
            contentKey="hero.title.line2"
            fallback="aparece donde te buscan"
            multiline={false}
          />
        </h1>

        <EditableText
          as="p"
          contentKey="hero.subtitle"
          fallback="Primera asesoria gratuita de 45-60 min para diagnostico digital. Creamos web, app o sistema de gestion con posicionamiento en Google para generar ventas reales."
          style={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '600ms',
          }}
        />

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '800ms',
          }}
        >
          <a
            href={whatsappHref}
            className="btn-accent shimmer-effect"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 36px',
              fontSize: '1.1rem',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <EditableText contentKey="hero.cta" fallback="Hablar por WhatsApp" multiline={false} />
          </a>
        </div>

        <div
          style={{
            marginTop: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1200ms',
          }}
        >

        </div>

        <div
          style={{
            marginTop: '32px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(15,23,42,0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1400ms',
          }}
        >
          <div className="flex -space-x-3">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDOPADC_pUzwpovoAD4Ys6FRKfavpNjTM_XitCrrJwc0g0JCeUc_37KRMuVUEflIc9nO8U0J5PoCpxuSpnDuWmAgtcAcBG_82CgKsaUGdhgadiMRtgNtY1RfRYaP7KocZZRRfXnVQ-ODfUwEBxqWbS73vSZ_v2i59Am748v3NqB57TSG0wkj0C561eSNFEs2_nU4MxImfUROHOmZWWmx8oa3WqrVUqW6iixhV23ZQwAH5-OL1Y8hC-tTBoCIhgK8xmD_KEqqkuP0',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC1gvp3r3jWfIxBJH673UFgPyC34xODpp0q_64qj8YP8MT4kS9HhefLpFvwg_B6H5sHXoulLyfyBU-3cqLfY5knj-4gvb_EmK3UV9cI4MZ85fAnoUGVhzTub7IvFaMRYXZk2vFmjpOvH3LfCjjq2g8qdi7PA934A0g2_j3O_iRhH4OwULlPKf3D4E1oPaH0I3BTBSnP1Ijazy0mVcqoDX2Xtlc7FgGUyZQyOT-nvRh0AAD5f4JRwyBLqJhmzzVzKiQ6S8nAwAwNmsk',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCP-j_dGPMqTnoogFS_AiSL6gPkRbaUPqX8W5QpDl3KvI0cXQ2KXE-MhfHoFIVz-AmdDMUnRdOcf-wlivvV6ri_J0a-7NGfODadrEqyaPCq1NnJ7eQmQUq3cMp71WNG9MaMfUZgd86pYa2lhOJh8kZrbkaKD_lVTtMb9OykgXroZuNOY20R7fUnB0UB6pSCYwfOqDDzXY1Qf5MwGczpQCgVB6-25uFLgY3rDLub3KxM_e8P_cwR9KyNzmGXsKFqbuSKtHYO_XX67sU',
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Cliente satisfecho de Diseño Web y Software en Vallenar - Asesorías Becer ${index + 1}`}
                title={`Emprendedor de Vallenar con presencia digital - Caso ${index + 1}`}
                loading="lazy"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
            ))}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '3px solid white',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              2+
            </div>
          </div>
          <EditableText
            as="p"
            contentKey="hero.trust"
            fallback="2+ anos impulsando pymes en Atacama y todo Chile"
            multiline={false}
            style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
