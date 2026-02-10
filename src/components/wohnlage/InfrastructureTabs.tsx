"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ShoppingCart, Bus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { INFRASTRUCTURE_TABS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  bildung: GraduationCap,
  einkaufen: ShoppingCart,
  verkehr: Bus,
};

export default function InfrastructureTabs() {
  const [activeTab, setActiveTab] = useState("bildung");

  const tabs = INFRASTRUCTURE_TABS.map((tab) => ({
    id: tab.id,
    label: tab.label,
  }));

  const activeContent = INFRASTRUCTURE_TABS.find((tab) => tab.id === activeTab);
  const Icon = iconMap[activeTab] || GraduationCap;

  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Infrastruktur"
          subtitle="Alles in der Nähe, was Sie brauchen"
        />

        <div className="mb-8 flex justify-center">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-sm bg-white p-8 shadow-sm md:p-12"
            >
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                {/* Placeholder image */}
                <div className="flex h-48 w-full shrink-0 items-center justify-center rounded bg-surface md:w-64">
                  <Icon className="text-secondary" size={48} />
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-medium text-primary">
                    {activeContent.label}
                  </h3>
                  <p className="leading-relaxed text-text-light">
                    {activeContent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
