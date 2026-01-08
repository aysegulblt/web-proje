function Button({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    loading = false,
    icon,
    onClick,
    type = 'button',
    className = ''
}) {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'text-white hover:-translate-y-0.5 active:translate-y-0',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white',
        ghost: 'text-gray-600 hover:bg-gray-100'
    }

    const variantStyles = {
        primary: { backgroundColor: '#9333ea', color: 'white' },
        secondary: {},
        danger: {},
        outline: {},
        ghost: {}
    }

    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    }

    const classNames = [
        baseClasses,
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size] || sizeClasses.medium,
        fullWidth && 'w-full',
        loading && 'relative',
        className
    ].filter(Boolean).join(' ')

    return (
        <button
            type={type}
            className={classNames}
            style={variantStyles[variant] || {}}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
                <>
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    )
}

export default Button
