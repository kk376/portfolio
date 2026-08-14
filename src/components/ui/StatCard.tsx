import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  color: string;
  gradient: string;
}

export default function StatCard({
  label,
  value,
  icon,
  color,
  gradient,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden p-6 bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/20 rounded-2xl text-center group cursor-default transition-all shadow-lg backdrop-blur-sm`}
    >
      <div className="absolute top-3 right-3 text-white/20 group-hover:text-white/40 transition-colors">
        {icon}
      </div>
      <div className={`text-3xl font-extrabold ${color} tracking-tight mb-1`}>
        {value}
      </div>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}
