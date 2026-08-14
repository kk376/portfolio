import { motion } from "framer-motion";

export interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  highlight?: boolean;
}

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  side,
  highlight = false,
}: TimelineItemProps) {
  return (
    <div
      className={`relative flex items-center ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Node Dot */}
      <div
        className={`absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-[#030308] z-10 ${
          highlight
            ? "bg-cyan-400 ring-4 ring-cyan-500/20"
            : "bg-gradient-to-r from-cyan-500 to-purple-500"
        }`}
      />

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`ml-16 md:ml-0 md:w-[45%] p-6 bg-[#0a0a12] border rounded-2xl transition-all shadow-xl ${
          highlight
            ? "border-cyan-500/30 shadow-cyan-500/5 bg-gradient-to-br from-cyan-950/20 to-[#0a0a12]"
            : "border-white/5 hover:border-white/15"
        } ${side === "right" ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"}`}
      >
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
            highlight
              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              : "bg-white/5 text-gray-300 border border-white/5"
          }`}
        >
          {year}
        </span>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm font-medium text-purple-400 mb-2">{subtitle}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
}
