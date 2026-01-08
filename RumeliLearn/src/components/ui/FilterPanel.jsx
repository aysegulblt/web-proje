import { useCourses } from '../../context/CourseContext'

function FilterPanel() {
    const {
        categories,
        levels,
        selectedCategory,
        setSelectedCategory,
        selectedLevel,
        setSelectedLevel,
        sortBy,
        setSortBy
    } = useCourses()

    const sortOptions = [
        { value: 'popular', label: 'En Popüler' },
        { value: 'rating', label: 'En Yüksek Puan' },
        { value: 'price-low', label: 'Fiyat (Düşükten Yükseğe)' },
        { value: 'price-high', label: 'Fiyat (Yüksekten Düşüğe)' }
    ]

    const categoryLabels = {
        'all': 'Tüm Kategoriler',
        'Yazılım': 'Yazılım',
        'Tasarım': 'Tasarım',
        'İş': 'İş',
        'Kişisel Gelişim': 'Kişisel Gelişim'
    }

    const levelLabels = {
        'all': 'Tüm Seviyeler',
        'Başlangıç': 'Başlangıç',
        'Orta': 'Orta',
        'İleri': 'İleri'
    }

    return (
        <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 mb-6">
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Kategori</label>
                <select
                    className="px-4 py-2 rounded-lg bg-gray-100 border border-transparent focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all text-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {categoryLabels[cat] || cat}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Seviye</label>
                <select
                    className="px-4 py-2 rounded-lg bg-gray-100 border border-transparent focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all text-sm"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                >
                    {levels.map(level => (
                        <option key={level} value={level}>
                            {levelLabels[level] || level}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sırala</label>
                <select
                    className="px-4 py-2 rounded-lg bg-gray-100 border border-transparent focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterPanel
