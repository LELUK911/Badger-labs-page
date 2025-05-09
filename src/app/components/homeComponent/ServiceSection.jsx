'use client';
import React from 'react';
import Image from 'next/image';

export const ServiceSection = ({ title, description, image, reverse = false }) => {
    return (
        <section className="flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>

                    {/* TEXT */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            {description}
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="lg:w-1/2">
                        <div className="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 duration-300">
                            <Image
                                width={600}
                                height={400}
                                src={image}
                                alt={title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
