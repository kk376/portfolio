import React, { useState, useEffect } from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { Shapes } from './Shapes';
import avatarImg from '../assets/github_avatar.jpg';

const phrases = [
  'Frontend & React Learner',
  'Linux Systems Explorer',
  'Upstream Contributor',
  'Python & SQL Developer',
  'Open Source Enthusiast',
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 110;

  useEffect(() => {
    const handleType = () => {
      const fullPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        if (currentText === fullPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Greg Floating Shapes */}
      <Shapes />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Avatar with colorful drop shadow / ring */}
        <div className="relative mb-7">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#252536] shadow-xl ring-4 ring-[var(--accent-primary)]/20 dark:ring-[var(--accent-primary)]/30 transition-transform duration-300 hover:scale-105">
            <img
              src={avatarImg}
              alt="Kushagra Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Active status pip */}
          <span
            className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#1E1E28]"
            title="Active Station: Fedora 44"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Kushagra Kumar
        </h1>

        {/* Dynamic Subtitle */}
        <div className="h-9 flex items-center justify-center mb-6">
          <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
            <span>I'm an </span>
            <span className="text-[var(--accent-primary)] font-semibold">{currentText}</span>
            <span className="inline-block w-0.5 h-5 bg-[var(--accent-primary)] ml-1 animate-pulse align-middle" />
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://github.com/kk376"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#252536] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/5 hover:text-[var(--accent-primary)] dark:hover:text-[var(--accent-primary)] hover:-translate-y-1 shadow-sm transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/kk376"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#252536] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/5 hover:text-[var(--accent-primary)] dark:hover:text-[var(--accent-primary)] hover:-translate-y-1 shadow-sm transition-all"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href="mailto:contact@kk376.dev"
            aria-label="Send email"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#252536] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/5 hover:text-[var(--accent-primary)] dark:hover:text-[var(--accent-primary)] hover:-translate-y-1 shadow-sm transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#contact" className="btn-coral">
            Contact Me
          </a>
          <a href="#portfolio" className="btn-secondary">
            View Projects
          </a>
        </div>

        {/* Scroll Down Widget */}
        <a href="#about" className="mouse-wrapper group">
          <span className="text-xs font-semibold uppercase tracking-wider group-hover:text-[var(--accent-primary)]">
            Scroll Down
          </span>
          <div className="mouse-box text-slate-400 group-hover:text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]">
            <span className="mouse-wheel" />
          </div>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-400 group-hover:text-[var(--accent-primary)]" />
        </a>
      </div>
    </section>
  );
};
