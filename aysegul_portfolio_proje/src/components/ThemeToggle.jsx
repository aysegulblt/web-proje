import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full p-2
                 border border-border/60 bg-card/70 hover:bg-card/90
                 transition-colors focus:outline-none
                 focus:ring-2 focus:ring-[#91BADB]/70"
      aria-label="Tema Değiştir"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-300" />
      ) : (
        <Moon className="h-4 w-4 text-[#91BADB]" />
      )}
    </button>
  );
}
