'use client';
import { FaSearch, FaCogs, FaPencilRuler, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function ProcessSection() {
    const steps = [
        {
            title: '1. Discovery & Analysis',
            icon: <FaSearch className="text-indigo-600 text-2xl mb-4" />,
            desc: 'We explore client needs and define goals, scope, and technical specifications together.',
        },
        {
            title: '2. Architecture & Design',
            icon: <FaPencilRuler className="text-indigo-600 text-2xl mb-4" />,
            desc: 'We design the protocol or application structure, including smart contract logic and user interface.',
        },
        {
            title: '3. Development',
            icon: <FaCogs className="text-indigo-600 text-2xl mb-4" />,
            desc: 'We build the entire stack — smart contracts, backend, and frontend — in a modular and secure way.',
        },
        {
            title: '4. Testing & Audit',
            icon: <FaCheckCircle className="text-indigo-600 text-2xl mb-4" />,
            desc: 'We run automated/manual tests and conduct code reviews to ensure security and functionality.',
        },
        {
            title: '5. Deployment & Support',
            icon: <FaRocket className="text-indigo-600 text-2xl mb-4" />,
            desc: 'We deploy on mainnets or private chains and offer post-launch technical support as needed.',
        },
    ];


    return (
        <section className="bg-gray-100 py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">Come lavoriamo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <div className="flex flex-col items-start">
                                {step.icon}
                                <h3 className="text-xl  text-gray-800 font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
