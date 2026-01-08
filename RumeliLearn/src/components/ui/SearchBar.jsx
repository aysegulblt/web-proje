import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useCourses } from '../../context/CourseContext'

function SearchBar({ placeholder = 'Kurs ara...', onSearch, showSuggestions = true }) {
    const navigate = useNavigate()
    const { courses, setSearchQuery } = useCourses()
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        if (query.length >= 2 && showSuggestions) {
            const filtered = courses
                .filter(course =>
                    course.title.toLowerCase().includes(query.toLowerCase()) ||
                    course.category.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 5)
            setSuggestions(filtered)
            setShowDropdown(true)
        } else {
            setSuggestions([])
            setShowDropdown(false)
        }
    }, [query, courses, showSuggestions])

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            setSearchQuery(query)
            if (onSearch) {
                onSearch(query)
            } else {
                navigate('/kurslar')
            }
            setShowDropdown(false)
        }
    }

    const handleSuggestionClick = (course) => {
        navigate(`/kurs/${course.id}`)
        setQuery('')
        setShowDropdown(false)
    }

    return (
        <div className="relative w-full max-w-md" ref={wrapperRef}>
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-100 border border-transparent focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => query.length >= 2 && setShowDropdown(true)}
                    />
                    {query && (
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                            onClick={() => { setQuery(''); setSearchQuery(''); }}
                        >
                            <X size={16} className="text-gray-400" />
                        </button>
                    )}
                </div>
            </form>

            {showDropdown && suggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                    {suggestions.map(course => (
                        <div
                            key={course.id}
                            className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() => handleSuggestionClick(course)}
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-12 h-8 rounded object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <span className="block text-sm font-medium text-gray-900 truncate">{course.title}</span>
                                <span className="text-xs text-gray-500">{course.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar
