"use client";

import { motion, Variants } from "framer-motion";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import team1 from "../components/assets/team1.jpeg";
import team2 from "../components/assets/team2.jpeg";
import team3 from "../components/assets/team3.jpeg";
import team4 from "../components/assets/team4.jpeg";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

const team = [
    {
        name: "Pedro Torres",
        role: "CEO & Fundador",
        image: team1,
        bio: "Más de 10 años de experiencia en desarrollo de software empresarial.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Brayan Torres",
        role: "CEO & Fundador",
        image: team2,
        bio: "Experto en arquitectura de software y liderazgo técnico.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Piero Maza",
        role: "Especialista en Cybersecurity",
        image: team3,
        bio: "Especialista en desarrollo frontend y experiencia de usuario.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Lian Céspedes",
        role: "Diseñador UX/UI",
        image: team4,
        bio: "Apasionado por crear experiencias digitales intuitivas y hermosas.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Team: React.FC = () => {
    return (
        <section className={`py-20 bg-white ${DMSans.className}`} id="equipo">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Conoce a las personas detrás de PetuCode. Un equipo apasionado por crear soluciones innovadoras.
                    </p>
                </motion.div>

                {/* Grid de equipo */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Imagen */}
                            <div className="relative h-64">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Información */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-[#22C55E] font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                                {/* Redes sociales */}
                                <div className="flex space-x-4">
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#22C55E] transition-colors"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#22C55E] transition-colors"
                                    >
                                        <FaTwitter size={20} />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#22C55E] transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sección de unirse al equipo */}
                {/*                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        ¿Quieres unirte a nuestro equipo?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Siempre estamos buscando talentos apasionados por la tecnología y la innovación.
                    </p>
                    <button className="bg-[#22C55E] text-white px-8 py-3 rounded-lg hover:bg-[#16A34A] transition-colors font-semibold">
                        Ver Oportunidades
                    </button>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Team;