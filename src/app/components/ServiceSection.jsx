import React from 'react'
import Image from 'next/image'


export const ServiceSection = (
    {
        title,
        description ,
        image,
    }
) => {
    return (
        <section className=" flex items-center justify-center bg-blue-100 py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="space-y-4 md:space-y-8">
                    <div className="flex-col max-w-xl space-y-2">
                        <h2 className="text-4xl text-center font-semibold text-gray-900 sm:text-4xl">
                        {title}
                        </h2>

                        <p className="mt-4 text-gray-700 text-lg text-justify">
                            {description} 
                        </p>
                    </div>

                    <Image
                        width={600}
                        height={100}
                        src={image}
                        className="rounded"
                        alt=""
                    />
                </div>
            </div>
        </section>

    )
}
