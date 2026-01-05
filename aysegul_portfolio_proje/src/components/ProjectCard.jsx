export default function ProjectCard({ project, lang, onOpen, t }) {
  const title = lang === "tr" ? project.titleTr : project.titleEn;
  const desc = lang === "tr" ? project.descriptionTr : project.descriptionEn;

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={[
        "group text-left rounded-2xl overflow-hidden",
        "bg-card/40 backdrop-blur-xl",
        "border border-white/10 dark:border-white/5",
        "transition-all duration-300",
        "hover:-translate-y-2 hover:border-[#91BADB]/50",
        "hover:shadow-[0_8px_30px_rgba(145,186,219,0.2)]",
      ].join(" ")}
    >
      {/* image with overlay */}
      <div className={[
        "relative aspect-video w-full overflow-hidden",
        project.id === "edutrack" ? "bg-white flex items-center justify-center" : "bg-gradient-to-br from-[#91BADB]/30 to-transparent"
      ].join(" ")}>
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            className={[
              "w-full h-full transition-transform duration-500 group-hover:scale-110",
              project.id === "edutrack" ? "object-contain p-4" : "object-cover"
            ].join(" ")}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : null}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#91BADB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* content */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold group-hover:text-[#91BADB] transition-colors truncate">{title}</h3>
          {project.isFeatured ? (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#91BADB]/40 text-[#91BADB] bg-[#91BADB]/10 whitespace-nowrap flex-shrink-0">
              {t("projects.featured")}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-xs text-foreground/70 line-clamp-3">{desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded-full border border-border/60 text-foreground/70 group-hover:border-[#91BADB]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

