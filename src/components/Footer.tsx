import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

/**
 * Footer - Global page footer displaying dynamic year copyright and profile channel links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#030308]/60 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-sm">
              <Terminal size={14} className="text-white" />
            </div>
            <p className="text-gray-400 text-sm">
              Designed & Built by{" "}
              <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
              aria-label="Send an email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-gray-500 text-xs md:text-sm">
            © {currentYear} Kushagra Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
