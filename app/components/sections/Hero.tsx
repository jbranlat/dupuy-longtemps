'use client';

import Image from 'next/image';

const partners = [
    {
        name: "Daikin",
        logo: "/logo/daikin.png",
        url: "https://www.daikin.fr"
    },
    {
        name: "Mitsubishi Electric",
        logo: "/logo/mitsubishi.png",
        url: "https://confort.mitsubishielectric.fr"
    },
    {
        name: "Heiwa",
        logo: "/logo/heiwa-bg.png",
        url: "https://www.heiwa-france.com"
    },
];

export default function Hero() {

    const scrollingPartners = [...partners, ...partners, ...partners];

    return (
        <section className="relative min-h-[90vh] bg-white w-full overflow-hidden flex flex-col">
            {/* Image de droite ajustée */}
            <div className="absolute top-100 right-10 top-1/2 -translate-y-1/2 w-1/3 h-[60%] hidden lg:block">
                <div className="relative w-full h-full">
                    {/* Halo lumineux en fond */}
                    <div className="absolute inset-0 bg-plomb-light/30 rounded-[2rem] blur-3xl" />
                    
                    <Image
                        src="/illustration/hero-plomb.png"
                        alt="Expert Plombier"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover z-10 rounded-[2rem] shadow-2xl animate-in fade-in zoom-in duration-1000"
                        priority
                    />
                </div>
            </div>
            <div className="relative z-10 container mx-auto px-6 flex-1 flex flex-col pt-6 md:pt-40 pb-12">

                <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-5 duration-1000 mb-16">
                    <div className="mb-10 relative w-40 h-20 md:w-56 md:h-28 md:hidden">
                        <Image
                            src="/logo/Logo.png"
                            alt="Logo Entreprise"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    <span className="hidden md:inline-block px-4 py-1 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-plomb-eau/60 rounded-full">
                        Plombier chauffagiste sur Bordeaux et sa région
                    </span>

                    <span className="md:hidden inline-block px-4 py-1 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-plomb-eau/60 rounded-full">
                        Plombier chauffagiste
                    </span>
                   <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-plomb-base leading-[1.1] mb-6 tracking-tight">
                       Installation, Dépannage
                    <span className="block text-plomb-eau mt-2">
                        & Entretien Sanitaire
                    </span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-800 mb-10 max-w-lg leading-relaxed">
                      Une fuite d'eau, un chauffe-eau en panne ou un projet de rénovation de salle de bain ? Nous intervenons rapidement pour garantir la pérennité de vos installations et votre confort quotidien.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pb-12 sm:border-none sm:pb-0">
                        <a href="#contact"
                            className="px-8 py-4 bg-plomb-eau hover:bg-plomb-base text-white font-semibold rounded-lg transition-all text-center"
                        >
                            Demander un devis
                        </a>
                        <a href="#realisations"
                            className="px-8 py-4 bg-plomb-eau/50 hover:bg-plomb-base/50 text-white font-semibold backdrop-blur-md rounded-lg border border-white/20 transition-all text-center"
                        >
                            Voir nos réalisations
                        </a>
                    </div>
                </div>

              {/*  <div className="w-full mt-20">
                    <div className="w-full max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl py-8 overflow-hidden">
                        <p className="text-center text-[10px] font-bold text-plomb-eau uppercase tracking-[0.3em] mb-8 opacity-80">
                            Installateur Agréé & Partenaires Officiels
                        </p>


                        <div className="relative w-full overflow-hidden">
                            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#121c1a]/20 to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#121c1a]/20 to-transparent pointer-events-none" />

                            <div className="animate-scroll flex items-center gap-16 md:gap-32 px-4">
                                {scrollingPartners.map((partner, index) => (
                                    <a
                                        key={`${partner.name}-${index}`}
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative w-28 h-8 md:w-40 md:h-12 flex-shrink-0 transition-transform hover:scale-110 active:scale-95 cursor-pointer block"
                                        title={`Visiter le site officiel de ${partner.name}`}
                                    >
                                        <Image
                                            src={partner.logo}
                                            alt={`Logo ${partner.name}`}
                                            fill
                                            className="object-contain brightness-110 contrast-125 hover:brightness-125 transition-all"
                                            sizes="(max-width: 768px) 112px, 160px"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </section>
    );
}
