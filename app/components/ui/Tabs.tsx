"use client";

type TTabProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function TTab({ label, active, onClick }: TTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative h-11 px-10 text-sm font-semibold transition-all",
        active
          ? [
              "bg-[#1a2942] text-white",
              "rounded-t-2xl",
              "shadow-lg",
              "z-10",
            ].join(" ")
          : [
              "bg-gray-100 text-gray-600",
              "rounded-t-xl",
              "hover:bg-gray-200",
            ].join(" "),
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export type { TTabProps as TTab };
