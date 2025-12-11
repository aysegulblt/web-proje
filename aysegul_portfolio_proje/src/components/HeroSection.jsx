// src/components/HeroSection.jsx
export const HeroSection = ({ lang }) => {
  const isTr = lang === "tr";

  return (
    <section
      id="hero"
      className="container flex flex-col lg:flex-row items-center gap-12 py-20"
    >
      {/* SOL TARAF */}
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">
          {isTr ? "Merhaba, ben" : "Hi, I’m"}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-glow">
          <span className="block">
            Aysegul<span className="text-[#91BADB]">BLT</span>
          </span>
          <span className="block mt-2 text-2xl sm:text-3xl text-foreground/80">
            {isTr
              ? "Bilgisayar Mühendisliği öğrencisi & Frontend geliştirici adayı"
              : "Computer Engineering student & aspiring Frontend Developer"}
          </span>
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-foreground/70">
          {isTr
            ? "React, Tailwind ve modern web teknolojileriyle sade, temiz ve kullanıcı odaklı arayüzler geliştiriyorum. Üniversitede aldığım teknik eğitimle birlikte, TÜBİTAK projeleri ve gönüllü çalışmalarımı aynı potada eritmeye çalışıyorum."
            : "I build clean, user-focused interfaces with React, Tailwind, and modern web technologies. Alongside my Computer Engineering degree, I combine my experience from TÜBİTAK projects and volunteer work into my design and development process."}
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="cusmic-button bg-[#91BADB] text-slate-900 hover:shadow-[0_0_18px_rgba(145,186,219,0.8)]">
            {isTr ? "Benimle Çalış" : "Hire Me"}
          </button>

          <a
            href="#projects"
            className="gradient-border px-6 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            {isTr ? "Projeleri Gör" : "View Projects"}
          </a>
        </div>

        {/* İstatistik kutuları */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-md text-sm">
          <div className="card-hover rounded-md bg-card/60 border border-border/60 px-4 py-3 text-left">
            <p className="text-lg font-semibold text-[#91BADB]">5+</p>
            <p className="text-xs text-foreground/60">
              {isTr ? "Tamamlanan proje" : "Completed projects"}
            </p>
          </div>
          <div className="card-hover rounded-md bg-card/60 border border-border/60 px-4 py-3 text-left">
            <p className="text-lg font-semibold text-[#91BADB]">2+</p>
            <p className="text-xs text-foreground/60">
              {isTr ? "Yıllık deneyim (öğrenci)" : "Years of experience (student)"}
            </p>
          </div>
          <div className="card-hover rounded-md bg-card/60 border border-border/60 px-4 py-3 text-left">
            <p className="text-lg font-semibold text-[#91BADB]">3+</p>
            <p className="text-xs text-foreground/60">
              {isTr ? "Aktif topluluk / kulüp" : "Active communities"}
            </p>
          </div>
        </div>
      </div>

      {/* SAĞ TARAF – FOTOĞRAF / SİLUET */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-[#91BADB] to-slate-900/80 overflow-hidden card-hover">
          {/* Buraya kendi fotoğrafını / illüstrasyonunu koyabilirsin */}
          <img
            src="/profile.jpg"
            alt="Aysegul"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-[#91BADB]/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
