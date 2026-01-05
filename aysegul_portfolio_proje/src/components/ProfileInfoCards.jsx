import { useLanguage } from "../context/LanguageContext";
import { Code, Palette, BookOpen, HeartHandshake } from "lucide-react";

export default function ProfileInfoCards() {
    const { t } = useLanguage();

    const cards = [
        {
            icon: Code,
            titleKey: "about.cards.frontend.title",
            valueKey: "about.cards.frontend.value",
        },
        {
            icon: Palette,
            titleKey: "about.cards.uiux.title",
            valueKey: "about.cards.uiux.value",
        },
        {
            icon: BookOpen,
            titleKey: "about.cards.academic.title",
            valueKey: "about.cards.academic.value",
        },
        {
            icon: HeartHandshake,
            titleKey: "about.cards.volunteer.title",
            valueKey: "about.cards.volunteer.value",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                    <div
                        key={idx}
                        className="p-4 rounded-xl bg-card/40 border border-border/60 backdrop-blur-sm flex flex-col items-center text-center space-y-2 hover:border-[#91BADB]/50 transition-colors"
                    >
                        <div className="p-2 rounded-lg bg-[#91BADB]/20">
                            <Icon className="w-5 h-5 text-[#91BADB]" />
                        </div>
                        <p className="text-xs text-foreground/60">{t(card.titleKey)}</p>
                        <p className="text-sm font-semibold text-foreground/90">{t(card.valueKey)}</p>
                    </div>
                );
            })}
        </div>
    );
}
