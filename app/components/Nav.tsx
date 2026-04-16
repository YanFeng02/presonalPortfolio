'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-apple-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-14 md:h-16">
        {/* Logo mark */}
        <a
          href="#"
          className="flex items-center gap-2 text-apple-text font-semibold tracking-tight text-[15px]"
        >
          <span className="text-apple-blue text-lg">✦</span>
          <span>Frank Yan</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] text-apple-text/80 hover:text-apple-text transition-colors duration-300 link-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/YanFeng02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-300 text-apple-text/80 hover:text-white hover:scale-110"
          >
            <Github size={16} strokeWidth={1.8} />
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-300 text-apple-text/80 hover:text-white hover:scale-110"
          >
            <Linkedin size={16} strokeWidth={1.8} />
          </a>
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-apple-blue hover:bg-apple-blueHover text-white text-[13px] font-medium rounded-full btn-lift"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-apple-text"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass border-t border-apple-border"
          >
            <ul className="flex flex-col p-6 gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-apple-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-4 pt-4 border-t border-apple-border">
                <a
                  href="https://github.com/YanFeng02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-apple-text/80"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-apple-text/80"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
