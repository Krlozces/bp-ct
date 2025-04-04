"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import Button from "./Button";
import React from "react";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const Hero: React.FC = () => {
    return (
        <section className={`relative min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] overflow-hidden ${DMSans.className}`}>
            {/* Fondo con patrón */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
            
            {/* Círculos decorativos */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Contenido principal */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Texto principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-[#22C55E]/10 rounded-full mb-6"
                        >
                            <span className="text-[#22C55E] font-semibold">Soluciones Empresariales</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Transforma tu negocio con tecnología
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Optimiza tus operaciones, mejora la productividad y lleva tu empresa al siguiente nivel con nuestras soluciones tecnológicas innovadoras.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button className="bg-[#22C55E] text-white hover:bg-[#22C55E] transition-colors">
                                Comenzar Ahora
                            </Button>
                            <Button className="bg-transparent border-1 border-white text-white hover:bg-white/10 transition-colors">
                                Ver Soluciones
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Imagen/Ilustración */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((item) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 * item }}
                                            className="bg-white/10 rounded-xl p-4 aspect-square flex items-center justify-center"
                                        >
                                            <div className="w-12 h-12 bg-[#22C55E]/20 rounded-lg flex items-center justify-center">
                                                <span className="text-[#22C55E] text-2xl">😿</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
{/*            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full p-2">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                    />
                </div>
            </motion.div> */}
        </section>
    );
};

export default Hero; 