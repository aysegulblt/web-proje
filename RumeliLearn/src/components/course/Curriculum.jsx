import { useState } from 'react'
import { ChevronDown, ChevronUp, Play, Lock } from 'lucide-react'

function Curriculum({ sections, onLessonClick }) {
    const [openSections, setOpenSections] = useState([0])

    const toggleSection = (index) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    const totalLessons = sections.reduce((acc, section) => acc + section.lessons.length, 0)
    const totalDuration = sections.reduce((acc, section) => {
        return acc + section.lessons.reduce((lessonAcc, lesson) => {
            const [mins, secs] = lesson.duration.split(':').map(Number)
            return lessonAcc + mins + (secs / 60)
        }, 0)
    }, 0)

    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Müfredat</h3>
                <span className="text-sm text-gray-500">
                    {sections.length} bölüm • {totalLessons} ders • {Math.round(totalDuration)} dakika
                </span>
            </div>

            {/* Sections */}
            <div className="divide-y divide-gray-100">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <button
                            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            onClick={() => toggleSection(sectionIndex)}
                        >
                            <div className="text-left">
                                <span className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
                                    Bölüm {sectionIndex + 1}
                                </span>
                                <h4 className="text-gray-900 font-medium mt-1">{section.section}</h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-400">{section.lessons.length} ders</span>
                                {openSections.includes(sectionIndex)
                                    ? <ChevronUp size={20} className="text-gray-400" />
                                    : <ChevronDown size={20} className="text-gray-400" />
                                }
                            </div>
                        </button>

                        {/* Lessons */}
                        <div className={`overflow-hidden transition-all duration-300 ${openSections.includes(sectionIndex) ? 'max-h-[1000px]' : 'max-h-0'
                            }`}>
                            <div className="bg-gray-50 divide-y divide-gray-100">
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <div
                                        key={lessonIndex}
                                        className={`px-6 py-3 flex items-center gap-4 ${lesson.isPreview ? 'hover:bg-gray-100 cursor-pointer' : ''
                                            }`}
                                        onClick={() => lesson.isPreview && onLessonClick?.(sectionIndex, lessonIndex)}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${lesson.isPreview
                                                ? 'bg-violet-100 text-violet-600'
                                                : 'bg-gray-200 text-gray-400'
                                            }`}>
                                            {lesson.isPreview ? <Play size={14} /> : <Lock size={14} />}
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-gray-700 text-sm">{lesson.title}</span>
                                            {lesson.isPreview && (
                                                <span className="ml-2 text-xs text-violet-600 font-medium">Önizleme</span>
                                            )}
                                        </div>
                                        <span className="text-sm text-gray-400">{lesson.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Curriculum
