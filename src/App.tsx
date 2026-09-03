import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Layout & Core Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BackgroundEffects from "./components/BackgroundEffects";
import Footer from "./components/Footer";

// Extracted Section Components
import {
  StatsSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "@/components/sections";

/**
 * Root Portfolio Application Component
 *
 * Manages top-level application states:
 * - Active section tracking via IntersectionObserver with asymmetric viewport margins.
 * - Smooth scroll coordinator compensating for fixed 70px header offset and mobile drawer animations.
 * - Dynamic scroll-to-top button visibility driven by Framer Motion scroll motion values.
 * - Skip-to-content accessibility anchor for keyboard navigation.
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  // Scroll threshold listener for scroll-to-top button.
  // Guarded with state comparison to prevent unnecessary React re-renders on every scroll pixel.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldShow = latest > 400;
    setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
  });

  // Active section tracking via IntersectionObserver.
  // rootMargin "-20% 0px -60% 0px" defines an asymmetric trigger band in the upper-middle viewport
  // to ensure sections trigger when their headings enter comfortable reading range rather than viewport edges.
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Smoothly navigates to a target section by ID.
   * Compensates for fixed header height and mobile drawer closing animation delay.
   */
  const handleNavClick = useCallback(
    (sectionId: string, e?: React.MouseEvent) => {
      e?.preventDefault();

      const wasMenuOpen = isMenuOpen;
      setIsMenuOpen(false);

      const doScroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          setActiveSection(sectionId);
        }
      };

      if (wasMenuOpen) {
        setTimeout(doScroll, 120);
      } else {
        doScroll();
      }
    },
    [isMenuOpen]
  );

  return (
    <div className="min-h-screen bg-[#030308] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Page Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Background Effect */}
      <BackgroundEffects />

      {/* Top Navigation */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <main
        id="main-content"
        className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-32"
      >
        {/* 1. Hero Section */}
        <HeroSection handleNavClick={handleNavClick} />

        {/* 2. Key Highlights / Stats */}
        <StatsSection />

        {/* 3. About Me Details */}
        <AboutSection />

        {/* 4. Current Tech Stack */}
        <SkillsSection />

        {/* 5. Real Projects & Roadmap */}
        <ProjectsSection />

        {/* 6. Experience / Journey Timeline */}
        <ExperienceSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Smooth Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white shadow-xl shadow-cyan-500/25 hover:scale-110 active:scale-95 transition-transform"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
