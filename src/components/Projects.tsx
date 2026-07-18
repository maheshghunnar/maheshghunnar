import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, Layers, Calendar, ChevronRight } from 'lucide-react';

const projects = [
  {
    category: 'Recent Milestone',
    title: 'Infosys Success',
    subtitle: 'Infosys INSTA Award Recipient',
    desc: 'Proud recipient of the Infosys INSTA Award for stellar engineering contributions to enterprise platforms (such as AlconNxt), optimizing workforce management architectures, and modernizing legacy systems using AI components and BFF (Backend-for-Frontend) APIs.',
    tech: ['AI Integration', 'BFF APIs', 'Enterprise Architecture', 'Workforce Mgmt'],
    highlight: true,
  },
  {
    category: 'Atos Syntel',
    title: 'Match AI Platform',
    subtitle: 'Associate Consultant Project',
    desc: 'Engineered an internal skill-matching platform leveraging .NET Core, Python, Neo4j graph databases, and Redis caching. Accurately benchmarked and matched technical employees to specialized enterprise projects based on profiles.',
    tech: ['.NET Core', 'Python', 'Neo4j', 'Redis Caching'],
    highlight: false,
  },
  {
    category: 'Atos Syntel',
    title: 'WISDM Platform',
    subtitle: 'Workforce Management Portal',
    desc: 'Developed a central workforce allocation portal engineered with .NET 4.5, ASP.NET MVC, and MS SQL Server. Integrated secure OAuth2 authentication flow and boosted client UI satisfaction ratings by 30%.',
    tech: ['.NET 4.5', 'ASP.NET MVC', 'MS SQL Server', 'OAuth2'],
    highlight: false,
  },
  {
    category: 'Admobs',
    title: 'Kray.in Ecosystem',
    subtitle: '.NET Core Developer Project',
    desc: 'Created a comprehensive digital content and affiliate marketing ecosystem featuring customized administrative dashboards, secure e-wallets, and optimized revenue flows using ASP.NET Core 3.1 MVC, Bootstrap, and AWS S3.',
    tech: ['ASP.NET Core 3.1', 'Bootstrap', 'AWS S3', 'Affiliate Tracking'],
    highlight: false,
  },
  {
    category: 'Admobs',
    title: 'The Morning Blossom',
    subtitle: 'E-Commerce Integration',
    desc: 'Engineered an online retail portal built with WordPress and WooCommerce, hosted on AWS EC2 nodes. Configured custom checkout funnels and performance optimization, which successfully boosted sales by 80%.',
    tech: ['WordPress', 'WooCommerce', 'AWS EC2', 'Speed Optimization'],
    highlight: false,
  },
  {
    category: 'Jeet Electronics',
    title: 'Industrial Quality Automation',
    subtitle: 'Junior .NET Developer Project',
    desc: 'Built custom C# Windows Applications integrated directly with Zebra barcode scanners for automated product quality validation, production line tracking, and automated schedule reporting.',
    tech: ['C#', 'Windows Forms', 'Zebra Scanners', 'Automation'],
    highlight: false,
  },
];

export default function Projects() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calcWidth = () => {
      if (innerCarouselRef.current && carouselRef.current) {
        setScrollWidth(
          innerCarouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };
    calcWidth();
    window.addEventListener('resize', calcWidth);
    return () => window.removeEventListener('resize', calcWidth);
  }, []);

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: 'smooth',
      });
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none -z-10" />

      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-semibold text-accent-blue tracking-widest uppercase">
              <span>Career Highlights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Projects & Milestones
            </h2>
            <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl">
              An interactive timeline of my professional accomplishments, enterprise applications, and award-winning solutions.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <button
              onClick={slideLeft}
              className="p-3 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 backdrop-blur-md active:scale-95 shadow-md"
              aria-label="Slide Left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={slideRight}
              className="p-3 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 backdrop-blur-md active:scale-95 shadow-md"
              aria-label="Slide Right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-8 snap-x snap-mandatory"
        >
          <motion.div
            ref={innerCarouselRef}
            drag="x"
            dragConstraints={{ right: 0, left: -scrollWidth }}
            whileTap={{ cursor: 'grabbing' }}
            className="flex gap-6 w-max px-2"
          >
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className={`w-[290px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-start glass-card p-6 md:p-8 rounded-3xl relative flex flex-col justify-between overflow-hidden group select-none border transition-all duration-500 ${
                  proj.highlight
                    ? 'border-accent-cyan/30 shadow-lg shadow-accent-cyan/5'
                    : 'border-zinc-800/80 hover:border-zinc-700/80'
                }`}
              >
                {/* Highlight Badge background glow */}
                {proj.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-accent-cyan/20 transition-colors duration-500" />
                )}

                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center justify-between text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Layers size={12} className="text-zinc-600" />
                      {proj.category}
                    </span>
                    {proj.highlight && (
                      <span className="flex items-center gap-1 text-accent-cyan font-bold bg-accent-cyan/10 px-2 py-0.5 rounded-full border border-accent-cyan/25">
                        <Award size={12} /> Award
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed h-[120px] sm:h-[100px] overflow-y-auto no-scrollbar">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="mt-8 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-md border border-zinc-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* bottom footer */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1 text-[10px] uppercase font-semibold">
                      <Calendar size={12} /> Milestone
                    </span>
                    <span className="flex items-center gap-0.5 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
