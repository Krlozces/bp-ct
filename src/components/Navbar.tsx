import Link from "next/link";
import Image from "next/image";
import { DM_Sans} from "next/font/google";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600", "500", "400"],
    subsets: ["latin"],
});
{/*Falta cambiar paleta de colores*/}
export default function Navbar() {
    return (
        <nav className={`bg-[#85A98F] backdrop-blur-sm p-4 text-gray-800 border-b border-gray-200 fixed w-full font-bold z-50 shadow-sm transition-all duration-300 ${DMSans.className}`}>
            <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
                    <Image src="/next.svg" alt="Logo" width={120} height={50} />
                </Link>
                
                {/* Menú de navegación */}
                <div className="hidden md:flex space-x-8 text-sm font-extrabold">
                    <Link href="/about" className="relative group">
                        <span className="hover:text-blue-600 transition-colors duration-300">INICIO</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <div className="relative group">
                        <Link href="/services" className="hover:text-blue-600 transition-colors duration-300">NOSOTROS</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        {/* Menú desplegable - Aca va el menu de servicios*/}
                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block animate-fadeIn">
                            <Link href="/services/option1" className="block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-200 rounded-t-lg">Opción 1</Link>
                            <Link href="/services/option2" className="block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-200 rounded-b-lg">Opción 2</Link>
                        </div>
                    </div>
                    <Link href="/clients" className="relative group">
                        <span className="hover:text-blue-600 transition-colors duration-300">SERVICIOS</span>
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
                    <span className="text-gray-300">|</span>
                    <Link href="/en" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">ENG</Link>
                </div>
            </div>
        </nav>
    );
}
