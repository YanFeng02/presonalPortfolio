'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Detect mobile to disable parallax (continuous scroll listener is expensive on mobile)
function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

const stats = [
  { value: '3+', label: 'Years as PM' },
  { value: '500M+', label: 'Users reached' },
  { value: '2,000+', label: 'Teams served' },
  { value: '80%+', label: 'Adoption rate' },
];

const toolkitGroups = [
  {
    category: 'Frontend',
    accent: 'text-blue-400',
    topLine: 'via-blue-500/50',
    glow: 'group-hover:from-blue-500/8',
    borderHover: 'group-hover:border-blue-500/30',
    skills: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    accent: 'text-emerald-400',
    topLine: 'via-emerald-500/50',
    glow: 'group-hover:from-emerald-500/8',
    borderHover: 'group-hover:border-emerald-500/30',
    skills: ['Django REST', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Celery'],
  },
  {
    category: 'Infrastructure',
    accent: 'text-violet-400',
    topLine: 'via-violet-500/50',
    glow: 'group-hover:from-violet-500/8',
    borderHover: 'group-hover:border-violet-500/30',
    skills: ['Docker', 'AWS', 'Vercel', 'Nginx', 'CI/CD'],
  },
  {
    category: 'Languages',
    accent: 'text-amber-400',
    topLine: 'via-amber-500/50',
    glow: 'group-hover:from-amber-500/8',
    borderHover: 'group-hover:border-amber-500/30',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    category: 'Auth & Payments',
    accent: 'text-rose-400',
    topLine: 'via-rose-500/50',
    glow: 'group-hover:from-rose-500/8',
    borderHover: 'group-hover:border-rose-500/30',
    skills: ['OAuth 2.0', 'Clerk', 'Stripe'],
  },
  {
    category: 'AI & Dev Tools',
    accent: 'text-purple-400',
    topLine: 'via-purple-500/50',
    glow: 'group-hover:from-purple-500/8',
    borderHover: 'group-hover:border-purple-500/30',
    skills: ['LLM APIs', 'Claude Code', 'Cursor', 'Copilot'],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Disable parallax on mobile — saves continuous scroll listener overhead
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-apple-blue mb-6"
        >
          — About
        </motion.div>

        {/* Big statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tightest font-semibold max-w-4xl"
        >
          <span className="gradient-text">
            I ship products that live in the real world —
          </span>{' '}
          <span className="text-apple-text/50">
            from the first line of code to paying customers.
          </span>
        </motion.h2>

        {/* Body text + stats */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-apple-text/75"
          >
            <p>
              I'm a full-stack developer finishing my{' '}
              <span className="text-apple-text">Master of Computer Science</span> at the
              University of Wollongong. I built and launched{' '}
              <a
                href="https://rxtech.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:text-apple-blueHover link-underline"
              >
                rxtech.com.au
              </a>{' '}
              — a live Australian e-commerce platform — solo, end-to-end.
            </p>
            <p>
              Before code, I spent three years as a{' '}
              <span className="text-apple-text">Senior Product Manager</span> at HelloRide,
              a mobility platform with 500M+ registered users. I wrote detailed specs,
              argued over API schemas with engineers, and learned what it takes to ship
              things people actually use.
            </p>
            <p>
              Now I bring both sides together: product sense, engineering execution, and
              an obsession with AI-assisted workflows (Claude Code, Cursor, Copilot) to
              learn fast and ship quality.
            </p>
          </motion.div>

          {/* Stat cards */}
          <motion.div style={{ y }} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className="relative glass-light rounded-2xl p-6 md:p-7 overflow-hidden group min-h-[130px] flex flex-col justify-between"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-apple-blue/50 to-transparent" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/0 to-transparent group-hover:from-apple-blue/8 transition-all duration-700" />

                <div className="relative">
                  {/* Label at top */}
                  <div className="text-[10px] tracking-[0.18em] uppercase text-apple-muted/70 font-medium leading-tight">
                    {s.label}
                  </div>
                  {/* Big number below */}
                  <div className="mt-4 font-display text-[40px] md:text-[48px] font-semibold tracking-tighter gradient-text-blue leading-none">
                    {s.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Toolkit — bento grid */}
      <div className="mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-apple-muted">Toolkit</span>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {toolkitGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                className={`group relative glass-light rounded-2xl p-5 border border-apple-border ${group.borderHover} transition-all duration-500 overflow-hidden`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent ${group.topLine} to-transparent`} />
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${group.glow} transition-all duration-500`} />

                <div className="relative">
                  <div className={`text-[11px] tracking-[0.18em] uppercase font-semibold mb-3 ${group.accent}`}>
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[13px] bg-white/[0.04] text-apple-text/70 rounded-lg border border-white/[0.05] leading-tight"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
