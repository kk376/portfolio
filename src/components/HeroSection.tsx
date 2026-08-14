import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  Code2,
  ArrowDown,
} from "lucide-react";
import myPhoto from "../assets/myphoto.jpg";
import { PERSONAL_INFO } from "../data/portfolioData";

export interface HeroSectionProps {
  handleNavClick: (sectionId: string, e?: React.MouseEvent) => void;
}

export default function HeroSection({ handleNavClick }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center relative pt-8"
      aria-label="Introduction & Bio"
    >
      {/* Profile Photo with Glow Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-8 relative group"
      >
        <div
          className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#030308] shadow-2xl bg-[#0a0a12]">
          <img
            src={myPhoto}
            alt="Kushagra Kumar profile photo"
            className="w-full h-full object-cover"
            loading="eager"
            width={128}
            height={128}
          />
        </div>
        <motion.div
          className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 border-4 border-[#030308] rounded-full flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          title="Actively building & learning"
        >
          <span className="text-white text-xs font-bold">✓</span>
        </motion.div>
      </motion.div>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] rounded-full border border-white/10 mb-6 shadow-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm text-gray-300 font-medium">
          {PERSONAL_INFO.status}
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-6 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
          <span className="block text-gray-400 text-xl sm:text-2xl md:text-3xl font-normal mb-3">
            Hello, I'm Kushagra Kumar
          </span>
          Building Foundations in{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
            Python & SQL
          </span>
        </h1>
      </motion.div>

      {/* Bio Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl mb-10 leading-relaxed font-normal"
      >
        BCA graduate (8.2 CGPA) learning programming and data from the ground up.
        Practicing core <strong className="text-gray-200 font-semibold">Python</strong>,{" "}
        <strong className="text-gray-200 font-semibold">MySQL</strong>, and CLI tools with consistent daily commits on GitHub.
      </motion.p>

      {/* Primary CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        <a
          href="#projects"
          onClick={(e) => handleNavClick("projects", e)}
          className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
        >
          <Code2 size={18} />
          View My Projects
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
        <a
          href={PERSONAL_INFO.journeyRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
        >
          <Github size={18} />
          Daily Learning Repo
        </a>
      </motion.div>

      {/* Social Links Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="flex gap-3 mb-16"
        aria-label="Social and Contact Channels"
      >
        <SocialLink href={PERSONAL_INFO.githubUrl} label="GitHub Profile">
          <Github size={20} />
        </SocialLink>
        <SocialLink href={PERSONAL_INFO.linkedinUrl} label="LinkedIn Profile">
          <Linkedin size={20} />
        </SocialLink>
        <SocialLink href={`mailto:${PERSONAL_INFO.email}`} label="Send Email">
          <Mail size={20} />
        </SocialLink>
        <SocialLink href={`tel:${PERSONAL_INFO.phone}`} label="Phone Contact">
          <Phone size={20} />
        </SocialLink>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-500 text-xs flex flex-col items-center gap-1.5"
      >
        <span className="uppercase tracking-widest font-semibold text-[10px]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={14} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="p-3.5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-200 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white hover:scale-105"
      title={label}
    >
      {children}
    </a>
  );
}
