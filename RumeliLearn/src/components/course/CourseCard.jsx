import { Link } from 'react-router-dom'
import { Heart, Clock, Users } from 'lucide-react'
import Rating from '../ui/Rating'
import Button from '../ui/Button'
import { useUser } from '../../context/UserContext'

function CourseCard({ course, showProgress = false }) {
    const { isFavorite, toggleFavorite, getEnrollment } = useUser()
    const enrollment = getEnrollment(course.id)

    const handleFavoriteClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(course.id)
    }

    return (
        <Link
            to={`/kurs/${course.id}`}
            className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                    className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isFavorite(course.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-white'
                        }`}
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite(course.id) ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                >
                    <Heart size={18} className={isFavorite(course.id) ? 'fill-current' : ''} />
                </button>
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
                    {course.level}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
                <span className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
                    {course.category}
                </span>
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    {course.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="w-6 h-6 rounded-full object-cover shrink-0"
                    />
                    <span className="truncate">{course.instructor}</span>
                </div>

                <Rating value={course.rating} size="small" reviewCount={course.reviewCount} />

                {showProgress && enrollment ? (
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-violet-600 to-indigo-400 rounded-full transition-all duration-500"
                                style={{ width: `${enrollment.progress}%` }}
                            />
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <span className="text-xs text-gray-500">{enrollment.progress}% tamamlandı</span>
                            <Button variant="primary" size="small">
                                {enrollment.progress === 100 ? 'Tekrar İzle' : 'Devam Et'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="pt-3 border-t border-gray-100 flex flex-wrap justify-between items-end gap-2">
                        <div className="flex flex-col">
                            {course.originalPrice && (
                                <span className="text-xs text-gray-400 line-through mb-0.5">₺{course.originalPrice}</span>
                            )}
                            <span className="text-lg font-bold text-violet-600 leading-none">₺{course.price}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                                <Users size={12} />
                                {course.studentCount?.toLocaleString()}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}

export default CourseCard
