import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Hamburger line variants for morphing animation
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 8 },
  };

  const middleBarVariants = {
    closed: { opacity: 1, scale: 1 },
    opened: { opacity: 0, scale: 0 },
  };

  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -8 },
  };

  // Full-screen overlay transition configurations
  const overlayVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 glass border-b border-zinc-900/60 shadow-lg shadow-black/20'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative group flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-cyan">
              Mahesh
            </span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Ghunnar
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 text-accent-cyan hover:from-accent-cyan hover:hover:to-accent-blue hover:text-black hover:border-transparent transition-all duration-500 shadow-md shadow-accent-cyan/5 hover:shadow-accent-cyan/20"
            >
              Hire Me
            </a>
          </nav>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="relative z-50 flex flex-col justify-between w-6 h-5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              variants={topBarVariants}
              animate={isOpen ? 'opened' : 'closed'}
              className="w-full h-0.5 bg-white rounded-full origin-left"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              variants={middleBarVariants}
              animate={isOpen ? 'opened' : 'closed'}
              className="w-full h-0.5 bg-white rounded-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              variants={bottomBarVariants}
              animate={isOpen ? 'opened' : 'closed'}
              className="w-full h-0.5 bg-white rounded-full origin-left"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Morphing Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 bg-[#060608]/98 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8 md:gap-12">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-400 hover:text-white transition-colors duration-300 relative group flex items-center justify-center"
                  >
                    <span className="absolute -left-8 text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      //
                    </span>
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="mt-8">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-accent-cyan/20"
                >
                  Let's Connect
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
