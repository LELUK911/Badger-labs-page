import Image from 'next/image';
import React from 'react';
import logo from '../../../assets/logo.png'
export const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-indigo-600 dark:text-indigo-400">
                    <Image src={logo} alt='Logo' width={90} height={90}/>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
                    Custom DeFi and blockchain solutions for the next generation of digital finance.
                    We help individuals and businesses launch decentralized apps and protocols.
                </p>

                <p className="text-xs text-gray-500 text-center mt-8">
                    Badger Labs OÜ – Registry Code: 12345678 – Tartu mnt 80, 10112 Tallinn, Estonia
                    <br />
                    Email: info@yourcompany.com
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a href="/about" className="text-gray-700 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#contatti" className="text-gray-700 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="https://twitter.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 transition"
                        >
                            <span className="sr-only">Twitter</span>
                            {/* Twitter SVG */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/LELUK911"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 transition"
                        >
                            <span className="sr-only">GitHub</span>
                            {/* GitHub SVG */}
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
