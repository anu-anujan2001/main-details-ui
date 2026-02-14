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

      <button className="px-7 py-2 bg-[#dc2626] text-white text-sm font-semibold rounded-full hover:bg-[#b91c1c] transition-colors shadow-sm">
        Add T
      </button>
    </div>
  );
}
