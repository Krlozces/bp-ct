import Button from "./Button";
import Bulletpoint from "./icons/BulletpointSvg";

export default function SolutionsCard ({icon, title, items, description, buttonText}: {icon: React.ReactNode, title: string, items: string[], description: string, buttonText: string}) {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center gap-2">
                {icon}
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <ul className="list-inside">
                {
                    items.map((item, index) => (
                        <li key={index} className="py-2">
                            <div className="flex"><Bulletpoint /> {item}</div>
                        </li>
                    ))
                }
            </ul>
            <p>
                {description}
            </p>
            <Button>
                {buttonText}
            </Button>
        </div>
    )
}
