"use client";

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
    <div className="flex justify-center gap-1 rounded-sm bg-surface p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`rounded-sm px-6 py-2 text-sm font-medium tracking-wider uppercase transition-all ${
            activeTab === tab.id
              ? "bg-secondary text-white shadow-sm"
              : "text-text-light hover:text-text"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
