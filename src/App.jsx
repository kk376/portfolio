import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Globe,
  Database,
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
  FileSpreadsheet,
  Code2,
  GraduationCap,
  Briefcase,
  Calendar,
  CheckCircle2,
} from "lucide-react";

// Component imports
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BackgroundEffects from "./components/BackgroundEffects";
import AnimatedSection from "./components/AnimatedSection";
import Footer from "./components/Footer";

// UI component imports
import {
  StatCard,
  SectionHeader,
  SkillCard,
  TimelineItem,
  ContactInfoCard,
} from "./components/ui";

/**
 * App - Main portfolio application component
 * Features a modern dark theme with animated backgrounds,
 * smooth scroll navigation, and responsive design.
 */
const EDUCATION_DATA = [
  {
    year: "Aug 2018 - Aug 2021 (Degree Conferred March 2022)",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Suresh Gyan Vihar University, Jaipur",
    description:
      "Completed three-year graduation with 8.2 CGPA (3.28 / 4.0 GPA) Distinction classification. Rigorous curriculum covering Relational Database Management Systems (MySQL), Data Structures, and Software Engineering principles.",
    highlights: [
      "8.2 CGPA (3.28 / 4.0 GPA) Distinction classification",
      "Relational database schema design and SQL query formulation",
      "Solid programming foundations in data structures and applications",
    ],
  },
  {
    year: "2016 - May 2018",
    title: "Senior Secondary Education (Class XII)",
    subtitle: "CBSE Curriculum (Result: 23 May 2018)",
    description:
      "Completed foundational coursework in Physics, Chemistry, Mathematics, and Computer Science.",
  },
];

