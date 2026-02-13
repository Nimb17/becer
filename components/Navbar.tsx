import React, { useEffect, useState } from 'react';
import EditableText from './EditableText';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['problemas', 'soluciones', 'proyectos', 'precios', 'contacto'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#problemas', label: 'Diagnostico' },
    { href: '#soluciones', label: 'Soluciones' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#precios', label: 'Servicios' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.04)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group py-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer', paddingLeft: 0 }}
            aria-label="Volver al inicio"
          >
            <img
              src="/logo-color.png"
              alt="Logo Asesorias Becer"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(0, 212, 170, 0.08)' : 'transparent',
                  }}
                  onMouseEnter={(event) => {
                    if (!isActive) {
                      (event.currentTarget as HTMLElement).style.background = 'rgba(15,23,42,0.04)';
                      (event.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseLeave={(event) => {
                    if (!isActive) {
                      (event.currentTarget as HTMLElement).style.background = 'transparent';
                      (event.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  )}
                </a>
              );
            })}

            <div className="w-px h-6 mx-3" style={{ background: 'var(--border)' }} />

            <a
              href="#contacto"
              className="btn-primary"
              style={{
                padding: '10px 24px',
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#00D4AA',
                  display: 'inline-block',
                  animation: 'glow-pulse 2s ease infinite',
                }}
              />
              <EditableText contentKey="navbar.cta" fallback="Agenda tu Asesoria" multiline={false} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{
              background: isOpen ? 'rgba(0, 212, 170, 0.08)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span className="material-icons" style={{ color: 'var(--text-primary)', fontSize: 24 }}>
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? '420px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: isOpen ? '1px solid rgba(15,23,42,0.06)' : 'none',
        }}
        className="md:hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium transition-all"
              style={{
                color: 'var(--text-primary)',
                animationDelay: `${index * 60}ms`,
              }}
              onMouseEnter={(event) => {
                (event.currentTarget as HTMLElement).style.background = 'rgba(0, 212, 170, 0.06)';
              }}
              onMouseLeave={(event) => {
                (event.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="btn-accent block w-full text-center"
              style={{ textDecoration: 'none', padding: '14px 24px', fontSize: '1rem' }}
            >
              <EditableText contentKey="navbar.cta" fallback="Agenda tu Asesoria" multiline={false} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
