"use client";

import { MapPin, Package } from "lucide-react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  icon?: 'location' | 'package';
};

export default function Card({ title, children, icon }: CardProps) {
  const Icon = icon === 'location' ? MapPin : icon === 'package' ? Package : null;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <div className="h-11 px-5 flex items-center gap-2 bg-[#1a2942] text-white text-sm font-semibold">
        {Icon && <Icon size={16} className="text-white" />}
        {title}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
