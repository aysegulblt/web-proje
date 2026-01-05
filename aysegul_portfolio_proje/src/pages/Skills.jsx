import skillsData from "../data/skills.json";
import { useLanguage } from "../context/LanguageContext";
import SkillBar from "../components/SkillBar";

import {
  Code,
  Palette,
  Bolt,
  GitBranch,
  Database,
  Coffee,
  Terminal,
  Speech,
  PenTool,
} from "lucide-react";

const iconMap = {
  code: Code,
  palette: Palette,
  bolt: Bolt,
  "git-branch": GitBranch,
  database: Database,
  coffee: Coffee,
  terminal: Terminal,
  speech: Speech,
  figma: PenTool,
  react: Code,
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section className="container py-20">
      {/* Başlık */}
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl font-semibold">{t("skills.title")}</h2>
        <p className="mt-3 text-sm text-foreground/70">{t("skills.subtitle")}</p>
      </div>

      {/* Progress Bars with Category Groups */}
      <div className="space-y-10 animate-fade-in">
        {skillsData.map((group) => {
          const groupTitle = lang === "tr" ? group.categoryTr : group.categoryEn;

          return (
            <div key={groupTitle} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#91BADB]">
                {groupTitle}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon] || null;
                  return (
                    <SkillBar
                      key={`${groupTitle}-${item.name}`}
                      name={item.name}
                      level={item.level}
                      Icon={Icon}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
