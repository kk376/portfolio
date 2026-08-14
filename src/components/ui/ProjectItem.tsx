import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

export interface ProjectItemProps {
  name: string;
  desc: string;
  tags: string[];
  gradient: string;
  image?: ReactNode;
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
}

export default function ProjectItem({
  name,
  desc,
  tags,
  gradient,
  image,
  githubUrl,
  demoUrl,
  status = "Active",
}: ProjectItemProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl bg-[#0a0a12] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-xl"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            {image && <div className="text-3xl">{image}</div>}
            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium">
              <Sparkles size={12} className="text-cyan-400" />
              {status}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-white/5 rounded-md text-gray-400 border border-white/5 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                aria-label={`View source code for ${name}`}
              >
                <Github size={16} /> Code
              </a>
            ) : null}

            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                aria-label={`View live demo for ${name}`}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            ) : null}

            {!githubUrl && !demoUrl && (
              <span className="text-xs text-gray-500 italic">
                Repository coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
