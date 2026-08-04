import { motion } from "framer-motion";

/**
 * StatCard - Displays a statistic with icon, value, and label
 * @param {object} props - Component props
 * @param {string} props.label - Stat label
 * @param {string} props.value - Stat value
 * @param {React.ReactNode} props.icon - Icon element
 * @param {string} props.color - Text color class (e.g., "text-cyan-400")
 * @param {string} props.gradient - Gradient classes for background
 */
export default function StatCard({ label, value, icon, color, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden p-6 bg-gradient-to-br ${gradient} border border-white/5 rounded-2xl text-center group cursor-pointer`}
    >
      <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
        {icon}
      </div>
      <h3 className={`text-3xl font-bold ${color} mb-1`}>{value}</h3>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
