"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { INFRASTRUCTURE_TABS } from "@/lib/constants";

export default function InfrastructureTabs() {
  const [activeTab, setActiveTab] = useState("bildung");

  const tabs = INFRASTRUCTURE_TABS.map((tab) => ({
    id: tab.id,
    label: tab.label,
  }));

  const activeIndex = INFRASTRUCTURE_TABS.findIndex((tab) => tab.id === activeTab);
  const activeContent = INFRASTRUCTURE_TABS[activeIndex];

  return (
    <section className="bg-surface px-6 py-12 md:py-[70px]">
      <div className="mx-auto max-w-[1140px]">
        <SectionHeading
          title="Infrastruktur"
          subtitle="Alles in der Nähe, was Sie brauchen"
        />

        <div className="mb-10 flex justify-center">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="overflow-hidden rounded-[10px] bg-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)]">
          <div className="grid md:grid-cols-2">
            {/* Infrastructure photo – all preloaded, toggle via opacity */}
            <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[400px]">
              {INFRASTRUCTURE_TABS.map((tab, index) => (
                <Image
                  key={tab.id}
                  src={tab.image}
                  alt={tab.label}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Text content */}
            {activeContent && (
              <div className="flex flex-col justify-center p-10 md:p-14">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-5 text-[28px] font-normal text-text-dark">
                    {activeContent.label}
                  </h3>
                  <p className="text-lg leading-[30px] text-text">
                    {activeContent.description}
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
