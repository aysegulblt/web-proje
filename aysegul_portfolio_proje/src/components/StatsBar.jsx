import { useEffect, useState } from "react";

// Sayı animasyonu için hook
function useCountUp(end, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(startValue + (end - startValue) * easeOut));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
}

export default function StatsBar({ stats }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
                <StatItem key={index} {...stat} delay={index * 100} />
            ))}
        </div>
    );
}

function StatItem({ value, label, suffix = "", delay }) {
    const [isVisible, setIsVisible] = useState(false);
    const count = useCountUp(isVisible ? value : 0, 2000);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className="text-center p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 hover:border-[#91BADB]/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-[#91BADB]">
                {count}
                <span className="text-xl">{suffix}</span>
            </div>
            <p className="text-xs md:text-sm text-foreground/60 mt-1">{label}</p>
        </div>
    );
}
