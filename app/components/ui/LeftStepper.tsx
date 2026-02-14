"use client";
import type { LucideIcon } from "lucide-react";
import { Check, MapPin, Building2, Image as ImageIcon, User } from "lucide-react";

type StepKey = "Location" | "Sub1" | "Sub2" | "Sub3";

type Step = {
  key: StepKey;
  label: string;
  icon: LucideIcon;
};

function RailDot({ done }: { done?: boolean }) {
  return (
    <div
      className={[
        "w-6 h-6 rounded-full flex items-center justify-center transition-all",
        done
          ? "bg-teal-500"
          : "bg-white border-2 border-gray-300",
      ].join(" ")}
    >
      {done ? <Check className="w-3.5 h-3.5 text-white stroke-3" /> : null}
    </div>
  );
}

function IconCircle({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={[
          "w-12 h-12 rounded-full flex items-center justify-center transition-all",
          active ? "bg-cyan-100" : "bg-gray-50",
        ].join(" ")}
      >
        <Icon
          className={
            active ? "w-5 h-5 text-teal-600" : "w-5 h-5 text-gray-400"
          }
        />
      </div>

      <div
        className={[
          "text-xs font-medium",
          active ? "text-teal-600" : "text-gray-500",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  );
}

export default function LeftStepper({
  active = "Location",
  doneCount = 2,
}: {
  active?: StepKey;
  doneCount?: number;
}) {
  const steps: Step[] = [
    { key: "Location", label: "Location", icon: MapPin },
    { key: "Sub1", label: "Sub1", icon: Building2 },
    { key: "Sub2", label: "Sub2", icon: ImageIcon },
    { key: "Sub3", label: "Sub3", icon: User },
  ];

  return (
    <div className="w-36 py-5 bg-white border-r border-gray-100">
      <div className="relative pl-6 pr-4">
        {/* Vertical line - positioned on the left */}
        <div className="absolute left-9 top-0 bottom-0 w-[1] bg-gray-200" />

        {/* Content container */}
        <div className="relative">
          {/* Grid layout: dots on left, icons on right */}
          <div className="space-y-14">
            {steps.map((step, i) => {
              const isCompleted = i < doneCount;
              const activeTile = isCompleted || active === step.key;

              return (
                <div key={step.key} className="flex items-start gap-4">
                  {/* Left: Checkmark dot */}
                  <div className="shrink-0">
                    <RailDot done={isCompleted} />
                  </div>

                  {/* Right: Icon circle */}
                  <div className="shrink-0">
                    <IconCircle
                      icon={step.icon}
                      label={step.label}
                      active={activeTile}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
