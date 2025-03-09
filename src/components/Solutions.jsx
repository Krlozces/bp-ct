import Bulletpoint from "./Bulletpoint";

export default function Solutions() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Soluciones</h2>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">Market</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>
                        Ideal para ferreterías, markets, distribuidoras, repuestos, empresas de transportes, lubricentros, droguerías y tiendas en general.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ver más
                    </button>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">EESS / Grifos</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>
                        Exclusivo para estaciones de servicio, venta de combustible líquido o gas.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ver más
                    </button>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">Inmobiliarias</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>
                        Dirigido a inmobiliarias, construtoras o entidades que se dediquen al arrendamiento o compra y venta de inmuebles.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ver más
                    </button>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">Salud</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>
                        Ideal para clínicas, consultorios y centros médicos de salud, integración con productos de farmacia para recetas de los médicos.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ver más
                    </button>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">Restobar</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>
                        Idea para restaurantes, cafeterías, pollerías, cevicherías, comida rápida, bares, discotecas, karaokes.
                    </p>
                    <button className="bg-[#3B82F6] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:shadow-md hover:text-white hover:font-bold hover:cursor-pointer">
                        Ver más
                    </button>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-lg font-bold">Resort</h3>
                    <ul>
                        <li>
                            <div className="flex"><Bulletpoint /> Gestión de pisos y habitaciones.</div>
                        </li>
                        <li>
                            <div className="flex"><Bulletpoint /> Reservas y anticipos de pagos.</div>
                        </li>
                        <li>
                            <div className="flex"><Bulletpoint /> Consumo </div>
                        </li>
                        <li></li>
                    </ul>
                    <p>
                        Ideal para hoteles, hostales, albergues, hosterías, alojamientos, etc.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}