import { useEffect, useState } from "react";

export default function SkillBar({ name, level, Icon }) {
  const [w, setW] = useState(0);

  // küçük animasyon (sayfa açılınca bar dolsun)
  useEffect(() => {
    const t = setTimeout(() => setW(level), 80);
    return () => clearTimeout(t);
  }, [level]);

  return (
    <div className="rounded-2xl bg-card/35 backdrop-blur-xl border border-white/10 dark:border-white/5 p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-[#91BADB]/40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {Icon ? <Icon className="w-4 h-4 text-[#91BADB]" /> : null}
          <p className="text-sm font-medium text-foreground/90">{name}</p>
        </div>
        <p className="text-xs text-foreground/60">{level}%</p>
      </div>

      <div className="mt-3 h-2 w-full rounded-full bg-border/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#91BADB] transition-[width] duration-700 ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}
