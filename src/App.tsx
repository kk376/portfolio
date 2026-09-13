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
      <div className="min-h-screen bg-white dark:bg-[#0a101d] text-[#0d253d] dark:text-[#f8fafc] antialiased selection:bg-[#533afd] selection:text-white font-sans transition-colors duration-200">
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
