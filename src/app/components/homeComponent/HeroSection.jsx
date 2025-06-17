import Image from 'next/image'
import React from 'react'
import buildfut from '../../../assets/buildFut.png'


export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-sky-100 to-indigo-100 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left: Text */}
                <div className="text-center md:text-left max-w-xl">
                    <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">
                        🔐 Tailored Blockchain Solutions
                    </span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Let’s build the future of <span className="text-indigo-600">applied blockchain</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-700">
                        From DeFi protocols to enterprise-grade applications, we design and build blockchain solutions that solve real-world problems. A trusted tech partner for startups, companies, and visionaries.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start gap-4">
                        <a href="contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold">
                            Contact Us
                        </a>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="w-full max-w-md">
                    <Image src={buildfut} alt="Logo" className="hidden lg:block lg:mt-0 lg:w-full lg:max-w-lg lg:rounded-lg lg:shadow-lg lg:object-cover lg:object-center" width={800} height={800} priority={true} />
                </div>

            </div>
        </section>
    );
}
