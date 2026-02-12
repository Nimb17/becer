import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">¿Cómo trabajamos?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Simple, directo y sin tecnicismos.</p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded-full z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-center relative group">
              <div className="w-12 h-12 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white dark:ring-slate-800">1</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Auditoría Gratuita</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Analizamos tu presencia actual en Google y redes sociales sin costo alguno.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-center relative group mt-8 md:mt-0 lg:-mt-12">
              <div className="w-12 h-12 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white dark:ring-slate-800">2</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Plan a Medida</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Diseñamos una estrategia que se ajuste a tu presupuesto y tipo de negocio.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-center relative group">
              <div className="w-12 h-12 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white dark:ring-slate-800">3</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Lanzamiento</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Implementamos las mejoras y empezamos a medir resultados de inmediato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;