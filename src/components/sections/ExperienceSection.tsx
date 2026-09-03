import { Award, GraduationCap, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { SectionHeader } from "../ui";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <AnimatedSection>
      <section id="experience" aria-labelledby="experience-heading">
        <SectionHeader
          id="experience-heading"
          title="My Journey"
          icon={<Award className="text-amber-400" size={20} />}
          subtitle="Academic grounding, system automation, and upstream open source milestones."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="p-6 sm:p-8 bg-[#0a0a12] border border-white/5 rounded-3xl shadow-xl transition-all hover:border-white/10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-8">
              {EDUCATION_DATA.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0a0a12] shadow-sm group-hover:scale-125 transition-transform" />

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-semibold mb-2">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.year}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-cyan-400 mb-2">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Upstream Timeline */}
          <div className="p-6 sm:p-8 bg-[#0a0a12] border border-white/5 rounded-3xl shadow-xl transition-all hover:border-white/10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Experience &amp; Upstream
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-8">
              {EXPERIENCE_DATA.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-400 border-2 border-[#0a0a12] shadow-sm group-hover:scale-125 transition-transform" />

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-semibold mb-2">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{item.year}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-purple-400 mb-2">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
