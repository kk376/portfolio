import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UpstreamSection } from './components/UpstreamSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalSection } from './components/TerminalSection';
import { VibeManifesto } from './components/VibeManifesto';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-200 tactical-grid relative selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar />
      <main>
        <Hero />
        <UpstreamSection />
        <ProjectsSection />
        <TerminalSection />
        <VibeManifesto />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
