import { ReactNode } from "react";
import { motion } from "framer-motion";

export type SkillColor = "cyan" | "violet" | "pink" | "emerald";

export interface SkillCardProps {
  title: string;
  icon: ReactNode;
  items: string[];
  color: SkillColor;
  description?: string;
}

const colorVariants: Record<SkillColor, { iconBg: string; text: string; badgeBorder: string }> = {
  cyan: {
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    text: "text-cyan-400",
    badgeBorder: "hover:border-cyan-500/30 hover:text-cyan-300",
  },
  violet: {
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    text: "text-violet-400",
    badgeBorder: "hover:border-violet-500/30 hover:text-violet-300",
  },
  pink: {
    iconBg: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    text: "text-pink-400",
    badgeBorder: "hover:border-pink-500/30 hover:text-pink-300",
  },
  emerald: {
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    text: "text-emerald-400",
    badgeBorder: "hover:border-emerald-500/30 hover:text-emerald-300",
  },
};

export default function SkillCard({
  title,
  icon,
  items,
  color,
  description,
}: SkillCardProps) {
  const styles = colorVariants[color] || colorVariants.cyan;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="p-6 bg-[#0a0a12] border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border ${styles.iconBg} transition-transform group-hover:scale-105`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-gray-500 mt-0.5">{description}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {items.map((item) => (
            <span
              key={item}
              className={`px-3 py-1.5 text-xs font-medium bg-white/[0.04] rounded-lg text-gray-300 border border-white/5 transition-colors ${styles.badgeBorder}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
