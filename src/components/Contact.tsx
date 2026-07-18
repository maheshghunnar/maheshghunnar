import { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Youtube, MapPin } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

function MagneticButton({ children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // 0.35 scalar creates a soft, natural magnetic pull towards cursor
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 120, damping: 12 };
  const dx = useSpring(0, springConfig);
  const dy = useSpring(0, springConfig);

  useEffect(() => {
    dx.set(position.x);
    dy.set(position.y);
  }, [position.x, position.y, dx, dy]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: dx, y: dy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree / Web3Forms fallback or direct mailto
    const mailtoUrl = `mailto:Mahesh.ghunnar13@gmail.com?subject=${encodeURIComponent(
      formState.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="absolute left-1/3 top-1/2 w-64 h-64 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-semibold text-accent-cyan tracking-widest uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Let's Start a Conversation
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Interested in digital transformation, custom software engineering, or full stack scalability? Reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white pb-3 border-b border-zinc-900">
              Contact Channels
            </h3>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'Mahesh.ghunnar13@gmail.com', href: 'mailto:Mahesh.ghunnar13@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-zinc-800/50"
                  >
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-850 text-accent-cyan flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-zinc-500">{item.label}</span>
                      {item.href ? (
                        <p className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors duration-300">
                          <a href={item.href}>{item.value}</a>
                        </p>
                      ) : (
                        <p className="text-sm font-semibold text-zinc-300">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Magnetic Social Links Grid */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Connect on Social Networks
              </h4>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, url: 'https://linkedin.com/in/mahesh-ghunnar', color: 'hover:text-[#0077b5] hover:border-[#0077b5]/30' },
                  { icon: Github, url: 'https://github.com/mahesh-ghunnar', color: 'hover:text-[#fff] hover:border-[#fff]/30' },
                  { icon: Youtube, url: 'https://youtube.com/@MaheshGhunnarOfficial', color: 'hover:text-[#ff0000] hover:border-[#ff0000]/30' },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <MagneticButton key={idx}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-300 shadow-md ${social.color}`}
                      >
                        <Icon size={20} />
                      </a>
                    </MagneticButton>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Message Form (7 Columns) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 p-6 md:p-8 rounded-3xl glass-card border border-zinc-800/80 space-y-6"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-500 uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-500 uppercase">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-semibold text-zinc-500 uppercase">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-500 uppercase">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-zinc-900/60 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project guidelines, timeframe, or ideas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-cyan hover:to-accent-blue text-black font-semibold text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing Draft...</span>
                ) : submitted ? (
                  <span>Draft Opened in Mail Client!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
