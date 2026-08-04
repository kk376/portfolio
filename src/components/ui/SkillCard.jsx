import { motion } from "framer-motion";

const colorClasses = {
  cyan: "text-cyan-400 border-cyan-500/20",
  violet: "text-violet-400 border-violet-500/20",
  pink: "text-pink-400 border-pink-500/20",
  emerald: "text-emerald-400 border-emerald-500/20",
};

/**
 * SkillCard - Displays a skill category with icon and tags
 * @param {object} props - Component props
 * @param {string} props.title - Category title
 * @param {React.ReactNode} props.icon - Category icon
 * @param {string[]} props.items - Array of skill names
 * @param {string} props.color - Color theme ("cyan" | "violet" | "pink")
 */
export default function SkillCard({ title, icon, items, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-[#0a0a12] border border-white/5 rounded-2xl hover:border-white/10 transition-all"
    >
      <div
        className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${
          colorClasses[color]?.split(" ")[0]
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 text-xs font-medium bg-white/5 rounded-lg text-gray-300 border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
