import React from 'react';
import { Star, FolderGit2, ArrowUpRight } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const ProjectsSection: React.FC = () => {
  const getVergeTileStyles = (index: number) => {
    switch (index) {
      case 0:
        // Fedora Post Install: Jelly Mint
        return {
          container: 'bg-[#3cffd0] text-black',
          kicker: 'text-black/70',
          headline: 'text-black',
          badge: 'bg-black text-[#3cffd0]',
          metric: 'bg-black text-[#3cffd0]',
          desc: 'text-black/85',
          tag: 'bg-black/10 text-black border-black/20',
          btn: 'bg-black text-white hover:bg-white hover:text-black',
          star: 'text-black',
        };
      case 1:
        // kkfetch: Verge Ultraviolet
        return {
          container: 'bg-[#5200ff] text-white',
          kicker: 'text-white/80',
          headline: 'text-white',
          badge: 'bg-white text-black',
          metric: 'bg-white text-black',
          desc: 'text-white/90',
          tag: 'bg-white/15 text-white border-white/20',
          btn: 'bg-white text-black hover:bg-[#3cffd0] hover:text-black',
          star: 'text-[#fffa00]',
        };
      case 2:
        // kkpdf-zed: Electric Yellow
        return {
          container: 'bg-[#fffa00] text-black',
          kicker: 'text-black/70',
          headline: 'text-black',
          badge: 'bg-black text-[#fffa00]',
          metric: 'bg-black text-[#fffa00]',
          desc: 'text-black/85',
          tag: 'bg-black/10 text-black border-black/20',
          btn: 'bg-black text-white hover:bg-white hover:text-black',
          star: 'text-black',
        };
      default:
        // dev-suite: Hazard White
        return {
          container: 'bg-[#ffffff] text-black',
          kicker: 'text-black/70',
          headline: 'text-black',
          badge: 'bg-black text-white',
          metric: 'bg-black text-white',
          desc: 'text-black/85',
          tag: 'bg-black/10 text-black border-black/20',
          btn: 'bg-black text-white hover:bg-[#5200ff] hover:text-white',
          star: 'text-amber-500',
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#131313] border-b border-[#ffffff]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d2d2d] border border-[#fffa00]/40 text-xs font-mono text-[#fffa00] mb-3 font-bold uppercase tracking-[0.18em]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>COVER STORIES // ACTIVE CODE REPOSITORIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
            FEATURED CODEBASES
          </h2>
          <p className="font-sans text-base text-[#949494] mt-2 max-w-2xl font-normal">
            Automated Fedora Linux post-installation suites, microsecond Rust hardware fetchers,
            and native document viewers for modern editors.
          </p>
        </div>

        {/* 2x2 The Verge Saturated Cover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLAGSHIP_PROJECTS.map((project, idx) => {
            const styles = getVergeTileStyles(idx);
            return (
              <div
                key={project.id}
                className={`p-7 sm:p-9 rounded-[28px] ${styles.container} transition-all duration-200 hover:scale-[1.015] flex flex-col justify-between`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-[0.15em] ${styles.badge}`}>
                      {project.badge}
                    </span>

                    <span className={`font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${styles.metric}`}>
                      {project.highlightMetric}
                    </span>
                  </div>

                  {/* Kicker & Title */}
                  <div className={`font-mono text-xs uppercase tracking-[0.16em] font-bold mb-1.5 ${styles.kicker}`}>
                    {project.tagline}
                  </div>

                  <h3 className={`font-display text-3xl sm:text-4xl uppercase tracking-tight mb-4 ${styles.headline}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-sans text-sm sm:text-base leading-relaxed mb-6 font-normal ${styles.desc}`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-[0.14em] font-bold border ${styles.tag}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all flex items-center gap-2 ${styles.btn}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>EXPLORE ON GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.starsCount && (
                      <div className={`flex items-center gap-1.5 text-xs font-mono font-bold ${styles.star}`}>
                        <Star className="w-4 h-4 fill-current" />
                        <span>{project.starsCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
