import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

/**
 * ProjectItem - Project showcase card with gradient accent, tags, and links
 * @param {object} props - Component props
 * @param {string} props.name - Project name
 * @param {string} props.desc - Project description
 * @param {string[]} props.tags - Technology tags
 * @param {string} props.gradient - Tailwind gradient classes
 * @param {string} props.image - Emoji or image for the project
 * @param {string} props.githubUrl - Optional GitHub repository URL
 * @param {string} props.demoUrl - Optional live demo URL
 */
export default function ProjectItem({
  name,
  desc,
  tags,
  gradient,
  image,
  githubUrl,
  demoUrl,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-[#0a0a12] border border-white/5 hover:border-white/10 transition-all"
    >
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
      <div className="p-6">
        <div className="text-4xl mb-4">{image}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-500 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-4 border-t border-white/5">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
          {!githubUrl && !demoUrl && (
            <span className="text-xs text-gray-600 italic">Coming soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
