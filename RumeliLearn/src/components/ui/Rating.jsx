import { Star } from 'lucide-react'

function Rating({ value = 0, max = 5, size = 'medium', showValue = true, reviewCount }) {
    const stars = []
    const fullStars = Math.floor(value)
    const hasHalfStar = value % 1 >= 0.5

    const sizeMap = {
        small: 14,
        medium: 16,
        large: 20
    }
    const starSize = sizeMap[size] || 16

    for (let i = 0; i < max; i++) {
        if (i < fullStars) {
            stars.push(<Star key={i} size={starSize} className="text-amber-400 fill-amber-400" />)
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<Star key={i} size={starSize} className="text-amber-400 fill-amber-200" />)
        } else {
            stars.push(<Star key={i} size={starSize} className="text-gray-300" />)
        }
    }

    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">{stars}</div>
            {showValue && (
                <span className="text-sm font-semibold text-gray-700 ml-1">{value.toFixed(1)}</span>
            )}
            {reviewCount !== undefined && (
                <span className="text-sm text-gray-400">({reviewCount.toLocaleString()})</span>
            )}
        </div>
    )
}

export default Rating
