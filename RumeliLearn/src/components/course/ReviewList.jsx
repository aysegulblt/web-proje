import Rating from '../ui/Rating'

function ReviewList({ reviews }) {
    if (!reviews || reviews.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>Henüz yorum yapılmamış.</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Öğrenci Yorumları</h3>
            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                            <img
                                src={review.avatar}
                                alt={review.user}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <span className="font-semibold text-gray-900 block">{review.user}</span>
                                        <Rating value={review.rating} size="small" showValue={false} />
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        {new Date(review.date).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewList
