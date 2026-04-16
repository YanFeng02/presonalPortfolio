'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

type Project = {
  title: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string; icon?: 'link' | 'github' }[];
  accent: string;
  visual: 'rxtech' | 'jira' | 'capstone';
  status?: string;
};

const projects: Project[] = [
  {
    title: 'RxTech',
    tagline: 'A live Australian e-commerce platform for robotic lawn mowers.',
    description:
      'Designed, built, and deployed end-to-end — from tech stack selection and UI/UX to admin back-office and cloud deployment. Real customers, real payments, real ops.',
    role: 'Sole Developer',
    period: 'Feb 2026 — Present',
    status: 'Live',
    highlights: [
      'Owned full product lifecycle: research, design, dev, deploy, maintain',
      'Built responsive storefront with multi-SKU comparison and mobile-first checkout',
      'Admin back-office so non-technical staff can manage daily ops',
      'Integrated Stripe (AUD payments, webhooks, refunds) + Clerk auth with RBAC',
      'Deployed on Vercel + AWS with custom domain, DNS, SSL, CI/CD',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Clerk', 'Vercel', 'AWS', 'Tailwind'],
    links: [{ label: 'rxtech.com.au', href: 'https://rxtech.com.au', icon: 'link' }],
    accent: 'from-emerald-500/30 via-teal-500/20 to-transparent',
    visual: 'rxtech',
  },
  {
    title: 'Marketing Simplified',
    tagline: 'Multi-service advertising operations platform with 18+ Docker services.',
    description:
      "Team project helping advertising teams manage campaigns, budgets, creative assets, and AI-driven workflows. Agile sprints and GitHub PR workflows with a Sydney-based team.",
    role: 'Full-Stack Developer',
    period: 'Feb 2026 — Present',
    highlights: [
      'Built Zoom meeting integration from scratch — OAuth 2.0, CRUD APIs, 27 passing unit tests',
      'Developed typed Next.js frontend: scheduling pages, settings panel, API service layer',
      'Added encrypted storage for third-party OAuth tokens with custom crypto module',
      'Shipped faster with Claude Code & Copilot for test gen and cross-service debugging',
    ],
    stack: ['Django REST', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Kafka', 'Redis', 'Celery', 'Docker'],
    links: [
      { label: 'marketing.simplified.dpdns.org', href: 'https://marketing.simplified.dpdns.org', icon: 'link' },
    ],
    accent: 'from-apple-blue/30 via-indigo-500/20 to-transparent',
    visual: 'jira',
  },
  {
    title: 'LLM Website Builder',
    tagline: 'An AI agent that builds websites through natural conversation.',
    description:
      'Capstone project letting non-technical users build websites by chatting with an LLM. Designed both the product architecture and full-stack implementation.',
    role: 'Product Architect & Full-Stack Developer',
    period: 'Jan 2026 — Present',
    highlights: [
      'Designing system modules, user interaction flows, and prompt strategies',
      'Building conversational UI and backend API orchestration',
      'Code-generation pipeline from text input to deployable web pages',
      'Real-time preview rendering',
    ],
    stack: ['Next.js', 'LLM APIs', 'Node.js', 'TypeScript'],
    links: [
      { label: 'GitHub', href: 'https://github.com/YanFeng02', icon: 'github' },
    ],
    accent: 'from-purple-500/30 via-pink-500/20 to-transparent',
    visual: 'capstone',
  },
];

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'rxtech') {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full">
        <defs>
          <linearGradient id="rx-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a2f24" />
            <stop offset="100%" stopColor="#061a13" />
          </linearGradient>
          <linearGradient id="rx-mower" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#rx-bg)" rx="12" />
        {/* grid */}
        {[...Array(10)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 26} x2="400" y2={i * 26} stroke="rgba(52,211,153,0.06)" />
        ))}
        {[...Array(16)].map((_, i) => (
          <line key={`v${i}`} x1={i * 26} y1="0" x2={i * 26} y2="260" stroke="rgba(52,211,153,0.06)" />
        ))}
        {/* mower */}
        <g transform="translate(130, 90)">
          <rect x="0" y="20" width="140" height="60" rx="24" fill="url(#rx-mower)" />
          <rect x="20" y="0" width="100" height="30" rx="14" fill="#064e3b" />
          <circle cx="30" cy="85" r="14" fill="#022c22" />
          <circle cx="110" cy="85" r="14" fill="#022c22" />
          <circle cx="70" cy="45" r="6" fill="#d1fae5" opacity="0.8" />
        </g>
        {/* labels */}
        <text x="20" y="30" fill="#34d399" fontSize="10" fontFamily="monospace" opacity="0.7">rxtech.com.au</text>
        <text x="20" y="240" fill="#a7f3d0" fontSize="11" fontFamily="monospace" opacity="0.5">AUD · Stripe · Live</text>
      </svg>
    );
  }
  if (kind === 'jira') {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full">
        <defs>
          <linearGradient id="j-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1128" />
            <stop offset="100%" stopColor="#060a1a" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#j-bg)" rx="12" />
        {/* Kanban columns */}
        {[
          { x: 30, color: '#60a5fa', label: 'TODO', cards: 3 },
          { x: 150, color: '#a78bfa', label: 'DOING', cards: 2 },
          { x: 270, color: '#34d399', label: 'DONE', cards: 4 },
        ].map((col, idx) => (
          <g key={idx}>
            <text x={col.x} y="30" fill={col.color} fontSize="9" fontFamily="monospace" opacity="0.8">
              {col.label}
            </text>
            {[...Array(col.cards)].map((_, i) => (
              <rect
                key={i}
                x={col.x}
                y={45 + i * 40}
                width="100"
                height="30"
                rx="4"
                fill="white"
                opacity={0.05 + i * 0.02}
              />
            ))}
          </g>
        ))}
        <text x="20" y="250" fill="#93c5fd" fontSize="10" fontFamily="monospace" opacity="0.5">
          18+ services · Django · Next.js · Kafka
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full">
      <defs>
        <linearGradient id="c-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0b2e" />
          <stop offset="100%" stopColor="#0a0414" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#c-bg)" rx="12" />
      {/* Chat bubbles */}
      <g>
        <rect x="30" y="40" width="180" height="36" rx="18" fill="rgba(167,139,250,0.15)" />
        <text x="45" y="63" fill="#c4b5fd" fontSize="11" fontFamily="monospace">Build me a blog site...</text>
        <rect x="190" y="100" width="180" height="36" rx="18" fill="rgba(236,72,153,0.15)" />
        <text x="205" y="123" fill="#f9a8d4" fontSize="11" fontFamily="monospace">Generating layout ✦</text>
        <rect x="30" y="160" width="200" height="36" rx="18" fill="rgba(167,139,250,0.15)" />
        <text x="45" y="183" fill="#c4b5fd" fontSize="11" fontFamily="monospace">Make the header sticky</text>
      </g>
      <text x="20" y="240" fill="#d8b4fe" fontSize="10" fontFamily="monospace" opacity="0.5">
        LLM · Next.js · No-code
      </text>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-apple-blue mb-6"
        >
          — Selected Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tightest font-semibold max-w-4xl"
        >
          <span className="gradient-text">Things I've built.</span>{' '}
          <span className="text-apple-text/50">Live products, team projects, and experiments.</span>
        </motion.h2>

        <div className="mt-16 md:mt-24 space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}>
                {/* Visual card */}
                <div className="relative group">
                  <div className={`absolute -inset-6 bg-gradient-to-br ${project.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
                  <motion.div
                    whileHover={{ y: -6, rotate: idx % 2 === 1 ? -1 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative glass-light rounded-3xl p-4 overflow-hidden"
                  >
                    <div className="aspect-[400/260] rounded-2xl overflow-hidden">
                      <ProjectVisual kind={project.visual} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[12px] text-apple-muted">
                    <span className="tracking-wide uppercase">{project.role}</span>
                    <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
                    <span>{project.period}</span>
                    {project.status && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
                        <span className="inline-flex items-center gap-1.5 text-emerald-400">
                          <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </span>
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tightest text-apple-text">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-lg md:text-xl text-apple-text/70 leading-snug tracking-tight">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-[15px] text-apple-muted leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-[14px] text-apple-text/80 leading-relaxed">
                        <span className="text-apple-blue mt-0.5 flex-shrink-0">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] bg-white/[0.04] text-apple-text/70 rounded-md border border-apple-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 px-4 py-2 glass-light hover:bg-white/[0.08] text-apple-text text-[13px] font-medium rounded-full btn-lift"
                      >
                        {link.icon === 'github' ? <Github size={14} /> : null}
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
