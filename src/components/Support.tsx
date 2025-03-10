"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { FaHeadset, FaBook, FaVideo, FaComments, FaClock, FaTicketAlt, FaUserFriends } from "react-icons/fa";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const supportOptions = [
    {
        icon: <FaHeadset className="text-3xl" />,
        title: "Soporte 24/7",
        description: "Asistencia técnica disponible las 24 horas, los 7 días de la semana.",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: <FaBook className="text-3xl" />,
        title: "Documentación",
        description: "Guías detalladas, tutoriales y documentación técnica completa.",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: <FaVideo className="text-3xl" />,
        title: "Videotutoriales",
        description: "Videos paso a paso para aprender a usar todas las funcionalidades.",
        color: "from-red-500 to-red-600"
    },
    {
        icon: <FaComments className="text-3xl" />,
        title: "Chat en Vivo",
        description: "Soporte en tiempo real a través de nuestro chat integrado.",
        color: "from-green-500 to-green-600"
    }
];

const Support: React.FC = () => {
    return (
        <section className={`py-20 bg-gray-50 ${DMSans.className}`} id="soporte">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Soporte Técnico</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Estamos aquí para ayudarte en cada paso del camino.
                    </p>
                </motion.div>

                {/* Grid de Opciones de Soporte */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {supportOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                                {option.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                            <p className="text-gray-600">{option.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de Métricas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaClock className="text-2xl text-[#22C55E]" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">24/7</h4>
                            <p className="text-gray-600">Disponibilidad</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaTicketAlt className="text-2xl text-[#22C55E]" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">15 min</h4>
                            <p className="text-gray-600">Tiempo de Respuesta</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUserFriends className="text-2xl text-[#22C55E]" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-2">98%</h4>
                            <p className="text-gray-600">Satisfacción</p>
                        </div>
                    </div>
                </motion.div>

                {/* Sección de CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        ¿Necesitas ayuda ahora?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Nuestro equipo de soporte está listo para ayudarte. 
                        Contacta con nosotros a través de cualquiera de nuestros canales.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-[#22C55E] text-white px-6 py-3 rounded-lg hover:bg-[#16A34A] transition-colors font-semibold">
                        Contactar Soporte
                        <FaHeadset />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Support; 