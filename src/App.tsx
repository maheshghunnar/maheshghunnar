import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden">
      {/* Interactive geometric background mesh */}
      <ParticleBackground />

      {/* Floating glassmorphic header */}
      <Navbar />

      {/* Layout Content Sections */}
      <main className="container mx-auto px-4 md:px-8 space-y-24 md:space-y-36 pb-24">
        <Hero />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Modern minimal footer */}
      <footer className="border-t border-zinc-900 py-8 bg-[#050507]">
        <div className="container mx-auto px-4 text-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Mahesh Ghunnar. All rights reserved.</p>
          <p className="mt-2 text-zinc-800">Built with React, TypeScript, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
