'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

type TimelineItem = {
  kind: 'work' | 'edu';
  title: string;
  org: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
  tag?: string;
};

const timeline: TimelineItem[] = [
  {
    kind: 'edu',
    title: 'Master of Computer Science',
    org: 'University of Wollongong',
    location: 'Australia',
    period: 'Jul 2024 — Dec 2026 (expected)',
    description:
      'Software Engineering, AI, Computer Networks. Relevant coursework: Full-Stack Web Development, AI & Cybersecurity, Cryptography, Information Security Management.',
    tag: 'Current',
  },
  {
    kind: 'work',
    title: 'Senior Product Manager',
    org: 'Hello TransTech (HelloRide)',
    location: 'Shanghai, China',
    period: 'May 2021 — Jul 2024',
    description:
      'Data platform PM delivering internal BI and LLM products at a shared-mobility platform with 500M+ registered users.',
    highlights: [
      'Scaled internal BI platform to 80%+ company-wide adoption',
      'Shipped LLM-powered natural-language data query (Dify-based) — no SQL needed',
      'Auto-provisioning system cut 20,000+ manual approvals/year by 90%',
      'Partnered daily with engineers on API design, schemas, release planning',
    ],
  },
  {
    kind: 'edu',
    title: 'Master of Finance',
    org: 'Queen Mary University of London',
    location: 'United Kingdom',
    period: 'Oct 2019 — Nov 2020',
    description: 'Merit (GPA 3.7 / 4.0)',
  },
  {
    kind: 'edu',
    title: 'Bachelor of Economics',
    org: 'Jiangxi Agricultural University',
    location: 'China',
    period: 'Sep 2015 — Jun 2019',
    description:
      'GPA 3.3 / 4.0. Published sole-author peer-reviewed paper in a CSSCI national core journal.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-40 bg-gradient-to-b from-transparent via-apple-surface/40 to-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-apple-blue mb-6"
        >
          — Path
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tightest font-semibold max-w-4xl"
        >
          <span className="gradient-text">Experience &amp; education.</span>{' '}
          <span className="text-apple-text/50">From product to code, from finance to CS.</span>
        </motion.h2>

        <div className="mt-16 md:mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-apple-blue/40 via-apple-border to-transparent" />

          <div className="space-y-10 md:space-y-14">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08,
                }}
                className="relative pl-14 md:pl-24"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-8 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-apple-blue ring-4 ring-black">
                  <div className="absolute inset-0 rounded-full bg-apple-blue animate-ping opacity-40" />
                </div>

                <div className="glass-light rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] transition-all duration-500 group">
                  <div className="flex flex-wrap items-center gap-2 text-[12px] text-apple-muted mb-3">
                    <span className="inline-flex items-center gap-1.5 text-apple-blue">
                      {item.kind === 'work' ? (
                        <Briefcase size={12} strokeWidth={1.8} />
                      ) : (
                        <GraduationCap size={12} strokeWidth={1.8} />
                      )}
                      {item.kind === 'work' ? 'Work' : 'Education'}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
                    <span>{item.period}</span>
                    <span className="w-1 h-1 rounded-full bg-apple-muted/40" />
                    <span>{item.location}</span>
                    {item.tag && (
                      <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[10px] tracking-wider">
                        <Sparkles size={10} /> {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-apple-text">
                    {item.title}
                  </h3>
                  <div className="text-[14px] text-apple-text/70 mt-1">{item.org}</div>

                  <p className="mt-4 text-[14px] text-apple-text/75 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-[13px] text-apple-text/70 leading-relaxed">
                          <span className="text-apple-blue mt-0.5 flex-shrink-0">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
