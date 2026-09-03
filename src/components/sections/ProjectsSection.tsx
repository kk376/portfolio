import { Rocket, Terminal, FolderGit2, Github, ChevronRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { SectionHeader, ProjectItem, ComingSoonCard } from "../ui";
import { PERSONAL_INFO, PROJECTS_DATA, ROADMAP_PROJECTS_DATA } from "@/data/portfolioData";

const projectIconMap = {
  terminal: <Terminal className="text-cyan-400" size={28} />,
  folder: <FolderGit2 className="text-violet-400" size={28} />,
};

export default function ProjectsSection() {
  return (
    <AnimatedSection>
      <section id="projects" aria-labelledby="projects-heading">
        <SectionHeader
          id="projects-heading"
          title="Projects & Work"
          icon={<Rocket className="text-purple-400" size={20} />}
          subtitle="Standalone programs I've built to put my learning into practice, plus what's coming next."
        />

        {/* Completed Projects */}
        <div className="space-y-6 mb-12">
          <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            Completed & Working Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project) => (
              <ProjectItem
                key={project.name}
                name={project.name}
                desc={project.desc}
                tags={project.tags}
                gradient={project.gradient}
                image={projectIconMap[project.iconName]}
                status={project.status}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>

        {/* Next Up / Roadmap Projects */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
            Upcoming Roadmap Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROADMAP_PROJECTS_DATA.map((item) => (
              <ComingSoonCard
                key={item.title}
                title={item.title}
                description={item.description}
                tags={item.tags}
                gradient={item.gradient}
                emoji={item.emoji}
                eta={item.eta}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={PERSONAL_INFO.journeyRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 shadow-md"
          >
            <Github size={20} />
            <span>View daily commit logs & code in ai-ml-journey</span>
            <ChevronRight size={18} className="text-gray-400" />
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
}
