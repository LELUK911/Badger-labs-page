'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Luciano L.',
        role: 'Founder @ SusuLuk OÜ',
        photo: '/images/luciano.jpg',
        quote: `I created SusuLuk OÜ to bring real, technical value into the blockchain space — not just hype. Our work on Iron Badger Brotherhood proves how independent builders can launch robust DeFi ecosystems with clean UX and solid infrastructure. I believe in code, community, and long-term vision.`,
    }
    ,
    {
        name: 'Elena G.',
        role: 'Blockchain Product Manager',
        photo: '/images/elena.jpg',
        quote: `We reached out to Badger Labs for support with our token strategy and smart contract integration. The collaboration was smooth and efficient clear communication, fast iterations, and a solid technical base. They understood both our product goals and the technical nuances.`,
    }
    ,
    {
        name: 'Victor M.',
        role: 'Founder @ LIQ Protocol',
        photo: '/images/victor.jpg', 
        quote: `Working with Luciano on the LIQ Vault was a game-changer for our project. He translated complex contract logic from Vyper to Solidity with precision and offered great advice on structure, strategy, and security. I was particularly impressed by his attention to testnet deployment and UX details. A reliable and smart developer with true DeFi expertise.`,
    }
    
];

const TestimonialsSection = () => {
    return (
        <section className="bg-blue-100 py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    What our customers say
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
