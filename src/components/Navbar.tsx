import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles, Terminal, Github } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "../data/portfolioData";

export interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  handleNavClick: (sectionId: string, e?: React.MouseEvent) => void;
}

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleNavClick,
}: NavbarProps) {
  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#030308]/85 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={(e) => handleNavClick("about", e)}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Kushagra Kumar Home"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal size={16} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#030308] animate-pulse" />
          </div>
          <span className="font-bold tracking-tight text-lg text-white">
            Kushagra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-extrabold">
              .dev
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-white/10 text-cyan-400 font-semibold shadow-inner"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick("contact", e)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Sparkles size={14} />
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#030308]/98 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="p-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    handleNavClick(item.id, e);
                  }}
                  className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-xl transition-all ${
                    activeSection === item.id
                      ? "bg-white/10 text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-gray-500" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                >
                  <Github size={16} /> GitHub Profile
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick("contact", e)}
                  className="px-4 py-2 bg-cyan-500 text-black font-semibold text-xs rounded-full"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
