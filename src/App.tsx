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
      <div className="min-h-screen bg-slate-50 dark:bg-[#06070b] text-slate-800 dark:text-slate-200 antialiased selection:bg-pink-500/30 selection:text-pink-600 dark:selection:text-pink-300 transition-colors duration-200">
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
