import Button from "./Button";
import Bulletpoint from "./icons/BulletpointSvg";

export default function SolutionsCard ({icon, title, items, description, buttonText}: {icon: React.ReactNode, title: string, items: string[], description: string, buttonText: string}) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E]/20 group">
            {/* Encabezado */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#22C55E]/10 rounded-lg group-hover:bg-[#22C55E]/20 transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#22C55E] transition-colors duration-300">{title}</h3>
            </div>

            {/* Lista de items */}
            <ul className="space-y-3 mb-6">
                {
                    items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <div className="mt-1">
                                <Bulletpoint />
                            </div>
                            <span className="text-gray-600">{item}</span>
                        </li>
                    ))
                }
            </ul>

            {/* Descripción */}
            <p className="text-gray-500 mb-6 leading-relaxed">
                {description}
            </p>

            {/* Botón */}
            <div className="transform group-hover:translate-y-[-2px] transition-transform duration-300">
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium py-3 rounded-lg transition-colors duration-300">
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}
