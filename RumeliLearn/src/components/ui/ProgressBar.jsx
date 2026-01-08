function ProgressBar({
    value = 0,
    max = 100,
    size = 'medium',
    showLabel = true,
    variant = 'primary',
    animated = true
}) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    const sizeClasses = {
        small: 'h-1.5',
        medium: 'h-2',
        large: 'h-3'
    }

    const variantClasses = {
        primary: 'bg-gradient-to-r from-violet-600 to-indigo-400',
        success: 'bg-gradient-to-r from-green-500 to-green-400',
        warning: 'bg-gradient-to-r from-amber-500 to-amber-400',
        danger: 'bg-gradient-to-r from-red-500 to-red-400'
    }

    return (
        <div className="flex items-center gap-3">
            <div className={`flex-1 bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
                <div
                    className={`h-full rounded-full transition-all duration-500 ${variantClasses[variant]} ${animated ? 'animate-pulse' : ''}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showLabel && (
                <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-right">
                    {Math.round(percentage)}%
                </span>
            )}
        </div>
    )
}

export default ProgressBar
