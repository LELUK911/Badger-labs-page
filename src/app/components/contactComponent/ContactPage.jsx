'use client';
import { FaLinkedin, FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <main className="bg-white py-20 px-6 sm:px-10 lg:px-20 text-gray-800">
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-6">Get in Touch</h1>
                <p className="text-lg text-gray-600 mb-10">
                    Ready to bring your idea on-chain? We’d love to hear from you. Drop us a message or connect via the platforms below.
                </p>

                {/* Contacts */}
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
                        To help us better understand your project, please include these details in your message:
                    </h2>

                    <ul className="inline-block text-left text-gray-600 space-y-2 text-base">
                        <li>📌 <strong>Idea:</strong> A brief summary of your concept</li>
                        <li>🧾 <strong>Description:</strong> Key functionalities or technical elements</li>
                        <li>💰 <strong>Estimated Budget:</strong> An indicative range (e.g., $3k–$10k)</li>
                        <li>🕒 <strong>Timeline:</strong> Deadlines or planned milestones</li>
                        <li>🏢 <strong>Use Case:</strong> DeFi, NFT, business tools, etc.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
