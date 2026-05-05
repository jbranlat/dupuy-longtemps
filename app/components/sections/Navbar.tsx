'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Prestations', href: '/#prestations' },
        { name: 'Réalisations', href: '/#realisations' },
        { name: 'Contact & Devis', href: '/#contact' },
    ];

    return (
        <>
            {/* 1. LE BOUTON BURGER ORIGINAL (Mobile uniquement : md:hidden) */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-6 right-6 z-[60] p-3 rounded-full transition-all duration-300 group
    bg-plomb-dark/60 backdrop-blur-md border border-white/10 hover:border-plomb-eau/50 
    hover:scale-110 active:scale-95 shadow-xl shadow-black/20"
                aria-label="Ouvrir le menu"
            >

                <Menu
                    size={24}
                    className="text-white transition-colors group-hover:text-plomb-eau"
                />
            </button>

            {/* 2. LA BARRE DE NAVIGATION (Ordinateur uniquement : hidden md:block) */}
            <nav
                className={`hidden md:block fixed top-0 left-0 w-full z-[50] transition-all duration-500 ease-in-out 
          bg-plomb-dark/20 backdrop-blur-md border-b border-white/10 ${scrolled ? 'py-2' : 'py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* LOGO Desktop */}
                    <a
                        href="/"
                        className={`relative transition-all duration-500 ${scrolled ? 'w-36 h-12' : 'w-56 h-20'
                            }`}
                    >
                        <Image
                            src="/logo/Logo.png"
                            alt="Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain object-left"
                            priority
                        />
                    </a>

                    {/* MENU Desktop */}
                    <div className="flex items-center gap-10">
                        {menuLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:text-plomb-eau transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-slate-950 z-[80] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex justify-between items-center p-6 border-b border-white/5">
                    <span className="font-bold text-clim-neon uppercase tracking-widest text-xs">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-clim-neon transition-colors">
                        <X size={28} />
                    </button>
                </div>

                <nav className="p-8 flex flex-col gap-8">
                    {menuLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-gray-300 hover:text-white hover:translate-x-2 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}