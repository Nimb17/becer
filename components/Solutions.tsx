import React from 'react';

const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#0F2D3A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">La Solución Becer</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Herramientas digitales que venden
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
              <span className="material-icons text-primary text-3xl">language</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">Web Rápida</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Sitios web optimizados que cargan al instante y venden tu servicio 24/7.</p>
          </div>
          
          {/* Item 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-4 mx-auto">
              <span className="material-icons text-green-600 text-3xl">place</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">Google Maps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Aparece primero cuando alguien busque tu rubro en el mapa de la ciudad.</p>
          </div>
          
          {/* Item 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
              <span className="material-icons text-primary text-3xl">trending_up</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">SEO Local</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Posicionamiento estratégico para captar clientes de tu zona específica.</p>
          </div>
          
          {/* Item 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-4 mx-auto">
              <span className="material-icons text-green-600 text-3xl">campaign</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">Ads Efectivos</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Campañas publicitarias que traen clientes reales, no solo likes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;