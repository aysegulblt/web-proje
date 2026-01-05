import { useMemo, useState } from "react";
import projectsData from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";
import ProjectsSection from "../components/ProjectsSection";
import Modal from "../components/Modal";
import { ExternalLink, Github } from "lucide-react";

const ALL_KEY = "ALL";

export default function Projects() {
  const { t, lang } = useLanguage();

  // ✅ dil bağımsız filtre key'i
  const [activeFilter, setActiveFilter] = useState(ALL_KEY);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category).filter(Boolean));
    return [
      { key: ALL_KEY, label: t("projects.all") },
      ...Array.from(set).map((c) => ({
        key: c,
        label: t(`projects.categories.${c}`) || c
      })),
    ];
  }, [lang, t]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_KEY) return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const onOpenProject = (p) => setSelected(p);
  const onCloseProject = () => setSelected(null);

  const selectedTitle = selected && (lang === "tr" ? selected.titleTr : selected.titleEn);
  const selectedDesc = selected && (lang === "tr" ? selected.descriptionTr : selected.descriptionEn);

  return (
    <>
      <ProjectsSection
        lang={lang}
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredProjects={filteredProjects}
        onOpenProject={onOpenProject}
        t={t}
      />

      <Modal open={!!selected} onClose={onCloseProject} title={selectedTitle || ""}>
        {selected ? (
          <div className="space-y-5">
            <div className={[
              "aspect-video rounded-xl overflow-hidden border border-border/60",
              selected.id === "edutrack" ? "bg-white flex items-center justify-center" : "bg-gradient-to-br from-[#91BADB]/30 to-transparent"
            ].join(" ")}>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selectedTitle}
                  className={selected.id === "edutrack" ? "w-full h-full object-contain p-4" : "w-full h-full object-cover"}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : null}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">{selectedDesc}</p>

            <div>
              <p className="text-xs font-semibold text-foreground/70">{t("projects.technologies")}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.technologies?.map((x) => (
                  <span
                    key={x}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border/60 text-foreground/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {selected.githubUrl ? (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cosmic-button inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              ) : null}

              {selected.demoUrl ? (
                <a
                  href={selected.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gradient-border px-6 py-2 text-sm font-medium text-foreground/80 hover:text-foreground inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("projects.demo")}
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

