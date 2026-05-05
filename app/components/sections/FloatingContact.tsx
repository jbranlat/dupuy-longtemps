'use client';

import { Phone, Mail } from 'lucide-react';

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-row gap-4 items-center">

            <a
                href="tel:+33620746889"
                className="group flex items-center justify-center w-14 h-14 bg-clim-neon text-clim-base rounded-full 
          shadow-[0_0_20px_rgba(116,215,29,0.3)] opacity-80 hover:opacity-100 hover:scale-110 
          active:scale-95 transition-all duration-300"
                title="Appeler DSG CLIM 13"
            >
                <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
            </a>
            <a
                href="/#contact"
                className="group flex items-center justify-center w-14 h-14 bg-clim-palmier text-white rounded-full 
            shadow-2xl border border-white/10 opacity-80 hover:opacity-100 hover:scale-110 
          active:scale-95 transition-all duration-300"
                title="Formulaire de contact"
            >
                <Mail size={24} className="group-hover:-translate-y-1 transition-transform" />
            </a>

        </div>
    );
}