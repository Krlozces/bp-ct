"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Instagram, Twitter, Youtube, Phone, Mail, Clock, Menu, X } from "@deemlol/next-icons";
import { useState, useEffect } from "react";
import IntroTransition from "./IntroTransition";
import { motion } from "framer-motion";

// Google Font for the Navbar
const DMSans = DM_Sans({
    weight: ["700", "500", "400"], // Adjusted weights for better versatility
    subsets: ["latin"],
});

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    // Detectar scroll para achicar navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Seguimiento del cursor para efectos interactivos
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Espera a que termine la animación de IntroTransition
    useEffect(() => {
        // El estado showContent será actualizado por IntroTransition
    }, []);

    // Variantes para el cursor personalizado
    const cursorVariants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            border: "1px solid rgba(79, 70, 229, 0.3)",
        },
        hover: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            border: "1px solid rgba(79, 70, 229, 0.5)",
            mixBlendMode: "difference",
        },
        text: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            height: 150,
            width: 150,
            backgroundColor: "transparent",
            border: "2px solid rgba(79, 70, 229, 0.8)",
            mixBlendMode: "difference",
        },
    };

    // Funciones para interactividad del cursor
    const textEnter = (text) => {
        setCursorText(text);
        setCursorVariant("text");
    };

    const textLeave = () => {
        setCursorText("");
        setCursorVariant("default");
    };

    const buttonEnter = () => {
        setCursorVariant("hover");
    };

    const buttonLeave = () => {
        setCursorVariant("default");
    };

    if (!showContent) {
        return <IntroTransition title="CobalTech" setShowContent={setShowContent} />;
    }

    return (
        <div className="w-full relative z-50"> 
            {/* Cursor personalizado */}
            <motion.div
                className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-white font-bold text-sm"
                variants={cursorVariants}
                animate={cursorVariant}
            >
                {cursorText && <span>{cursorText}</span>}
            </motion.div>

            {/* Top Contact Bar */}
            <div className={`bg-gradient-to-r from-indigo-950 to-indigo-800 border-b border-indigo-700 text-white py-2 text-sm ${DMSans.className} hidden md:block`}>
                <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-2" onMouseEnter={() => textEnter("EMAIL")} onMouseLeave={textLeave}>
                            <Mail size={18} color="#FFFFFF" />
                            <span>petucodeSAC@gmail.com</span>
                        </span>
                        <span className="flex items-center gap-2" onMouseEnter={() => textEnter("MÓVIL")} onMouseLeave={textLeave}>
                            <Phone size={18} color="#FFFFFF" />
                            <span>+51 976 217 463</span>
                        </span>
                        <span className="flex items-center gap-2" onMouseEnter={() => textEnter("TELÉFONO")} onMouseLeave={textLeave}>
                            <Phone size={18} color="#FFFFFF" />
                            <span>(074) 730 400</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2" onMouseEnter={() => textEnter("HORARIO")} onMouseLeave={textLeave}>
                        <Clock size={18} color="#FFFFFF" />
                        <span>Atención: 8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex space-x-3">
                        <Link 
                            href="#" 
                            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                            onMouseEnter={buttonEnter}
                            onMouseLeave={buttonLeave}
                        >
                            <Twitter size={18} />
                        </Link>
                        <Link 
                            href="#" 
                            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                            onMouseEnter={buttonEnter}
                            onMouseLeave={buttonLeave}
                        >
                            <Instagram size={18} />
                        </Link>
                        <Link 
                            href="#" 
                            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                            onMouseEnter={buttonEnter}
                            onMouseLeave={buttonLeave}
                        >
                            <Youtube size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={`bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white shadow-md transition-all duration-300 ${DMSans.className} sticky top-0 left-0 ${scrolled ? 'py-2' : 'p-4'}`}>
            <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
    {/* Logo con texto que se achica al hacer scroll */}
    <Link 
        href="/" 
        className="flex items-center transform hover:scale-105 transition-transform duration-300"
        onMouseEnter={() => textEnter("COBALTECH")}
        onMouseLeave={textLeave}
    >
        <span className={`${scrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} font-extrabold text-white transition-all duration-300`}>
            COBALTECH
        </span>
    </Link>

    {/* Desktop Navigation Menu */}
    <div className="hidden md:flex space-x-8 text-base font-semibold">
        <Link 
            href="#home" 
            className="relative group py-2"
            onMouseEnter={() => textEnter("INICIO")}
            onMouseLeave={textLeave}
        >
            <span className="hover:text-blue-300 transition-colors duration-300">INICIO</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
            href="#services" 
            className="relative group py-2"
            onMouseEnter={() => textEnter("SERVICIOS")}
            onMouseLeave={textLeave}
        >
            <span className="hover:text-blue-300 transition-colors duration-300">SERVICIOS</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
            href="#about" 
            className="relative group py-2"
            onMouseEnter={() => textEnter("NOSOTROS")}
            onMouseLeave={textLeave}
        >
            <span className="hover:text-blue-300 transition-colors duration-300">NOSOTROS</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
            href="#clients" 
            className="relative group py-2"
            onMouseEnter={() => textEnter("CLIENTES")}
            onMouseLeave={textLeave}
        >
            <span className="hover:text-blue-300 transition-colors duration-300">CLIENTES</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
    </div>

    {/* Botón de contacto destacado en desktop */}
    <div className="hidden md:flex items-center space-x-4">
        <div className="relative" onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
            <Link 
                href="#contact" 
                className="relative z-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
                <span className="relative z-10">CONTÁCTANOS</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        </div>
    </div>

    {/* Mobile Menu Button */}
    <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:text-blue-300 transition-colors p-2 rounded-lg z-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Abrir menú"
        onMouseEnter={buttonEnter}
        onMouseLeave={buttonLeave}
    >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
</div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 space-y-3">
                        <Link 
                            href="#home" 
                            className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" 
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={() => textEnter("INICIO")}
                            onMouseLeave={textLeave}
                        >
                            INICIO
                        </Link>
                        <Link 
                            href="#services" 
                            className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" 
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={() => textEnter("SERVICIOS")}
                            onMouseLeave={textLeave}
                        >
                            SERVICIOS
                        </Link>
                        <Link 
                            href="#about" 
                            className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" 
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={() => textEnter("NOSOTROS")}
                            onMouseLeave={textLeave}
                        >
                            NOSOTROS
                        </Link>
                        <Link 
                            href="#clients" 
                            className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" 
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={() => textEnter("CLIENTES")}
                            onMouseLeave={textLeave}
                        >
                            CLIENTES
                        </Link>
                        <Link 
                            href="#contact" 
                            className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" 
                            onClick={() => setIsMenuOpen(false)}
                            onMouseEnter={() => textEnter("CONTÁCTANOS")}
                            onMouseLeave={textLeave}
                        >
                            CONTÁCTENOS
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Estilos CSS para el cursor personalizado */}
            <style jsx global>{`
                body {
                    cursor: none;
                }
                
                a, button, [role="button"] {
                    cursor: none;
                }
                
                .custom-cursor {
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
}