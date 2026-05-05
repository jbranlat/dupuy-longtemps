'use client';

import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-plomb-dark border-t border-white/5 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

                    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                        <div className="hidden md:block relative h-32 md:h-20 aspect-[1]">
                            <Image
                                src="/logo/Logo.png"
                                alt="Dupuy Longtemps"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="hidden md:block text-gray-400 text-[13px] md:ml-4 md:pl-4 py-1 max-w-[400px] leading-tight">
                            Plombier, chauffagiste depuis 3 générations. <br />Dépannage et entretien chaudière gaz. <br />Création de salle de bain projet clé en main                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-[13px]">
                        <a href="/mentions-legales" className="text-gray-400 hover:text-clim-neon transition-colors">
                            Mentions Légales
                        </a>
                        <a href="/confidentialite" className="text-gray-400 hover:text-clim-neon transition-colors">
                            Confidentialité
                        </a>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-gray-300 uppercase tracking-[0.3em]">
                    <p>© {currentYear} DUPUY LONTEMPS</p>
                    <p>Hébergé par Prolinc</p>
                </div>

            </div>
        </footer>
    );
}