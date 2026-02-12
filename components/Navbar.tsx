import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo-color.png" alt="Logo Asesorías Becer" className="h-24 w-24 object-contain" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#problemas" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Problemas Comunes</a>
            <a href="#soluciones" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Soluciones</a>
            <a href="#proyectos" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Proyectos</a>
            <a href="#precios" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Servicios</a>
            <a href="#contacto" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
              Agenda tu Asesoría
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary focus:outline-none p-2"
            >
              <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#problemas" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Problemas Comunes</a>
            <a href="#soluciones" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Soluciones</a>
            <a href="#proyectos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Proyectos</a>
            <a href="#precios" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Servicios</a>
            <div className="pt-4">
              <a href="#contacto" onClick={() => setIsOpen(false)} className="block w-full text-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark shadow-md">
                Agenda tu Asesoría
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
