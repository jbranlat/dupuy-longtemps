'use client';

import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-clim-base border-t border-white/5 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

                    <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                        <div className="hidden md:block relative h-16 md:h-20 aspect-[1]">
                            <Image
                                src="/logo/LogoDSGclim2.png"
                                alt="DSG CLIM 13"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="hidden md:block text-gray-400 text-[13px] md:ml-4 md:pl-4 py-1 max-w-[400px] leading-tight">
                            Expert en solutions de climatisation et chauffage à Marseille. <br /> Installation, entretien et dépannage rapide  <br />pour particuliers et professionnels
                        </p>
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
                    <p>© {currentYear} DSG CLIM 13</p>
                    <p>Hébergé par Prolinc</p>
                </div>

            </div>
        </footer>
    );
}