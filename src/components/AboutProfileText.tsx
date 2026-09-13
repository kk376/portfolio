import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight, User, Wrench, Award, Compass, RefreshCw } from 'lucide-react';
import { AndrewSectionHeader } from './AndrewSectionHeader';

interface AboutCard {
  id: string;
  label: string;
  accent: string;
  headline: string;
  description?: string;
  points: string[];
  icon: React.ReactNode;
  visual: React.ReactNode;
}

const ProfileVisual = () => (
  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 text-xs font-mono space-y-2">
    <div className="flex items-center justify-between text-[#7148fc] dark:text-[#09d8ff] font-bold">
      <span>apprentice: kushagra</span>
      <span>2026 active</span>
    </div>
    <div className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
      <p>&gt; track: frontend web craftsmanship</p>
      <p>&gt; core: html5, css3, javascript, react, tailwind</p>
      <p>&gt; pairing: directed ai with hardware verification</p>
    </div>
  </div>
);

const ToolingVisual = () => (
  <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200/60 dark:border-cyan-900/40 text-xs font-mono space-y-2">
    <div className="flex items-center justify-between text-[#0e8aa8] dark:text-cyan-400 font-bold">
      <span>workstation toolchain</span>
      <span>fedora 44</span>
    </div>
    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
      <div className="p-1.5 rounded bg-white dark:bg-[#15161e] border border-cyan-200 dark:border-cyan-900/40 text-center font-semibold">
        Zed &amp; VS Code
      </div>
      <div className="p-1.5 rounded bg-white dark:bg-[#15161e] border border-cyan-200 dark:border-cyan-900/40 text-center font-semibold">
        Ghostty &amp; Bash
      </div>
      <div className="p-1.5 rounded bg-white dark:bg-[#15161e] border border-cyan-200 dark:border-cyan-900/40 text-center font-semibold">
        Rust &amp; procfs
      </div>
      <div className="p-1.5 rounded bg-white dark:bg-[#15161e] border border-cyan-200 dark:border-cyan-900/40 text-center font-semibold">
        Vite &amp; Oxlint
      </div>
    </div>
  </div>
);

const ExperienceVisual = () => (
  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-mono space-y-2">
    <div className="flex items-center justify-between text-[#0c9b56] dark:text-emerald-400 font-bold">
      <span>verified credentials</span>
      <span>sgvu &amp; upstream</span>
    </div>
    <div className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
      <p className="font-semibold text-emerald-700 dark:text-emerald-300">* BCA Degree (8.2 CGPA Distinction)</p>
      <p>* Merged: Cesium Tactical Sonar PR #214</p>
      <p>* Fixed: Mission Center PCIe D3cold Thrash</p>
    </div>
  </div>
);

const OpenToVisual = () => (
  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs font-quicksand space-y-2">
    <div className="p-2 rounded-lg bg-white dark:bg-[#15161e] border border-amber-200 dark:border-amber-900/40">
      <p className="font-bold text-slate-900 dark:text-white">Junior Frontend Engineer</p>
      <span className="text-slate-500 dark:text-slate-400 text-[11px]">React, Tailwind CSS, JavaScript</span>
    </div>
    <div className="p-2 rounded-lg bg-white dark:bg-[#15161e] border border-amber-200 dark:border-amber-900/40">
      <p className="font-bold text-slate-900 dark:text-white">Apprentice Software Engineer</p>
      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Full stack &amp; systems tooling</span>
    </div>
  </div>
);

const ProcessVisual = () => (
  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 text-xs font-mono space-y-2">
    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
      <div className="p-2 rounded bg-white dark:bg-[#15161e] border border-rose-200 dark:border-rose-900/40">
        <span className="font-bold text-rose-600 block">01</span>
        <span>Spot</span>
      </div>
      <div className="p-2 rounded bg-white dark:bg-[#15161e] border border-rose-200 dark:border-rose-900/40">
        <span className="font-bold text-rose-600 block">02</span>
        <span>Pair</span>
      </div>
      <div className="p-2 rounded bg-white dark:bg-[#15161e] border border-rose-200 dark:border-rose-900/40">
        <span className="font-bold text-rose-600 block">03</span>
        <span>Ship</span>
      </div>
    </div>
    <p className="text-center font-quicksand font-semibold text-slate-600 dark:text-slate-300 text-[11px] pt-1">
      Then iterate on what users and maintainers need
    </p>
  </div>
);

