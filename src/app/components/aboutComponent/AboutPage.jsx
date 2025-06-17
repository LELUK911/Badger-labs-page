'use client';
import Image from 'next/image';
import imgteam from '../../../assets/team.png'

export default function AboutPage() {
    return (
        <main className="bg-white text-gray-800 py-20 px-6 sm:px-10 lg:px-20">
            {/* Title */}
            <section className="max-w-5xl mx-auto text-center mb-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    We build blockchain innovation, one project at a time
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                    Badger Labs is an Estonian startup developing tailored blockchain and DeFi solutions for individuals,
                    startups, and enterprises. We combine technology, security, and creativity to deliver decentralized
                    products that are robust and scalable.
                </p>
            </section>

            {/* Descriptive Section + Image */}
            <section className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        From planning to deployment, we guide our clients through the full development lifecycle.
                        We build smart contracts, front-end interfaces for DApps, DeFi platforms, NFT tools, and
                        custom solutions for both public and private sectors. Our work blends solid architecture,
                        secure code, and a strong focus on results.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Smart Contracts on Ethereum, Polygon, Arbitrum, BSC</li>
                        <li>Custom DeFi protocols: staking, lending, yield farming</li>
                        <li>Fast, responsive front-end development for DApps</li>
                        <li>Tokenization and NFT platforms</li>
                        <li>Web2 → Web3 integration for traditional businesses</li>
                    </ul>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                    <Image
                        src={imgteam}
                        alt="Blockchain team"
                        width={700}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* Final CTA */}
            <section className="mt-20 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Got an idea that could reshape your industry?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                    Tell us about your project — we’ll help you bring it on-chain.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
                >
                    Let’s talk
                </a>
            </section>
        </main>
    );
}
