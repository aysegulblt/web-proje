function InstructorCard({ instructor, image, bio }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={image}
                    alt={instructor}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div className="min-w-0">
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wide block mb-1">Eğitmen</span>
                    <h3 className="text-lg font-bold text-gray-900 truncate" title={instructor}>{instructor}</h3>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{bio}</p>
        </div>
    )
}

export default InstructorCard
