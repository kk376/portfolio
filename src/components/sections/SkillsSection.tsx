import { BarChart2, Database, Code2, Globe, Rocket } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { SectionHeader, SkillCard } from "../ui";
import { SKILLS_DATA } from "@/data/portfolioData";

const skillIconMap = {
  database: <Database size={24} />,
  code: <Code2 size={24} />,
  globe: <Globe size={24} />,
  rocket: <Rocket size={24} />,
};

export default function SkillsSection() {
  return (
    <AnimatedSection>
      <section id="skills" aria-labelledby="skills-heading">
        <SectionHeader
          id="skills-heading"
          title="Verified Skill Set"
          icon={<BarChart2 className="text-cyan-400" size={20} />}
          subtitle="Everything I have actually learned and practiced in my code repository."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skillIconMap[skill.iconName]}
              description={skill.description}
              items={skill.items}
              color={skill.color}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