const cards: AboutCard[] = [
  {
    id: 'profile',
    label: 'Profile',
    accent: '#7148FC',
    headline: 'I build verifiable software',
    description:
      'Apprentice software engineer actively mastering HTML, CSS, JavaScript, React, and Tailwind CSS.',
    points: [
      'From core layout mechanics to responsive React components, then iterate',
      'Real native tools and production bug fixes, not throwaway demos',
      'AI in the workflow as a partner, never instead of human judgment',
    ],
    icon: <User className="w-4 h-4 text-white" />,
    visual: <ProfileVisual />,
  },
  {
    id: 'tooling',
    label: 'Everyday stack',
    accent: '#0e8aa8',
    headline: 'The right tool for the job',
    description:
      'Zed and VS Code to write. Ghostty and Alacritty to run. AI models directed with rigorous hardware verification.',
    points: [
      'Zed Editor and VS Code for writing and reviewing clean code',
      'Ghostty on Fedora 44 Wayland, custom Bash suites for setup',
      'Directed AI pair-programming with 100% upstream maintainer disclosure',
    ],
    icon: <Wrench className="w-4 h-4 text-white" />,
    visual: <ToolingVisual />,
  },
  {
    id: 'experience',
    label: 'Academics & Upstream',
    accent: '#0c9b56',
    headline: 'BCA Distinction & Merged PRs',
    points: [
      'BCA degree completed with 8.2 CGPA distinction (SGVU 2022)',
      'Merged Cesium PR #214: Tactical military radar GLSL shader pipeline',
      'Mission Center !117: Isolated PCIe D3cold power thrash on hybrid GPUs',
      'Zed editor issue #63727: Linux Wayland shutdown timeout investigation',
    ],
    icon: <Award className="w-4 h-4 text-white" />,
    visual: <ExperienceVisual />,
  },
  {
    id: 'open-to',
    label: 'Open to',
    accent: '#c99200',
    headline: 'Junior Frontend & Apprentice Roles',
    description: 'Looking for collaborative engineering teams focused on web applications and developer tools.',
    points: [
      'Junior Frontend Engineer (React, Tailwind CSS, JavaScript)',
      'Apprentice Software Engineer (Full stack and systems tooling)',
      'Remote, hybrid, or on-site opportunities',
    ],
    icon: <Compass className="w-4 h-4 text-white" />,
    visual: <OpenToVisual />,
  },
  {
    id: 'process',
    label: 'How I work',
    accent: '#ef2f4c',
    headline: 'Explore. Build. Verify. Disclose.',
    description:
      'I value engineering teams that care about clean architecture, developer experience, and honest craftsmanship.',
    points: [
      'Identify real workflow friction on personal hardware',
      'Direct AI to propose architectures, demanding reproducible tests',
      'Verify on real hardware and provide 100% transparent disclosure',
    ],
    icon: <RefreshCw className="w-4 h-4 text-white" />,
    visual: <ProcessVisual />,
  },
];

export const AboutProfileText: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.about-card');
    const gap = 24;
    const amount = (card?.offsetWidth ?? 360) + gap;

    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="about" className="py-16 md:py-24 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AndrewSectionHeader
          id="about"
          title="About"
          lede="A deep dive into my background, active frontend curriculum, and upstream systems investigations."
        />

        {/* Andrew Baisden Toolbar with Kicker & Arrow Buttons */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-quicksand text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
            A few things worth knowing
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!canScrollLeft}
              onClick={() => scrollByCard('left')}
              className={`p-2 rounded-full border border-slate-300 dark:border-slate-700 transition-all ${
                canScrollLeft
                  ? 'bg-white dark:bg-[#202230] text-slate-800 dark:text-slate-200 hover:border-[#7148fc] cursor-pointer shadow-xs active:scale-95'
                  : 'bg-slate-100 dark:bg-[#15161e] text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous cards"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              disabled={!canScrollRight}
              onClick={() => scrollByCard('right')}
              className={`p-2 rounded-full border border-slate-300 dark:border-slate-700 transition-all ${
                canScrollRight
                  ? 'bg-white dark:bg-[#202230] text-slate-800 dark:text-slate-200 hover:border-[#7148fc] cursor-pointer shadow-xs active:scale-95'
                  : 'bg-slate-100 dark:bg-[#15161e] text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next cards"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar"
        >
          {cards.map((card) => (
            <article
              key={card.id}
              className="about-card min-w-[320px] sm:min-w-[360px] max-w-[380px] snap-start andrew-card p-6 bg-white dark:bg-[#202230] flex flex-col justify-between shrink-0"
            >
              <div className="space-y-4">
                {/* Visual Header */}
                <div className="overflow-hidden rounded-xl">
                  {card.visual}
                </div>

                {/* Card Label & Accent Icon */}
                <div className="flex items-center gap-2 pt-1">
                  <span
                    className="p-1.5 rounded-lg flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: card.accent }}
                  >
                    {card.icon}
                  </span>
                  <span className="font-quicksand font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {card.label}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-quicksand text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {card.headline}
                </h3>

                {card.description && (
                  <p className="font-quicksand text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {card.description}
                  </p>
                )}

                {/* Points */}
                <ul className="space-y-2.5 pt-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm font-quicksand font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="p-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProfileText;
