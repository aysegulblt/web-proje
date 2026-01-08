# RumeliLearn - Online Kurs Platformu

## Proje Hakkında
RumeliLearn, kullanıcıların çeşitli kategorilerde online kursları keşfedip takip edebildiği modern bir eğitim platformudur. Bu proje, **BLG331 - Web Teknolojileri** dersi dönem projesi olarak geliştirilmiştir.

## Özellikler

- **Modern ve Responsive Arayüz:** Tailwind CSS ile tasarlanmış, mobil uyumlu ve şık arayüz.
- **Kapsamlı Kurs Kataloğu:** Yazılım, Tasarım, İş ve Kişisel Gelişim kategorilerinde kurslar.
- **Gelişmiş Arama ve Filtreleme:** Kategori, seviye ve fiyat filtreleri ile anlık arama özelliği.
- **Kullanıcı İşlemleri:** 
  - Favorilere ekleme/çıkarma
  - Kursa kayıt olma ve kaydı iptal etme (ilk 30 gün)
  - Profil düzenleme ve ilerleme takibi
- **Detaylı İstatistikler:** Profil sayfasında görselleştirilmiş öğrenme istatistikleri ve grafikler.
- **Karanlık/Aydınlık Mod (Logo Uyumu):** "Violet" (Menekşe) temasıyla kurumsal kimlik uyumu.

## Kurulum Talimatları

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda Açın:**
   Tarayıcınızda `http://localhost:5173` (veya terminalde belirtilen port) adresine gidin.

## Kullanılan Teknolojiler

- **React JS:** Frontend kütüphanesi
- **React Router v6:** Sayfa yönlendirmeleri
- **Context API:** Global state yönetimi (UserContext, CourseContext)
- **Tailwind CSS:** CSS framework
- **Lucide React:** İkon seti

## Proje Yapısı

- `/src/components`: UI bileşenleri (Navbar, Footer, CourseCard vb.)
- `/src/pages`: Sayfa bileşenleri (Home, Courses, Profile vb.)
- `/src/context`: Global veri yönetimi
- `/src/data`: Mock veriler (courses.json, user.json)

## Geliştirici

- **Ad Soyad:** Ayşegül BULUT
- **Öğrenci No:** 231201004
