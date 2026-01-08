import { useNavigate } from 'react-router-dom'
import { Code, PenTool, Briefcase, User } from 'lucide-react'

function CategoryGrid() {
    const navigate = useNavigate()

    const categories = [
        { id: 'Yazılım', name: 'Yazılım', icon: <Code size={32} />, color: 'bg-blue-50 text-blue-600' },
        { id: 'Tasarım', name: 'Tasarım', icon: <PenTool size={32} />, color: 'bg-pink-50 text-pink-600' },
        { id: 'İş', name: 'İş Dünyası', icon: <Briefcase size={32} />, color: 'bg-amber-50 text-amber-600' },
        { id: 'Kişisel Gelişim', name: 'Kişisel Gelişim', icon: <User size={32} />, color: 'bg-green-50 text-green-600' },
    ]

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Kategoriler</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => navigate(`/kurslar?category=${cat.id}`)}
                        className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl hover:border-violet-500 hover:shadow-md transition-all group"
                    >
                        <div className={`w-16 h-16 rounded-full ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                            {cat.icon}
                        </div>
                        <span className="font-semibold text-gray-900">{cat.name}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default CategoryGrid
