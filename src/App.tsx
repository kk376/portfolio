import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { UpstreamSection } from './components/UpstreamSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AIWorkflowStory } from './components/AIWorkflowStory';
import { SystemTelemetry } from './components/SystemTelemetry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F4F3EE] dark:bg-[#141416] text-[#111111] dark:text-[#E5E5E0] antialiased selection:bg-[#1D4ED8] selection:text-white font-sans transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <SkillsSection />
          <UpstreamSection />
          <ProjectsSection />
          <AIWorkflowStory />
          <SystemTelemetry />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
