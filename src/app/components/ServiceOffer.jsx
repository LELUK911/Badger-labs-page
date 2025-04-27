'use client';

import React from 'react';

const services = [
    {
        title: 'Sviluppo Smart Contract',
        description: 'Progettiamo e implementiamo smart contract sicuri, ottimizzati e audit-ready su Ethereum, Polygon, BSC e altri network.',
    },
    {
        title: 'Creazione di piattaforme DeFi',
        description: 'Dallo staking al lending, sviluppiamo soluzioni DeFi su misura per ogni esigenza di business.',
    },
    {
        title: 'Consulenza Blockchain per Aziende',
        description: 'Supportiamo startup e imprese nell\'integrare tecnologie blockchain con strategie scalabili e sostenibili.',
    },
    {
        title: 'Audit e Sicurezza Smart Contract',
        description: 'Analisi di sicurezza su contratti esistenti o nuovi, con report dettagliati e supporto al fixing delle vulnerabilità.',
    },
    {
        title: 'Deploy su Blockchain Private e Publiche',
        description: 'Ti aiutiamo a creare la tua blockchain privata o a deployare su Ethereum, BSC, Arbitrum, Avalanche e altri L1.',
    },
];

export const ServicesOffer = () => {
    return (
        <section className="bg-blue-100 py-20"> {/* 👈 Modificato qui */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                    I nostri servizi
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
