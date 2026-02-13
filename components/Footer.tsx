import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import EditableText from './EditableText';

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Completa nombre y telefono para continuar.');
      return;
    }

    const messageText = [
      'Nueva solicitud desde la web',
      `Nombre: ${formData.name}`,
      `Telefono: ${formData.phone}`,
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
      setStatusMessage('Abrimos tu correo para completar el envio.');
    } catch {
      setStatus('error');
      setStatusMessage('Ocurrio un problema al enviar. Intenta nuevamente o escribenos por WhatsApp.');
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

  const contacts = [
    { icon: 'location_on', key: 'footer.contact.location', fallback: 'Atencion remota para todo Chile', href: '' },
    { icon: 'email', key: 'footer.contact.email', fallback: 'contacto@asesoriasbecer.cl', href: 'mailto:contacto@asesoriasbecer.cl' },
    { icon: 'phone', key: 'footer.contact.phone', fallback: '+56 9 1234 5678', href: 'tel:+56912345678' },
  ];

  const badges = [
    { key: 'footer.badge.1', fallback: '2+ anos de experiencia' },
    { key: 'footer.badge.2', fallback: 'Todo Chile remoto' },
    { key: 'footer.badge.3', fallback: 'Diagnostico gratis' },
  ];

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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 80% 20%, rgba(0,212,170,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(108,92,231,0.06) 0%, transparent 50%)',
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
          <div className="animate-on-scroll">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <img src="/logo-blanco.png" alt="Logo Asesorias Becer" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
            </div>

            <EditableText
              as="p"
              contentKey="footer.intro"
              fallback="Impulsando el crecimiento digital de la Region de Atacama con cobertura remota en todo Chile."
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '420px',
                marginBottom: '32px',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {contacts.map((contact) => (
                <div
                  key={contact.key}
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
                  onMouseEnter={(event) => {
                    (event.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (event.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,170,0.2)';
                  }}
                  onMouseLeave={(event) => {
                    (event.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
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
                      <EditableText as="span" contentKey={contact.key} fallback={contact.fallback} multiline={false} />
                    </a>
                  ) : (
                    <EditableText
                      as="span"
                      contentKey={contact.key}
                      fallback={contact.fallback}
                      multiline={false}
                      style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 500 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {badges.map((badge) => (
                <span
                  key={badge.key}
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
                  <EditableText as="span" contentKey={badge.key} fallback={badge.fallback} multiline={false} />
                </span>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll delay-200">
            <div
              style={{
                position: 'relative',
              }}
            >
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
                <EditableText
                  as="h3"
                  contentKey="footer.form.title"
                  fallback="Agenda tu diagnostico"
                  multiline={false}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                />
                <EditableText
                  as="p"
                  contentKey="footer.form.subtitle"
                  fallback="45-60 minutos gratis para analizar tu presencia digital."
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '28px',
                    lineHeight: 1.5,
                  }}
                />

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
                      onFocus={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (event.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (event.currentTarget as HTMLElement).style.boxShadow = 'none';
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
                      Telefono
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
                      onFocus={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (event.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (event.currentTarget as HTMLElement).style.boxShadow = 'none';
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
                      onFocus={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (event.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,170,0.12)';
                      }}
                      onBlur={(event) => {
                        (event.currentTarget as HTMLElement).style.borderColor = 'rgba(15,23,42,0.1)';
                        (event.currentTarget as HTMLElement).style.boxShadow = 'none';
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
                        <span className="material-icons" style={{ fontSize: 18, animation: 'orbit 1s linear infinite' }}>
                          sync
                        </span>
                        Enviando...
                      </span>
                    ) : (
                      <EditableText as="span" contentKey="footer.form.cta" fallback="Solicitar llamada gratis" multiline={false} />
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
            <EditableText
              as="span"
              contentKey="footer.copyright"
              fallback="© 2026 Asesorias Becer. Todos los derechos reservados."
              multiline={false}
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
