"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { INFRASTRUCTURE_TABS } from "@/lib/constants";

export default function InfrastructureTabs() {
  const [activeTab, setActiveTab] = useState("bildung");

  const tabs = INFRASTRUCTURE_TABS.map((tab) => ({
    id: tab.id,
    label: tab.label,
  }));

  const activeContent = INFRASTRUCTURE_TABS.find((tab) => tab.id === activeTab);

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

        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[10px] bg-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.11)]"
            >
              <div className="grid md:grid-cols-2">
                {/* Infrastructure photo */}
                <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[400px]">
                  <Image
                    src={activeContent.image}
                    alt={activeContent.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center p-10 md:p-14">
                  <h3 className="mb-5 text-[28px] font-normal text-text-dark">
                    {activeContent.label}
                  </h3>
                  <p className="text-lg leading-[30px] text-text">
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
