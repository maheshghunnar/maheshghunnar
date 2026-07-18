import { motion } from 'framer-motion';
import { Award, CheckCircle2, Server, Database, Cloud, Code } from 'lucide-react';

const certs = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    id: 'Credential ID: Cloud Native Architecture & Core Services',
    desc: 'Demonstrates deep foundation in core cloud concepts, Azure architecture components, core resource products, governance configurations, and security compliance solutions.',
    logoColor: 'from-[#0078d4]/20 to-[#00bcff]/20',
    borderGlow: 'hover:border-[#0078d4]/40',
  },
  {
    title: 'PCEP™ – Certified Entry-Level Python Programmer',
    issuer: 'Python Institute',
    id: 'Credential ID: PCEP-30-0x',
    desc: 'Validates complete proficiency in foundational computer programming concepts, Python syntax, core semantics, conditional structures, loops, functions, and data operations.',
    logoColor: 'from-[#ffd43b]/10 to-[#306998]/10',
    borderGlow: 'hover:border-[#ffd43b]/40',
  },
];

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['C#', 'Python', 'SQL (T-SQL)', 'JavaScript', 'TypeScript', 'HTML5 & CSS3'],
  },
  {
    icon: Server,
    title: 'Backend Frameworks',
    skills: ['.NET Core / .NET 8', 'ASP.NET MVC', 'Web API', 'Entity Framework Core', 'Microservices', 'BFF APIs'],
  },
  {
    icon: Database,
    title: 'Databases & Caching',
    skills: ['MS SQL Server', 'Redis Caching', 'Neo4j Graph Database', 'Oracle', 'MySQL'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Azure DevOps', 'AWS (EC2, S3)', 'Docker', 'Kubernetes', 'Git & CI/CD'],
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="certifications" className="py-12 md:py-20 relative">
      {/* Background soft lighting */}
      <div className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple tracking-widest uppercase">
            <span>Qualifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Certifications & Tech Stack
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Verified professional credentials and complete technical competency grid representing my enterprise capabilities.
          </p>
        </div>

        {/* Double Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Certifications (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-3 border-b border-zinc-900">
              <Award className="text-accent-cyan" size={20} />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certs.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`glass-card p-6 rounded-3xl border border-zinc-800/80 hover:bg-zinc-900/30 transition-all duration-300 relative group ${cert.borderGlow}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Badge Icon graphic */}
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.logoColor} border border-white/5 text-accent-cyan flex-shrink-0`}>
                      <Award size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-white leading-snug group-hover:text-accent-cyan transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        {cert.issuer} <span className="text-zinc-600">•</span> <span className="text-[10px] text-zinc-500 font-medium normal-case">{cert.id}</span>
                      </p>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed pt-2">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack Badges (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-3 border-b border-zinc-900">
              <CheckCircle2 className="text-accent-blue" size={20} />
              Advanced Core Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass-card p-6 rounded-3xl border border-zinc-800/60 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase text-zinc-400">
                        <Icon size={16} className="text-accent-cyan" />
                        <span>{cat.title}</span>
                      </div>

                      {/* Skill Tag list */}
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs text-zinc-300 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/60 px-3 py-1.5 rounded-full transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
