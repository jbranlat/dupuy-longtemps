'use client';

import React, { useState } from 'react';
import FocusTitle from '../utils/FocusTitle';

export default function Solutions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const services = [
    {
      id: 'gainable',
      title: "Gainable & Régulation Airzone",
      shortDesc: "Une solution discrète, efficace et personnalisée pour votre habitation ou vos locaux professionnels.",
      image: "/illustration/airzone.png",
      details: [
        { subtitle: "Le gainable", text: "Semblable à une PAC air-air classique, mais son réseau de distribution est dissimulé dans un faux plafond..." },
        { subtitle: "Le système Airzone", text: "Régule les débits d'air et la température de chaque zone indépendamment." },
        { subtitle: "Le thermostat", text: "Communique avec le gainable pour activer le refroidissement ou le chauffage d'une pièce spécifique." },
        { subtitle: "Grilles de soufflage et reprise", text: "L'air est diffusé dans les différentes pièces via les grilles de soufflage." }
      ]
    },
    {
      id: 'split',
      title: "Système Mono & Multi Split",
      shortDesc: "La solution idéale pour rafraîchir ou chauffer indépendamment une ou plusieurs pièces.",
      image: "/illustration/split.jpg",
      details: [
        { subtitle: "Mono Split", text: "Économique avec un excellent rapport qualité/prix, parfait pour une seule pièce." },
        { subtitle: "Multi Split", text: "Équipez jusqu'à 5 pièces avec une seule unité extérieure !" },
        { subtitle: "Évolutivité & Flexibilité", text: "Combinez des unités murales, des consoles ou des cassettes selon la pièce." }
      ]
    },
    {
      id: 'cassette',
      title: "Climatisation Cassette",
      shortDesc: "Le choix esthétique et performant pour les grands volumes, le tertiaire et les commerces.",
      image: "/illustration/cassette.jpg",
      details: [
        { subtitle: "Design ultra discret", text: "L'unité intérieure est encastrée directement dans le faux plafond." },
        { subtitle: "Diffusion à 360°", text: "Distribue l'air traité dans 4 directions pour une température homogène." },
        { subtitle: "Idéal pour les pros", text: "Prédilection pour les bureaux, restaurants et boutiques." }
      ]
    },
    {
      id: 'vmc',
      title: "Systèmes de VMC",
      shortDesc: "Ventilation Mécanique Contrôlée pour renouveler et assainir l'air intérieur.",
      image: "/illustration/ventilation.webp",
      details: [
        { subtitle: "Qualité de l'air garantie", text: "Élimine l'humidité, les mauvaises odeurs et les polluants." },
        { subtitle: "VMC Simple Flux", text: "Extraction de l'air vicié des pièces humides." },
        { subtitle: "VMC Double Flux", text: "Récupère les calories de l'air extrait pour préchauffer l'air frais entrant." }
      ]
    }
  ];

  return (
    <section id="solutions" className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FocusTitle>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Nos solutions de <span className="text-clim-neon">climatisation & ventilation</span>
            </h2>
          </FocusTitle>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            DSG CLIM 13 vous accompagne pour trouver l'installation parfaitement adaptée à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`relative cursor-pointer bg-white rounded-[2rem] border-2 transition-all duration-500 ease-out overflow-hidden shadow-sm hover:shadow-2xl flex flex-col
                ${expandedId === service.id ? 'border-[#7AC142] ring-4 ring-[#7AC142]/10 scale-[1.02]' : 'border-gray-100 hover:border-[#7AC142]/40'}
              `}
            >
              <div className="w-full h-64 overflow-hidden relative bg-gray-100">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white leading-tight drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 text-base mb-6 font-medium">{service.shortDesc}</p>
                <div className="flex-grow"></div>
                <div className="mt-auto inline-flex items-center gap-2 text-[#7AC142] font-bold text-sm bg-white border-2 border-[#7AC142]/20 rounded-xl px-5 py-3 w-max">
                  {expandedId === service.id ? 'Réduire les informations' : 'Découvrir cette solution'}
                </div>

                <div className={`w-full text-left transition-all duration-500 ease-in-out ${expandedId === service.id ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="h-px w-full bg-gray-200 mb-6"></div>
                  <div className="grid gap-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#7AC142]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#7AC142] text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-[#0B1B3D] font-bold">{detail.subtitle}</h4>
                          <p className="text-gray-600 text-sm">{detail.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}