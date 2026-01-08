import { useParams, useNavigate } from 'react-router-dom'
import { useCourses } from '../context/CourseContext'
import { useUser } from '../context/UserContext'
import Curriculum from '../components/course/Curriculum'
import ReviewList from '../components/course/ReviewList'
import InstructorCard from '../components/course/InstructorCard'
import Button from '../components/ui/Button'
import Rating from '../components/ui/Rating'
import Modal from '../components/ui/Modal'
import { useState } from 'react'
import { Clock, BookOpen, Globe, Award, Heart, CheckCircle, Users, Calendar, ArrowLeft } from 'lucide-react'

function CourseDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { getCourseById } = useCourses()
    const {
        isFavorite,
        toggleFavorite,
        isEnrolled,
        enrollCourse,
        unenrollCourse,
        getEnrollment,
        incrementProgress
    } = useUser()

    const [showEnrollModal, setShowEnrollModal] = useState(false)

    const course = getCourseById(id)
    const enrollment = getEnrollment(parseInt(id))

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Kurs Bulunamadı</h1>
                <p className="text-gray-500 mb-6">Aradığınız kurs mevcut değil.</p>
                <Button onClick={() => navigate('/kurslar')}>Kurslara Dön</Button>
            </div>
        )
    }

    const handleEnroll = () => {
        enrollCourse(course.id)
        setShowEnrollModal(true)
    }

    const handleUnenroll = () => {
        if (window.confirm('Bu kurstan kaydınızı iptal etmek istediğinizden emin misiniz? İlerlemeniz silinecektir.')) {
            unenrollCourse(course.id)
        }
    }

    const handleContinue = () => {
        incrementProgress(course.id, 10)
    }

    // Check if enrollment is within 30 days
    const canUnenroll = () => {
        if (!enrollment?.enrolledAt) return false
        const enrolledDate = new Date(enrollment.enrolledAt)
        const now = new Date()
        const daysDiff = Math.floor((now - enrolledDate) / (1000 * 60 * 60 * 24))
        return daysDiff <= 30
    }

    const getDaysRemaining = () => {
        if (!enrollment?.enrolledAt) return 0
        const enrolledDate = new Date(enrollment.enrolledAt)
        const now = new Date()
        const daysDiff = Math.floor((now - enrolledDate) / (1000 * 60 * 60 * 24))
        return Math.max(0, 30 - daysDiff)
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

                <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-2 text-white">
                            {/* Back Button */}
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white/90 hover:text-white transition-all duration-200 group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Geri Dön</span>
                            </button>

                            {/* Category & Level Badges */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-violet-600 rounded-full text-sm font-semibold shadow-lg shadow-violet-500/30">
                                    {course.category}
                                </span>
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                                    {course.level}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                                {course.title}
                            </h1>

                            {/* Description */}
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                                {course.description}
                            </p>

                            {/* Stats Row */}
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <Rating value={course.rating} reviewCount={course.reviewCount} />
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Users size={16} />
                                    </div>
                                    <span className="font-medium">{course.studentCount.toLocaleString()} öğrenci</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Calendar size={16} />
                                    </div>
                                    <span className="font-medium">Güncelleme: {new Date(course.lastUpdated).toLocaleDateString('tr-TR')}</span>
                                </div>
                            </div>

                            {/* Instructor Card */}
                            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                                <img
                                    src={course.instructorImage}
                                    alt={course.instructor}
                                    className="w-14 h-14 rounded-xl object-cover ring-2 ring-white/30 shadow-lg"
                                />
                                <div>
                                    <span className="text-white/70 text-sm block">Eğitmen</span>
                                    <span className="text-white font-bold text-lg">{course.instructor}</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-3xl font-bold text-green-500">₺{course.price}</span>
                                    {course.originalPrice && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through">₺{course.originalPrice}</span>
                                            <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                                                %{Math.round((1 - course.price / course.originalPrice) * 100)} indirim
                                            </span>
                                        </>
                                    )}
                                </div>

                                {isEnrolled(course.id) ? (
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>İlerleme</span>
                                                <span>{enrollment?.progress || 0}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="h-full bg-violet-600 rounded-full transition-all"
                                                    style={{ width: `${enrollment?.progress || 0}%` }}
                                                />
                                            </div>
                                        </div>
                                        <Button variant="primary" fullWidth onClick={handleContinue}>
                                            Devam Et
                                        </Button>
                                        {canUnenroll() ? (
                                            <button
                                                onClick={handleUnenroll}
                                                className="w-full mt-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                Kaydı İptal Et ({getDaysRemaining()} gün kaldı)
                                            </button>
                                        ) : (
                                            <p className="text-xs text-gray-400 text-center mt-2">
                                                İptal süresi doldu (ilk 30 gün)
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <Button variant="primary" fullWidth onClick={handleEnroll}>
                                        Kursa Kaydol
                                    </Button>
                                )}

                                <Button
                                    variant={isFavorite(course.id) ? 'danger' : 'secondary'}
                                    fullWidth
                                    onClick={() => toggleFavorite(course.id)}
                                    className="mt-3"
                                    icon={<Heart size={18} className={isFavorite(course.id) ? 'fill-current' : ''} />}
                                >
                                    {isFavorite(course.id) ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                                </Button>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="group p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl border border-violet-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300 cursor-default">
                                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
                                            <Clock size={20} className="text-white" />
                                        </div>
                                        <span className="block text-lg font-bold text-gray-900">{course.duration}</span>
                                        <span className="text-xs text-gray-500">Video İçerik</span>
                                    </div>
                                    <div className="group p-4 bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-xl border border-violet-100 hover:shadow-md hover:border-violet-200 transition-all duration-300 cursor-default">
                                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform">
                                            <BookOpen size={20} className="text-white" />
                                        </div>
                                        <span className="block text-lg font-bold text-gray-900">{course.lessonCount}</span>
                                        <span className="text-xs text-gray-500">Toplam Ders</span>
                                    </div>
                                    <div className="group p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 cursor-default">
                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                                            <Globe size={20} className="text-white" />
                                        </div>
                                        <span className="block text-lg font-bold text-gray-900">{course.language}</span>
                                        <span className="text-xs text-gray-500">Kurs Dili</span>
                                    </div>
                                    <div className="group p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 cursor-default">
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-amber-200 group-hover:scale-105 transition-transform">
                                            <Award size={20} className="text-white" />
                                        </div>
                                        <span className="block text-lg font-bold text-gray-900">Sertifika</span>
                                        <span className="text-xs text-gray-500">Ömür Boyu Erişim</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
                    {/* Learning Outcomes */}
                    {course.learningOutcomes && (
                        <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Bu kursta neler öğreneceksiniz?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.learningOutcomes.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Curriculum sections={course.curriculum} />
                    <InstructorCard
                        instructor={course.instructor}
                        image={course.instructorImage}
                        bio={course.instructorBio}
                    />
                    <ReviewList reviews={course.reviews} />
                </div>
            </section>

            {/* Enroll Success Modal */}
            <Modal
                isOpen={showEnrollModal}
                onClose={() => setShowEnrollModal(false)}
                title="Kayıt Başarılı! 🎉"
            >
                <div className="text-center py-4">
                    <p className="text-gray-600 mb-2">"{course.title}" kursuna başarıyla kaydoldunuz!</p>
                    <p className="text-gray-500 mb-6">Şimdi öğrenmeye başlayabilirsiniz.</p>
                    <div className="flex justify-center gap-3">
                        <Button variant="secondary" onClick={() => setShowEnrollModal(false)}>
                            Kapat
                        </Button>
                        <Button variant="primary" onClick={() => navigate('/kurslarim')}>
                            Kurslarıma Git
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CourseDetail
