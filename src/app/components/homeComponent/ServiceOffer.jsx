'use client';

import React from 'react';
import {
    ShieldCheckIcon,
    DocumentTextIcon,
    BanknotesIcon,
    RocketLaunchIcon,
    Cog6ToothIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline';

const services = [
    {
      title: 'Smart Contract Development',
      description: 'We design and implement secure, optimized, and audit-ready smart contracts on Ethereum, Polygon, BSC, and other networks.',
      icon: DocumentTextIcon,
    },
    {
      title: 'Custom DeFi Platforms',
      description: 'From staking to lending, we develop tailored DeFi solutions designed to fit any business model or technical requirement.',
      icon: BanknotesIcon,
    },
    {
      title: 'Enterprise Blockchain Consulting',
      description: 'We help startups and companies integrate blockchain into their strategy with scalable and future-proof solutions.',
      icon: Cog6ToothIcon,
    },
    {
      title: 'Smart Contract Review & Debugging',
      description: 'We perform functional reviews of smart contracts, help detect common issues, and assist with optimization and bug fixing before audits.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Mainnet Deployments & Network Setup',
      description: 'We handle smart contract deployments on Ethereum, BSC, Arbitrum, and other chains — with verification and explorer integration support.',
      icon: RocketLaunchIcon,
    },
    {
      title: 'Frontend Development for Web3 Apps',
      description: 'We build responsive, high-performance user interfaces for dApps — with wallet integration and seamless contract interaction.',
      icon: CodeBracketIcon,
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
