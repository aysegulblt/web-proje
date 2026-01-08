import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useSidebar } from '../../context/SidebarContext'

function Layout({ children }) {
    const { isCollapsed } = useSidebar()

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className={`flex-1 flex flex-col transition-all duration-300 ml-0 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
                <Navbar />
                <main className="flex-1 p-4 lg:p-8">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
