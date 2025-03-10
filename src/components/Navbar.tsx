import Link from "next/link";
import Image from "next/image";
import { DM_Sans} from "next/font/google";
import { Instagram, Twitter, Youtube, AlarmClock, Phone, Mail, Clock} from "@deemlol/next-icons";
{/* Fuente de google para el navbar */}
const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});
{/*Falta cambiar paleta de colores*/}
export default function Navbar() {
    return (
        <div className="w-full z-50"> {/* Puede ser fijo pero no se si es necesario --> fixed */}
            {/* Barra de contactos */}
            <div className={`bg-[#22C55E] text-white py-4 text-sm ${DMSans.className}`}>
                <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    <div className="flex space-x-6 text-sm">
                        <span className="flex items-center gap-2">
                            <span className="text-lg"><Mail size={24} color="#FFFFFF" /></span>
                            <span>petucodeSAC@gmail.com</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-lg"><Phone size={24} color="#FFFFFF" /></span>
                            <span>+51 976 217 463</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-lg"><Phone size={24} color="#FFFFFF" /></span>
                            <span>(01) 730 4000</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg"><Clock size={24} color="#FFFFFF" /></span>
                        <span>Atención: 8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex space-x-2">
                        <Link href="#" className="hover:text-white/80 transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"><Twitter size={20} color="#FFFFFF" /></Link>
                        <Link href="#" className="hover:text-white/80 transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"><Instagram size={20} color="#FFFFFF" /></Link>
                        <Link href="#" className="hover:text-white/80 transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"><Youtube size={20} color="#FFFFFF" /></Link>
                    </div>
                </div>
            </div>

            {/* Barra de navegación principal */}
            <nav className={`bg-[#22C55E] backdrop-blur-sm p-4 text-black border-b border-gray-300 shadow-sm transition-all duration-300 ${DMSans.className}`}>
                <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
                        <Image src="/next.svg" alt="Logo" width={120} height={50} />
                    </Link>
                    
                    {/* Menú de navegación */}
                    <div className="hidden md:flex space-x-8 text-m font-extrabold">
                        <Link href="/about" className="relative group">
                            <span className="hover:text-blue-600 transition-colors duration-300">INICIO</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <div className="relative group">
                            <Link href="/services" className="hover:text-blue-600 transition-colors duration-300">SERVICIOS</Link>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            {/* Menú desplegable - Aca va el menu de servicios*/}
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block animate-fadeIn">
                                <Link href="/services/option1" className="block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-200 rounded-t-lg">Opción 1</Link>
                                <Link href="/services/option2" className="block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-200 rounded-b-lg">Opción 2</Link>
                            </div>
                        </div>
                        <Link href="/clients" className="relative group">
                            <span className="hover:text-blue-600 transition-colors duration-300">NOSOTROS</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/insight" className="relative group">
                            <span className="hover:text-blue-600 transition-colors duration-300">CLIENTES</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/contact" className="relative group">
                            <span className="hover:text-blue-600 transition-colors duration-300">CONTÁCTENOS</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                    
                    {/* Selector de idioma */}
                    <div className="text-sm font-medium pr-4 flex items-center space-x-2">
                        <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">ESP</Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/en" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">ENG</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
