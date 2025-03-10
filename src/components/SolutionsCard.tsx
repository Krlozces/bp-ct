import Button from "./Button";
import Bulletpoint from "./icons/BulletpointSvg";

export default function SolutionsCard ({icon, title, items, description, buttonText}: {icon: React.ReactNode, title: string, items: string[], description: string, buttonText: string}) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E]/20 group flex flex-col h-full">
            {/* Encabezado */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#22C55E] rounded-lg group-hover:bg-[#22C55E]/20 transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#] transition-colors duration-300">{title}</h3>
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
            <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                {description}
            </p>

            {/* Botón */}
            <div className="mt-auto">
                <Button className="w-full bg-green-600 text-white font-medium py-3 rounded-md transition-all duration-200 hover:bg-green-600">
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}