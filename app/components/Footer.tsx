'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-apple-border py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[13px] text-apple-muted">
            <span className="text-apple-blue">✦</span>
            <span>Frank Yan · Designed &amp; built from scratch.</span>
          </div>

          <div className="flex items-center gap-4 text-[13px] text-apple-muted">
            <a
              href="https://github.com/YanFeng02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-apple-text transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-apple-text transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
            <a
              href="mailto:fengyanfrank@126.com"
              className="flex items-center gap-1.5 hover:text-apple-text transition-colors"
            >
              <Mail size={14} /> Email
            </a>
          </div>

          <div className="text-[12px] text-apple-muted/70">
            © {year} Feng Yan
          </div>
        </div>
      </div>
    </footer>
  );
}
