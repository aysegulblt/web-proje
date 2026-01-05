import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import profile from "../data/profile.json";

export default function Footer() {
  const { lang } = useLanguage();

  const socialLinks = [
    { href: profile?.social?.github, Icon: Github, label: "GitHub" },
    { href: profile?.social?.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: profile?.email ? `mailto:${profile.email}` : "", Icon: Mail, label: "Email" },
  ].filter((x) => x.href);

  const copyrightText = lang === "tr"
    ? "Tüm hakları saklıdır."
    : "All rights reserved.";

  const madeWithText = lang === "tr"
    ? "ile yapıldı"
    : "Made with";

  return (
    <footer className="border-t border-border/40 mt-16">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Sol: Copyright */}
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Ayşegül Bulut. {copyrightText}
          </p>

          {/* Orta: Sosyal Linkler */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="p-2 rounded-full text-foreground/40 hover:text-[#91BADB] hover:bg-[#91BADB]/10 transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Sağ: Made with */}
          <p className="text-xs text-foreground/50 flex items-center gap-1">
            {madeWithText} <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
