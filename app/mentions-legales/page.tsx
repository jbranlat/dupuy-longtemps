'use client';

import Footer from "../components/sections/Footer";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen flex flex-col bg-white pt-20 md:pt-40">
            <div className="container mx-auto px-6 flex-grow pb-20">

                <div className="max-w-3xl mb-16 mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                        Mentions <span className="text-plomb-base uppercase">Légales</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.
                    </p>
                </div>

                <div className="flex flex-col gap-8 max-w-5xl mx-auto">

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            1. Éditeur du site
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm text-slate-600">
                            <p>Le présent site est édité par l'entreprise <strong className="text-slate-900 uppercase text-xs">DUPUY LONGTEMPS</strong></p>
                            <p><strong className="text-slate-900 uppercase text-xs">Forme Juridique : </strong>Société à responsabilité limitée (SARL)</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Capital social : </strong> 100 EUR </p>
                            <p><strong className="text-slate-900 uppercase text-xs">Siège Social : </strong>13 AVENUE JEAN BART, 33600 PESSAC, FRANCE</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Numéro SIREN : </strong>948 762 547</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Numéro SIRET (siège) :</strong>948 762 547 00024</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Activité principale : </strong>Travaux de plomberie, chauffage, assainissement </p>
                            <p><strong className="text-slate-900 uppercase text-xs">Code APE :</strong>4322A - Travaux d'installation d'eau et de gaz en tous locaux</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Code APRM :</strong>43.22A-Z - Travaux d'installation d'eau et de gaz en tous locaux</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Immatriculation :</strong> Entreprise immatriculée au Registre National des Entreprises (RNE) depuis le 22/02/2023 au titre d'une activité artisanale règlementée.</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Téléphone :</strong> 06 68 97 30 86</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Adresse e-mail :</strong> gabriel.dupuy@gmail.com </p>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">2. Directeur de la publication </h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm text-slate-600">
                            <p><strong className="text-slate-900 uppercase text-xs">Directeur de la publication : </strong>GABRIEL DUPUY</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Qualité : </strong>Gérant </p>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">3. Création et gestion du site</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm text-slate-600">
                            <p>La création, la maintenance technique et la gestion du site internet sont assurées par :</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Nom : </strong>Prolinc</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Site web : </strong>https://www.prolinc.fr/</p>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">4. Hébergement</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm text-slate-600">
                            <p>Le site est hébergé par la société <strong className="text-slate-900 uppercase text-xs">OVH.</strong></p>
                            <p><strong className="text-slate-900 uppercase text-xs">Dénomination sociale : </strong>POVH SAS</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Adresse du siège social : </strong>2 rue Kellermann - 59100 Roubaix - France</p>
                            <p><strong className="text-slate-900 uppercase text-xs">Site web : </strong>www.ovh.com</p>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Propriété intellectuelle</h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                            documents téléchargeables et les représentations iconographiques et photographiques. La
                            reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                            formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Protection des données personnelles (RGPD)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm text-slate-600">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                L'entreprise <strong className="text-slate-900 uppercase text-xs">DUPUY LONGTEMPS</strong> s'engage à ce que la collecte et le traitement de vos données, effectués à partir du présent site, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Il est par ailleurs rappelé que, conformément à l'article 21 du règlement européen 2016/679 (RGPD) et à l'article R. 123-320 du code de commerce, le déclarant de l'entreprise s'est opposé à la mise à disposition de ses propres données à des fins de prospection.
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles gérés par notre entreprise, vous pouvez nous contacter à : [Insérer l'adresse email de contact RGPD].
                            </p>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">7. Médiation de la consommation</h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation. En cas de litige, vous pouvez déposer votre réclamation auprès de notre médiateur de la consommation
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
