import Bulletpoint from "./icons/BulletpointSvg";
import ShoppingCart from "./icons/ShoppingCartSvg";
import RestaurantSvg from "./icons/RestaurantSvg";
import TapsSvg from "./icons/TapsSvg";
import HealthSvg from "./icons/HealthSvg";
import BuildingSvg from "./icons/BuildingSvg";
import HotelSvg from "./icons/HotelSvg";
import Button from "./Button";
import SolutionsCard from "./SolutionsCard";
export default function Solutions() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Soluciones</h2>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <div className="grid grid-cols-3 gap-4">
                <SolutionsCard icon={<ShoppingCart />} title="Market" items={["Puntos de venta.", "Control de stock y kardex.", "Cuentas por cobrar y cierre de caja.", "Retenciones y detracciones."]} description="Ideal para ferreterías, markets, distribuidoras, repuestos, empresas de transportes, lubricentros, droguerías y tiendas en general." buttonText="Ver más" />
                <SolutionsCard icon={<TapsSvg />} title="EESS / Grifos" items={["Gestión de turnos, surtidores y usuarios. Liquidaciones Sistema vs Despachos de los Surtidores.", "Captura automática del despacho del surtidor en sistema, lectura inicial y final en galones y soles por manguera.", "Cuentas por cobrar y cierre de caja."]} description="Exclusivo para estaciones de servicio, venta de combustible líquido o gas." buttonText="Ver más" />
                <SolutionsCard icon={<BuildingSvg />} title="Inmobiliarias" items={["Dirigido a inmobiliarias, construtoras o entidades que se dediquen al arrendamiento o compra y venta de inmuebles."]} description="Dirigido a inmobiliarias, construtoras o entidades que se dediquen al arrendamiento o compra y venta de inmuebles." buttonText="Ver más" />
                <SolutionsCard icon={<HealthSvg />} title="Salud" items={["Médicos y especialidades.", "Citas presenciales y virtuales.", "Historia clínica y fichas de pacientes.", "Historias y recetas en PDF."]} description="Ideal para clínicas, consultorios y centros médicos de salud, integración con productos de farmacia para recetas de los médicos." buttonText="Ver más" />
                <SolutionsCard icon={<RestaurantSvg />} title="Restobar" items={["Comandas desde tablet o pc.", "Cola de pedidos en cocina o barra.", "Control de mesas, ambientes y turnos.", "Control de stock y kardex.", "Gestión de combos y promociones."]} description="Ideal para restaurantes, cafeterías, pollerías, cevicherías, comida rápida, bares, discotecas, karaokes." buttonText="Ver más" />
                <SolutionsCard icon={<HotelSvg />} title="Resort" items={["Gestión de pisos y habitaciones.", "Reservas y anticipos de pagos.", "Consumo y pedidos a la habitación.", "Gestión de restaurante."]} description="Ideal para hoteles, hostales, albergues, hosterías, alojamientos, etc." buttonText="Ver más" />
            </div>
        </div>
    )
}