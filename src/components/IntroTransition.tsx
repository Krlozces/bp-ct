"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function IntroTransition({ title, setShowContent }: { title: string; setShowContent: (value: boolean) => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
            setShowContent(true);
        }, 3000);
    }, [setShowContent]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] z-50 overflow-hidden" 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Fondo con patrón */}
                    <motion.div 
                        className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Líneas animadas - Se parte a la mitad si le ponemos colores*/}
                    <div className="absolute inset-0 flex">
                        <motion.div 
                            className="w-1/2 h-full bg-gradient-to-r from-[#] to-[#]"
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        />
                        <motion.div 
                            className="w-1/2 h-full bg-gradient-to-r from-[#] to-[#]"
                            initial={{ x: 0 }}
                            animate={{ x: "100%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        />
                    </div>

                    {/* Contenido central */}
                    <div className="relative z-10 text-center">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <Image 
                                src="/next.svg" 
                                alt="Logo" 
                                width={120} 
                                height={120}
                                className="mx-auto"
                            />
                        </motion.div>

                        {/* Título y subtítulo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-4"
                        >
                            <div className="w-24 h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] mx-auto mb-6 rounded-full" />
                            <h1 className="text-6xl font-bold text-white tracking-tight mb-4">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Transformando negocios con soluciones tecnológicas innovadoras
                            </p>
                        </motion.div>
                        
                        {/* Estado de carga */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="text-gray-400 text-lg space-y-2"
                        >
                            <p>Cargando recursos...</p>
                        </motion.div>
                    </div>

                    {/* Línea de progreso */}
                    <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
