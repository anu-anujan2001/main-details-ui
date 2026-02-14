"use client";

import { useState } from "react";
import { BellDot, User, ChevronRight, ChevronsRight, ArrowLeftRight } from "lucide-react";
import StepItem from "./StepItem";

export default function TopBar() {
  const [activeStep, setActiveStep] = useState<"S-01" | "S-02">("S-01");

  return (
    <div className="w-full bg-white border-b border-zinc-300">
      {/* ROW 1 */}
      <div className="h-11 flex items-center justify-between px-6">
        <h1 className="text-sm font-semibold text-gray-800">Main Title</h1>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <BellDot className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-700">John Smith</span>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="h-10 px-6 flex items-center border-t border-zinc-200">
        <span className="text-xs text-gray-500">Main</span>
        <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
        <span className="text-xs text-gray-700 font-medium">Sub</span>
      </div>

      {/* ROW 3 */}
      <div className="h-12 px-6 flex items-center justify-between border-t border-zinc-200">
        <div className="flex items-center gap-3">
          <StepItem label="S - 01" active={activeStep === "S-01"} onClick={() => setActiveStep("S-01")} />
          <ChevronsRight className="w-4 h-4 text-zinc-500" />
          <StepItem label="S - 02" active={activeStep === "S-02"} onClick={() => setActiveStep("S-02")} />
        </div>

        <button className="w-9 h-9 rounded-full hover:bg-zinc-100 flex items-center justify-center">
          <ArrowLeftRight  className="w-5 h-5  text-zinc-700" />
        </button>
      </div>

      {/* ROW 4 */}
      <div className="h-10 px-6 flex items-center border-t border-zinc-200 bg-zinc-50">
        <ChevronRight className="w-4 h-4 text-zinc-600" />
        <span className="ml-2 text-xs font-semibold text-zinc-700">Main Details</span>
      </div>
    </div>
  );
}
