import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Globe,
  Mail,
  Phone,
  ChevronRight,
  BookOpen,
  Award,
  BarChart2,
  Heart,
  Rocket,
  ArrowUp,
  Github,
  TrendingUp,
  Code2,
  Linkedin,
  Database,
  Terminal,
  FolderGit2,
  GraduationCap,
  Briefcase,
  Calendar,
  CheckCircle2,
} from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BackgroundEffects from "./components/BackgroundEffects";
import AnimatedSection from "./components/AnimatedSection";
import Footer from "./components/Footer";

// UI Components
import {
  StatCard,
  SectionHeader,
  SkillCard,
  TimelineItem,
  ContactInfoCard,
  ProjectItem,
  ComingSoonCard,
} from "./components/ui";

// Data
import {
  PERSONAL_INFO,
  TIMELINE_DATA,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
} from "./data/portfolioData";

/**
 * Root Portfolio Application Component
 *
 * Manages top-level application states:
 * - Active section tracking via IntersectionObserver with asymmetric viewport margins.
 * - Smooth scroll coordinator compensating for fixed 70px header offset and mobile drawer animations.
 * - Dynamic scroll-to-top button visibility driven by Framer Motion scroll motion values.
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  // Scroll threshold listener for scroll-to-top button.
  // Framer Motion's useMotionValueEvent runs outside React's render cycle for optimal frame rates.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 400);
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
   *
   * Coordinate calculation:
   * - Reads element.getBoundingClientRect().top relative to current viewport.
   * - Adds window.scrollY to determine absolute document offset.
   * - Subtracts 70px fixed header height to prevent section headers from being occluded.
   * - When closing the mobile drawer, delays scroll execution by 120ms to allow the collapsible
   *   menu height transition to settle before calculating bounding rectangles.
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

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-32">
        {/* 1. Hero Section */}
        <HeroSection handleNavClick={handleNavClick} />

        {/* 2. Key Highlights / Stats */}
        <AnimatedSection>
          <section
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            aria-label="Academic & Practice Metrics"
          >
            <StatCard
              label="Education"
              value="BCA (2022)"
              icon={<BookOpen size={20} />}
              color="text-cyan-400"
              gradient="from-cyan-500/20 to-cyan-500/5"
            />
            <StatCard
              label="Degree CGPA"
              value="8.2"
              icon={<Award size={20} />}
              color="text-pink-400"
              gradient="from-pink-500/20 to-pink-500/5"
            />
            <StatCard
              label="Built So Far"
              value="10+ Projects"
              icon={<Terminal size={20} />}
              color="text-emerald-400"
              gradient="from-emerald-500/20 to-emerald-500/5"
            />
            <StatCard
              label="Accountability"
              value="Daily Git"
              icon={<TrendingUp size={20} />}
              color="text-violet-400"
              gradient="from-violet-500/20 to-violet-500/5"
            />
          </section>
        </AnimatedSection>

        {/* 3. About Me */}
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
                    Kushagra Kumar
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
                <InfoItem label="Degree" value="BCA (8.2 CGPA)" />
                <InfoItem label="Current Topic" value="Python OOP & SQL" />
                <InfoItem label="Discipline" value="Daily Commits" />
                <InfoItem label="Goal" value="Data Analytics & AI/ML" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. Current Tech Stack */}
        <AnimatedSection>
          <section id="skills" aria-labelledby="skills-heading">
            <SectionHeader
              id="skills-heading"
              title="Verified Skill Set"
              icon={<BarChart2 className="text-cyan-400" size={20} />}
              subtitle="Everything I have actually learned and practiced in my code repository."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MySQL */}
              <SkillCard
                title="MySQL & Relational Databases"
                icon={<Database size={24} />}
                description="Completed course & practice queries"
                items={[
                  "SELECT, WHERE, LIKE Wildcards",
                  "GROUP BY, HAVING, Aggregations",
                  "Multi-Table Joins & UNIONS",
                  "String Functions & CASE WHEN",
                  "Subqueries & Derived Tables",
                  "Window Functions (OVER, PARTITION BY, RANK)",
                  "Common Table Expressions (CTEs)",
                  "Stored Procedures & Triggers/Events",
                ]}
                color="cyan"
              />

              {/* Python Core */}
              <SkillCard
                title="Core Python Programming"
                icon={<Code2 size={24} />}
                description="Core fundamentals & mini-projects"
                items={[
                  "Variables, Data Types & Operators",
                  "Conditionals (if/elif/else) & Loops",
                  "Functions & Scope",
                  "Data Structures: Lists, Tuples, Sets, Dicts",
                  "Exception Handling (try/except/finally)",
                  "File Handling (read/write/pathlib)",
                  "Interactive CLI Application Design",
                  "In Progress: Object-Oriented Programming (OOP)",
                ]}
                color="violet"
              />

              {/* Developer Environment */}
              <SkillCard
                title="Tools & Environment"
                icon={<Globe size={24} />}
                description="Version control & operating system"
                items={[
                  "Git & GitHub (Daily Commits)",
                  "Linux (Fedora 44 / Bash)",
                  "VS Code & Antigravity IDE",
                  "Command Line Tools",
                  "Markdown Documentation",
                ]}
                color="emerald"
              />

              {/* Roadmap */}
              <SkillCard
                title="Upcoming on Learning Roadmap"
                icon={<Rocket size={24} />}
                description="Next topics after completing OOP"
                items={[
                  "Python OOP Projects",
                  "NumPy & Pandas (Data Manipulation)",
                  "Data Cleaning & Exploratory Analysis (EDA)",
                  "Microsoft Excel (Formulas & Pivot Tables)",
                  "Power BI (Reports & Visualizations)",
                ]}
                color="pink"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* 5. Real Projects & Roadmap */}
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
                <ProjectItem
                  name="CLI Python CRUD Project"
                  desc="A complete command-line file and directory manager built in Python. Implements full Create, Read, Update, Delete operations using pathlib, custom functions, and robust exception handling."
                  tags={["Python", "File Handling", "pathlib", "CLI", "CRUD"]}
                  gradient="from-cyan-500 to-blue-600"
                  image={<Terminal className="text-cyan-400" size={28} />}
                  status="Completed"
                  githubUrl={PERSONAL_INFO.crudRepoUrl}
                />

                <ProjectItem
                  name="10 Python Mini-Projects Collection"
                  desc="A curated suite of ten interactive terminal applications: Expense Tracker with budgets, Student Grade Manager with averages, Password Strength Checker, Contact Book, Word Frequency Counter, Quiz App, Calculator, and more."
                  tags={["Python", "Data Structures", "Functions", "CLI Apps"]}
                  gradient="from-violet-500 to-purple-600"
                  image={<FolderGit2 className="text-violet-400" size={28} />}
                  status="Completed"
                  githubUrl={PERSONAL_INFO.miniProjectsUrl}
                />
              </div>
            </div>

            {/* Next Up / Roadmap Projects */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                Upcoming Roadmap Projects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ComingSoonCard
                  title="MySQL Analysis & Query Portfolio"
                  description="Complex analytical querying across relational databases using multi-table joins, CTEs, Window Functions, and stored procedures on real-world datasets."
                  tags={["MySQL", "Window Functions", "CTEs", "Queries"]}
                  gradient="from-cyan-500 to-teal-600"
                  emoji="🗄️"
                  eta="Up Next (After SQL Revision)"
                />

                <ComingSoonCard
                  title="Python OOP Application"
                  description="A modular application built with Object-Oriented Programming (classes, inheritance, encapsulation, polymorphism) in Python."
                  tags={["Python", "OOP", "Classes", "Software Design"]}
                  gradient="from-purple-500 to-pink-600"
                  emoji="🐍"
                  eta="In Progress"
                />
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

        {/* 6. Experience / Journey Timeline */}
        <AnimatedSection>
          <section id="experience" aria-labelledby="experience-heading">
            <SectionHeader
              id="experience-heading"
              title="My Journey"
              icon={<Award className="text-amber-400" size={20} />}
              subtitle="The milestones, pivots, and continuous learning curve that shaped where I am today."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education Timeline */}
              <div className="p-6 sm:p-8 bg-[#0a0a12] border border-white/5 rounded-3xl shadow-xl transition-all hover:border-white/10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
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

        {/* 7. Contact Section */}
        <AnimatedSection>
          <section
            id="contact"
            className="relative"
            aria-labelledby="contact-heading"
          >
            <div className="relative bg-[#0a0a12] border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
                <Mail size={28} />
              </div>

              <h2
                id="contact-heading"
                className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
              >
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Connect
                </span>
              </h2>

              <p className="text-gray-400 max-w-lg mx-auto mb-8 text-base md:text-lg leading-relaxed">
                Open to conversations about tech, junior developer / data analyst opportunities,
                or mentorship. Feel free to drop a line!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  <Mail size={18} />
                  Send an Email
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-all hover:scale-105"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ContactInfoCard
                  icon={<Mail size={20} />}
                  label="Email Address"
                  value={PERSONAL_INFO.email}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  copyable
                />
                <ContactInfoCard
                  icon={<Phone size={20} />}
                  label="Phone Number"
                  value={PERSONAL_INFO.phone}
                  href={`tel:${PERSONAL_INFO.phone}`}
                  copyable
                />
                <ContactInfoCard
                  icon={<Globe size={20} />}
                  label="Location"
                  value={PERSONAL_INFO.location}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
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

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-medium">
        {label}
      </p>
      <p className="text-white font-medium text-sm md:text-base">{value}</p>
    </div>
  );
}
