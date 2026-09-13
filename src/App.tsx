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
      <div className="min-h-screen bg-[#e8ebe6] dark:bg-[#0e0f0c] text-[#0e0f0c] dark:text-[#f4f6f2] antialiased selection:bg-[#9fe870] selection:text-[#0e0f0c] font-sans transition-colors duration-200">
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
