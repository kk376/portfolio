import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const phrases = [
  'Frontend Apprentice',
  'Linux Systems Explorer',
  'Upstream Contributor',
  'AI Pair-Programmer',
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 120;

  useEffect(() => {
    const handleType = () => {
      const fullPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        if (currentText === fullPhrase) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 60 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Intro */}
        <p className="font-quicksand font-bold text-lg sm:text-xl text-[#7148fc] dark:text-[#09d8ff] mb-2 tracking-wide">
          Hey, I'm Kushagra.
        </p>

        {/* Main Headline */}
        <h1 className="font-quicksand text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-4">
          Apprentice Software Engineer
        </h1>

        {/* Typewriter Subtitle */}
        <div className="h-10 sm:h-12 flex items-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/50">
            <span className="w-2 h-2 rounded-full bg-[#7148fc] dark:bg-[#09d8ff] animate-pulse" />
            <span className="font-quicksand text-base sm:text-xl font-bold text-[#7148fc] dark:text-[#09d8ff]">
              {currentText}
            </span>
            <span className="w-0.5 h-5 bg-[#7148fc] dark:bg-[#09d8ff] animate-pulse" />
          </div>
        </div>

        {/* Tagline */}
        <p className="font-quicksand text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl leading-relaxed mb-8">
          I build modern web frontends with React &amp; Tailwind CSS while directing AI to diagnose Linux bottlenecks and ship upstream contributions.
        </p>

        {/* Andrew Baisden Signature Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="hero-cta-primary"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="hero-cta-secondary"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="#upstream"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-700 dark:text-slate-300 hover:text-[#7148fc] dark:hover:text-[#09d8ff] font-quicksand font-bold text-sm transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#7148fc] dark:text-[#09d8ff]" />
            <span>Upstream Dispatches</span>
          </a>
        </div>

        {/* Andrew Scene Controls / Status Bar */}
        <div className="andrew-card p-5 sm:p-6 bg-white dark:bg-[#202230] border border-slate-200 dark:border-[#2d3042]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="font-quicksand font-bold text-sm text-slate-900 dark:text-white block">
                  Active Station: Fedora 44 Workstation
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Kernel 6.14 (Zen 3, Wayland, Hybrid Graphics)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-quicksand font-bold">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-900/50">
                BCA 8.2 CGPA Distinction
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
                Cesium PR #214 Merged
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900/50">
                100% Upstream Disclosure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
