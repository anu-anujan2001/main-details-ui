"use client";

import { useState } from "react";
import { TTab } from "@/app/components/ui/Tabs";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("T 01");

  const tabs = ["T 01", "T 02", "T 03", "T 04", "T 05", "T 06"];

  return (
    <div className="px-6 pt-3 pb-1 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <TTab
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <button className="h-10 px-10 rounded-full text-white text-sm font-semibold
                         bg-linear-to-r from-[#b22a3b] to-[#0b1d39]
                         shadow-[0_10px_18px_rgba(0,0,0,0.25)]">
        Add T
      </button>
    </div>
  );
}
