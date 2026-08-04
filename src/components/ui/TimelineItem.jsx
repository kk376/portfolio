import { motion } from "framer-motion";

/**
 * TimelineItem - Experience timeline entry with alternating layout
 * @param {object} props - Component props
 * @param {string} props.year - Time period
 * @param {string} props.title - Main title
 * @param {string} props.subtitle - Subtitle or organization
 * @param {string} props.description - Description text
 * @param {string} props.side - Layout side ("left" | "right")
 */
export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  side,
}) {
  return (
    <div
      className={`relative flex items-center ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#030308] z-10" />
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`ml-16 md:ml-0 md:w-[45%] p-6 bg-[#0a0a12] border border-white/5 rounded-2xl ${
          side === "right" ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
        }`}
      >
        <span className="inline-block px-3 py-1 text-xs font-medium bg-white/5 rounded-full text-cyan-400 mb-3">
          {year}
        </span>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-purple-400 mb-2">{subtitle}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </motion.div>
    </div>
  );
}
