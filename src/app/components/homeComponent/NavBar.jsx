// src/components/NavBar.jsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={logo} alt="Logo Badger Labs" width={120} height={40} priority />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-lg font-semibold">
                    <a href="/" className="hover:text-indigo-400 transition">Home</a>
                    <p className="hover:text-indigo-400 transition">
                        <Link href="/about">
                            About
                        </Link>
                    </p>
                    <p className="hover:text-indigo-400 transition">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </p>
                </nav>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <XMarkIcon className="w-8 h-8 text-white" />
                        ) : (
                            <Bars3Icon className="w-8 h-8 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white px-6 pb-4 space-y-3">
                    <a href="/" className="block text-lg hover:text-indigo-300">Home</a>
                    <a href="/about" className="block text-lg hover:text-indigo-300">Chi Siamo</a>
                    <a href="/contact" className="block text-lg hover:text-indigo-300">Contatti</a>
                </div>
            )}
        </header>
    );
};
