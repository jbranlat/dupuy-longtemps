import React from 'react';

export default function EtudeDeCas() {
  return (
    <section className="pt-8 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <span className="inline-block px-4 py-1.5 bg-clim-palmier/10 text-clim-palmier text-sm font-bold tracking-wide rounded-full w-max mb-6">
              Étude de cas
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Nettoyage en profondeur climatisation
            </h3>
            <div className="w-20 h-1.5 bg-clim-palmier rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              "Notre client nous a contacté pour une baisse de performance de son installation de climatisation malgré un nettoyage régulier des filtres des unités intérieures. Nous lui avons donc proposé un nettoyage en profondeur des unités intérieures via un nettoyage sous pression très efficace dans ce genre de situation. Grâce à cette intervention, le client a pu retrouver un fonctionnement optimal de son installation."
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-900 font-medium">
                <svg className="w-6 h-6 text-clim-palmier mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Nettoyage sous pression haute efficacité
              </li>
              <li className="flex items-center text-slate-900 font-medium">
                <svg className="w-6 h-6 text-clim-palmier mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Performances thermiques restaurées
              </li>
              <li className="flex items-center text-slate-900 font-medium">
                <svg className="w-6 h-6 text-clim-palmier mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Qualité de l'air intérieur améliorée
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg aspect-video">
              <img 
                src="/realisation/nettoyage-apres.png" 
                alt="Résultat du nettoyage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">Après</span>
                <p className="text-white mt-1 text-sm font-medium">Fonctionnement optimal retrouvé</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-md aspect-[4/3]">
              <img 
                src="/realisation/nettoyage-avant.png" 
                alt="État avant" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="bg-slate-900 text-white px-2 py-1 rounded-md text-xs font-bold">Avant</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-md aspect-[4/3]">
              <img 
                src="/realisation/nettoyage-pendant.png" 
                alt="Nettoyage en cours" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="bg-clim-palmier text-white px-2 py-1 rounded-md text-xs font-bold">Pendant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}