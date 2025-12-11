// src/components/AboutSection.jsx
export const AboutSection = ({ lang }) => {
  const isTr = lang === "tr";

  return (
    <section id="about" className="container py-20 space-y-8">
      <h2 className="text-3xl font-semibold text-center mb-4">
        {isTr ? "Hakkımda" : "About Me"}
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 space-y-4 text-sm text-foreground/80">
          <p>
            {isTr
              ? "İstanbul Rumeli Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Frontend geliştirme, UI/UX tasarım ve eğitim/çevre odaklı projeler üzerinde çalışıyorum."
              : "I’m a 2nd year Computer Engineering student at Istanbul Rumeli University. I focus on frontend development, UI/UX design, and projects around education and environmental awareness."}
          </p>
          <p>
            {isTr
              ? "TÜBİTAK 2209-A geri dönüşüm projesi, EduTrack öğrenci takip uygulaması ve gönüllü kulüp faaliyetleri benim için sadece projeler değil; aynı zamanda öğrenme ve üretme alanları."
              : "My TÜBİTAK 2209-A recycling project, the EduTrack student tracking app, and volunteer club activities are not just projects for me; they’re my main playgrounds for learning and creating."}
          </p>
          <p>
            {isTr
              ? "Kod yazarken temiz yapı ve anlaşılır arayüzlerden, ekip çalışması yaparken ise açık iletişimden yanayım."
              : "In code, I care about clean architecture and intuitive interfaces. In teams, I value clear communication and ownership."}
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            {
              labelTr: "Frontend Geliştirme",
              labelEn: "Frontend Development",
              value: "React • Vite • Tailwind",
            },
            {
              labelTr: "UI / UX Tasarım",
              labelEn: "UI / UX Design",
              value: "Figma • Prototyping",
            },
            {
              labelTr: "Akademik Projeler",
              labelEn: "Academic Projects",
              value: "TÜBİTAK 2209-A",
            },
            
          ].map((item) => (
            <div
              key={item.labelEn}
              className="card-hover rounded-md bg-card/60 border border-border/60 px-4 py-3"
            >
              <p className="text-sm font-semibold">
                {isTr ? item.labelTr : item.labelEn}
              </p>
              <p className="text-xs text-foreground/60 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
