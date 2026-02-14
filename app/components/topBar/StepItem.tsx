"use client";

export default function StepItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-8 py-1.5 rounded-full text-xs font-semibold transition ${
        active ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
      }`}
    >
      <span
        className={`w-3 h-3 rounded-full border ${active ? "border-white" : "border-zinc-400"}`}
      />
      {label}
      <span className="ml-2 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
        S
      </span>
    </button>
  );
}
