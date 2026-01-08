# BLG331 - WEB TEKNOLOJİLERİ PROJE RAPORU

**Proje Adı:** RumeliLearn - Online Kurs Platformu  
**Teslim Tarihi:** 11.01.2026  
**Geliştirici:** [Adınız Soyadınız] - [Öğrenci Numaranız]

## 1. Giriş
RumeliLearn, modern web teknolojileri kullanılarak geliştirilmiş, kullanıcı dostu bir online eğitim platformudur. Kullanıcıların kursları keşfetmesine, detaylarını incelemesine, kayıt olmasına ve öğrenim süreçlerini takip etmesine olanak tanır. Proje, React JS tabanlı olup, performanslı ve ölçeklenebilir bir mimariye sahiptir.

## 2. Kullanılan Teknolojiler ve Mimari
Proje, modern frontend geliştirme standartlarına uygun olarak aşağıdaki teknolojilerle oluşturulmuştur:

*   **React JS (Vite):** Hızlı geliştirme ve optimize edilmiş build süreci için.
*   **React Router Dom (v6):** SPA (Single Page Application) yapısında sayfa geçişlerini yönetmek için.
*   **Context API:** Uygulama genelindeki veri akışını (Kullanıcı oturumu, Kurs verileri, Tema tercihleri) yönetmek için `UserContext`, `CourseContext` ve `SidebarContext` oluşturulmuştur.
*   **Tailwind CSS:** Hızlı, tutarlı ve responsive bir tasarım sistemi oluşturmak için.
*   **LocalStorage:** Kullanıcının kayıtlı kurslarını ve favorilerini tarayıcıda kalıcı hale getirmek için.

## 3. Özellikler ve Fonksiyonlar

### 3.1 Ana Sayfa (Home)
*   Hero bölümünde öne çıkan kurs slider'ı.
*   Kategorilere göre hızlı erişim kartları.
*   "Popüler Kurslar" ve eğitmen tanıtım bölümleri.

### 3.2 Kurs Kataloğu ve Detaylar
*   **Filtreleme:** Kategori, Zorluk Seviyesi, Fiyat ve Puan'a göre dinamik filtreleme.
*   **Arama:** Anlık (real-time) kurs arama fonksiyonu.
*   **Kurs Detay:** Müfredat (Accordion yapısı), eğitmen bilgisi, yorumlar ve satın alma/kayıt butonları.

### 3.3 Kullanıcı Paneli
*   **Profil:** Detaylı öğrenme istatistikleri (Dairesel grafik, tamamlanan/devam eden kurs dağılımı).
*   **Kurslarım:** İlerleme çubukları ile kullanıcının aktif kurslarını takip etmesi.
*   **Favoriler:** Beğenilen kursların listelenmesi ve yönetimi.

## 4. Tasarım ve UI/UX
Proje genelinde "Violet" (Menekşe) ana renk teması kullanılmıştır. Bu renk seçimi, ***dijital*** ve ***bilgelik*** kavramlarını temsil ederek "Öğreniyor" logosuyla bütünlük sağlar. 
*   **Responsive:** Mobil, tablet ve masaüstü cihazlarda kusursuz görünüm.
*   **İkonografi:** Lucide React kütüphanesi ile modern ve anlaşılır ikonlar.
*   **Etkileşim:** Hover efektleri, geçiş animasyonları ve modal pencereler ile zenginleştirilmiş kullanıcı deneyimi.

## 5. Karşılaşılan Zorluklar ve Çözümler
*   **State Yönetimi:** Farklı bileşenler (Navbar, Profile, CourseList) arasındaki veri senkronizasyonu Context API kullanılarak merkezi bir yapıya kavuşturuldu.
*   **Filtreleme Mantığı:** Çoklu filtreleme kriterlerinin (hem kategori, hem arama, hem seviye) birleştirilmesi için `useEffect` ve `filter` metodları optimize edildi.

## 6. Sonuç
RumeliLearn projesi, fonksiyonel gereksinimlerin tamamını karşılayan, estetik ve modern bir web uygulaması olarak tamamlanmıştır. Kod kalitesi, bileşen bazlı yapı ve clean-code prensiplerine dikkat edilerek geliştirilmiştir.
