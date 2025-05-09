'use client'; // Next.js 13+ app router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import logo from '../../../assets/logo.png';
import Image from 'next/image';

const works = [
    {
        title: 'Iron Badger Brotherhood',
        description: `DeFi ecosystem for the Badger Brotherhood, composed of 4 financial protocols:
    Iron Pact, Iron Forge, Iron Rise, Iron Fall.
    And Badger Labs working on future innovation of the ecosystem.`,
        image: logo,
        link: 'https://www.iron-badger-brotherhood.xyz/',
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
