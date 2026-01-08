import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useCourses } from '../context/CourseContext'
import { CourseList } from '../components/course'
import Button from '../components/ui/Button'
import { Heart, Sparkles, BookOpen, Trash2 } from 'lucide-react'

function Favorites() {
    const { favorites, clearAllFavorites } = useUser()
    const { getCourseById } = useCourses()

    const favoriteCourses = favorites.map(id => getCourseById(id)).filter(Boolean)

    const handleClearAll = () => {
        if (window.confirm('Tüm favorilerinizi silmek istediğinizden emin misiniz?')) {
            clearAllFavorites()
        }
    }

    if (favorites.length === 0) {
        return (
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Favorilerim</h1>

                    {/* Professional Empty State */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-3xl border border-pink-100 shadow-sm">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-200/30 to-pink-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative flex flex-col items-center justify-center py-16 lg:py-24 px-6 text-center">
                            {/* Animated Icon Container */}
                            <div className="relative mb-8">
                                <div className="w-28 h-28 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-pink-500/30 animate-pulse">
                                    <Heart size={48} className="text-white" />
                                </div>
                                {/* Floating Sparkles */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                                    <Sparkles size={16} className="text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                Favori listeniz boş
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                                Beğendiğiniz kursları favorilere ekleyerek daha sonra kolayca erişebilirsiniz.
                                Hemen keşfetmeye başlayın!
                            </p>

                            {/* CTA Button */}
                            <Link to="/kurslar">
                                <Button
                                    variant="primary"
                                    size="large"
                                    icon={<BookOpen size={20} />}
                                >
                                    Kursları Keşfet
                                </Button>
                            </Link>

                            {/* Tips */}
                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-200/50">
                                    <Heart size={14} className="text-pink-500" />
                                    <span className="text-sm text-gray-600">Favorilere eklemek için ❤️ ikonuna tıklayın</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Favorilerim</h1>
                        <p className="text-gray-500 mt-1">{favorites.length} kurs favorilerinizde</p>
                    </div>
                    <button
                        onClick={handleClearAll}
                        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <Trash2 size={18} />
                        <span>Tümünü Temizle</span>
                    </button>
                </div>

                <CourseList courses={favoriteCourses} />
            </div>
        </div>
    )
}

export default Favorites

