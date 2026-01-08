import { Routes, Route } from 'react-router-dom'
import { CourseProvider } from './context/CourseContext'
import { UserProvider } from './context/UserContext'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import MyCourses from './pages/MyCourses'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {
    return (
        <CourseProvider>
            <UserProvider>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/kurslar" element={<Courses />} />
                        <Route path="/kurs/:id" element={<CourseDetail />} />
                        <Route path="/kurslarim" element={<MyCourses />} />
                        <Route path="/favoriler" element={<Favorites />} />
                        <Route path="/profil" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </UserProvider>
        </CourseProvider>
    )
}

export default App
