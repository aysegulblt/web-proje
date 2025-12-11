// src/pages/Home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import { GradientBackground } from "../components/GradientBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  const [lang, setLang] = useState("tr"); // "tr" veya "en"

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Arka plan */}
      <GradientBackground />

      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} />
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
      </div>
    </div>
  );
};

export default Home;
