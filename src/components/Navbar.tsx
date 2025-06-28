"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Instagram, Twitter, Youtube, Phone, Mail, Clock, Menu, X } from "@deemlol/next-icons";
import { useState, useEffect } from "react";
import IntroTransition from "./IntroTransition";

// Google Font for the Navbar
const DMSans = DM_Sans({
    weight: ["700", "500", "400"], // Adjusted weights for better versatility
    subsets: ["latin"],
});

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para achicar navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Espera a que termine la animación de IntroTransition
    useEffect(() => {
        // El estado showContent será actualizado por IntroTransition
    }, []);

    if (!showContent) {
        return <IntroTransition title="CobalTech" setShowContent={setShowContent} />;
    }

    return (
        <div className="w-full relative z-50"> {/* Added 'relative' for potential future positioning */}
            {/* Top Contact Bar */}
            <div className={`bg-indigo-600 border-b border-indigo-700 text-white py-2 text-sm ${DMSans.className} hidden md:block`}> {/* Changed background to a darker gray for contrast */}
                <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-2">
                            <Mail size={18} color="#FFFFFF" /> {/* Reduced icon size for subtlety */}
                            <span>petucodeSAC@gmail.com</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={18} color="#FFFFFF" />
                            <span>+51 976 217 463</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={18} color="#FFFFFF" />
                            <span>(074) 730 400</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={18} color="#FFFFFF" />
                        <span>Atención: 8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex space-x-3"> {/* Increased space-x for better visual separation */}
                        <Link href="#" className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Twitter size={18} /></Link> {/* Brighter hover color and slightly more prominent scale */}
                        <Link href="#" className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Instagram size={18} /></Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Youtube size={18} /></Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={`bg-indigo-600 text-white shadow-md transition-all duration-300 ${DMSans.className} sticky top-0 left-0 ${scrolled ? 'py-2' : 'p-4'}`}> {/* Changed main navbar to white with dark text */}
                <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    {/* Logo grande y se achica al hacer scroll */}
                    <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
                        <Image src="/logo.png" alt="Logo" width={scrolled ? 110 : 180} height={scrolled ? 40 : 60} className={`${scrolled ? 'w-[90px] md:w-[110px]' : 'w-[160px] md:w-[120px]'} h-auto transition-all duration-300`} priority />
                    </Link>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex space-x-8 text-base font-semibold"> {/* Adjusted font size and weight */}
                        <Link href="#home" className="relative group py-2"> {/* Added py-2 for better hit area */}
                            <span className="hover:text-blue-300 transition-colors duration-300">INICIO</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#services" className="relative group py-2">
                            <span className="hover:text-blue-300 transition-colors duration-300">SERVICIOS</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#about" className="relative group py-2">
                            <span className="hover:text-blue-300 transition-colors duration-300">NOSOTROS</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#clients" className="relative group py-2">
                            <span className="hover:text-blue-300 transition-colors duration-300">CLIENTES</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>

                    {/* Botón de contacto destacado en desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                            CONTÁCTANOS
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-blue-300 transition-colors p-2 rounded-lg z-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Abrir menú"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}> {/* Smooth slide and fade transition */}
                    <div className="px-8 space-y-3">
                        <Link href="#home" className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>INICIO</Link>
                        <Link href="#services" className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>SERVICIOS</Link>
                        <Link href="#about" className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>NOSOTROS</Link>
                        <Link href="#clients" className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>CLIENTES</Link>
                        <Link href="#contact" className="block text-white hover:text-blue-300 transition-colors text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>CONTÁCTENOS</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}