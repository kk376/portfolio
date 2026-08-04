import { Terminal, Heart } from "lucide-react";

/**
 * Footer - Site footer with branding and copyright
 */
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Terminal size={12} />
            </div>
            <span className="text-gray-400 text-sm">
              Built with{" "}
              <Heart
                size={12}
                className="inline text-red-400 mx-1"
                aria-label="love"
              />{" "}
              by Kushagra Kumar
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
