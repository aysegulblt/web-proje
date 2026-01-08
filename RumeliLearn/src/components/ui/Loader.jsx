function Loader({ size = 'medium', text = 'Yükleniyor...' }) {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12'
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3 p-8">
            <div className={`${sizeClasses[size]} border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin`}></div>
            {text && <p className="text-gray-500 text-sm">{text}</p>}
        </div>
    )
}

export default Loader
