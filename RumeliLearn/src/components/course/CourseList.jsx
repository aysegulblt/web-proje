import CourseCard from './CourseCard'
import { BookOpen, Sparkles } from 'lucide-react'

function CourseList({ courses, showProgress = false, emptyMessage = 'Kurs bulunamadı.' }) {
    if (!courses || courses.length === 0) {
        return (
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-2xl border border-violet-100 shadow-sm">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/30 to-violet-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative flex flex-col items-center justify-center py-12 px-6 text-center">
                    {/* Animated Icon Container */}
                    <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/25">
                            <BookOpen size={36} className="text-white" />
                        </div>
                        {/* Floating Sparkle */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                            <Sparkles size={14} className="text-white" />
                        </div>
                    </div>

                    <p className="text-gray-600 text-lg font-medium">{emptyMessage}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map(course => (
                <CourseCard
                    key={course.id}
                    course={course}
                    showProgress={showProgress}
                />
            ))}
        </div>
    )
}

export default CourseList

