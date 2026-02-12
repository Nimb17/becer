import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
  const ref = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Completa nombre y teléfono para continuar.');
      return;
    }

    const messageText = [
      'Nueva solicitud desde la web',
      `Nombre: ${formData.name}`,
      `Teléfono: ${formData.phone}`,
      `Mensaje: ${formData.message || 'Sin mensaje'}`,
    ].join('\n');

    try {
      setStatus('sending');
      setStatusMessage('Enviando...');

      if (contactEndpoint) {
        const response = await fetch(contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            source: 'landing_asesorias_becer',
          }),
        });

        if (!response.ok) {
          throw new Error('No se pudo enviar al endpoint.');
        }

        setStatus('success');
        setStatusMessage('Solicitud enviada correctamente. Te contactaremos pronto.');
        setFormData({ name: '', phone: '', message: '' });
        return;
      }

      if (whatsappNumber) {
        const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
        window.open(waHref, '_blank', 'noopener,noreferrer');
        setStatus('success');
        setStatusMessage('Abrimos WhatsApp con tu mensaje para enviarlo.');
        return;
      }

      window.location.href = `mailto:contacto@asesoriasbecer.cl?subject=${encodeURIComponent('Nueva solicitud desde la web')}&body=${encodeURIComponent(messageText)}`;
      setStatus('success');
      setStatusMessage('Abrimos tu correo para completar el envío.');
    } catch {
      setStatus('error');
      setStatusMessage('Ocurrió un problema al enviar. Intenta nuevamente o escríbenos por WhatsApp.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '14px',
    border: '1.5px solid rgba(15,23,42,0.1)',
    background: '#f8fafc',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  return (
    <footer
      id="contacto"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #0A1F29 60%, #122838 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(0,212,170,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(108,92,231,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column – Info */}
          <div className="animate-on-scroll">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <img
                src="/logo-blanco.png"
                alt="Logo Asesorías Becer"
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '420px',
                marginBottom: '32px',
              }}
            >
              Impulsando el crecimiento digital de la Región de Atacama con cobertura remota en todo Chile.
            </p>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[
                { icon: 'location_on', text: 'Atención remota para todo Chile', href: '' },
                { icon: 'email', text: 'contacto@asesoriasbecer.cl', href: 'mailto:contacto@asesoriasbecer.cl' },
                { icon: 'phone', text: '+56 9 1234 5678', href: 'tel:+56912345678' },
              ].map((contact) => (
                <div
                  key={contact.icon}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.3s ease',
                    cursor: contact.href ? 'pointer' : 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(0,212,170,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span className="material-icons" style={{ color: 'var(--accent)', fontSize: '20px' }}>
                      {contact.icon}
                    </span>
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                      }}
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 500 }}>
                      {contact.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Trust */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {['2+ años de experiencia', 'Todo Chile remoto', 'Diagnóstico gratis'].map((text) => (
                <span
                  key={text}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '100px',
                    background: 'rgba(0,212,170,0.08)',
                    border: '1px solid rgba(0,212,170,0.15)',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right column – Form */}
          <div className="animate-on-scroll delay-200">
            <div
              style={{
                position: 'relative',
              }}
            >
              {/* Glow effect behind form */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  background: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(108,92,231,0.1))',
                  borderRadius: '32px',
                  filter: 'blur(24px)',
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  borderRadius: '28px',
                  padding: '40px 36px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Agenda tu diagnóstico
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '28px',
                    lineHeight: 1.5,
                  }}
                >
                  45–60 minutos gratis para analizar tu presencia digital.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="footer-name"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="footer-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="footer-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="footer-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+56 9 ..."
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="footer-message"
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      Mensaje <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(opcional)</span>
                    </label>
                    <textarea
                      id="footer-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      style={{
                        ...inputStyle,
                        resize: 'vertical' as const,
                        minHeight: '80px',
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-accent"
                    style={{
                      width: '100%',
                      padding: '16px',
                      marginTop: '4px',
                      border: 'none',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    {status === 'sending' ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span className="material-icons" style={{ fontSize: 18, animation: 'orbit 1s linear infinite' }}>sync</span>
                        Enviando...
                      </span>
                    ) : (
                      'Solicitar llamada gratis'
                    )}
                  </button>

                  {statusMessage && (
                    <div
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: status === 'error' ? 'rgba(239,68,68,0.06)' : 'rgba(0,212,170,0.06)',
                        border: `1px solid ${status === 'error' ? 'rgba(239,68,68,0.15)' : 'rgba(0,212,170,0.15)'}`,
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: status === 'error' ? '#DC2626' : '#059669',
                      }}
                    >
                      {statusMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '64px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            © 2026 Asesorías Becer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
