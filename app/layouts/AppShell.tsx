"use client";

import Sidebar from "@/app/components/sidebar/Sidebar";
import TopBar from "@/app/components/topBar/TopBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        <TopBar />
        <main className="p-0">{children}</main>
      </div>
    </div>
  );
}
