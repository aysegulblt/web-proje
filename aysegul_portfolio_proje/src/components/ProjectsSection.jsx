// src/components/ProjectsSection.jsx
export const ProjectsSection = ({ lang }) => {
  const isTr = lang === "tr";

  const projects = [
    {
      name: "EduTrack",
      tr: "Öğrenciler için burs, etkinlik ve proje takip masaüstü uygulaması (Java Swing).",
      en: "Desktop app for students to track scholarships, events and projects (Java Swing).",
      tags: ["Java", "Swing", "JSON"],
    },
    {
      name: "Portfolio Website",
      tr: "Kendi kişisel portfolyo sitem. React & Tailwind ile oluşturuldu.",
      en: "My personal portfolio, built with React & Tailwind.",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      name: "TÜBİTAK 2209-A",
      tr: "İlköğretim öğrencilerinde geri dönüşüm bilincini artırmaya yönelik eğitim projesi.",
      en: "Recycling awareness project for primary school students.",
      tags: ["Research", "Education", "Data"],
    },
  ];

  return (
    <section id="projects" className="container py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">
        {isTr ? "Projeler" : "Projects"}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="card-hover rounded-xl bg-card/70 border border-border/60 p-4 flex flex-col justify-between text-sm"
          >
            <div className="aspect-video mb-3 rounded-lg bg-gradient-to-br from-[#91BADB]/40 to-slate-900" />
            <h3 className="font-semibold mb-1">{p.name}</h3>
            <p className="text-xs text-foreground/70 mb-3">
              {isTr ? p.tr : p.en}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full border border-border/60 text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
