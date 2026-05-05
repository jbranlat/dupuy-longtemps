'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import FocusTitle from '../utils/FocusTitle';

const projects = [
  {
    title: "Climatisation batiment tertiaire",
    location: "Vitrolles",
    category: "Pro",
    image: "/realisation/real1.jpg",
    description: "Nous avons été sollicités pour fournir et installer les systèmes de climatisation d'un bâtiment tertiaire de 3000 m2. Dans le cadre de ce projet, nous avons su prendre en compte les besoins de notre client en lui proposant comme solution technique la mise en place de 3 VRV (Ventilation Réfrigération Variable) traitant chacun un espace de 1000 m2. Chacun des espaces peut ainsi être gérer de façon autonome et à distance."
  },
  {
    title: "Installation gainable et multisplits en appartement",
    location: "Marseille",
    category: "Particulier",
    image: "/realisation/real2.jpg",
    description: "Nous avons travaillé en étroite collaboration avec notre client sur ce projet, pour lui proposer une solution technique pour la climatisation et le chauffage de son appartement alliant design épuré et performance énergétique. Nous avons donc ici opté pour l'installation d'une unité extérieure multisplits de 12 KW permettant de connecter un gainable (partie salon/cuisine) et 3 splits (chambres). Le client peut gérer de façon autonome chacune des pièces de son appartement et peut également démarrer à distance ses appareils grâce au module WIFI."
  },
  {
    title: "installation console monosplit",
    location: "Marseille",
    category: "Particulier",
    image: "/realisation/real3.png",
    description: "Dans le cadre de ce projet, la contrainte technique de notre client était avant tout visuel : ce dernier ne souhaitait pas mettre en place de goulottes apparentes à l'intérieur de son logement ni réaliser des travaux important pour encastrer les liaisons frigoriques et électriques de son installation. Nous lui avons donc proposer la mise en place d'une console de climatisation dont l'installation ne nécessite que la réalisation d'un carottage sur le mur entre l'unité intérieure et extérieure. Le client peut donc bénéficier d'une solution alliant confort d'utilisation et design épuré."
  },
  {
    title: "Installation gainables",
    location: "Marseille",
    category: "Particulier",
    image: "/realisation/real4.png",
    description: "Pour ce projet, notre client souhaitait climatiser une villa de 250 m2 sur plusieurs niveaux sans unité intérieure apparente et en pouvant réguler la température de chaque pièce. Nous lui avons alors proposer la mise en place d'un système de climatisation composé de trois gainables (1 par étage) piloté par un système de zoning pouvant réguler la température de chaque sortie de manière indépendante."
  },
  {
    title: "Installation pompe à chaleur",
    location: "Aubagne",
    category: "Particulier",
    image: "/realisation/real5.png",
    description: "Pour ce projet, notre client a souhaité mettre en place une pompe à chaleur bi-bloc pour gérer le chauffage et la climatisation de sa maison. Il disposait d'un local technique permettant l'installation de tout le matériel nécessaire au bon fonctionnement de sa future installation. Nous avons pu l'accompagner dans toutes les étapes de son projet : de la conception et dimensionnement de son installation, à sa mise en service et son entretien annuel."
  },
  {
    title: "Dépannage système DRV",
    location: "Marseille",
    category: "Tertiaire",
    image: "/realisation/real6.png", 
    description: "Nous avons été sollicités suite à un dysfonctionnement d'une installation de climatisation tertiaire chez l'un de nos clients. Nous avons procédé à un diagnostic de panne conduisant à la présence d'une fuite sur le circuit frigorifique. Nous avons réalisé une mise sous pression d'azote du circuit afin de localiser la fuite. Suite au repérage et à la réparation, nous avons réalisé la recharge en gaz de l'installation et sa remise en service."
  },
  {
    title: "Installation cache climatisation",
    location: "Marseille",
    category: "Copropriété",
    image: "/realisation/real7.png", 
    description: "Dans le cadre de son projet de climatisation, notre client devait respecter les prescriptions faites par le syndicat de copropriété pour l'installation du groupe extérieur sur son balcon. Nous lui avons donc proposé la mise en place d'un cache climatisation pour respecter la demande de son syndicat."
  },
  {
    title: "Fabrication d'un plénum sur mesure",
    location: "Marseille",
    category: "Sur Mesure",
    image: "/realisation/real8.png", 
    description: "Afin de nous adapter aux contraintes techniques du projet de notre client, nous avons réalisé un plénum de soufflage sur mesure à venir installer sur l'unité intérieure de son gainable."
  },
   {
    title: "Installation monosplit",
    location: "Marseille",
    category: "Particulier",
    image: "/realisation/real9.jpg",
    description: "Notre client souhaitait rafraîchir sa pièce de vie principale avec un budget maitrisé et une installation rapide. Nous lui avons donc proposé une solution avec la pose d'un monosplit dans son salon : moins de deux semaines après sa demande, il a pu profiter du confort d'une régulation thermique optimisée à son besoin."
  }
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    skipSnaps: false
  });

  const [activeDescription, setActiveDescription] = useState<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveDescription(null);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="realisations" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <FocusTitle>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Nos Réalisations</h2>
        </FocusTitle>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Cliquez sur une image pour les détails techniques</p>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_40%] px-4 min-w-0"
            >
              <div
                className="relative h-[480px] w-full overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer group"
                onClick={() => setActiveDescription(activeDescription === index ? null : index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                <div className={`absolute bottom-8 left-8 right-8 text-white transition-all duration-300 ${activeDescription === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <span className="text-[10px] font-black bg-clim-palmier px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-70 italic">{project.location}</p>
                </div>
              
                <div
                  className={`absolute inset-0 bg-clim-palmier/95 backdrop-blur-md p-6 md:p-8 flex flex-col justify-start text-white transition-all duration-500 ease-in-out ${activeDescription === index ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-full'
                    }`}
                >

                  <div className="flex items-center gap-3 mb-4 border-b border-white/30 pb-3 flex-shrink-0 mt-2">
                    <Info className="w-6 h-6 flex-shrink-0" />
                    <h4 className="text-lg font-bold tracking-tight">
                      Description du chantier
                    </h4>
                  </div>
                  
                  <div className="overflow-y-auto max-h-[260px] pr-2 custom-scrollbar mb-4">
                    <p className="text-base leading-relaxed font-light opacity-90 italic">
                      {project.description}
                    </p>
                  </div>

                   <button className="mt-6 text-[10px] font-bold uppercase tracking-widest border border-white/50 w-fit px-6 py-2 rounded-full hover:bg-white hover:text-clim-palmier transition-colors flex-shrink-0">
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mt-16">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollPrev
              ? 'border-slate-300 text-slate-900 hover:bg-clim-palmier hover:border-clim-palmier hover:text-white shadow-md'
              : 'border-slate-100 text-slate-200 cursor-not-allowed'
            }`}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollNext
              ? 'border-slate-300 text-slate-900 hover:bg-clim-palmier hover:border-clim-palmier hover:text-white shadow-md'
              : 'border-slate-100 text-slate-200 cursor-not-allowed'
            }`}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
}
