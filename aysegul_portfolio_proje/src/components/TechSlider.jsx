import { useState, useEffect } from "react";
import {
    Code,
    Database,
    GitBranch,
    Terminal,
    Coffee,
    Zap
} from "lucide-react";

const techStack = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Zap },
    { name: "Tailwind", icon: Code },
    { name: "Java", icon: Coffee },
    { name: "Git", icon: GitBranch },
    { name: "SQL", icon: Database },
    { name: "VS Code", icon: Terminal },
];

/**
 * TechSlider - Logo ve isim birlikte görünen geçiş
 */
export default function TechSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % techStack.length);
                setIsVisible(true);
            }, 300);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentTech = techStack[currentIndex];
    const Icon = currentTech.icon;

    return (
        <div
            className={[
                "flex items-center gap-2 px-3 py-2 rounded-full ml-4",
                "bg-transparent border-2 border-[#91BADB]",
                "transition-all duration-300 ease-in-out",
                isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90",
            ].join(" ")}
        >
            <Icon className="w-4 h-4 text-[#91BADB]" />
            <span className="text-xs font-medium text-[#91BADB]">
                {currentTech.name}
            </span>
        </div>
    );
}
