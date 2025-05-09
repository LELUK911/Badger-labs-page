'use client';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-white text-gray-800 py-20 px-6 sm:px-10 lg:px-20">
            {/* Titolo */}
            <section className="max-w-5xl mx-auto text-center mb-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    Siamo pionieri della finanza decentralizzata
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                    Badger Labs è una realtà tecnologica specializzata nello sviluppo di soluzioni blockchain
                    e DeFi per aziende, startup e innovatori. Crediamo in un futuro più sicuro, trasparente e decentralizzato.
                </p>
            </section>

            {/* Sezione descrittiva + immagine */}
            <section className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Testo */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa facciamo</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Offriamo soluzioni su misura per ogni tipo di esigenza blockchain:
                        smart contract, applicazioni decentralizzate, sistemi di staking, audit di sicurezza,
                        piattaforme NFT e molto altro. Il nostro approccio combina rigore tecnico, strategia e creatività.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Smart Contract su Ethereum, BSC, Polygon, Arbitrum</li>
                        <li>Sviluppo DeFi: staking, lending, yield farming</li>
                        <li>Soluzioni white-label per aziende Web2 e Web3</li>
                        <li>Audit, security review e hardening di protocolli</li>
                    </ul>
                </div>

                {/* Immagine */}
                <div className="lg:w-1/2">
                    <Image
                        src="/assets/about-section.jpg"
                        alt="Team blockchain"
                        width={700}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* CTA finale */}
            <section className="mt-20 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Hai un progetto blockchain in mente?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                    Contattaci e scopri come possiamo aiutarti a realizzarlo.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
                >
                    Parla con noi
                </a>
            </section>
        </main>
    );
}
