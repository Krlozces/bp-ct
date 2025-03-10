import Link from "next/link";
import Image from "next/image";
import { Big_Shoulders_Inline_Display } from "next/font/google";

const bigShouldersInline = Big_Shoulders_Inline_Display({
    weight: ["900", "800", "700", "600", "500", "400"],
    subsets: ["latin"],
});

export default function Navbar() {
    return (
        <nav className={`bg-[#D3F1DF] p-4 text-gray-900 border-b border-gray-300 fixed w-full font-bold z-50 ${bigShouldersInline.className}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/next.svg" alt="Logo" width={120} height={50} />
                </Link>
                
                {/* Menú de navegación */}
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <Link href="/about" className="hover:underline">INICIO</Link>
                    <div className="relative group">
                        <Link href="/services" className="hover:underline">NOSOTROS</Link>
                        {/* Menú desplegable */}
                        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block">
                            <Link href="/services/option1" className="block px-4 py-2 text-sm hover:bg-gray-100">Opción 1</Link>
                            <Link href="/services/option2" className="block px-4 py-2 text-sm hover:bg-gray-100">Opción 2</Link>
                        </div>
                    </div>
                    <Link href="/clients" className="hover:underline">SERVICIOS</Link>
                    <Link href="/insight" className="hover:underline">CLIENTES</Link>
                    <Link href="/contact" className="hover:underline">CONTÁCTENOS</Link>
                </div>
                
                {/* Selector de idioma */}
                <div className="text-sm font-medium">
                    <Link href="/" className="text-blue-600">ESP</Link>
                    <span className="mx-2">|</span>
                    <Link href="/en" className="text-gray-600 hover:text-blue-600">ENG</Link>
                </div>
            </div>
        </nav>
    );
}
