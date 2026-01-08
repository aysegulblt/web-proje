import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useCourses } from '../context/CourseContext'
import { CourseList } from '../components/course'
import Button from '../components/ui/Button'

function MyCourses() {
    const { enrolledCourses, getCompletedCourses, getInProgressCourses, getNotStartedCourses } = useUser()
    const { getCourseById } = useCourses()
    const [filter, setFilter] = useState('all')

    const getFilteredCourses = () => {
        let courseIds = []

        switch (filter) {
            case 'completed':
                courseIds = getCompletedCourses().map(ec => ec.courseId)
                break
            case 'in-progress':
                courseIds = getInProgressCourses().map(ec => ec.courseId)
                break
            case 'not-started':
                courseIds = getNotStartedCourses().map(ec => ec.courseId)
                break
            default:
                courseIds = enrolledCourses.map(ec => ec.courseId)
        }

        return courseIds.map(id => getCourseById(id)).filter(Boolean)
    }

    const filteredCourses = getFilteredCourses()

    const filters = [
        { value: 'all', label: 'Tümü', count: enrolledCourses.length },
        { value: 'in-progress', label: 'Devam Eden', count: getInProgressCourses().length },
        { value: 'completed', label: 'Tamamlanan', count: getCompletedCourses().length },
        { value: 'not-started', label: 'Başlanmamış', count: getNotStartedCourses().length }
    ]

    if (enrolledCourses.length === 0) {
        return (
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Kurslarım</h1>
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <span className="text-6xl mb-4">📚</span>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Henüz bir kursa kayıt olmadınız</h2>
                        <p className="text-gray-500 mb-6">Kursları keşfedip öğrenmeye başlayın!</p>
                        <Link to="/kurslar">
                            <Button variant="primary">Kursları Keşfet</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Kurslarım</h1>
                    <p className="text-gray-500 mt-1">{enrolledCourses.length} kursa kayıtlısınız</p>
                </div>

                <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 mb-8 no-scrollbar scroll-smooth">
                    {filters.map(f => (
                        <button
                            key={f.value}
                            style={filter === f.value ? {
                                background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
                            } : {}}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0 ${filter === f.value
                                ? 'scale-[1.02]'
                                : 'bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-violet-100 hover:text-violet-600'
                                }`}
                            onClick={() => setFilter(f.value)}
                        >
                            {f.label}
                            <span
                                style={filter === f.value ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' } : {}}
                                className={`ml-2 px-2.5 py-0.5 rounded-lg text-xs font-bold ${filter === f.value
                                    ? ''
                                    : 'bg-violet-50 text-violet-600'
                                    }`}
                            >
                                {f.count}
                            </span>
                        </button>
                    ))}
                </div>

                <CourseList
                    courses={filteredCourses}
                    showProgress={true}
                    emptyMessage="Bu kategoride kurs bulunmuyor."
                />
            </div>
        </div>
    )
}

export default MyCourses
