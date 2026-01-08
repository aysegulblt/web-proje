import { createContext, useContext, useState, useMemo } from 'react'
import coursesData from '../data/courses.json'

const CourseContext = createContext()

export function CourseProvider({ children }) {
    const [courses] = useState(coursesData)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedLevel, setSelectedLevel] = useState('all')
    const [sortBy, setSortBy] = useState('popular')

    const categories = useMemo(() => {
        const cats = [...new Set(courses.map(course => course.category))]
        return ['all', ...cats]
    }, [courses])

    const levels = ['all', 'Başlangıç', 'Orta', 'İleri']

    const filteredCourses = useMemo(() => {
        let result = [...courses]

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            result = result.filter(course =>
                course.title.toLowerCase().includes(query) ||
                course.description.toLowerCase().includes(query) ||
                course.instructor.toLowerCase().includes(query)
            )
        }

        // Category filter
        if (selectedCategory !== 'all') {
            result = result.filter(course => course.category === selectedCategory)
        }

        // Level filter
        if (selectedLevel !== 'all') {
            result = result.filter(course => course.level === selectedLevel)
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price)
                break
            case 'price-high':
                result.sort((a, b) => b.price - a.price)
                break
            case 'rating':
                result.sort((a, b) => b.rating - a.rating)
                break
            case 'popular':
            default:
                result.sort((a, b) => b.studentCount - a.studentCount)
                break
        }

        return result
    }, [courses, searchQuery, selectedCategory, selectedLevel, sortBy])

    const getCourseById = (id) => {
        return courses.find(course => course.id === parseInt(id))
    }

    const getPopularCourses = (limit = 4) => {
        return [...courses].sort((a, b) => b.studentCount - a.studentCount).slice(0, limit)
    }

    const getFeaturedCourses = (limit = 5) => {
        return [...courses].sort((a, b) => b.rating - a.rating).slice(0, limit)
    }

    const getCoursesByCategory = (category, limit) => {
        const filtered = courses.filter(course => course.category === category)
        return limit ? filtered.slice(0, limit) : filtered
    }

    const value = {
        courses,
        filteredCourses,
        categories,
        levels,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedLevel,
        setSelectedLevel,
        sortBy,
        setSortBy,
        getCourseById,
        getPopularCourses,
        getFeaturedCourses,
        getCoursesByCategory
    }

    return (
        <CourseContext.Provider value={value}>
            {children}
        </CourseContext.Provider>
    )
}

export function useCourses() {
    const context = useContext(CourseContext)
    if (!context) {
        throw new Error('useCourses must be used within a CourseProvider')
    }
    return context
}

export default CourseContext
