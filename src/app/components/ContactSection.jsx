'use client';

import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const ContactSection = () => {
    return (
        <section id="contatti" className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                    Contact Us
                </h2>

                <p className="text-gray-600 mb-8">
                    Interested in collaboration, consulting, or learning more about our services? Feel free to get in touch via email or LinkedIn.
                </p>

                <div className="flex flex-col items-center space-y-6">
                    <a
                        href="mailto:luciano.dinoia91@proton.me"
                        className="flex items-center space-x-2 text-blue-600 hover:underline text-lg"
                    >
                        <FaEnvelope className="text-2xl" />
                        <span>luciano.dinoia91@proton.me</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/luciano-dinoia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:underline text-lg"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span>LinkedIn</span>
                    </a>
                </div>

                <div className="mt-12">
                    <a
                        href="mailto:info@yourcompany.com"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        Send us an Email
                    </a>
                </div>
            </div>
        </section>
    );
};
