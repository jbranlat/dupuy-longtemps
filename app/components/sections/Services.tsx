'use client';

import React, { useState } from 'react';
import FocusTitle from '../utils/FocusTitle';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const services = [
    {
      id: 'install',
      title: "Installation & Pose",
      shortDesc: "Pose de systèmes de climatisation réversible, PAC air/air, PAC air/eau et réseaux VRV/DRV.",
      details: [
        "Bilan thermique gratuit pour un dimensionnement parfait",
        "Conseil sur le choix du matériel (Split, Multi-split, Gainable)",
        "Pose dans le respect des normes (liaisons frigorifiques, évacuation des condensats)",
        "Mise sous pression d'azote, tirage au vide et appoint de charge",
        "Mise en service et explication du fonctionnement"
      ],

       icon: ("/illustration/installation.svg")
    },
    {
      id: 'depannage',
      title: "Dépannage Rapide",
      shortDesc: "Intervention 7j/7 pour diagnostic et réparation de vos équipements en panne.",
      details: [
        "Recherche de fuites de fluide frigorigène (R32, R410A...)",
        "Réparation ou remplacement de compresseurs et cartes électroniques",
        "Débouchage des pompes de relevage et écoulements",
        "Résolution des codes erreurs toutes marques (Daikin, Mitsubishi, Atlantic...)",
        "Intervention rapide pour rétablir votre confort thermique"
      ],
      icon: ("/illustration/depannage.svg")
    },
    {
      id: 'entretien',
      title: "Entretien & Maintenance",
      shortDesc: "Maintenances périodiques pour augmenter la durée de vie de vos appareils.",
      details: [
        "Nettoyage et désinfection des filtres et de la batterie (anti-bactéries/odeurs)",
        "Contrôle des pressions frigorifiques et des températures",
        "Vérification des connexions électriques et serrages",
        "Nettoyage du bac à condensats et vérification de l'évacuation",
        "Bilan d'étanchéité réglementaire (si équipement soumis)"
      ],
      icon: ("/illustration/entretien.svg")
    }
  ];

  return (
    <section id="prestations" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 px-4">
          <FocusTitle>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Nos prestations <span className="text-clim-neon">experts en climatisation</span>
            </h2>
          </FocusTitle>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            De l'installation au dépannage d'urgence, DSG CLIM 13 vous garantit un confort thermique optimal grâce à un savoir-faire technique pointu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`relative cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all duration-500 ease-out overflow-hidden shadow-sm hover:shadow-xl
                ${expandedId === service.id ? 'border-[#7AC142] ring-4 ring-[#7AC142]/10' : 'border-gray-100 hover:border-[#7AC142]/50'}
              `}
            >
              <div className="flex flex-col items-center text-center z-10 relative">

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${expandedId === service.id ? 'bg-[#7AC142]/10' : 'bg-gray-50'}
                `}>
                   <img src={service.icon} alt="Icon" className="w-12 h-12" />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1B3D] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.shortDesc}
                </p>

                <div className="mt-2 text-[#7AC142] font-semibold text-sm flex items-center gap-2">
                  {expandedId === service.id ? 'Fermer les détails' : 'Voir les détails'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform duration-300 ${expandedId === service.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div
                  className={`w-full text-left transition-all duration-500 ease-in-out
                    ${expandedId === service.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden mt-0'}
                  `}
                >
                  <div className="h-px w-full bg-gray-100 mb-6"></div>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-5 h-5 text-[#7AC142] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
