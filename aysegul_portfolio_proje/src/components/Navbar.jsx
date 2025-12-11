// src/components/Navbar.jsx
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = {
  tr: [
    { id: "hero", label: "Anasayfa" },
    { id: "about", label: "Hakkımda" },
    { id: "skills", label: "Yetenekler" },
    { id: "projects", label: "Projeler" },
    { id: "contact", label: "İletişim" },
  ],
  en: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
};

const Navbar = ({ lang, setLang }) => {
  const items = navItems[lang] ?? navItems.tr;

  return (
    <header className="w-full">
      <nav className="container flex items-center justify-between py-6">
        {/* LOGO / İSİM */}
        <a href="#hero" className="font-semibold text-lg">
          <span className="text-glow">Aysegul</span>
          <span className="text-[#91BADB]">BLT</span>{" "}
          <span className="text-foreground/70">Portfolio</span>
        </a>

        {/* Linkler */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-foreground/70 hover:text-[#91BADB] transition-colors"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sağ taraf: Dil seçici + tema */}
        <div className="flex items-center gap-3">
          {/* Dil seçici */}
          <div className="flex text-xs border border-border/60 rounded-full overflow-hidden">
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={cn(
                "px-3 py-1",
                lang === "tr"
                  ? "bg-[#91BADB] text-slate-900"
                  : "bg-card/60 text-foreground/70 hover:bg-card/80"
              )}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1",
                lang === "en"
                  ? "bg-[#91BADB] text-slate-900"
                  : "bg-card/60 text-foreground/70 hover:bg-card/80"
              )}
            >
              EN
            </button>
          </div>

          {/* Tema toggler */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
