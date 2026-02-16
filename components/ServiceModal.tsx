import React, { useEffect } from 'react';
import EditableText from './EditableText';

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  titleKey: string;
  titleFallback: string;
  subtitleKey: string;
  subtitleFallback: string;
  contentKey: string;
  contentFallback: string;
  priceKey: string;
  priceFallback: string;
  whatsappHref: string;
};

export default function ServiceModal({
  isOpen,
  onClose,
  titleKey,
  titleFallback,
  subtitleKey,
  subtitleFallback,
  contentKey,
  contentFallback,
  priceKey,
  priceFallback,
  whatsappHref,
}: ServiceModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(2, 6, 23, 0.58)',
          backdropFilter: 'blur(4px)',
        }}
      />

      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: 'relative',
          width: 'min(760px, 100%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(15,23,42,0.08)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
          padding: '28px',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: '1px solid rgba(15,23,42,0.12)',
            background: '#f8fafc',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f172a',
          }}
        >
          <span className="material-icons" style={{ fontSize: '18px' }}>
            close
          </span>
        </button>

        <EditableText
          as="span"
          contentKey={priceKey}
          fallback={priceFallback}
          multiline={false}
          style={{
            display: 'inline-block',
            padding: '6px 12px',
            borderRadius: '999px',
            background: 'rgba(15,45,58,0.08)',
            border: '1px solid rgba(15,45,58,0.14)',
            color: 'var(--primary)',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}
        />

        <EditableText
          as="h3"
          contentKey={titleKey}
          fallback={titleFallback}
          multiline={false}
          style={{
            fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            margin: '0 0 8px',
          }}
        />

        <EditableText
          as="p"
          contentKey={subtitleKey}
          fallback={subtitleFallback}
          style={{
            margin: '0 0 18px',
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
          }}
        />

        <div
          style={{
            padding: '18px',
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
            border: '1px solid rgba(15,23,42,0.08)',
          }}
        >
          <EditableText
            as="p"
            contentKey={contentKey}
            fallback={contentFallback}
            style={{
              margin: 0,
              fontSize: '0.98rem',
              lineHeight: 1.8,
              color: '#334155',
            }}
          />
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <a
            href={whatsappHref}
            className="btn-accent"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              fontSize: '0.95rem',
            }}
          >
            Solicitar este servicio
            <span className="material-icons" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
