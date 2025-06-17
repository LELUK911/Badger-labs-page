'use client'; // Next.js 13+ app router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import stiki from '../../../assets/stiki.png';
import erc20Log from '../../../assets/erc20generator.png';
import liq from '../../../assets/liq.png';
import ironLogo from '../../../assets/IronLogo.png';

import Image from 'next/image';

const works = [
    {
        title: 'Iron Badger Brotherhood',
        description: `A comprehensive DeFi ecosystem composed of four integrated financial protocols: Iron Pact, Iron Forge, Iron Rise, and Iron Fall. Built and maintained by Badger Labs to drive innovation in decentralized finance.`,
        image: ironLogo,
        link: 'https://www.iron-badger-brotherhood.xyz/',
        stack: ['Solidity', 'Hardhat', 'React.js', 'Tailwind', 'IPFS', 'SKALE', 'OpenZeppelin', 'Ethers.js', 'Wagmi', 'RainbowKit'],
    },
    {
        title: 'LIQ Protocol',
        description: `An advanced DeFi staking and yield strategy protocol built on Yearn V2 contracts, deployed on Mantle. It focuses on optimizing liquidity allocation and returns through automated lending strategies.`,
        image: liq,
        link: 'https://stakeliq.xyz/',
        stack: ['Solidity', 'Foundry', 'Mantle', 'OpenZeppelin', 'YearnV2'],
    },
    {
        title: 'ERC20 Token Generator',
        description: `An open-source tool to easily generate ERC20 tokens with customizable features such as minting, burning, and capped supply. Designed to accelerate tokenization for DeFi projects and early-stage startups.`,
        image: erc20Log,
        link: 'https://github.com/LELUK911/GeneratorTokenERC20',
        stack: ['Solidity', 'Truffle', 'OpenZeppelin', 'Moralis'],
    },
    {
        title: 'StikiEco',
        description: `A blockchain-based NFT battle game built on ERC-1155, where characters evolve and compete. Battle outcomes are determined by stats and Chainlink-powered randomness, mixing skill with chance.`,
        image: stiki,
        link: 'https://github.com/LELUK911/StikiEco',
        stack: ['Solidity', 'Truffle', 'ERC-1155', 'OpenZeppelin', 'Chainlink', 'Moralis'],
    },
];


export const WorkCarousel = () => {
    return (
        <section className="bg-blue-100 py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 mb-12 text-center uppercase tracking-wide">
                    Our Principal Works
                </h2>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white/5 backdrop-blur-md border border-gray-600 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition duration-300">
                                <div className="relative w-full h-48 mb-6">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{work.title}</h3>
                                    <p className="text-gray-900 text-lg leading-relaxed mb-6 text-justify">{work.description}</p>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Stak use</h4>
                                    <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs text-gray-600 mb-4">
                                        {work.stack?.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-200 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {work.link && (
                                        <a
                                            href={work.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-black font-semibold rounded-full hover:from-gray-600 hover:to-blue-600 transition"
                                        >
                                            Visit Project
                                        </a>
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