const EXPERIENCE_DATA = [
  {
    year: "July 2026 - Present",
    title: "Frontend Learner & Open Source Contributor",
    subtitle: "Upstream Open Source & Modern Web Development",
    description:
      "Initiated dedicated open source contribution journey on 30 July 2026. Actively mastering modern frontend engineering across semantic HTML, CSS layout systems, modern JavaScript, and React component architectures.",
    highlights: [
      "Cesium.js PR #214 merged: Resolved multi-pass GLSL tactical sonar shader defect",
      "Mission Center & Zed: Traced PCIe D3cold GPU thrash and Wayland window lifecycles",
      "Advanced completion of modern responsive CSS layout and design systems",
    ],
  },
  {
    year: "Nov 2024 - Mid 2026",
    title: "Linux Systems & Workstation Engineering",
    subtitle: "Development Environment & Shell Automation (MSI Thin A15)",
    description:
      "Configured dedicated Linux development workstation (Fedora 44, AMD Ryzen 5, NVIDIA RTX 2050 Mobile). Engineered modular shell provisioning suites and authored system CLI tools while solidifying the foundation for full-time software engineering.",
    highlights: [
      "Engineered 1,600+ lines of modular Bash workstation provisioning",
      "Authored high-performance Rust kernel CLI fetcher (kkfetch, 5.6x faster than Fastfetch)",
    ],
  },
  {
    year: "Aug 2022 - Mid 2024",
    title: "Competitive Examination Track & Analytical Aptitude",
    subtitle: "Public Sector Curriculum & Quantitative Foundations",
    description:
      "Undertook rigorous self-directed preparation for national competitive examinations, developing deep discipline in logical deduction, quantitative analysis, and systematic problem solving before deliberately pivoting back to computer science and software development.",
    highlights: [
      "Advanced analytical problem-solving and quantitative reasoning",
      "Conscious, committed decision to return to software engineering and open source",
    ],
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show scroll to top button and track active section (throttled with rAF)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500);

          const sections = [
            "about",
            "skills",
            "projects",
            "experience",
            "contact",
          ];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId, e) => {
    e?.preventDefault();

    // Close menu first
    const wasMenuOpen = isMenuOpen;
    setIsMenuOpen(false);

    // Scroll to section - add delay if menu was open to let it close
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(sectionId);
      }
    };

    if (wasMenuOpen) {
      // Small delay to let mobile menu close animation finish
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  return (
    <div className="min-h-screen bg-[#030308] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <HeroSection handleNavClick={handleNavClick} />

        {/* Stats */}
        <AnimatedSection>
          <section
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            aria-label="Key Statistics"
          >
            <StatCard
              label="Education"
              value="BCA (2022)"
              icon={<BookOpen size={18} />}
              color="text-cyan-400"
              gradient="from-cyan-500/20 to-cyan-500/5"
            />
            <StatCard
              label="CGPA"
              value="8.2"
              icon={<Award size={18} />}
              color="text-pink-400"
              gradient="from-pink-500/20 to-pink-500/5"
            />
            <StatCard
              label="Streak"
              value="Daily Git"
              icon={<TrendingUp size={18} />}
              color="text-violet-400"
              gradient="from-violet-500/20 to-violet-500/5"
            />
            <StatCard
              label="Focus"
              value="Data Analytics"
              icon={<BarChart2 size={18} />}
              color="text-emerald-400"
              gradient="from-emerald-500/20 to-emerald-500/5"
            />
          </section>
        </AnimatedSection>

        {/* About Me */}
        <AnimatedSection>
          <section
            className="grid md:grid-cols-2 gap-12 items-center"
            aria-labelledby="about-heading"
          >
            <div>
              <SectionHeader
                title="About Me"
                icon={<Heart className="text-red-400" />}
              />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm{" "}
                  <strong className="text-white">Kushagra Kumar</strong>. I did
                  my BCA (8.2 CGPA) and spent mid 2022 to mid 2026 preparing
                  for government exams. That didn't pan out, so I pivoted to{" "}
                  <strong className="text-cyan-400">Data Analytics</strong> and
                  started learning a few weeks ago.
                </p>
                <p>
                  Right now I'm going through{" "}
                  <strong className="text-white">MySQL</strong>. Once I'm done
                  with revision, I'll build some projects around it, then move
                  to <strong className="text-white">Excel</strong>.
                </p>
                <p>
                  I commit to GitHub every day. No finished projects yet.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="text-emerald-400" size={16} />
                    <span>Learning daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code2 className="text-cyan-400" size={16} />
                    <span>Daily GitHub commits</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[#0a0a12] border border-white/5 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <InfoItem label="Name" value="Kushagra Kumar" />
                  <InfoItem label="Email" value="kkushagra86@gmail.com" />
                  <InfoItem label="Location" value="India" />
                  <InfoItem label="Degree" value="BCA (Graduated)" />
                  <InfoItem label="Status" value="Learning · Growing" />
                  <InfoItem label="Available" value="Open to Roles" />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection>
          <section id="skills" aria-labelledby="skills-heading">
            <SectionHeader
              title="Current Tech Stack"
              icon={<BarChart2 className="text-cyan-400" />}
            />
            <p className="text-gray-500 mb-8 -mt-4">
              What I'm actually working with right now.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard
                title="Data & Analytics"
                icon={<BarChart2 />}
                items={[
                  "MySQL (Querying, Joins, Aggregations)",
                  "Python — NumPy & Pandas",
                  "Microsoft Excel",
                  "Power BI (Learning)",
                ]}
                color="cyan"
              />
              <SkillCard
                title="Tools & Workflow"
                icon={<Globe />}
                items={[
                  "Git & GitHub (Daily commits)",
                  "VS Code",
                ]}
                color="violet"
              />
              <SkillCard
                title="Data Skills"
                icon={<Database />}
                items={[
                  "Data Cleaning",
                  "Exploratory Data Analysis (EDA)",
                  "Data Visualization",
                  "Statistical Thinking (Basics)",
                ]}
                color="pink"
              />
              <SkillCard
                title="Spreadsheets & Reporting"
                icon={<FileSpreadsheet />}
                items={[
                  "Excel — VLOOKUP, Pivot Tables",
                  "Charts & Dashboards",
                  "Data Formatting & Validation",
                  "Power BI Reports (In Progress)",
                ]}
                color="emerald"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* Projects — Coming Soon */}
        <AnimatedSection>
          <section id="projects" aria-labelledby="projects-heading">
            <SectionHeader
              title="Projects"
              icon={<Rocket className="text-purple-400" />}
            />
            <p className="text-gray-500 mb-8 -mt-4">
              Nothing finished yet. These are what I'm planning to build as I go through each tool.
            </p>

            {/* Coming Soon Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ComingSoonCard
                title="SQL Analysis Project"
                description="Query and analyse a real dataset in MySQL. Mostly joins, aggregations, and pulling something useful out of it."
                tags={["MySQL", "Data Analysis"]}
                gradient="from-cyan-500 to-blue-600"
                emoji="🗄️"
                eta="Soon"
              />
              <ComingSoonCard
                title="Python EDA Notebook"
                description="Load a public dataset, clean it, and see what's in it using Pandas."
                tags={["Python", "Pandas", "NumPy"]}
                gradient="from-violet-500 to-purple-600"
                emoji="🐍"
                eta="Soon"
              />
              <ComingSoonCard
                title="Excel Dashboard"
                description="Build a dashboard in Excel with pivot tables and charts around a real dataset."
                tags={["Excel", "Dashboard", "Pivot Tables"]}
                gradient="from-emerald-500 to-teal-600"
                emoji="📊"
                eta="Coming up"
              />
              <ComingSoonCard
                title="Power BI Report"
                description="A report in Power BI. Still a while away, but it's on the list."
                tags={["Power BI", "Data Viz"]}
                gradient="from-pink-500 to-rose-600"
                emoji="📈"
                eta="Coming up"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/Kk376/ai-ml-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105"
              >
                <Github size={20} />
                Track my daily progress on GitHub
                <ChevronRight size={18} className="text-gray-500" />
              </a>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience / Journey Timeline */}
        <AnimatedSection>
          <section id="experience" aria-labelledby="experience-heading">
            <SectionHeader
              title="My Journey"
              icon={<Award className="text-amber-400" />}
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

        {/* Contact */}
        <AnimatedSection>
          <section
            id="contact"
            className="relative"
            aria-labelledby="contact-heading"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />

            <div className="relative bg-[#0a0a12]/80 border border-white/5 rounded-3xl p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center"
              >
                <Mail size={32} />
              </motion.div>

              <h2
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Touch
                </span>
              </h2>

              <p className="text-gray-400 max-w-lg mx-auto mb-8 text-lg">
                If you're hiring juniors, open to mentoring, or just want to talk — feel free to reach out.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:kkushagra86@gmail.com"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  <Mail size={20} />
                  Send a Message
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kushagra-kumar376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-12">
                <ContactInfoCard
                  icon={<Mail />}
                  label="Email"
                  value="kkushagra86@gmail.com"
                />
                <ContactInfoCard
                  icon={<Phone />}
                  label="Phone"
                  value="+91 79767 53740"
                />
                <ContactInfoCard
                  icon={<Globe />}
                  label="Location"
                  value="India"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/25 hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

// Helper component for info items
function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

// Coming Soon project card
function ComingSoonCard({ title, description, tags, gradient, emoji, eta }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a12] hover:border-white/10 transition-all duration-300">
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{emoji}</span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-medium">
            {eta}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
