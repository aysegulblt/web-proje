import { Link, useNavigate } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'
import { useUser } from '../context/UserContext'
import { CourseCard, CourseProgressCard, CourseSlider } from '../components/course'
import { CategoryGrid } from '../components/ui'
import {
    Settings,
    MoreHorizontal,
    Star,
    Heart,
    Tag,
    Users
} from 'lucide-react'

function Home() {
    const { getPopularCourses, getCourseById, courses } = useCourses()
    const { enrolledCourses, favorites, toggleFavorite, isFavorite } = useUser()
    const navigate = useNavigate()

    const recommendedCourses = getPopularCourses(4)
    const featuredCourses = getPopularCourses(5)

    // Get enrolled courses with details
    const activeCourses = enrolledCourses
        .map(enrollment => {
            const course = getCourseById(enrollment.courseId)
            return course ? { ...enrollment, course } : null
        })
        .filter(Boolean)
        .slice(0, 3)

    // Select a featured course for the sidebar
    const sidebarFeaturedCourse = courses
        .filter(c => !enrolledCourses.find(ec => ec.courseId === c.id))
        .sort((a, b) => b.rating - a.rating)[0] || courses[0]

    return (
        <div className="space-y-8">
            {/* Featured Courses Slider */}
            <section>
                <CourseSlider courses={featuredCourses} autoPlay={true} interval={5000} />
            </section>

            {/* Categories */}
            <CategoryGrid />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - 2 columns */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Recommended Courses */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">İlginizi Çekebilecek Kurslar</h2>
                            <Link to="/kurslar" className="p-2 rounded-lg hover:bg-gray-100 transition-colors hidden sm:block">
                                <Settings size={20} className="text-gray-500" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recommendedCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </section>

                    {/* My Courses Progress */}
                    {activeCourses.length > 0 && (
                        <section className="bg-white rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Kurslarım</h2>
                                <button
                                    onClick={() => navigate('/kurslarim')}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <MoreHorizontal size={20} className="text-gray-500" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {activeCourses.map((item, index) => (
                                    <CourseProgressCard
                                        key={index}
                                        course={item.course}
                                        progress={item.progress}
                                        color={index % 2 === 0 ? 'bg-violet-600' : 'bg-violet-600'}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-6">
                    {/* Featured Course Card */}
                    {sidebarFeaturedCourse && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Haftanın Kursu</span>
                                <button
                                    onClick={() => toggleFavorite(sidebarFeaturedCourse.id)}
                                    className="p-1 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <Heart
                                        size={20}
                                        className={`transition-colors ${isFavorite(sidebarFeaturedCourse.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={sidebarFeaturedCourse.instructorImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"}
                                        alt={sidebarFeaturedCourse.instructor}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900 text-sm">{sidebarFeaturedCourse.instructor}</span>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Star size={12} className="text-amber-400 fill-amber-400" />
                                        {sidebarFeaturedCourse.rating} · {sidebarFeaturedCourse.studentCount} öğrenci
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{sidebarFeaturedCourse.title}</h3>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1"><Tag size={12} /> {sidebarFeaturedCourse.category}</span>
                                <span className="flex items-center gap-1"><Users size={12} /> {sidebarFeaturedCourse.studentCount}</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-bold text-green-600">₺{sidebarFeaturedCourse.price}</span>
                                <Link to={`/kurs/${sidebarFeaturedCourse.id}`} className="px-4 py-2 bg-violet-600 text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors" style={{ color: 'white' }}>
                                    İncele
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Overall Interest - User specifically requested to keep this */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4">
                        <div className="relative w-16 h-16">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                                <circle cx="32" cy="32" r="28" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                                <circle cx="32" cy="32" r="28" fill="none" stroke="#6366F1" strokeWidth="4" strokeDasharray="175" strokeDashoffset="80" strokeLinecap="round" />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-900">5.4</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Genel İlgi</h4>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4].map(i => (
                                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                    ))}
                                    <Star size={14} className="text-amber-400" />
                                </div>
                                <span className="text-sm text-gray-500">4.9/5</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Home
