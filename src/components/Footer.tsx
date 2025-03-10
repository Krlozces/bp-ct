import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { Mail, Phone, MapPin, Clock } from "@deemlol/next-icons";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <footer className={`bg-[#1F2937] text-white ${DMSans.className}`}>
            {/* Sección principal del footer */}
            <div className="max-w-[1400px] mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/*  1: Descripción */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#22C55E]">PetuCode</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empresa Peruana dedicada a la creación, implantación y comercialización de software de gestión empresarial, que cuenta con más de 10 años de experiencia en el rubro de sistemas empresariales.
                        </p>
                    </div>

                    {/*  2: Enlaces rápidos */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#22C55E]">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300">¿Quiénes somos?</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300">Misión y Visión</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300">Nuestro Equipo</Link>
                            </li>
                        </ul>
                    </div>

                    {/*  3: Soluciones */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#22C55E]">Soluciones</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300">Soluciones de Software</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300">Soluciones de Hardware</Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4: Contacto */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#22C55E]">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-gray-300">
                                <Mail size={20} color="#22C55E" />
                                <span>petucodeSAC@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <Phone size={20} color="#22C55E" />
                                <span>+51 976 217 463</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <MapPin size={20} color="#22C55E" />
                                <span>Chiclayo, Perú</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <Clock size={20} color="#22C55E" />
                                <span>8:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-gray-700">
                <div className="max-w-[1400px] mx-auto px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© 2025 PetuCodeSAC. Todos los derechos reservados.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-[#22C55E] transition-colors duration-300">Política de Privacidad</Link>
                            <Link href="/terms" className="hover:text-[#22C55E] transition-colors duration-300">Términos y Condiciones</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}