import { useState } from "react";

export default function TabPanel({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <div className="space-y-6">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={[
                                "flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all",
                                isActive
                                    ? "bg-[#91BADB] text-slate-900"
                                    : "bg-card/60 text-foreground/70 border border-border/60 hover:border-[#91BADB]/50",
                            ].join(" ")}
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab content */}
            <div className="p-6 rounded-2xl bg-card/40 border border-border/60 backdrop-blur-sm">
                {activeContent}
            </div>
        </div>
    );
}
