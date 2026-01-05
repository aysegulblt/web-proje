# Ayşegül Bulut - Kişisel Portfolyo Web Sitesi

Bu proje, **BLG331 Web Teknolojileri** dersi kapsamında geliştirilen kişisel portfolyo web sitesidir.

## 🚀 Teknolojiler

- **React 19** - UI kütüphanesi
- **Vite** - Build tool ve dev server
- **React Router v7** - Sayfa yönlendirmeleri
- **Tailwind CSS v4** - Styling
- **Context API** - State yönetimi (Tema, Dil)
- **Lucide React** - İkon kütüphanesi

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build önizlemesi
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/          # UI Bileşenleri
│   ├── AboutSection.jsx      # Hakkımda içeriği
│   ├── ContactSection.jsx    # İletişim formu
│   ├── GradientBackground.jsx # Animasyonlu arka plan
│   ├── HeroSection.jsx       # Ana sayfa hero
│   ├── LanguageSwitcher.jsx  # TR/EN dil değiştirici
│   ├── Modal.jsx             # Proje detay modalı
│   ├── ProjectCard.jsx       # Proje kartı
│   ├── ProjectsSection.jsx   # Projeler grid
│   ├── SkillBar.jsx          # Yetenek progress bar
│   ├── SkillCard.jsx         # Yetenek kartı
│   ├── SocialLinks.jsx       # Sosyal medya linkleri
│   └── ThemeToggle.jsx       # Dark/Light tema toggle
│
├── context/             # React Context'leri
│   ├── LanguageContext.jsx   # Dil yönetimi (TR/EN)
│   └── ThemeContext.jsx      # Tema yönetimi (Dark/Light)
│
├── data/                # Mock Data
│   ├── locales/              # Dil dosyaları
│   │   ├── tr.json           # Türkçe çeviriler
│   │   └── en.json           # İngilizce çeviriler
│   ├── profile.json          # Kişisel bilgiler
│   ├── projects.json         # Proje verileri
│   └── skills.json           # Yetenek verileri
│
├── layout/              # Layout Bileşenleri
│   ├── Footer.jsx            # Site footer
│   ├── Layout.jsx            # Ana layout wrapper
│   └── Navbar.jsx            # Navigasyon (hamburger menü dahil)
│
├── pages/               # Sayfa Bileşenleri
│   ├── Home.jsx              # / - Ana Sayfa
│   ├── About.jsx             # /hakkimda - Hakkımda
│   ├── Skills.jsx            # /yetenekler - Yetenekler
│   ├── Projects.jsx          # /projeler - Projeler
│   └── Contact.jsx           # /iletisim - İletişim
│
├── routes/              # Router Yapısı
│   └── AppRouter.jsx         # Route tanımlamaları
│
├── lib/                 # Yardımcı Fonksiyonlar
│   └── utils.js              # cn() utility fonksiyonu
│
├── App.jsx              # Ana uygulama bileşeni
├── main.jsx             # React giriş noktası
└── index.css            # Global stiller ve tema
```

## 🌐 Sayfalar (Routes)

| Route | Sayfa | Açıklama |
|-------|-------|----------|
| `/` | Ana Sayfa | Hero section, profil, CV indirme |
| `/hakkimda` | Hakkımda | Biyografi, eğitim, deneyim, hobiler |
| `/yetenekler` | Yetenekler | Kategorize edilmiş beceriler |
| `/projeler` | Projeler | Filtrelenebilir proje kartları |
| `/iletisim` | İletişim | İletişim formu |

## ✨ Özellikler

### Tema Değiştirme (Dark/Light Mode)
- Navbar'da ay/güneş ikonu ile toggle
- CSS custom properties ile tutarlı renk paleti
- LocalStorage'da tercih saklanır
- Smooth geçiş animasyonları

### Çoklu Dil Desteği (TR/EN)
- Navbar'da TR/EN toggle
- Tüm statik metinler iki dilde
- LocalStorage'da tercih saklanır
- `t()` fonksiyonu ile kolay çeviri erişimi

### Responsive Tasarım
- Mobil uyumlu grid yapıları
- Hamburger menü (mobil görünüm)
- Responsive breakpoints

### Form Validasyonu
- Zorunlu alan kontrolü
- E-posta formatı doğrulama
- Görsel hata mesajları
- Başarı bildirimi

## 📊 Veri Gereksinimleri

- ✅ **6 Proje** (Desktop, Research, Academic kategorileri)
- ✅ **11 Yetenek** (3 kategori: Frontend & Web, Programlama Dilleri, Araçlar & Diğer)
- ✅ **TR/EN Çeviriler** (tüm statik metinler)
- ✅ **CV Dosyası** (PDF formatı)

## 👤 Geliştirici

**Ayşegül Bulut**
- İstanbul Rumeli Üniversitesi - Bilgisayar Mühendisliği (3. Sınıf)
- GitHub: [aysegulblt](https://github.com/aysegulblt)
- LinkedIn: [Ayşegül Bulut](http://linkedin.com/in/ayşegül-bulut-740291351)

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
