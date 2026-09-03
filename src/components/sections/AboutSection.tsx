import { Heart, TrendingUp, Code2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { SectionHeader } from "../ui";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-medium">
        {label}
      </p>
      <p className="text-white font-medium text-sm md:text-base">{value}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <AnimatedSection>
      <section
        id="about-details"
        className="grid md:grid-cols-2 gap-12 items-center"
        aria-labelledby="about-heading"
      >
        <div>
          <SectionHeader
            id="about-heading"
            title="About Me"
            icon={<Heart className="text-red-400" size={20} />}
          />
          <div className="space-y-4 text-gray-300 leading-relaxed text-base">
            <p>
              I'm{" "}
              <strong className="text-white font-semibold">
                {PERSONAL_INFO.name}
              </strong>
              . I graduated with a Bachelor of Computer Applications (8.2 CGPA) in
              2022. I spent four years preparing for competitive government examinations,
              which taught me intense discipline, patience, and problem-solving stamina.
            </p>
            <p>
              After concluding that chapter, I pivoted into software development and Data Analytics,
              starting my structured learning on July 30, 2026.
            </p>
            <p>
              So far, I have completed comprehensive coursework in{" "}
              <strong className="text-cyan-400 font-semibold">MySQL</strong> (from basic queries to CTEs, Window Functions, and Procedures)
              and core <strong className="text-purple-400 font-semibold">Python</strong> (data structures, file handling, and 10 mini-projects).
              I am currently learning Object-Oriented Programming (OOP) in Python.
            </p>
            <p className="text-gray-400">
              I document my exact progress with verifiable daily commits on GitHub to keep myself accountable.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                <TrendingUp size={16} />
                <span>Daily GitHub streak</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                <Code2 size={16} />
                <span>Learning in public</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#0a0a12] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">
            Current Status
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <InfoItem label="Name" value={PERSONAL_INFO.name} />
            <InfoItem label="Location" value={PERSONAL_INFO.location} />
            <InfoItem label="Degree" value={PERSONAL_INFO.education} />
            <InfoItem label="Current Topic" value="Python OOP & SQL" />
            <InfoItem label="Discipline" value="Daily Commits" />
            <InfoItem label="Goal" value="Data Analytics & AI/ML" />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
