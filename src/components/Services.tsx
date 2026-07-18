import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code2, ServerCrash, BarChart4, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Designing robust, high-performance web systems leveraging ASP.NET Core MVC, RESTful Web APIs, Microservices, and modern frontend frameworks like React (1+ year). Focused on writing clean, maintainable, and type-safe code.',
    badge: 'C# + React',
  },
  {
    icon: ServerCrash,
    title: 'Enterprise Automation & Digital Transformation',
    desc: 'Modernizing legacy applications, implementing SOLID design principles, establishing continuous integration pipelines, and configuring distributed caching (Redis) to slash database load times by up to 50%.',
    badge: 'Automation',
  },
  {
    icon: BarChart4,
    title: 'Performance Engineering & Ad-Tech Tools',
    desc: 'Engineering scalable tracking infrastructures, fraud detection filters, postback URL template structures, and real-time reporting dashboards for high-throughput modern digital advertising ecosystems.',
    badge: 'Ad-Tech & Perf',
  },
];

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [12, -12]);
  const rotateY = useTransform(x, [0, 1], [-12, 12]);

  // Spring physics values for buttery smooth tilting motions
  const rotateXSpring = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      }}
      className={`glass-card p-6 md:p-8 rounded-3xl relative group cursor-pointer overflow-hidden ${className}`}
    >
      {/* Glow background effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/0 via-accent-cyan/0 to-accent-cyan/5 group-hover:to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-zinc-800/20 to-zinc-800/80 group-hover:from-accent-cyan/40 group-hover:to-accent-blue/40 -z-10 transition-colors duration-500" />

      {/* 3D Child content wrap */}
      <div style={{ transform: 'translateZ(30px)' }} className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-12 md:py-20 relative">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-900 to-transparent pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="space-y-12 md:space-y-16"
      >
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div variants={textVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-semibold text-accent-cyan tracking-widest uppercase">
            <span>Core Expertise</span>
          </motion.div>
          <motion.h2 variants={textVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What I Do
          </motion.h2>
          <motion.p variants={textVariants} className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Delivering robust architectural design, system modernization, and high-performance digital solutions across full stack ecosystems.
          </motion.p>
        </div>

        {/* Services Staggered Layout Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <TiltCard key={idx} className="flex flex-col justify-between min-h-[350px]">
                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-accent-cyan group-hover:text-black group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-500 shadow-md">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800/40">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="pt-6 flex justify-end">
                  <span className="text-zinc-600 group-hover:text-accent-cyan transition-colors duration-300">
                    <ArrowUpRight size={20} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
