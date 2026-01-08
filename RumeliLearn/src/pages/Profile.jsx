import { useState } from 'react'
import { useUser } from '../context/UserContext'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { BookOpen, CheckCircle, Clock, Heart, Edit3, Mail, Calendar, User, Camera } from 'lucide-react'

function Profile() {
    const {
        user,
        updateUser,
        enrolledCourses,
        getCompletedCourses,
        getTotalLearningTime,
        favorites
    } = useUser()

    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        bio: user.bio || '',
        avatar: user.avatar || ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(formData)
        setIsEditing(false)
    }

    const completedCount = getCompletedCourses().length
    const learningTime = getTotalLearningTime()

    const stats = [
        {
            label: 'Kayıtlı Kurs',
            value: enrolledCourses.length,
            icon: <BookOpen size={24} />,
            color: 'bg-violet-100 text-violet-600',
            bgClass: 'bg-violet-600'
        },
        {
            label: 'Tamamlanan',
            value: completedCount,
            icon: <CheckCircle size={24} />,
            color: 'bg-green-100 text-green-600',
            bgClass: 'bg-green-600'
        },
        {
            label: 'Öğrenme Saati',
            value: `${Math.round(learningTime)}`,
            icon: <Clock size={24} />,
            color: 'bg-orange-100 text-orange-600',
            bgClass: 'bg-orange-600'
        },
        {
            label: 'Favori',
            value: favorites.length,
            icon: <Heart size={24} />,
            color: 'bg-pink-100 text-pink-600',
            bgClass: 'bg-pink-600'
        }
    ]

    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Profil</h1>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
                    {/* Cover */}
                    <div className="h-32 bg-gradient-to-r from-violet-600 via-violet-600 to-pink-500"></div>

                    {/* Profile Info */}
                    <div className="px-6 pb-6">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-12">
                            {/* Avatar */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                                />
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="absolute bottom-1 right-1 w-9 h-9 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors border-2 border-white"
                                    title="Fotoğrafı değiştir"
                                >
                                    <Camera size={16} />
                                </button>
                            </div>

                            {/* Name & Title - Now clearly separated */}
                            <div className="flex-1 text-center md:text-left pt-2 md:pt-12">
                                <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                        <Mail size={14} className="text-violet-500" />
                                        {user.email}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                        <Calendar size={14} className="text-violet-500" />
                                        {new Date(user.joinDate).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long'
                                        })} tarihinden beri üye
                                    </span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="md:mb-2">
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsEditing(true)}
                                    icon={<Edit3 size={16} />}
                                >
                                    Profili Düzenle
                                </Button>
                            </div>
                        </div>

                        {user.bio && (
                            <p className="mt-4 text-gray-600 leading-relaxed">{user.bio}</p>
                        )}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -mr-6 -mt-6 transition-transform group-hover:scale-110 ${stat.bgClass}`}></div>

                            <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            <div className="relative z-10">
                                <span className="text-3xl font-bold text-gray-900 block mb-1 tracking-tight">{stat.value}</span>
                                <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning Progress & Detailed Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Main Progress Circle */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-fuchsia-100 rounded-full blur-3xl -ml-12 -mb-12"></div>

                        <h3 className="text-lg font-bold text-gray-900 mb-6 relative z-10">Genel İlerleme</h3>

                        <div className="relative w-48 h-48 mb-4">
                            <svg className="w-full h-full transform -rotate-90">
                                {/* Background Circle */}
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    className="text-gray-100"
                                    strokeWidth="12"
                                    fill="none"
                                    stroke="currentColor"
                                />
                                {/* Progress Circle */}
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    className="text-violet-600 transition-all duration-1000 ease-out"
                                    strokeWidth="12"
                                    strokeDasharray={2 * Math.PI * 88}
                                    strokeDashoffset={2 * Math.PI * 88 * (1 - (enrolledCourses.length > 0 ? (completedCount / enrolledCourses.length) : 0))}
                                    strokeLinecap="round"
                                    fill="none"
                                    stroke="currentColor"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-gray-900">
                                    {enrolledCourses.length > 0 ? Math.round((completedCount / enrolledCourses.length) * 100) : 0}%
                                </span>
                                <span className="text-sm text-gray-500 font-medium">Tamamlandı</span>
                            </div>
                        </div>
                    </div>

                    {/* Course Distribution */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                                <BookOpen size={20} className="text-violet-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Kurs Durumu</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Completed */}
                            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-green-700 font-semibold">Tamamlanan</span>
                                    <CheckCircle size={20} className="text-green-600" />
                                </div>
                                <div className="text-3xl font-bold text-green-800 mb-1">{completedCount}</div>
                                <div className="text-xs text-green-600 font-medium">Kurs bitirildi</div>
                            </div>

                            {/* Ongoing */}
                            <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-violet-700 font-semibold">Devam Eden</span>
                                    <Clock size={20} className="text-violet-600" />
                                </div>
                                <div className="text-3xl font-bold text-violet-800 mb-1">
                                    {enrolledCourses.filter(ec => ec.progress > 0 && ec.progress < 100).length}
                                </div>
                                <div className="text-xs text-violet-600 font-medium">Aktif öğrenim</div>
                            </div>

                            {/* Not Started */}
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-700 font-semibold">Başlanmamış</span>
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 border-dashed"></div>
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-1">
                                    {enrolledCourses.filter(ec => ec.progress === 0).length}
                                </div>
                                <div className="text-xs text-gray-500 font-medium">Henüz açılmadı</div>
                            </div>
                        </div>

                        {/* Recent Activity Mini List (Optional - can be expanded later) */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Son Aktivite</h4>
                            {enrolledCourses.filter(c => c.progress > 0).length > 0 ? (
                                <div className="space-y-3">
                                    {enrolledCourses
                                        .filter(c => c.progress > 0)
                                        .slice(0, 2)
                                        .map((course, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${course.progress >= 100 ? 'bg-green-500' : 'bg-violet-500'}`}></div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 text-sm line-clamp-1">{course.title}</p>
                                                        <p className="text-xs text-gray-500">% {course.progress} tamamlandı</p>
                                                    </div>
                                                </div>
                                                {course.progress >= 100 ? (
                                                    <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Tamamlandı ✓</span>
                                                ) : (
                                                    <span className="text-xs font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Devam Et →</span>
                                                )}
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 italic">Henüz bir aktivite yok.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Edit Profile Modal */}
                <Modal
                    isOpen={isEditing}
                    onClose={() => setIsEditing(false)}
                    title="Profili Düzenle"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profil Fotoğrafı URL</label>
                            <div className="flex gap-3 items-center">
                                <img
                                    src={formData.avatar || 'https://via.placeholder.com/60'}
                                    alt="Preview"
                                    className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                                />
                                <input
                                    type="url"
                                    name="avatar"
                                    value={formData.avatar}
                                    onChange={handleChange}
                                    placeholder="https://example.com/photo.jpg"
                                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all"
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Geçerli bir resim URL'si girin</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Hakkımda</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Kendinizi tanıtın..."
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>
                                İptal
                            </Button>
                            <Button type="submit" variant="primary">
                                Kaydet
                            </Button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default Profile
