"use client"

import { DM_Sans } from "next/font/google"
import { useState } from "react"

const dmSans = DM_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

// Solution data structure
const solutions = [
    {
        id: "market",
        title: "Market",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 2L7 6H3L5 10H19L21 6H17L15 2H9Z" />
                <path d="M5 10V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V10" />
                <path d="M9 14H15" />
                <path d="M9 18H15" />
            </svg>
        ),
        features: [
            "Puntos de venta",
            "Control de stock y kardex",
            "Cuentas por cobrar y cierre de caja",
            "Retenciones y detracciones",
        ],
        description:
            "Ideal para ferreterías, markets, distribuidoras, repuestos, empresas de transportes, lubricentros, droguerías y tiendas en general.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        id: "eess",
        title: "EESS / Grifos",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h10v12H3z" />
                <path d="M13 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
                <path d="M13 12h4" />
                <path d="M20 6l-3 3" />
                <path d="M17 3l3 3" />
            </svg>
        ),
        features: [
            "Gestión de turnos, surtidores y usuarios",
            "Liquidaciones Sistema vs Despachos",
            "Captura automática del despacho",
            "Cuentas por cobrar y cierre de caja",
        ],
        description:
            "Exclusivo para estaciones de servicio, venta de combustible líquido o gas. Ideal para empresas de gasolina y petróleo.",
        color: "from-emerald-500 to-teal-600",
    },
    {
        id: "inmobiliarias",
        title: "Inmobiliarias",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
            </svg>
        ),
        features: ["Gestión de propiedades", "Control de alquileres", "Seguimiento de clientes", "Reportes financieros"],
        description:
            "Dirigido a inmobiliarias, constructoras o entidades que se dediquen al arrendamiento o compra y venta de inmuebles.",
        color: "from-amber-500 to-orange-600",
    },
    {
        id: "salud",
        title: "Salud",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
            </svg>
        ),
        features: [
            "Médicos y especialidades",
            "Citas presenciales y virtuales",
            "Historia clínica y fichas",
            "Historias y recetas en PDF",
        ],
        description:
            "Ideal para clínicas, consultorios y centros médicos de salud, integración con productos de farmacia para recetas de los médicos.",
        color: "from-rose-500 to-pink-600",
    },
    {
        id: "restobar",
        title: "Restobar",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
                <path d="M18 9h3" />
            </svg>
        ),
        features: [
            "Comandas desde tablet o pc",
            "Cola de pedidos en cocina",
            "Control de mesas y ambientes",
            "Gestión de combos y promociones",
        ],
        description:
            "Ideal para restaurantes, cafeterías, pollerías, cevicherías, comida rápida, bares, discotecas, karaokes.",
        color: "from-violet-500 to-purple-600",
    },
    {
        id: "resort",
        title: "Resort",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 10h18" />
                <path d="M3 6h18v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
                <path d="M8 3v3" />
                <path d="M16 3v3" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
            </svg>
        ),
        features: [
            "Gestión de pisos y habitaciones",
            "Reservas y anticipos",
            "Consumo y pedidos",
            "Gestión de restaurante",
        ],
        description:
            "Gestión de diversos tipos de alojamientos. Ideal para hoteles, hostales, albergues, hosterías, alojamientos, etc.",
        color: "from-cyan-500 to-blue-600",
    },
]

export default function Solutions() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <section className={`py-24 bg-background ${dmSans.className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Nuestras Soluciones</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Descubre nuestras soluciones empresariales diseñadas para optimizar y potenciar tu negocio con tecnología de
                        vanguardia
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution) => {
                        // Construir mensaje y URL de WhatsApp
                        const message = encodeURIComponent(`Quiero más información sobre ${solution.title}`);
                        const whatsappUrl = `https://wa.me/51953469369?text=${message}`;

                        return (
                            <div
                                key={solution.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(solution.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`
                      h-full bg-card border border-border rounded-2xl p-8
                      transition-all duration-300 ease-out
                      hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1
                      ${hoveredCard === solution.id ? "border-primary/50" : ""}
                    `}
                                >
                                    {/* Icon with gradient background */}
                                    <div className="mb-6">
                                        <div
                                            className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-xl
                      bg-gradient-to-br ${solution.color}
                      text-white shadow-lg
                      transition-transform duration-300 ease-out
                      ${hoveredCard === solution.id ? "scale-110 rotate-3" : ""}
                    `}
                                        >
                                            {solution.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{solution.title}</h3>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {solution.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg
                                                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty">{solution.description}</p>

                                    {/* CTA Button - Cambiado a enlace de WhatsApp */}
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                        w-full py-3 px-6 rounded-lg font-medium
                        bg-secondary text-secondary-foreground
                        border border-border cursor-pointer
                        transition-all duration-300 ease-out
                        hover:bg-[#10B981] hover:text-primary-foreground hover:border-primary
                        hover:shadow-lg hover:shadow-primary/20
                        inline-block text-center
                        ${hoveredCard === solution.id ? "translate-x-1" : ""}
                      `}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Más Información
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === solution.id ? "translate-x-1" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
