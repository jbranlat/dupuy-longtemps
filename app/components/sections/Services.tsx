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
      shortDesc: "Pose d’équipements sanitaires, de systèmes de chauffage central, de chauffe-eau et rénovation complète de salles de bain.",
      details: [
        "Étude personnalisée pour le dimensionnement de votre installation de chauffage.",
        "Conseil sur le choix des équipements (Chaudière gaz, Pompe à chaleur, Chauffe-eau thermodynamique, Adoucisseur).",
        "Installation dans le respect des normes (DTU, sécurité gaz, étanchéité des réseaux).",
        "Raccordements et mise en pression pour garantir une installation sans fuite et durable.",
        "Mise en service et explications sur le réglage de vos thermostats et le fonctionnement de vos appareils."
      ],

       icon: ("/illustration/chaudiere.svg")
    },
    {
      id: 'depannage',
      title: "Dépannage Rapide",
      shortDesc: "Intervention 7j/7 pour diagnostic et réparation de vos installations de plomberie et de chauffage.",
      details: [
        "Recherche et réparation de fuites (canalisations, robinetterie, réseaux encastrés).",
        "Débloquage et remplacement de circulateurs ou pièces défectueuses sur chaudières.",
        "Débouchage d'urgence de vos canalisations, WC, éviers et colonnes d'évacuation.",
        "Remise en route de chauffage toutes marques (Frisquet, Viessmann, Saunier Duval...).",
        "Intervention prioritaire pour rétablir votre eau chaude et votre confort thermique."
      ],
      icon: ("/illustration/depannage.svg")
    },
    {
      id: 'entretien',
      title: "Entretien & Maintenance",
      shortDesc: "Maintenances périodiques et contrats d'entretien pour augmenter la durée de vie de vos installations et assurer votre sécurité.",
      details: [
        "Entretien annuel obligatoire de votre chaudière (gaz ou fioul) avec attestation d'entretien.",
        "Contrôle de combustion et vérification des dispositifs de sécurité pour prévenir les risques de monoxyde de carbone.",
        "Nettoyage du corps de chauffe et optimisation des réglages pour réduire votre consommation d'énergie.",
        "Purge et vérification de la pression du circuit de chauffage et des vases d'expansion.",
        "Désembouage et traitement des réseaux pour maintenir l'efficacité thermique de vos radiateurs ou planchers chauffants."
      ],
      icon: ("/illustration/entretien.svg")
    }
  ];

  return (
    <section id="prestations" className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 px-4">
          <FocusTitle>
            <h2 className="text-3xl md:text-4xl font-extrabold text-plomb-base  mb-4">
              Nos prestations
            </h2>
          </FocusTitle>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            De l'installation au dépannage d'urgence, l'entreprise Dupuy Longtemps vous garantit un confort thermique et sanitaire optimal sur Bordeaux et sa région, grâce à un savoir-faire technique pointu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`relative cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all duration-500 ease-out overflow-hidden shadow-sm hover:shadow-xl
                ${expandedId === service.id ? 'border-plomb-eau ring-4 ring-plomb-eau/10' : 'border-gray-100 hover:border-plomb-eau/50'}
              `}
            >
              <div className="flex flex-col items-center text-center z-10 relative">

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${expandedId === service.id ? 'bg-plomb-eau/10' : 'bg-gray-50'}
                `}>
                   <img src={service.icon} alt="Icon" className="w-12 h-12" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.shortDesc}
                </p>

                <div className="mt-2 text-plomb-eau font-semibold text-sm flex items-center gap-2">
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
                        <svg className="w-5 h-5 text-plomb-eau mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
