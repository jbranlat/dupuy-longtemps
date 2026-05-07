'use client';
import { useState } from 'react';
import { Clock, MapPin, Phone, Send, Loader2 } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    // On construit l'objet pour qu'il soit clair pour l'API
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
        service: formData.get('service'),
        message: formData.get('message'),
    };

    try {
        // VERIFIE BIEN LE CHEMIN ICI (doit correspondre au dossier dans /api)
        const response = await fetch('/api/contact', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setStatus('success');
            (e.target as HTMLFormElement).reset();
            
            // Optionnel : Reset le message de succès après 5 secondes
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
        }
    } catch (error) {
        console.error("Erreur formulaire:", error);
        setStatus('error');
    }
}

    return (
        <section id="contact" className="py-24 bg-plomb-base text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Besoin de <span className="text-plomb-eau">nous contacter?</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-md">
                            Nous intervenons rapidement à Bordeaux et dans ses alentours pour vos différents projets ou vos urgences.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-white group-hover:bg-plomb-eau group-hover:text-white transition-all shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-slate-200 uppercase tracking-widest font-bold mb-1">Téléphones</p>
                                    <a href="tel:+33668973086" className="text-xl font-bold hover:text-plomb-eau transition-colors leading-tight">06 68 97 30 86</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-white group-hover:bg-plomb-eau group-hover:text-white transition-all shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-slate-200 uppercase tracking-widest font-bold mb-1">Adresse</p>
                                    <address className="not-italic text-xl font-bold leading-tight">13 Avenue Jean Bart<br />33600 PESSAC</address>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-white group-hover:bg-plomb-eau group-hover:text-white transition-all shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-slate-200 uppercase tracking-widest font-bold mb-1">Horaires d'ouverture</p>
                                    <div className="text-lg font-bold leading-tight space-y-1">
                                        <p>Lun - Ven : <span className="text-plomb-eau">08:00 – 18:00</span></p>
                                        <p className="text-slate-200 font-medium text-base">Samedi - Dimanche : Fermé</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite : Formulaire */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Nom Prénom</label>
                                    <input name="name" type="text" required className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Téléphone</label>
                                    <input name="phone" type="tel" required className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Adresse E-mail</label>
                                <input name="email" type="email" required className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Adresse Postale</label>
                                <input name="address" type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Type de demande</label>
                                <select name="service" className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all appearance-none cursor-pointer">
                                    <option value="Installation">Installation</option>
                                    <option value="Dépannage">Dépannage / Réparation</option>
                                    <option value="Entretien">Entretien annuel</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                <textarea name="message" rows={4} placeholder="Décrivez votre projet..." className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-plomb-base outline-none transition-all resize-none"></textarea>
                            </div>

                            <button 
                                disabled={status === 'loading'}
                                className="w-full bg-plomb-eau text-white py-5 rounded-2xl font-bold text-lg hover:bg-plomb-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Envoyer ma demande'} <Send size={20} />
                            </button>

                            {status === 'success' && <p className="text-green-600 font-bold text-center">Message envoyé ! Nous vous rappelons rapidement.</p>}
                            {status === 'error' && <p className="text-red-600 font-bold text-center">Erreur lors de l'envoi. Appelez-nous directement.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
