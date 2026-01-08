import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[60vh] py-12">
            <div className="text-center">
                <span className="text-9xl font-bold bg-gradient-to-br from-violet-600 to-violet-600 bg-clip-text text-transparent">
                    404
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Sayfa Bulunamadı</h1>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link to="/">
                        <Button variant="primary">Ana Sayfaya Dön</Button>
                    </Link>
                    <Link to="/kurslar">
                        <Button variant="secondary">Kursları Keşfet</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
