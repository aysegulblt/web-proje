import { createContext, useContext, useState, useEffect } from 'react'
import defaultUserData from '../data/user.json'

const UserContext = createContext()

const STORAGE_KEYS = {
    USER: 'rumelilearn_user_v1',
    FAVORITES: 'rumelilearn_favorites_v1',
    ENROLLED: 'rumelilearn_enrolled_v1'
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.USER)
        return saved ? JSON.parse(saved) : defaultUserData
    })

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES)
        return saved ? JSON.parse(saved) : defaultUserData.favorites || []
    })

    const [enrolledCourses, setEnrolledCourses] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.ENROLLED)
        return saved ? JSON.parse(saved) : defaultUserData.enrolledCourses || []
    })

    // Persist to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
    }, [user])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.ENROLLED, JSON.stringify(enrolledCourses))
    }, [enrolledCourses])

    // Favorites functions
    const addToFavorites = (courseId) => {
        if (!favorites.includes(courseId)) {
            setFavorites(prev => [...prev, courseId])
        }
    }

    const removeFromFavorites = (courseId) => {
        setFavorites(prev => prev.filter(id => id !== courseId))
    }

    const isFavorite = (courseId) => {
        return favorites.includes(courseId)
    }

    const toggleFavorite = (courseId) => {
        if (isFavorite(courseId)) {
            removeFromFavorites(courseId)
        } else {
            addToFavorites(courseId)
        }
    }

    const clearAllFavorites = () => {
        setFavorites([])
    }

    // Enrolled courses functions
    const enrollCourse = (courseId) => {
        if (!enrolledCourses.find(ec => ec.courseId === courseId)) {
            setEnrolledCourses(prev => [...prev, {
                courseId,
                progress: 0,
                enrolledAt: new Date().toISOString(),
                lastAccessedAt: new Date().toISOString()
            }])
        }
    }

    const unenrollCourse = (courseId) => {
        setEnrolledCourses(prev => prev.filter(ec => ec.courseId !== courseId))
    }

    const isEnrolled = (courseId) => {
        return enrolledCourses.some(ec => ec.courseId === courseId)
    }

    const getEnrollment = (courseId) => {
        return enrolledCourses.find(ec => ec.courseId === courseId)
    }

    const updateProgress = (courseId, progress) => {
        setEnrolledCourses(prev => prev.map(ec =>
            ec.courseId === courseId
                ? { ...ec, progress: Math.min(100, Math.max(0, progress)), lastAccessedAt: new Date().toISOString() }
                : ec
        ))
    }

    const incrementProgress = (courseId, amount = 5) => {
        const enrollment = getEnrollment(courseId)
        if (enrollment) {
            updateProgress(courseId, enrollment.progress + amount)
        }
    }

    const getCompletedCourses = () => {
        return enrolledCourses.filter(ec => ec.progress >= 100)
    }

    const getInProgressCourses = () => {
        return enrolledCourses.filter(ec => ec.progress > 0 && ec.progress < 100)
    }

    const getNotStartedCourses = () => {
        return enrolledCourses.filter(ec => ec.progress === 0)
    }

    // User profile functions
    const updateUser = (updates) => {
        setUser(prev => ({ ...prev, ...updates }))
    }

    // Statistics
    const getTotalLearningTime = () => {
        return enrolledCourses.reduce((total, ec) => {
            return total + (ec.progress * 0.5) // Simulated hours
        }, 0)
    }

    const value = {
        user,
        updateUser,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
        clearAllFavorites,
        enrolledCourses,
        enrollCourse,
        unenrollCourse,
        isEnrolled,
        getEnrollment,
        updateProgress,
        incrementProgress,
        getCompletedCourses,
        getInProgressCourses,
        getNotStartedCourses,
        getTotalLearningTime
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

export default UserContext
