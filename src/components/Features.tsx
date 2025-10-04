"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { MdOutlineRocketLaunch, MdOutlineSecurity, MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { LuMessageCircleMore } from "react-icons/lu";
import React from "react";
import SpotlightCard from "@/components/SpotlightCard";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const features = [
    {
        title: "Interfaz Intuitiva",
        description: "Diseño moderno y fácil de usar que permite a tus empleados aprender rápidamente.",
        icon: <MdOutlineRocketLaunch />
    },
    {
        title: "Seguridad Avanzada",
        description: "Protección de datos con encriptación de última generación y respaldo automático.",
        icon: <MdOutlineSecurity />
    },
    {
        title: "Personalizable",
        description: "Adapta el software a las necesidades específicas de tu empresa.",
        icon: <GrConfigure />
    },
    {
        title: "Soporte 24/7",
        description: "Asistencia técnica continua y actualizaciones regulares para mantener tu sistema al día.",
        icon: <LuMessageCircleMore />
    },
    {
        title: "Reportes Detallados",
        description: "Genera informes completos y análisis en tiempo real para tomar mejores decisiones.",
        icon: <TbReport />
    },
    {
        title: "Integración Total",
        description: "Conecta con otras herramientas empresariales para un flujo de trabajo.",
        icon: <MdOutlineIntegrationInstructions />
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

const Features: React.FC = () => {
    return (
        <section className={`py-20 bg-white ${DMSans.className}`} id="caracteristicas">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre las características que hacen que nuestro software sea la mejor opción para tu empresa
                    </p>
                </motion.div>

                {/* Grid de características */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="rounded-xl group"
                        >
                            <SpotlightCard 
                                className="cursor-pointer bg-white  p-8 rounded-xl transition-all duration-300 hover:border-[#22C55E]/20"
                                spotlightColor="rgba(34, 197, 94, 0.15)"
                            >
                                <div className="text-4xl mb-4" style={{ color: "#3B82F6" }}>{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección de estadísticas */}
                <motion.div 
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {[
                        { number: "1000+", label: "Clientes Satisfechos" },
                        { number: "99.9%", label: "Tiempo de Actividad" },
                        { number: "24/7", label: "Soporte Técnico" },
                        { number: "50+", label: "Integraciones" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-[#22C55E] mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;