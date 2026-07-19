import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Database } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 md:pt-36 flex flex-col md:flex-row items-center justify-between gap-12 relative"
    >
      {/* Floating ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-accent-cyan/10 blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-accent-blue/10 blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Hero Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 text-xs font-semibold text-accent-cyan tracking-wider uppercase backdrop-blur-md"
        >
          <Terminal size={14} className="animate-pulse" />
          <span>Available for New Projects</span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I'm <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">Mahesh Ghunnar</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-300">
            AI & Digital Transformation <span className="text-accent-cyan">|</span> Enterprise Automation <span className="text-accent-cyan">|</span> .NET & React Full Stack Developer
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-zinc-400 max-w-xl md:max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
        >
          6+ Years of Experience building robust, scalable software architectures, optimizing application performance, and engineering modern digital ecosystems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-cyan hover:to-accent-blue text-black font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-cyan/15 flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/Mahesh_Ghunnar_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-zinc-900/20 text-zinc-400 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900 max-w-lg mx-auto md:mx-0"
        >
          {[
            { icon: Cpu, label: "Performance", val: "Optimized" },
            { icon: Database, label: "Architecture", val: "Scalable" },
            { icon: Terminal, label: "Clean Code", val: "SOLID" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center md:items-start space-y-1.5"
            >
              <item.icon size={20} className="text-zinc-600" />
              <span className="text-xs font-semibold text-zinc-500 uppercase">{item.label}</span>
              <span className="text-sm font-bold text-zinc-300">{item.val}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero Right Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        className="flex-1 flex justify-center items-center z-10 w-full"
      >
        <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
          {/* Animated border rotating ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-purple opacity-30 blur-md animate-pulse-slow" />
          
          <div className="absolute inset-2 rounded-3xl bg-[#08080c] border border-zinc-800/80 overflow-hidden flex items-center justify-center group shadow-2xl">
            {/* Background geometric grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#1a1a24_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            <picture className="w-full h-full object-cover">
              <source srcSet="/images/bg_1.png" type="image/png" />
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%2308080c'/><circle cx='50' cy='50' r='30' stroke='%2300f2fe' stroke-width='0.5' fill='none'/><path d='M20 50 H80 M50 20 V80' stroke='%234facfe' stroke-width='0.25'/></svg>"
                alt="Mahesh Ghunnar Portrait Backdrop"
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                onError={(e) => {
                  // Fallback if image doesn't load or exist
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%2300f2fe'/><stop offset='100%25' stop-color='%237f00ff'/></linearGradient></defs><rect width='100%25' height='100%25' fill='%2308080c'/><g stroke='url(%23g)' stroke-width='1.5' fill='none' opacity='0.7'><circle cx='200' cy='200' r='100'/><rect x='125' y='125' width='150' height='150' rx='20' transform='rotate(45 200 200)'/><path d='M100 200 h200 M200 100 v200'/></g><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-family='sans-serif' font-size='24' font-weight='bold'>MG</text></svg>";
                }}
              />
            </picture>
            
            {/* Overlay tech lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass border border-zinc-800/40 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md">
              <span className="text-xs font-semibold tracking-widest text-accent-cyan uppercase">Mahesh Ghunnar</span>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase">Full Stack Software Architecture</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
