import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Diagnóstico</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            ¿Te identificas con esto?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            La mayoría de los emprendedores en Atacama enfrentan los mismos obstáculos invisibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group bg-background-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-6 right-6 text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
              <span className="material-icons text-6xl">visibility_off</span>
            </div>
            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons text-amber-600 dark:text-amber-400">warning</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Eres invisible</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Tus clientes buscan "servicio en Vallenar" pero solo encuentran a tu competencia. Estás perdiendo ventas diarias.
            </p>
          </div>

          <div className="relative group bg-background-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-6 right-6 text-red-500/20 group-hover:text-red-500/40 transition-colors">
              <span className="material-icons text-6xl">trending_down</span>
            </div>
            <div className="h-12 w-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons text-red-600 dark:text-red-400">money_off</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Publicidad cara</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Pagas por volantes que terminan en la basura. El marketing digital es medible y mucho más económico.
            </p>
          </div>

          <div className="relative group bg-background-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-6 right-6 text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
              <span className="material-icons text-6xl">sentiment_dissatisfied</span>
            </div>
            <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons text-orange-600 dark:text-orange-400">thumb_down</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Falta de confianza</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Sin una web o ficha de Google Maps profesional, los turistas y clientes locales desconfían de la calidad de tu servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
