import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles, Terminal } from "lucide-react";

/**
 * Navbar - Fixed navigation header with mobile responsive menu
 * @param {object} props - Component props
 * @param {boolean} props.isMenuOpen - Whether mobile menu is open
 * @param {function} props.setIsMenuOpen - Toggle mobile menu state
 * @param {string} props.activeSection - Currently active section ID
 * @param {function} props.handleNavClick - Navigation click handler
 */
export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleNavClick,
}) {
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030308]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#030308] animate-pulse" />
          </div>
          <span className="font-bold tracking-tight text-lg">
            Kushagra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              .dev
            </span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(item.toLowerCase(), e)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? "bg-white/10 text-cyan-400"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick("contact", e)}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
        >
          <Sparkles size={14} />
          Let's Connect
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-white"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#030308]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavClick(item.toLowerCase(), e);
                  }}
                  className="flex items-center gap-3 text-lg font-medium text-gray-400 hover:text-white transition-colors py-3 px-2 -mx-2 rounded-lg active:bg-white/10 cursor-pointer select-none"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <ChevronRight size={16} className="text-cyan-400" />
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
