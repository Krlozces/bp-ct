export default function Button ({children}: {children: React.ReactNode}) {
    return (
        <div>
            <button className="bg-[#3B82F6] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:shadow-md hover:text-white hover:font-bold hover:cursor-pointer">
                {children}
            </button>
        </div>
    )
}
