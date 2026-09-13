import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UpstreamSection } from './components/UpstreamSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SystemTelemetry } from './components/SystemTelemetry';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090c] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar />
      <main>
        <Hero />
        <UpstreamSection />
        <ProjectsSection />
        <SystemTelemetry />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
