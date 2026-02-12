import React, { useState } from 'react';

const Footer: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

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
    } catch (error) {
      setStatus('error');
      setStatusMessage('Ocurrió un problema al enviar. Intenta nuevamente o escríbenos por WhatsApp.');
    }
  };

  return (
    <footer id="contacto" className="bg-primary dark:bg-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center">
              <img src="/logo-blanco.png" alt="Logo Asesorías Becer" className="h-24 w-24 object-contain" />
            </div>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Impulsando el crecimiento digital de la Región de Atacama con cobertura en todo Chile remoto.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="material-icons text-slate-400 mt-1 mr-3">location_on</span>
                <span className="text-slate-300">Atención remota para todo Chile.</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-slate-400 mr-3">email</span>
                <a href="mailto:contacto@asesoriasbecer.cl" className="text-slate-300 hover:text-white transition-colors">contacto@asesoriasbecer.cl</a>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-slate-400 mr-3">phone</span>
                <a href="tel:+56912345678" className="text-slate-300 hover:text-white transition-colors">+56 9 1234 5678</a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary-dark/50 rounded-2xl opacity-50 blur-xl"></div>
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Agenda tu diagnóstico</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 ..."
                    className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mensaje (Opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-2 border"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : 'Solicitar llamada gratis'}
                </button>

                {statusMessage && (
                  <p className={`text-sm ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">© 2026 Asesorías Becer. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
