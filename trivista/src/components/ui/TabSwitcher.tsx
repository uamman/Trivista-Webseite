"use client";

import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className="inline-flex gap-1 rounded-[30px] border-2 border-primary p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative min-w-[100px] rounded-[24px] px-6 py-2 text-base md:min-w-[120px] md:px-8 font-bold transition-colors duration-300 ${
            activeTab === tab.id
              ? "text-white"
              : "text-primary hover:text-primary/70"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="tab-pill"
              className="absolute inset-0 rounded-[24px] bg-primary"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
