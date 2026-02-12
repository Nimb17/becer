import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-background-light dark:bg-background-dark relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Nuestro Portafolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Galeria de Proyectos en Atacama
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            Resultados reales para negocios reales de nuestra region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img src="/mesa-digital.png" alt="MesaDigital" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-white backdrop-blur-sm border border-white/10">SaaS</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm border border-white/10">Restaurantes</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">MesaDigital</h3>
                <p className="text-slate-200 text-sm flex items-center">
                  <span className="material-icons text-sm mr-1">place</span> Chile
                </p>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                Ecosistema integral que digitaliza la operacion del restaurante. Reduce tiempos de espera en un 40% y aumenta ventas con menus QR inteligentes.
              </p>
              <a href="#contacto" className="text-primary font-semibold text-sm hover:text-primary-dark inline-flex items-center mt-auto">
                Ver caso completo <span className="material-icons text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img src="/farmacia-comunal.png" alt="Farmacia Comunal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600/90 text-white backdrop-blur-sm border border-white/10">Salud</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/90 text-white backdrop-blur-sm border border-white/10">Normativa</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Farmacia Comunal</h3>
                <p className="text-slate-200 text-sm flex items-center">
                  <span className="material-icons text-sm mr-1">place</span> Chile
                </p>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                Sistema integral de gestion para farmacias comunales. Trazabilidad completa de medicamentos, dispensacion por beneficiario y cumplimiento normativo al 100% segun el DS N 466 del Minsal.
              </p>
              <a href="#contacto" className="text-primary font-semibold text-sm hover:text-primary-dark inline-flex items-center mt-auto">
                Ver caso completo <span className="material-icons text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img src="/gestion-gimnasios.png" alt="Gestion de Clientes para Gimnasios" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-600/90 text-white backdrop-blur-sm border border-white/10">Google Sheets</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm border border-white/10">Gimnasios</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Gestion de Clientes para Gimnasios</h3>
                <p className="text-slate-200 text-sm flex items-center">
                  <span className="material-icons text-sm mr-1">place</span> Chile
                </p>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                Sistema de gestion de clientes para gimnasios en Google Sheets. Automatiza inscripciones, validacion por RUT, alertas de vencimiento y reportes de ingresos en tiempo real para mejorar retencion y rentabilidad.
              </p>
              <a href="#contacto" className="text-primary font-semibold text-sm hover:text-primary-dark inline-flex items-center mt-auto">
                Ver caso completo <span className="material-icons text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors shadow-sm">
            Solicitar una demo <span className="material-icons ml-2">grid_view</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
