import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export interface ComingSoonCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  eta: string;
}

export default function ComingSoonCard({
  title,
  description,
  tags,
  gradient,
  emoji,
  eta,
}: ComingSoonCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="relative group rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 bg-[#0a0a12] transition-all duration-300 flex flex-col justify-between shadow-lg"
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/5 inline-block">
              {emoji}
            </span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-medium">
              <Clock size={12} />
              {eta}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
