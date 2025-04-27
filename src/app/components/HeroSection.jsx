import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo.png'

export const HeroSection = () => {
    return (
        <section className="bg-blue-100 py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h1 className="text-5xl font-semibold text-gray-900 sm:text-5xl">
                                Badger Labs Defi & BlockChain solution.
                            </h1>

                            <p className="mt-4 text-gray-700 text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                sequi.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image
                            width={1200}
                            height={800}
                            priority
                            src={logo}
                            alt=""
                             className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
