import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, User, ChevronLeft, ChevronRight } from 'lucide-react'

function CalendarWidget() {
    const [currentDate, setCurrentDate] = useState(new Date())

    // Static events for demo - in a real app these would come from props or context filtered by date
    const events = [
        { time: '06:30', title: 'Planlama Toplantısı', subtitle: '@ Ofis', color: 'bg-violet-500' },
        { time: '08:35', title: 'E-Posta Pazarlama Dersi', subtitle: '@ Victoria', color: 'bg-violet-500' },
        { time: '10:25', title: 'Tasarım Senkronizasyonu', subtitle: '@ Ekip', color: 'bg-cyan-500' },
        { time: '12:00', title: 'Öğle Molası', subtitle: '', color: 'bg-blue-500' },
    ]

    const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

    const getDayName = () => {
        const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
        return days[currentDate.getDay()]
    }

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{getDayName()}</h3>
                <div className="flex items-center gap-2">
                    <Link to="/aktivite" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Bildirimler">
                        <Bell size={18} className="text-gray-500" />
                    </Link>
                    <Link to="/profil" className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center hover:bg-indigo-200 transition-colors" title="Profil">
                        <User size={18} className="text-violet-600" />
                    </Link>
                </div>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6 text-gray-600">
                <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-100 transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <span className="font-medium select-none">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-100 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Timeline */}
            <div className="relative pl-4 space-y-4">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
                {events.map((event, index) => (
                    <div key={index} className="relative flex items-start gap-4">
                        <span className="text-xs text-gray-400 w-12 pt-1">{event.time}</span>
                        <div className={`w-3 h-3 rounded-full ${event.color} mt-1.5 z-10 ring-2 ring-white`}></div>
                        <div className="flex-1 group cursor-pointer">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-violet-600 transition-colors">{event.title}</h4>
                            {event.subtitle && (
                                <p className="text-xs text-gray-500">{event.subtitle}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarWidget
