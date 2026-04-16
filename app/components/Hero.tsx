'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Ambient glow orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-apple-blue/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-indigo-500/15 blur-[140px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-light text-[12px] text-apple-text/80 mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Available for internships · Full-time Nov 2026
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.95] tracking-tightest font-semibold"
            >
              <span className="gradient-text block">Feng Yan.</span>
              <span className="gradient-text-blue block">Frank.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="mt-6 md:mt-8 text-lg md:text-2xl text-apple-text/70 max-w-xl leading-snug tracking-tight"
            >
              Full-stack developer crafting live products from frontend to deploy.
              <span className="text-apple-text"> Ex-PM</span> at a platform of 500M+ users.
            </motion.p>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 text-[13px] text-apple-muted"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} strokeWidth={1.8} /> Sydney, Australia
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-apple-muted/40" />
              <span>MSc Computer Science · UOW</span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-apple-muted/40" />
              <span>Open to 🇦🇺 &nbsp;&amp;&nbsp; 🇨🇦 🇺🇸</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="group px-6 py-3 bg-apple-blue hover:bg-apple-blueHover text-white text-[14px] font-medium rounded-full btn-lift inline-flex items-center gap-2"
              >
                View my work
                <ArrowDown size={14} className="transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 glass-light hover:bg-white/[0.08] text-apple-text text-[14px] font-medium rounded-full btn-lift inline-flex items-center gap-2"
              >
                <Mail size={14} strokeWidth={1.8} /> Contact me
              </a>
              <a
                href="https://github.com/YanFeng02"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-light hover:bg-white/[0.08] text-apple-text text-[14px] font-medium rounded-full btn-lift inline-flex items-center gap-2"
              >
                <Github size={14} strokeWidth={1.8} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-light hover:bg-white/[0.08] text-apple-text text-[14px] font-medium rounded-full btn-lift inline-flex items-center gap-2"
              >
                <Linkedin size={14} strokeWidth={1.8} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative mx-auto md:mx-0"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-apple-blue/40 via-indigo-500/20 to-transparent blur-2xl" />

            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass-light p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-apple-elevated to-apple-surface flex items-center justify-center relative overflow-hidden">
                {/* Placeholder avatar */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1c1c1e" />
                      <stop offset="100%" stopColor="#0a0a0a" />
                    </linearGradient>
                    <linearGradient id="figure" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2997ff" />
                      <stop offset="100%" stopColor="#0071e3" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#bg)" />
                  <circle cx="100" cy="78" r="32" fill="url(#figure)" opacity="0.85" />
                  <path
                    d="M 40 180 Q 40 130 100 130 Q 160 130 160 180 Z"
                    fill="url(#figure)"
                    opacity="0.85"
                  />
                </svg>
                <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-apple-muted/70 tracking-widest uppercase">
                  Photo placeholder
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apple-muted"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
