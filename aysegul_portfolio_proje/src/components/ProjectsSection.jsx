import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  lang,
  categories,
  activeFilter,
  setActiveFilter,
  filteredProjects,
  onOpenProject,
  t,
}) {
  return (
    <section className="container py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">{t("projects.title")}</h2>
        <p className="mt-3 text-sm text-foreground/70">{t("projects.subtitle")}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((c) => {
          const isActive = activeFilter === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActiveFilter(c.key)}
              className={[
                "px-4 py-2 rounded-full text-xs border transition",
                isActive
                  ? "bg-[#91BADB] text-slate-900 border-transparent"
                  : "bg-card/60 text-foreground/70 border-border/60 hover:bg-card/80",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} onOpen={onOpenProject} t={t} />
        ))}
      </div>
    </section>
  );
}

