import { useLanguage } from "../context/LanguageContext";
import { cn } from "../lib/utils";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="flex text-xs border border-border/60 rounded-full overflow-hidden">
      <button
        onClick={() => changeLanguage("tr")}
        className={cn(
          "px-3 py-1 transition-colors cursor-pointer select-none",
          lang === "tr"
            ? "bg-[#91BADB] text-slate-900"
            : "bg-card/60 text-foreground/70 hover:bg-card/80"
        )}
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={cn(
          "px-3 py-1 transition-colors cursor-pointer select-none",
          lang === "en"
            ? "bg-[#91BADB] text-slate-900"
            : "bg-card/60 text-foreground/70 hover:bg-card/80"
        )}
      >
        EN
      </button>
    </div>
  );
}
