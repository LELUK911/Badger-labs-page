'use client';
import { FaLinkedin, FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <main className="bg-white py-20 px-6 sm:px-10 lg:px-20 text-gray-800">
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-6">Contattaci</h1>
                <p className="text-lg text-gray-600 mb-10">
                    Sei pronto a portare la tua idea sulla blockchain? Siamo felici di ascoltarti.
                    Scrivici o connettiti con noi tramite i canali qui sotto.
                </p>

                {/* Contatti */}
                <div className="space-y-6 text-center">
                    <div className="flex justify-center items-center space-x-3">
                        <FaEnvelope className="text-indigo-600 text-xl" />
                        <span className="text-gray-700 text-lg">info@badgerlabs.xyz</span>
                    </div>

                    <div className="flex justify-center gap-6 text-gray-600 text-xl mt-6">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600 transition">
                            <FaGithub />
                        </a>
                        <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-indigo-600 transition">
                            <FaTelegramPlane />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Per aiutarci a valutare il tuo progetto più velocemente, includi queste informazioni nella tua mail:
                    </h2>

                    <ul className="inline-block text-left text-gray-600 space-y-2 text-base">
                        <li>📌 <strong>Idea:</strong> di cosa si tratta in breve?</li>
                        <li>🧾 <strong>Descrizione:</strong> qualche dettaglio funzionale/tecnico</li>
                        <li>💰 <strong>Budget stimato:</strong> range indicativo (es. 3k–10k)</li>
                        <li>🕒 <strong>Tempistiche:</strong> deadline o roadmap prevista</li>
                        <li>🏢 <strong>Campo di applicazione:</strong> DeFi, NFT, tool interno, ecc.</li>
                    </ul>
                </div>

            </section>
        </main>
    );
}
