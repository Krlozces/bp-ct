import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-[#374151] p-4 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href="/">
                        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
                        {/* <Image src="/logo.png" alt="Logo" width={100} height={100} /> */}
                    </Link>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Inicio</Link>
                        <Link href="/about" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Nosotros</Link>
                        <Link href="/services" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Servicios</Link>
                        <Link href="/products" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Productos</Link>
                        <Link href="/clients" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Clientes</Link>
                        <Link href="/contact" className="hover:text-[#22C55E] hover:underline hover:underline-offset-4">Contacto</Link>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Link href="/quotation" className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-[#3B82F6] hover:text-white transition-colors">Solicitar Cotización</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}