import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Search, User } from 'lucide-react'
import { useCourses } from '../../context/CourseContext'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()
    const { setSearchQuery: setGlobalSearchQuery } = useCourses()

    // Mobile menü - sadece gerekli sayfalar
    const navLinks = [
        { to: '/', label: 'Ana Sayfa' },
        { to: '/kurslar', label: 'Kurslar' },
        { to: '/kurslarim', label: 'Kurslarım' },
        { to: '/favoriler', label: 'Favoriler' },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            setGlobalSearchQuery(searchQuery)
            navigate('/kurslar')
        }
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e)
        }
    }

    return (
        <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - mobile only */}
                    <Link to="/" className="flex items-center gap-3 lg:hidden">
                        <img src="/logo.png" alt="Öğreniyor" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-lg text-gray-900">Öğreniyor</span>
                    </Link>

                    {/* Logo + Slogan - desktop - now clickable */}
                    <Link to="/" className="hidden lg:flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="Öğreniyor" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-lg text-gray-900">Öğreniyor</span>
                        <span className="text-gray-300 mx-2">|</span>
                        <span className="text-sm text-gray-400 italic">Öğrenmenin dijital yolu.</span>
                    </Link>

                    {/* Search Bar - center */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Kurs ara..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onKeyPress={handleKeyPress}
                                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 border border-transparent focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                            />
                        </div>
                    </form>

                    {/* Mobile menu toggle */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menü"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop - Profile only (navigation is in sidebar) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <NavLink
                            to="/profil"
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-violet-50 text-violet-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <User size={18} />
                            <span>Profil</span>
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-gray-100">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="relative mb-4 md:hidden">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Kurs ara..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100"
                            />
                        </form>

                        <ul className="space-y-1">
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                                ? 'bg-violet-50 text-violet-600 font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/profil"
                                    className={({ isActive }) =>
                                        `block px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                            ? 'bg-violet-50 text-violet-600 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Profil
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
