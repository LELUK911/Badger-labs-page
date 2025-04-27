import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo.png'

export const HeroSection = () => {
    return (
        <section className="bg-blue-100 lg:grid lg:h-screen lg:place-content-center">
            <div
                className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
            >
                <div className="max-w-prose text-left">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Understand user flow and
                        <strong className="text-blue-600"> increase </strong>
                        conversions
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                        accusamus impedit minima harum corporis iusto.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                            href="#"
                        >
                            Contact us
                        </a>

                    </div>
                </div>

                <Image src={logo} alt="Logo" className="hidden lg:block lg:mt-0 lg:w-full lg:max-w-lg lg:rounded-lg lg:shadow-lg lg:object-cover lg:object-center" width={500} height={500} priority={true} />
            </div>
        </section>

    )
}
