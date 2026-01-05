// src/components/AboutSection.jsx
import { useLanguage } from "../context/LanguageContext";
import TabPanel from "./TabPanel";
import ProfileInfoCards from "./ProfileInfoCards";
import { GraduationCap, Briefcase, Heart, Calendar, Users } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      titleKey: "about.cards.frontend.title",
      valueKey: "about.cards.frontend.value",
    },
    {
      titleKey: "about.cards.uiux.title",
      valueKey: "about.cards.uiux.value",
    },
    {
      titleKey: "about.cards.academic.title",
      valueKey: "about.cards.academic.value",
    },
    {
      titleKey: "about.cards.volunteer.title",
      valueKey: "about.cards.volunteer.value",
    },
  ];

  // Eğitim ve deneyim verilerini al
  const educationItems = t("about.education.items");
  const experienceItems = t("about.experience.items");
  const clubItems = t("about.clubs.items");
  const hobbies = t("about.hobbies.items");

  // Tab içerikleri
  const tabs = [
    {
      id: "education",
      label: t("about.education.title"),
      icon: GraduationCap,
      content: (
        <div className="space-y-4">
          {Array.isArray(educationItems) &&
            educationItems.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-[#91BADB]/40"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#91BADB] border-4 border-background" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground/90">{item.school}</h4>
                  <p className="text-sm text-[#91BADB]">{item.department}</p>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Calendar className="w-3 h-3" />
                    <span>{item.years}</span>
                  </div>
                  <p className="text-xs text-foreground/70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      ),
    },
    {
      id: "experience",
      label: t("about.experience.title"),
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          {Array.isArray(experienceItems) &&
            experienceItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-card/60 border border-border/60 card-hover space-y-2"
              >
                <h4 className="font-semibold text-foreground/90">{item.role}</h4>
                <p className="text-sm text-[#91BADB]">{item.company}</p>
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <Calendar className="w-3 h-3" />
                  <span>{item.years}</span>
                </div>
                <p className="text-xs text-foreground/70">{item.description}</p>
              </div>
            ))}
        </div>
      ),
    },
    {
      id: "clubs",
      label: t("about.clubs.title"),
      icon: Users,
      content: (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.isArray(clubItems) &&
            clubItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-card/60 border border-border/60 card-hover"
              >
                <p className="font-semibold text-foreground/90 text-sm">{item.role}</p>
                <p className="text-sm text-[#91BADB] mt-1">{item.organization}</p>
                <p className="text-xs text-foreground/60 mt-2">{item.description}</p>
              </div>
            ))}
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="container py-24 space-y-14">
      {/* Başlık */}
      <div className="text-center space-y-3 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-semibold">{t("about.title")}</h2>
        <div className="mx-auto w-20 h-[2px] bg-[#91BADB] rounded-full" />
      </div>

      {/* BİYOGRAFİ VE BİLGİ KARTLARI */}
      <div className="flex flex-col lg:flex-row gap-12 items-start animate-fade-in-delay-1">
        {/* SOL: METİN */}
        <div className="flex-1 space-y-5 text-sm sm:text-base text-foreground/80 leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>

        {/* SAĞ: PROFİL BİLGİ KARTLARI */}
        <div className="flex-1">
          <ProfileInfoCards />
        </div>
      </div>

      {/* TABBED RESUME - Eğitim, Deneyim, Kulüpler */}
      <div className="animate-fade-in-delay-2">
        <TabPanel tabs={tabs} />
      </div>

      {/* HOBİLER */}
      <div className="space-y-6 animate-fade-in-delay-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#91BADB]/20">
            <Heart className="w-5 h-5 text-[#91BADB]" />
          </div>
          <h3 className="text-xl font-semibold">{t("about.hobbies.title")}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {Array.isArray(hobbies) &&
            hobbies.map((hobby, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm glass-card text-foreground/80 hover:border-[#91BADB]/60 hover:text-[#91BADB] transition-colors cursor-default"
              >
                {hobby}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
