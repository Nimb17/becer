import React, { useEffect, useMemo } from 'react';
import EditableText from './EditableText';
import { useEditor } from '../context/EditorContext';

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  titleKey: string;
  titleFallback: string;
  subtitleKey: string;
  subtitleFallback: string;
  contentKey: string;
  contentFallback: string;
  highlightsKey: string;
  highlightsFallback: string;
  priceKey: string;
  priceFallback: string;
  whatsappHref: string;
  icon?: string;
  gradient?: string;
};

function buildHighlights(value: string): string[] {
  const normalized = value.replace(/\r/g, '').trim();
  if (!normalized) return [];

  const splitByLines = normalized
    .split(/\n+/)
    .map((line) => line.replace(/^[-*•\s]+/, '').trim())
    .filter(Boolean);

  const candidates =
    splitByLines.length > 1
      ? splitByLines
      : normalized
          .split(/[.;]+/)
          .flatMap((part) => part.split(','))
          .map((part) => part.trim())
          .filter(Boolean);

  return Array.from(new Set(candidates)).slice(0, 4);
}

export default function ServiceModal({
  isOpen,
  onClose,
  titleKey,
  titleFallback,
  subtitleKey,
  subtitleFallback,
  contentKey,
  contentFallback,
  highlightsKey,
  highlightsFallback,
  priceKey,
  priceFallback,
  whatsappHref,
  icon = 'auto_awesome',
  gradient = 'linear-gradient(135deg, #0F2D3A, #1a4a5e)',
}: ServiceModalProps) {
  const { getText, isEditing } = useEditor();

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

  const resolvedContent = getText(contentKey, contentFallback);
  const resolvedHighlights = getText(highlightsKey, highlightsFallback);
  const highlights = useMemo(() => {
    const explicit = resolvedHighlights
      .split(/\n+/)
      .map((line) => line.replace(/^[-*•\s]+/, '').trim())
      .filter(Boolean);

    if (explicit.length > 0) return explicit.slice(0, 6);
    return buildHighlights(resolvedContent);
  }, [resolvedContent, resolvedHighlights]);

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
        padding: '18px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(2, 6, 23, 0.58)',
          backdropFilter: 'blur(6px)',
        }}
      />

      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: 'relative',
          width: 'min(920px, 100%)',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '28px',
          border: '1px solid rgba(15,23,42,0.08)',
          boxShadow: '0 30px 90px rgba(0,0,0,0.26)',
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
            width: '38px',
            height: '38px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.44)',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            zIndex: 2,
          }}
        >
          <span className="material-icons" style={{ fontSize: '18px' }}>
            close
          </span>
        </button>

        <div
          style={{
            background: gradient,
            padding: '28px 28px 24px',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              right: '-75px',
              top: '-80px',
              background: 'rgba(255,255,255,0.18)',
              filter: 'blur(1px)',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(8px)',
                flexShrink: 0,
              }}
            >
              <span className="material-icons" style={{ color: '#ffffff', fontSize: '28px' }}>
                {icon}
              </span>
            </div>

            <EditableText
              as="span"
              contentKey={priceKey}
              fallback={priceFallback}
              multiline={false}
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.38)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 700,
              }}
            />
          </div>

          <EditableText
            as="h3"
            contentKey={titleKey}
            fallback={titleFallback}
            multiline={false}
            style={{
              fontSize: 'clamp(1.45rem, 2.2vw, 2.1rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 8px',
              color: '#ffffff',
              position: 'relative',
            }}
          />

          <EditableText
            as="p"
            contentKey={subtitleKey}
            fallback={subtitleFallback}
            style={{
              margin: 0,
              fontSize: '0.98rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.92)',
              maxWidth: '70ch',
              position: 'relative',
            }}
          />
        </div>

        <div
          style={{
            padding: '22px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
          }}
        >
          <div
            style={{
              borderRadius: '18px',
              border: '1px solid rgba(15,23,42,0.08)',
              background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
              padding: '16px',
            }}
          >
            <EditableText
              as="p"
              contentKey="serviceModal.section.descriptionTitle"
              fallback="Descripcion editable"
              multiline={false}
              style={{
                margin: '0 0 10px',
                fontSize: '0.82rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#0f766e',
              }}
            />

            <EditableText
              as="p"
              contentKey={contentKey}
              fallback={contentFallback}
              style={{
                margin: 0,
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: '#334155',
                whiteSpace: 'pre-wrap',
              }}
            />

            {isEditing && (
              <EditableText
                as="p"
                contentKey="serviceModal.section.editorTip"
                fallback="Tip editor: usa una idea por linea para mejorar la visualizacion en puntos clave."
                style={{
                  margin: '10px 0 0',
                  fontSize: '0.76rem',
                  color: '#64748b',
                }}
              />
            )}
          </div>

          <div
            style={{
              borderRadius: '18px',
              border: '1px solid rgba(15,23,42,0.08)',
              background: '#f8fafc',
              padding: '16px',
            }}
          >
            <EditableText
              as="p"
              contentKey="serviceModal.section.highlightsTitle"
              fallback="Puntos clave"
              multiline={false}
              style={{
                margin: '0 0 12px',
                fontSize: '0.82rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#0f172a',
              }}
            />

            <div style={{ display: 'grid', gap: '8px' }}>
              {highlights.length > 0 ? (
                highlights.map((item, index) => {
                  const itemKey = `${highlightsKey}.${index + 1}`;
                  return (
                    <div
                      key={itemKey}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: '1px solid rgba(15,23,42,0.08)',
                        padding: '10px',
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{ fontSize: '16px', color: '#0f766e', marginTop: '2px' }}
                      >
                        task_alt
                      </span>
                      <EditableText
                        as="p"
                        contentKey={itemKey}
                        fallback={item}
                        style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.55, color: '#334155' }}
                      />
                    </div>
                  );
                })
              ) : (
                <EditableText
                  as="p"
                  contentKey="serviceModal.section.emptyHighlights"
                  fallback="Agrega mas detalle en la descripcion para ver este resumen."
                  style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}
                />
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '0 22px 22px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EditableText
            as="p"
            contentKey="serviceModal.footer.responseTime"
            fallback="Respuesta estimada en menos de 24 horas."
            multiline={false}
            style={{ margin: 0, fontSize: '0.84rem', color: '#64748b' }}
          />

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
              boxShadow: '0 10px 24px rgba(15,45,58,0.2)',
            }}
          >
            <EditableText
              as="span"
              contentKey="serviceModal.footer.cta"
              fallback="Solicitar este servicio"
              multiline={false}
            />
            <span className="material-icons" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
