import { NavLink } from 'react-router-dom'
import { useSidebar } from '../../context/SidebarContext'
import {
    Home,
    Video,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    Heart
} from 'lucide-react'

function Sidebar() {
    const { isCollapsed, toggleSidebar } = useSidebar()

    const menuItems = [
        { to: '/', icon: <Home size={20} />, label: 'Ana Sayfa' },
        { to: '/kurslar', icon: <Video size={20} />, label: 'Kurslar' },
        { to: '/kurslarim', icon: <BookOpen size={20} />, label: 'Kurslarım' },
        { to: '/favoriler', icon: <Heart size={20} />, label: 'Favoriler' },
    ]

    return (
        <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 shadow-sm z-50 transition-all duration-300 hidden lg:flex flex-col ${isCollapsed ? 'w-20' : 'w-72'}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
                    <img src="/logo.png" alt="Öğreniyor" className="w-10 h-10 object-contain" />
                    {!isCollapsed && <span className="font-bold text-lg text-gray-900">Öğreniyor</span>}
                </div>
                {!isCollapsed && (
                    <button
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={toggleSidebar}
                        aria-label="Menüyü daralt"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}
            </div>

            {/* Expand button when collapsed */}
            {isCollapsed && (
                <button
                    className="p-3 mx-3 mt-2 rounded-lg hover:bg-gray-100 transition-colors flex justify-center"
                    onClick={toggleSidebar}
                    aria-label="Menüyü genişlet"
                >
                    <ChevronRight size={20} />
                </button>
            )}

            {/* Navigation */}
            <nav className="flex-1 py-4 overflow-y-auto">
                <ul className="space-y-1 px-3">
                    {menuItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-violet-50 text-violet-600 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    } ${isCollapsed ? 'justify-center' : ''}`
                                }
                                title={item.label}
                            >
                                <span className="flex-shrink-0">{item.icon}</span>
                                {!isCollapsed && <span>{item.label}</span>}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
                <div className={`flex items-center gap-2 text-sm text-gray-400 ${isCollapsed ? 'justify-center' : ''}`}>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {!isCollapsed && <span>{new Date().getFullYear()}</span>}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
