import { Code, Palette, Briefcase, Sparkles, BookOpen, User } from 'lucide-react'

function CourseProgressCard({ course, progress = 0, color = 'bg-emerald-500' }) {
    const icons = {
        'Yazılım': <Code size={20} />,
        'Tasarım': <Palette size={20} />,
        'İş': <Briefcase size={20} />,
        'Kişisel Gelişim': <Sparkles size={20} />
    }

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className={`w-12 h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center text-current`}>
                {icons[course?.category] || <BookOpen size={20} />}
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">{course?.title || 'Kurs Adı'}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                        <div
                            className={`h-full rounded-full ${color}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{progress}%</span>
                </div>
            </div>

            <div className="flex -space-x-2">
                {[1, 2, 3].map((_, i) => (
                    <span key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                        <User size={12} className="text-gray-500" />
                    </span>
                ))}
                {progress < 50 && (
                    <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-600 border-2 border-white flex items-center justify-center text-xs font-semibold">
                        +2
                    </span>
                )}
            </div>
        </div>
    )
}

export default CourseProgressCard
