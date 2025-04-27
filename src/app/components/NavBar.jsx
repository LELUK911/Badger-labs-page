import React from 'react'
import Image from 'next/image';
import logo from '../../assets/logo.png'

export const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
            <div className='text-2xl font-bold'>
                <Image src={logo} alt="Logo" width={120} height={40} /> {/* ✅ usi Image */}
            </div>
            <nav className='flex space-x-6 font-semibold text-2xl'>
                <a href="/" className='hover:text-gray-400'>Home</a>
                <a href="/about" className='hover:text-gray-400'>About</a>
                <a href="/contact" className='hover:text-gray-400'>Contact</a>
            </nav>
        </div>
    )
}
