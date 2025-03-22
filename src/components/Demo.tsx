"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { useState, useRef } from "react";
import { FaPlay, FaPause, FaArrowRight, FaCheck, FaCode, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const features = [
    {
        icon: <FaCode className="text-2xl" />,
        title: "Código Limpio",
        description: "Desarrollo con las mejores prácticas y estándares de la industria"
    },
    {
        icon: <FaRocket className="text-2xl" />,
        title: "Alto Rendimiento",
        description: "Optimizado para máxima velocidad y eficiencia"
    },
    {
        icon: <FaShieldAlt className="text-2xl" />,
        title: "Seguridad Robusta",
        description: "Protección avanzada de datos y transacciones"
    },
    {
        icon: <FaChartLine className="text-2xl" />,
        title: "Analíticas en Tiempo Real",
        description: "Monitoreo y análisis de datos en vivo"
    }
];

const Demo: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${DMSans.className}`} id="demo">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Demo Interactiva</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experimenta la potencia de nuestra solución con esta demostración interactiva.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Panel de Demo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                            {/* Barra de título */}
                            <div className="bg-gray-800 p-4 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            
                            {/* Contenido de la demo */}
                            <div className="relative">
                                <video
                                    ref={videoRef}
                                    className="w-full h-[400px] object-cover"
                                    src="/demo-video.mp4" // Reemplaza con la ruta de tu video
                                    poster="/video-poster.jpg" // Reemplaza con la ruta de tu imagen de portada
                                >
                                    Tu navegador no soporta el elemento de video.
                                </video>
                                
                                {/* Overlay de controles */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={togglePlay}
                                        className="bg-[#22C55E] text-white p-4 rounded-full hover:bg-[#16A34A] transition-colors"
                                    >
                                        {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Características */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Características Principales
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                                            activeFeature === index 
                                                ? 'bg-[#22C55E]/10 border-2 border-[#22C55E]' 
                                                : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                        onClick={() => setActiveFeature(index)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center text-[#22C55E]">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                                <p className="text-sm text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="inline-flex items-center gap-2 bg-[#22C55E] text-white px-6 py-3 rounded-lg hover:bg-[#16A34A] transition-colors font-semibold hover:cursor-pointer">
                                Solicitar Demo Personalizada
                                <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Demo; 