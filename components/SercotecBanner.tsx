import React from 'react';

const SercotecBanner: React.FC = () => {
  return (
    <section className="bg-primary border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-full">
            <span className="material-icons text-white text-3xl">verified</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Pluss / Extras para acelerar tu crecimiento</h3>
            <p className="text-slate-300 text-sm">
              Asesoria opcional para postulacion a fondos publicos (Sercotec y Corfo cuando haya convocatorias activas)
              y oportunidades en Mercado Publico (licitaciones y Compra Agil por ChileCompra).
              Es valor agregado cuando lo requieras, no requisito para contratar el servicio principal.
            </p>
          </div>
        </div>
        <a href="#contacto" className="inline-flex shrink-0 items-center justify-center whitespace-nowrap px-6 py-3 border border-transparent text-sm md:text-base font-medium rounded-lg text-primary bg-white hover:bg-slate-100 transition-colors shadow-lg">
          Solicitar asesoría opcional
          <span className="material-icons ml-2 text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};

export default SercotecBanner;
