import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group h-[500px]">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chile_relief_location_map.jpg/612px-Chile_relief_location_map.jpg')] bg-cover bg-center grayscale contrast-125"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

            <div className="absolute top-[45%] left-[40%] group/pin hover:z-20">
              <div className="relative flex flex-col items-center group-hover/pin:-translate-y-2 transition-transform">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded shadow-lg mb-2 opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                  MesaDigital<br />Vallenar
                </div>
                <span className="material-icons text-primary text-4xl drop-shadow-md cursor-pointer animate-bounce">place</span>
              </div>
            </div>

            <div className="absolute top-[35%] left-[45%] group/pin hover:z-20">
              <div className="relative flex flex-col items-center group-hover/pin:-translate-y-2 transition-transform">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded shadow-lg mb-2 opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                  Farmacia Comunal<br />Copiapó
                </div>
                <span className="material-icons text-red-500 text-4xl drop-shadow-md cursor-pointer animate-bounce animation-delay-500">place</span>
              </div>
            </div>

            <div className="absolute top-[32%] left-[30%] group/pin hover:z-20">
              <div className="relative flex flex-col items-center group-hover/pin:-translate-y-2 transition-transform">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded shadow-lg mb-2 opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                  Gestion Gimnasios<br />Caldera
                </div>
                <span className="material-icons text-amber-500 text-4xl drop-shadow-md cursor-pointer animate-bounce animation-delay-1000">place</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-xl p-4 border border-slate-200 dark:border-slate-600 shadow-lg">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                <span className="material-icons text-primary mr-2 text-base">public</span>
                Zona de atención y casos locales
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <img src="/mesa-digital.png" alt="MesaDigital" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-slate-800 dark:text-white">MesaDigital</p>
                    <p className="text-[10px] text-slate-500">Vallenar</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <img src="/farmacia-comunal.png" alt="Farmacia Comunal" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-slate-800 dark:text-white">Farmacia Comunal</p>
                    <p className="text-[10px] text-slate-500">Copiapó</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <img src="/gestion-gimnasios.png" alt="Gestión Gimnasios" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-slate-800 dark:text-white">Gestion Gimnasios</p>
                    <p className="text-[10px] text-slate-500">Atacama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Atención remota 100% en todo Chile</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Trabajamos con pymes de comercio y servicios en cualquier región, sin barreras geográficas.
              El proceso completo se puede ejecutar online, con foco en resultados rápidos y medibles.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span className="text-slate-700 dark:text-slate-300">Lenguaje hiperlocal: "para tu minimarket en Vallenar" o "aparece cuando busquen ferretería Copiapó".</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span className="text-slate-700 dark:text-slate-300">Casos reales de la zona para aumentar identificación y tasa de contacto.</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-primary mr-3 mt-1">check_circle</span>
                <span className="text-slate-700 dark:text-slate-300">Estrategia simple, medible y pensada para pymes que no quieren endeudarse.</span>
              </li>
            </ul>
            <a href="#contacto" className="text-primary font-bold hover:text-primary-dark inline-flex items-center">
              Solicitar diagnóstico gratuito <span className="material-icons ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
