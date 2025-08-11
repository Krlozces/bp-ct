
import ShoppingCart from "./icons/ShoppingCartSvg";
import RestaurantSvg from "./icons/RestaurantSvg";
import TapsSvg from "./icons/TapsSvg";
import HealthSvg from "./icons/HealthSvg";
import BuildingSvg from "./icons/BuildingSvg";
import HotelSvg from "./icons/HotelSvg";

import SolutionsCard from "./SolutionsCard";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({
    weight: ["900", "800", "700", "600"],
    subsets: ["latin"],
});

export default function Solutions() {
    return (
        <section className={`py-20 bg-[#F9FAFB] ${DMSans.className}`}>
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Soluciones</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestras soluciones empresariales diseñadas para optimizar y potenciar tu negocio
                    </p>
                </div>

                {/* Grid de Soluciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SolutionsCard 
                        icon={<ShoppingCart />} 
                        title="Market" 
                        items={[
                            "Puntos de venta",
                            "Control de stock y kardex",
                            "Cuentas por cobrar y cierre de caja",
                            "Retenciones y detracciones"
                        ]} 
                        description="Ideal para ferreterías, markets, distribuidoras, repuestos, empresas de transportes, lubricentros, droguerías y tiendas en general." 
                        buttonText="Más Información" 
                    />
                    <SolutionsCard 
                        icon={<TapsSvg />} 
                        title="EESS / Grifos" 
                        items={[
                            "Gestión de turnos, surtidores y usuarios",
                            "Liquidaciones Sistema vs Despachos",
                            "Captura automática del despacho",
                            "Cuentas por cobrar y cierre de caja"
                        ]} 
                        description="Exclusivo para estaciones de servicio, venta de combustible líquido o gas." 
                        buttonText="Más Información" 
                    />
                    <SolutionsCard 
                        icon={<BuildingSvg />} 
                        title="Inmobiliarias" 
                        items={[
                            "Gestión de propiedades",
                            "Control de alquileres",
                            "Seguimiento de clientes",
                            "Reportes financieros"
                        ]} 
                        description="Dirigido a inmobiliarias, constructoras o entidades que se dediquen al arrendamiento o compra y venta de inmuebles." 
                        buttonText="Más Información" 
                    />
                    <SolutionsCard 
                        icon={<HealthSvg />} 
                        title="Salud" 
                        items={[
                            "Médicos y especialidades",
                            "Citas presenciales y virtuales",
                            "Historia clínica y fichas",
                            "Historias y recetas en PDF"
                        ]} 
                        description="Ideal para clínicas, consultorios y centros médicos de salud, integración con productos de farmacia para recetas de los médicos." 
                        buttonText="Más Información" 
                    />
                    <SolutionsCard 
                        icon={<RestaurantSvg />} 
                        title="Restobar" 
                        items={[
                            "Comandas desde tablet o pc",
                            "Cola de pedidos en cocina",
                            "Control de mesas y ambientes",
                            "Gestión de combos y promociones"
                        ]} 
                        description="Ideal para restaurantes, cafeterías, pollerías, cevicherías, comida rápida, bares, discotecas, karaokes." 
                        buttonText="Más Información" 
                    />
                    <SolutionsCard 
                        icon={<HotelSvg />} 
                        title="Resort" 
                        items={[
                            "Gestión de pisos y habitaciones",
                            "Reservas y anticipos",
                            "Consumo y pedidos",
                            "Gestión de restaurante"
                        ]} 
                        description="Ideal para hoteles, hostales, albergues, hosterías, alojamientos, etc." 
                        buttonText="Más Información" 
                    />
                </div>
            </div>
        </section>
    )
}