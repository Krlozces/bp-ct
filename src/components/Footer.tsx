import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#374151] text-white p-4">
            <div className="container mx-auto flex justify-between">
               <div className="flex flex-col gap-4 w-1/4">
                    <h3></h3>
                    <p>
                        Empresa Peruana dedicada a la creación, implantación y comercialización de software de gestión empresarial, que cuenta con más de 10 años de experiencia en el rubro de sistemas empresariales.
                    </p>
               </div>
               <div>
                    <h3 className="text-2xl font-bold">Nosotros</h3>
                    <ul>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">¿Quienes somos?</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Misión y Visión</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Nuestro Equipo</Link>
                        </li>
                    </ul>
               </div>
               <div>
                    <h3 className="text-2xl font-bold">Soluciones</h3>
                    <ul>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Soluciones de Software</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Soluciones de Hardware</Link>
                        </li>
                    </ul>
               </div>
               <div>
                    <h3 className="text-2xl font-bold">Contacto</h3>
                    <ul>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Contacto</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#3B82F6] hover:underline hover:underline-offset-4">Soporte</Link>
                        </li>
                    </ul>
               </div>
            </div>
        </footer>
    )
}