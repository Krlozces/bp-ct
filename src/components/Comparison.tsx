"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { useState } from "react";
import { FaCheck, FaTimes, FaStar } from "react-icons/fa";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const plans = [
    {
        name: "Básico",
        price: "99",
        description: "Ideal para pequeños negocios",
        features: [
            { name: "Hasta 5 usuarios", included: true },
            { name: "Almacenamiento 10GB", included: true },
            { name: "Soporte por email", included: true },
            { name: "Actualizaciones gratuitas", included: true },
            { name: "API Access", included: false },
            { name: "Integraciones avanzadas", included: false },
            { name: "Personalización", included: false },
            { name: "Soporte 24/7", included: false }
        ],
        color: "#10B981",
        popular: false
    },
    {
        name: "Profesional",
        price: "199",
        description: "Perfecto para empresas en crecimiento",
        features: [
            { name: "Hasta 20 usuarios", included: true },
            { name: "Almacenamiento 50GB", included: true },
            { name: "Soporte por email", included: true },
            { name: "Actualizaciones gratuitas", included: true },
            { name: "API Access", included: true },
            { name: "Integraciones avanzadas", included: true },
            { name: "Personalización", included: false },
            { name: "Soporte 24/7", included: false }
        ],
        color: "#8B5CF6",
        popular: true
    },
    {
        name: "Empresarial",
        price: "399",
        description: "Para grandes empresas y corporaciones",
        features: [
            { name: "Usuarios ilimitados", included: true },
            { name: "Almacenamiento ilimitado", included: true },
            { name: "Soporte prioritario", included: true },
            { name: "Actualizaciones gratuitas", included: true },
            { name: "API Access", included: true },
            { name: "Integraciones avanzadas", included: true },
            { name: "Personalización", included: true },
            { name: "Soporte 24/7", included: true }
        ],
        color: "#10B981",
        popular: false
    }
];

const Comparison: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    return (
        <section className={`py-20 bg-white ${DMSans.className}`}>
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Elige el plan que mejor se adapte a tus necesidades. Todos incluyen soporte técnico y actualizaciones.
                    </p>
                </motion.div>

                {/* Grid de planes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onHoverStart={() => setSelectedPlan(plan.name)}
                            onHoverEnd={() => setSelectedPlan(null)}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all ${
                                selectedPlan === plan.name ? "scale-105" : ""
                            } ${plan.popular ? "border-2 border-[#8B5CF6]" : "border border-gray-100"}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <FaStar className="text-yellow-300" />
                                        Más Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold" style={{ color: plan.color }}>S/. {plan.price}</span>
                                    <span className="text-gray-500">/mes</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <motion.div
                                        key={feature.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        {feature.included ? (
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                <FaCheck className="text-green-500 text-sm" />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                                                <FaTimes className="text-red-500 text-sm" />
                                            </div>
                                        )}
                                        <span className="text-gray-700">{feature.name}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://wa.me/51953469369?text=${encodeURIComponent(`Quiero adquirir el plan ${plan.name}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full py-3 rounded-lg font-semibold text-white transition-colors hover:cursor-pointer inline-block text-center"
                                style={{ backgroundColor: plan.color }}
                            >
                                Elegir Plan
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;