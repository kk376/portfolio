import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  BarChart2,
} from "lucide-react";
import myPhoto from "../assets/myphoto.jpg";

/**
 * HeroSection - Main landing section with profile, intro, and CTAs
 * @param {object} props - Component props
 * @param {function} props.handleNavClick - Navigation click handler
 */
export default function HeroSection({ handleNavClick }) {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center"
    >
      {/* Photo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="mb-8 relative group cursor-pointer"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-spin-slow" />
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#030308] shadow-2xl">
          <img
            src={myPhoto}
            alt="Kushagra Kumar"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <motion.div
          className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-[#030308] rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs">✓</span>
        </motion.div>
      </motion.div>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm text-gray-400">
          Learning · Open to work
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="block text-gray-400 text-2xl md:text-3xl font-normal mb-2">
            Hello, I'm Kushagra
          </span>
          Turning Data into{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
              Insights
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M1 5.5C47 2.5 153 2.5 199 5.5"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 max-w-xl text-lg md:text-xl mb-10 leading-relaxed"
      >
        Learning MySQL right now. Python and Excel are next.
        Pushing to GitHub daily.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <a
          href="#journey"
          onClick={(e) => handleNavClick("experience", e)}
          className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
        >
          <BarChart2 size={18} />
          My Journey
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
        <a
          href="https://github.com/Kk376/ai-ml-journey"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105"
        >
          <Github size={18} />
          Daily Commits
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex gap-3"
      >
        <SocialLink href="https://github.com/Kk376" label="GitHub">
          <Github size={20} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/kushagra-kumar376/"
          label="LinkedIn"
        >
          <Linkedin size={20} />
        </SocialLink>
        <SocialLink href="mailto:kkushagra86@gmail.com" label="Email">
          <Mail size={20} />
        </SocialLink>
        <SocialLink href="tel:+917976753740" label="Phone">
          <Phone size={20} />
        </SocialLink>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-gray-500 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="group relative p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    >
      <span className="text-gray-400 group-hover:text-white transition-colors">
        {children}
      </span>
    </a>
  );
}
