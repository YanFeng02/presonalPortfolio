'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Django', 'Node.js',
  'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Vercel', 'Stripe', 'Clerk', 'Tailwind',
  'REST APIs', 'OAuth 2.0', 'LLM APIs', 'Claude Code', 'Cursor', 'Git',
  'Kafka', 'Celery', 'Nginx', 'Java', 'SQL', 'Agile',
];

const stats = [
  { value: '3+', label: 'Years as PM' },
  { value: '500M+', label: 'Users reached' },
  { value: '2,000+', label: 'Teams served' },
  { value: '80%+', label: 'Adoption rate' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-apple-blue mb-6"
        >
          — About
        </motion.div>

        {/* Big statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            viewport={{ once: true, margin: '-100px' }}
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

          <motion.div
            style={{ y }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className="relative glass-light rounded-2xl p-6 md:p-7 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/0 to-apple-blue/0 group-hover:from-apple-blue/10 group-hover:to-transparent transition-all duration-700" />
                <div className="relative">
                  <div className="font-display text-3xl md:text-4xl font-semibold tracking-tighter gradient-text-blue">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[12px] text-apple-muted tracking-wide uppercase">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skill marquee */}
      <div className="mt-24 md:mt-32">
        <div className="text-[11px] tracking-[0.25em] uppercase text-apple-muted text-center mb-6">
          Toolkit
        </div>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="mx-6 text-2xl md:text-4xl font-display font-medium tracking-tighter text-apple-text/40 hover:text-apple-text transition-colors duration-500"
              >
                {skill}
                <span className="ml-12 text-apple-blue/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
