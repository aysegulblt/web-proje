import { Link } from 'react-router-dom'
import { Linkedin, Youtube, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'X', icon: () => <span className="font-bold text-base">𝕏</span>, href: 'https://x.com/ogreniyor', color: 'hover:bg-gray-900 hover:text-white' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ogreniyor', color: 'hover:bg-blue-600 hover:text-white' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ogreniyor', color: 'hover:bg-red-600 hover:text-white' },
    ]

    return (
        <footer className="relative bg-gradient-to-br from-gray-50 via-violet-50/30 to-violet-50/30 mt-auto overflow-hidden border-t border-gray-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-5 group">
                            <div className="relative">
                                <img src="/logo.png" alt="Öğreniyor" className="w-12 h-12 object-contain" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Sparkles size={10} className="text-white" />
                                </div>
                            </div>
                            <span className="font-bold text-2xl text-gray-900">Öğreniyor</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Online kurslarla yeni beceriler öğrenin. Yazılım, tasarım, iş ve kişisel gelişim kategorilerinde yüzlerce kurs.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 ${social.color} hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Keşfet */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" />
                            Keşfet
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/kurslar" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Tüm Kurslar</Link></li>
                            <li><Link to="/kurslar?category=Yazılım" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Yazılım</Link></li>
                            <li><Link to="/kurslar?category=Tasarım" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Tasarım</Link></li>
                            <li><Link to="/kurslar?category=İş" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">İş</Link></li>
                            <li><Link to="/kurslar?category=Kişisel%20Gelişim" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Kişisel Gelişim</Link></li>
                        </ul>
                    </div>

                    {/* Hesabım */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" />
                            Hesabım
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/profil" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Profil</Link></li>
                            <li><Link to="/kurslarim" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Kurslarım</Link></li>
                            <li><Link to="/favoriler" className="text-gray-500 hover:text-violet-600 hover:pl-2 transition-all duration-200">Favoriler</Link></li>
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" />
                            İletişim
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:info@ogreniyor.com" className="flex items-center gap-3 text-gray-500 hover:text-violet-600 transition-colors group">
                                    <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                                        <Mail size={16} className="text-violet-600" />
                                    </div>
                                    info@ogreniyor.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+902121234567" className="flex items-center gap-3 text-gray-500 hover:text-violet-600 transition-colors group">
                                    <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                                        <Phone size={16} className="text-violet-600" />
                                    </div>
                                    +90 212 123 45 67
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                                        <MapPin size={16} className="text-violet-600" />
                                    </div>
                                    İstanbul, Türkiye
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        &copy; {currentYear} Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">Kullanım Şartları</a>
                        <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

