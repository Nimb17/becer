import React from 'react';

const Hero: React.FC = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20digitalizar%20mi%20negocio.`
    : '#contacto';

  return (
    <section className="relative pt-20 pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-primary/20 text-primary font-medium text-sm mb-8 border border-slate-200 dark:border-primary/30">
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Todo Chile remoto 100% para pymes en regiones
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
          Digitaliza tu pyme y <br className="hidden md:block" />
          <span className="text-primary">aparece donde te buscan</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10">
          Primera asesoría gratuita de 45-60 minutos para diagnóstico operativo y digital.
          Creamos web, app o sistema de gestión con posicionamiento en Google para generar ventas reales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappHref}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-whatsapp rounded-full hover:bg-whatsapp-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp shadow-xl shadow-green-500/30 transform hover:-translate-y-1"
          >
            {/* <span className="text-2xl material-icons">whatsapp</span> */}
            <span>Hablar por WhatsApp</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 pointer-events-none"></div>
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            Agendar llamada de 20 min gratis
          </a>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#precios" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors">
            Quiero mi app / web / sistema
          </a>
          <a href="#precios" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors">
            Optimizar mi negocio en Google
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Asesoría inicial gratis (45-60 min)</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Planes desde $450.000 + IVA</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Resultados sin endeudarte</span>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <span>2+ años de experiencia en desarrollo digital y posicionamiento Google para pymes</span>
          <div className="flex -space-x-2">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvDOPADC_pUzwpovoAD4Ys6FRKfavpNjTM_XitCrrJwc0g0JCeUc_37KRMuVUEflIc9nO8U0J5PoCpxuSpnDuWmAgtcAcBG_82CgKsaUGdhgadiMRtgNtY1RfRYaP7KocZZRRfXnVQ-ODfUwEBxqWbS73vSZ_v2i59Am748v3NqB57TSG0wkj0C561eSNFEs2_nU4MxImfUROHOmZWWmx8oa3WqrVUqW6iixhV23ZQwAH5-OL1Y8hC-tTBoCIhgK8xmD_KEqqkuP0" alt="Cliente 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1gvp3r3jWfIxBJH673UFgPyC34xODpp0q_64qj8YP8MT4kS9HhefLpFvwg_B6H5sHXoulLyfyBU-3cqLfY5knj-4gvb_EmK3UV9cI4MZ85fAnoUGVhzTub7IvFaMRYXZk2vFmjpOvH3LfCjjq2g8qdi7PA934A0g2_j3O_iRhH4OwULlPKf3D4E1oPaH0I3BTBSnP1Ijazy0mVcqoDX2Xtlc7FgGUyZQyOT-nvRh0AAD5f4JRwyBLqJhmzzVzKiQ6S8nAwAwNmsk" alt="Cliente 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-j_dGPMqTnoogFS_AiSL6gPkRbaUPqX8W5QpDl3KvI0cXQ2KXE-MhfHoFIVz-AmdDMUnRdOcf-wlivvV6ri_J0a-7NGfODadrEqyaPCq1NnJ7eQmQUq3cMp71WNG9MaMfUZgd86pYa2lhOJh8kZrbkaKD_lVTtMb9OykgXroZuNOY20R7fUnB0UB6pSCYwfOqDDzXY1Qf5MwGczpQCgVB6-25uFLgY3rDLub3KxM_e8P_cwR9KyNzmGXsKFqbuSKtHYO_XX67sU" alt="Cliente 3" />
            <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-background-dark bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">2+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
