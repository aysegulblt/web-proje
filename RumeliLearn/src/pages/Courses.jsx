import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'
import { CourseList } from '../components/course'
import { FilterPanel } from '../components/ui'

function Courses() {
    const [searchParams] = useSearchParams()
    const {
        filteredCourses,
        setSelectedCategory,
        searchQuery,
        selectedCategory,
        selectedLevel
    } = useCourses()

    useEffect(() => {
        const category = searchParams.get('category')
        if (category) {
            setSelectedCategory(category)
        }
    }, [searchParams, setSelectedCategory])

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Tüm Kurslar</h1>
                    <p className="text-gray-500 mt-1">
                        {filteredCourses.length} kurs bulundu
                        {searchQuery && ` "${searchQuery}" için`}
                        {selectedCategory !== 'all' && ` - ${selectedCategory}`}
                        {selectedLevel !== 'all' && ` - ${selectedLevel}`}
                    </p>
                </div>

                <FilterPanel />

                <CourseList
                    courses={filteredCourses}
                    emptyMessage="Arama kriterlerinize uygun kurs bulunamadı."
                />
            </div>
        </div>
    )
}

export default Courses

