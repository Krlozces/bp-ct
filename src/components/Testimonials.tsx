"use client";

import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import team1 from "../components/assets/team1.jpeg";
import team2 from "../components/assets/team2.jpeg";
import team3 from "../components/assets/team3.jpeg";


const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const testimonials = [
    {
        name: "Carlos Ramírez",
        position: "Gerente General",
        company: "Tech Solutions SAC",
        image:  team1,
        testimonial: "El software ha transformado completamente la forma en que manejamos nuestras operaciones. La eficiencia ha aumentado significativamente y el soporte técnico es excepcional."
    },
    {
        name: "Ana Martínez",
        position: "Directora de Operaciones",
        company: "Global Retail",
        image: team2,
        testimonial: "La interfaz intuitiva y las funciones personalizables nos han permitido adaptar el sistema perfectamente a nuestras necesidades. Muy recomendado."
    },
    {
        name: "Roberto Sánchez",
        position: "CEO",
        company: "Innovate Corp",
        image: team3,
        testimonial: "La implementación fue rápida y el equipo de soporte nos guió en todo el proceso. Ahora tenemos un control total sobre nuestras operaciones."
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

const Testimonials: React.FC = () => {
    return (
        <section className={`py-20 bg-gray-50 ${DMSans.className}`} id="testimonios">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre cómo nuestro software ha ayudado a empresas como la tuya a crecer y mejorar su eficiencia
                    </p>
                </motion.div>

                {/* Grid de testimonios */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
                        >
                            {/* Icono de cita */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center">
                                <FaQuoteLeft className="text-white text-sm" />
                            </div>

                            {/* Contenido del testimonio */}
                            <div className="mt-4">
                                <p className="text-gray-600 mb-6 italic">
                                    "{testimonial.testimonial}"
                                </p>

                                {/* Información del cliente */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        <p className="text-sm text-[#22C55E]">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección de CTA */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        ¿Listo para transformar tu negocio?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Únete a cientos de empresas que ya están aprovechando el poder de nuestro software
                    </p>
                    <button className="bg-[#22C55E] text-white px-8 py-3 rounded-lg hover:bg-[#16A34A] transition-colors font-semibold">
                        Solicitar Demo
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 