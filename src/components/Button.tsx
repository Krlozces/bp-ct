interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = "" }: ButtonProps) {
    return (
        <div>
            <button className={`bg-[#] text-white px-4 py-2 
                rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out 
                hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:shadow-md
                 hover:text-white hover:font-bold hover:cursor-pointer  transition-transform duration-100 ${className}`}>
                {children}
            </button>
        </div>
    )
}
