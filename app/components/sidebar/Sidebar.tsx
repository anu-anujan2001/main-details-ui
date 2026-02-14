"use client";

import { SquareMousePointer } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 min-h-screen flex flex-col items-center border-r border-zinc-300 bg-white">
      {/* Logo */}
      <div className="border-b border-zinc-300 flex w-full justify-center">
        <SquareMousePointer className="w-10 h-10 m-2" />
      </div>

      {/* Menu */}
      <div className="mt-6 flex flex-col gap-4 text-xs">
        <a href="#" className="flex flex-col items-center gap-1 text-zinc-900 font-semibold">
          Home
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-zinc-700">
          <SquareMousePointer className="w-5 h-5" />
          Menu2
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-zinc-700">
          <SquareMousePointer className="w-5 h-5" />
          Menu3
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-zinc-700">
          <SquareMousePointer className="w-5 h-5" />
          Menu4
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-zinc-700">
          <SquareMousePointer className="w-5 h-5" />
          Menu5
        </a>
      </div>
    </div>
  );
}
