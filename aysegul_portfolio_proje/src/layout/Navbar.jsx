import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/hakkimda", label: t("nav.about") },
    { to: "/yetenekler", label: t("nav.skills") },
    { to: "/projeler", label: t("nav.projects") },
    { to: "/iletisim", label: t("nav.contact") },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <nav className="container flex items-center justify-between py-6">
        {/* LOGO */}
        <NavLink
          to="/"
          className="font-semibold text-lg cursor-pointer select-none"
          onClick={closeMenu}
        >
          <span className="text-[#91BADB]">BLT</span>{" "}
          <span className="text-foreground/70">Portfolio</span>
        </NavLink>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "transition-colors cursor-pointer select-none",
                  isActive
                    ? "text-[#91BADB]"
                    : "text-foreground/70 hover:text-[#91BADB]",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* HAMBURGer MENÜ BUTONU (Mobil) */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2
                       border border-border/60 bg-card/70 hover:bg-card/90
                       transition-colors focus:outline-none focus:ring-2 focus:ring-[#91BADB]/70"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-[#91BADB]" />
            ) : (
              <Menu className="h-5 w-5 text-[#91BADB]" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBİL MENÜ PANEL */}
      <div
        className={[
          "md:hidden fixed top-[73px] left-0 right-0 z-40",
          "bg-card/95 backdrop-blur-xl border-b border-border/60",
          "overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container py-4 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  "px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer select-none",
                  isActive
                    ? "bg-[#91BADB]/20 text-[#91BADB]"
                    : "text-foreground/70 hover:bg-card/80 hover:text-[#91BADB]",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
