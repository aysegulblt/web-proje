import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Rating from '../ui/Rating'

function CourseSlider({ courses, autoPlay = true, interval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const timeoutRef = useRef(null)

    const goToSlide = (index) => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const goToNext = () => {
        goToSlide((currentIndex + 1) % courses.length)
    }

    const goToPrev = () => {
        goToSlide((currentIndex - 1 + courses.length) % courses.length)
    }

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setInterval(goToNext, interval)
        }
        return () => {
            if (timeoutRef.current) {
                clearInterval(timeoutRef.current)
            }
        }
    }, [currentIndex, autoPlay, interval])

    if (!courses || courses.length === 0) return null

    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {/* Slides */}
            {courses.map((course, index) => (
                <div
                    key={course.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                    <div className="relative h-full flex items-center px-8 md:px-16">
                        <div className="max-w-xl text-white">
                            <span className="inline-block px-3 py-1 bg-violet-600 rounded-full text-sm font-semibold mb-4">
                                {course.category}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h2>
                            <p className="text-gray-300 mb-4 line-clamp-2">
                                {course.description.slice(0, 150)}...
                            </p>
                            <div className="relative mb-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <Rating value={course.rating} reviewCount={course.reviewCount} textClass="text-white" />
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={course.instructorImage}
                                            alt={course.instructor}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <span className="text-sm">{course.instructor}</span>
                                    </div>
                                </div>
                                {/* Navigation Arrows - Mobile: Top (align with rating), Desktop: Hidden (use side arrows) */}
                                <div className="absolute top-0 -left-4 -right-4 flex md:hidden items-center justify-between pointer-events-none">
                                    <button
                                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/30 pointer-events-auto"
                                        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/30 pointer-events-auto"
                                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link
                                    to={`/kurs/${course.id}`}
                                    className="px-6 py-3 bg-violet-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
                                >
                                    Kursa Git
                                </Link>
                                <span className="text-2xl font-bold">₺{course.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows - Desktop only */}
            <button
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-all z-20"
                onClick={goToPrev}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-all z-20"
                onClick={goToNext}
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {courses.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                            ? 'w-8 bg-white'
                            : 'bg-white/50 hover:bg-white/70'
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default CourseSlider
