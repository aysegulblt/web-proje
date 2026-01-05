import profile from "../data/profile.json";
import { useLanguage } from "../context/LanguageContext";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import SocialLinks from "./SocialLinks";
import StatsBar from "./StatsBar";
import TechSlider from "./TechSlider";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t, lang } = useLanguage();

  // Typing animation için roller
  const typingRoles = t("hero.typingRoles") || ["Frontend Developer"];
  const typedText = useTypingAnimation(typingRoles, 100, 50, 2000);

  const title = lang === "tr" ? profile.titleTr : profile.titleEn;
  const bio = lang === "tr" ? profile.bioTr : profile.bioEn;
  const location = lang === "tr" ? profile.locationTr : profile.locationEn;

  // Stats verileri - Gerçek bilgiler
  const stats = [
    { value: 3, label: t("hero.stats.experience"), suffix: "+" },
    { value: 6, label: t("hero.stats.projects"), suffix: "" },
    { value: 11, label: t("hero.stats.skills"), suffix: "" },
    { value: 5, label: t("hero.stats.activities"), suffix: "+" },
  ];

  return (
    <section className="container py-16 md:py-24">
      {/* HERO CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* SOL - TEXT */}
        <div className="flex-1 space-y-6 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">
            {t("hero.greeting")}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="block text-glow animate-fade-in-delay-1">{profile.name}</span>
            <span className="block mt-3 text-xl sm:text-2xl text-[#91BADB] animate-fade-in-delay-2 min-h-[2em]">
              {typedText}
              <span className="inline-block w-[3px] h-6 bg-[#91BADB] ml-1 animate-pulse" />
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-foreground/70 animate-fade-in-delay-2">
            {bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-delay-3">
            {/* CV indir */}
            <a
              href={profile.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="cosmic-button bg-[#91BADB] text-slate-900 hover:shadow-[0_0_18px_rgba(145,186,219,0.55)] inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t("hero.downloadCV")}
            </a>

            <a
              href="/iletisim"
              className="cosmic-button bg-transparent border-2 border-[#91BADB] text-[#91BADB] hover:bg-[#91BADB] hover:text-slate-900 inline-flex items-center gap-2"
            >
              {t("hero.hireMe")}
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Tech Logo Slider */}
            <TechSlider />
          </div>

          <div className="flex items-center gap-4 animate-fade-in-delay-4">
            <SocialLinks profile={profile} />
            <span className="text-xs text-foreground/50">|</span>
            <p className="text-xs text-foreground/60">
              {t("hero.location")}{" "}
              <span className="text-[#91BADB]">{location}</span>
            </p>
          </div>
        </div>

        {/* SAĞ - PHOTO */}
        <div className="flex-1 flex justify-center animate-fade-in-delay-2">
          <div className="relative">
            {/* Dış orbital halkalar */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-[#91BADB]/20 animate-spin-slow" />
            <div className="absolute -inset-10 rounded-full border border-[#91BADB]/10 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute -inset-14 rounded-full border border-dotted border-[#91BADB]/5 animate-[spin_30s_linear_infinite]" />

            {/* Parlayan orbital noktalar */}
            <div className="absolute -inset-6 animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#91BADB] shadow-[0_0_10px_#91BADB]" />
            </div>
            <div className="absolute -inset-10 animate-[spin_12s_linear_infinite_reverse]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#91BADB]/70 shadow-[0_0_8px_#91BADB]" />
            </div>
            <div className="absolute -inset-14 animate-[spin_16s_linear_infinite]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#91BADB]/50 shadow-[0_0_6px_#91BADB]" />
            </div>

            {/* Animasyonlu glow arka plan */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#91BADB]/30 via-transparent to-[#91BADB]/20 blur-xl animate-pulse-subtle" />

            {/* Ana profil container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#91BADB]/30 shadow-[0_0_40px_rgba(145,186,219,0.25)]">
              {/* Gradient arka plan */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#91BADB]/20 via-transparent to-[#91BADB]/10" />

              <img
                src={profile.avatar}
                alt={profile.name}
                className="object-cover w-full h-full relative z-10"
                style={{ objectPosition: "center 30%" }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              {/* İç glow efektleri */}
              <div className="absolute inset-0 rounded-full ring-2 ring-[#91BADB]/30 ring-inset z-20" />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(145,186,219,0.2)] z-20" />

              {/* Üst highlight */}
              <div className="absolute top-0 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-full z-20" />
            </div>

            {/* Köşe parlamaları */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#91BADB]/60 blur-sm animate-bounce-subtle" />
            <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-[#91BADB]/40 blur-sm animate-float" />
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="animate-fade-in-delay-4">
        <StatsBar stats={stats} />
      </div>
    </section>
  );
}

