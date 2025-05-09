'use client';

import React from 'react';
import {
    ShieldCheckIcon,
    DocumentTextIcon,
    BanknotesIcon,
    RocketLaunchIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const services = [
    {
        title: 'Sviluppo Smart Contract',
        description: 'Progettiamo e implementiamo smart contract sicuri, ottimizzati e audit-ready su Ethereum, Polygon, BSC e altri network.',
        icon: DocumentTextIcon,
    },
    {
        title: 'Creazione di piattaforme DeFi',
        description: 'Dallo staking al lending, sviluppiamo soluzioni DeFi su misura per ogni esigenza di business.',
        icon: BanknotesIcon,
    },
    {
        title: 'Consulenza Blockchain per Aziende',
        description: 'Supportiamo startup e imprese nell\'integrare tecnologie blockchain con strategie scalabili e sostenibili.',
        icon: Cog6ToothIcon,
    },
    {
        title: 'Audit e Sicurezza Smart Contract',
        description: 'Analisi di sicurezza su contratti esistenti o nuovi, con report dettagliati e supporto al fixing delle vulnerabilità.',
        icon: ShieldCheckIcon,
    },
    {
        title: 'Deploy su Blockchain Private e Publiche',
        description: 'Ti aiutiamo a creare la tua blockchain privata o a deployare su Ethereum, BSC, Arbitrum, Avalanche e altri L1.',
        icon: RocketLaunchIcon,
    },
];

export const ServicesOffer = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-14 text-center">
                    I nostri servizi
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition duration-300 group"
                        >
                            <service.icon className="w-10 h-10 text-indigo-600 mb-5 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
