'use client';

import React from 'react';
import Footer from "../components/sections/Footer";

export default function Confidentialite() {
    return (
        <main className="min-h-screen flex flex-col bg-white pt-20 md:pt-40">
            <div className="container mx-auto px-6 flex-grow pb-20">

                {/* En-tête de la page */}
                <div className="max-w-3xl mb-16 mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                        Politique de <span className="text-plomb-base uppercase">Confidentialité</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto italic">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>

                <div className="flex flex-col gap-8 max-w-5xl mx-auto">

                    {/* 1. Introduction */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            1. Introduction
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            L'entreprise <strong className="text-slate-900 uppercase text-xs">DUPUY LONGTEMPS</strong> accorde une importance capitale à la protection de votre vie privée. Cette politique a pour but de vous informer sur la manière dont nous traitons vos données personnelles lors de votre visite sur notre site.
                        </p>
                    </section>

                    {/* 2. Collecte des données */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            2. Collecte des données
                        </h2>
                        <div className="text-sm text-slate-600 space-y-4">
                            <p>Nous collectons les informations que vous nous transmettez directement via notre formulaire de contact :</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-slate-900 text-xs uppercase">Identité :</strong> Nom et Prénom</li>
                                <li><strong className="text-slate-900 text-xs uppercase">Coordonnées :</strong> Adresse email et Numéro de téléphone</li>
                                <li><strong className="text-slate-900 text-xs uppercase">Projet :</strong> Informations relatives à votre demande de climatisation</li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. Finalités du traitement */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            3. Utilisation de vos données
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            Vos données personnelles sont traitées pour les raisons suivantes :
                        </p>
                        <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                            <p>• Répondre à vos demandes de devis ou d'information.</p>
                            <p>• Organiser les rendez-vous d'installation ou de maintenance.</p>
                            <p>• Assurer le suivi de la relation client.</p>
                        </div>
                    </section>

                    {/* 4. Durée de conservation */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            4. Durée de conservation
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Les données sont conservées pendant toute la durée de la relation contractuelle. En l'absence de contrat, vos données sont conservées pour une durée maximale de <strong className="text-slate-900">3 ans</strong> à compter de votre dernier contact avec nous.
                        </p>
                    </section>

                    {/* 5. Vos Droits (RGPD) */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Vos droits Informatique et Libertés</h2>
                        <div className="text-sm text-slate-600 space-y-4">
                            <p>
                                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données.
                            </p>
                            <p>
                                Pour exercer ces droits, vous pouvez nous contacter à tout moment par email : <strong className="text-slate-900">gabriel.dupuy@gmail.com</strong>
                            </p>
                        </div>
                    </section>

                    {/* 6. Cookies et Sécurité */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">6. Sécurité et Cookies</h2>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Ce site n'utilise pas de cookies de traçage publicitaire. Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être déposés.
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}