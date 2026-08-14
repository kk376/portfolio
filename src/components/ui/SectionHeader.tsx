import { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  icon,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 text-white">
        <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
          {icon}
        </span>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-2 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
