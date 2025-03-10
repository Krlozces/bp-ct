"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import React from "react";
import { FaCheck } from "react-icons/fa";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const plans = [
    {
        name: "Básico",
        price: "S/ 199",
        period: "mes",
        description: "Perfecto para pequeñas empresas que están comenzando",
        features: [
            "Hasta 5 usuarios",
            "Funciones básicas",
            "Soporte por email",
            "Actualizaciones básicas",
            "1 módulo personalizado"
        ],
        popular: false
    },
    {
        name: "Profesional",
        price: "S/ 399",
        period: "mes",
        description: "Ideal para empresas en crecimiento",
        features: [
            "Hasta 15 usuarios",
            "Todas las funciones básicas",
            "Soporte prioritario 24/7",
            "Actualizaciones premium",
            "3 módulos personalizados",
            "Reportes avanzados",
            "Integración con APIs"
        ],
        popular: true
    },
    {
        name: "Empresarial",
        price: "Personalizado",
        period: "mes",
        description: "Para grandes empresas con necesidades específicas",
        features: [
            "Usuarios ilimitados",
            "Todas las funciones",
            "Soporte dedicado",
            "Actualizaciones inmediatas",
            "Módulos personalizados ilimitados",
            "Reportes personalizados",
            "Integración completa",
            "Capacitación exclusiva"
        ],
        popular: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Pricing: React.FC = () => {
    return (
        <section className={`py-20 bg-white ${DMSans.className}`} id="precios">
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
                        Elige el plan perfecto para tu empresa. Todos los planes incluyen una prueba gratuita de 14 días.
                    </p>
                </motion.div>

                {/* Grid de planes */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col ${
                                plan.popular ? 'border-2 border-[#22C55E]' : 'border border-gray-100'
                            }`}
                        >
                            {/* Badge de popular */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#22C55E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Más Popular
                                </div>
                            )}

                            {/* Contenido del plan */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.price !== "Personalizado" && (
                                        <span className="text-gray-600">/{plan.period}</span>
                                    )}
                                </div>
                                <p className="text-gray-600">{plan.description}</p>
                            </div>

                            {/* Lista de características */}
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        <FaCheck className="text-[#22C55E]" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Botón de acción */}
                            <button className={`w-full bg-green-600 text-white font-medium py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#22C55E]/30 hover:-translate-y-0.5 hover:bg-green-600 mt-auto ${
                                plan.popular 
                                    ? 'bg-[#22C55E] text-white hover:bg-[#16A34A]' 
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}>
                                {plan.price === "Personalizado" ? "Contactar Ventas" : "Comenzar Ahora"}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección de FAQ */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        ¿Tienes alguna pregunta?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nuestro equipo de ventas está aquí para ayudarte a elegir el plan perfecto para tu empresa
                    </p>
                    <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                        Contactar Ventas
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing; 