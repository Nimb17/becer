import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Planes Digital Local Rápido</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Paquetes claros y accesibles para pymes de Atacama. Precios desde $450.000 hasta máximo $1.000.000 + IVA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-background-light dark:bg-background-dark p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Paquete Básico - Visibilidad Local</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Ideal para activar presencia digital y captar clientes cercanos.</p>
            <div className="my-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Desde</p>
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$450.000 - $650.000</span>
              <span className="text-base font-medium text-slate-500 dark:text-slate-400"> + IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">Web simple (5-7 secciones: home, servicios/productos, contacto, mapa y WhatsApp directo)</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">Optimización completa de Google Business Profile (fotos, horarios, reseñas, posts)</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">Configuración básica de Google Ads local para búsquedas "cerca de mí"</span>
              </li>
            </ul>
            <a href="#contacto" className="block w-full py-3 px-6 text-center rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold transition-colors">
              Solicitar diagnóstico gratuito
            </a>
          </div>

          <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-8 border-2 border-primary shadow-xl flex flex-col transform md:-translate-y-4 z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Más popular
            </div>
            <h3 className="text-xl font-bold text-primary">Paquete Estándar - Control + Ventas</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Para dueños que necesitan control operativo y mejor conversión.</p>
            <div className="my-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Desde</p>
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">$700.000 - $900.000</span>
              <span className="text-base font-medium text-slate-500 dark:text-slate-400"> + IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <span className="material-icons text-primary text-sm mr-2 mt-1">check_circle</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Todo lo del Básico</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary text-sm mr-2 mt-1">check_circle</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Sistema de gestión ligero</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary text-sm mr-2 mt-1">check_circle</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Ventas, inventario básico y costos simples</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary text-sm mr-2 mt-1">check_circle</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">App web o móvil muy simple para el dueño</span>
              </li>
            </ul>
            <a href="#contacto" className="block w-full py-4 px-6 text-center rounded-lg bg-primary hover:bg-primary-dark text-white font-bold shadow-lg shadow-primary/30 transition-colors">
              Solicitar diagnóstico gratuito
            </a>
          </div>

          <div className="rounded-2xl bg-background-light dark:bg-background-dark p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Paquete Completo - Pedidos Online</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Para pymes que quieren vender online sin complejidad técnica.</p>
            <div className="my-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Desde</p>
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$850.000 - $1.000.000</span>
              <span className="text-base font-medium text-slate-500 dark:text-slate-400"> + IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">Todo lo del Estándar</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">App móvil básica (catálogo + pedidos por WhatsApp o formulario simple)</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-green-500 text-sm mr-2 mt-1">check</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">Alternativa de e-commerce muy ligero</span>
              </li>
            </ul>
            <a href="#contacto" className="block w-full py-3 px-6 text-center rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold transition-colors">
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-base text-slate-700 dark:text-slate-300 font-semibold">
            Precios personalizados tras diagnóstico gratuito, con enfoque en "desde" y accesible para pymes de Atacama.
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Resultados sin endeudarte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
