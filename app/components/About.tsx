import Section from './Section';

const stats = [
  { value: '3 yrs', label: 'As a product manager' },
  { value: '500M+', label: 'Users on HelloRide' },
  { value: '80%+', label: 'Staff using the BI platform' },
  { value: '30s → 2s', label: 'Bulk import time' },
];

const toolkit = [
  { category: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'] },
  { category: 'Backend', skills: ['Django', 'Django REST Framework', 'Django Channels', 'Celery', 'Node.js'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'Tiptap'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'DevOps & Cloud', skills: ['Docker', 'Nginx', 'AWS', 'Vercel', 'Git', 'CI/CD'] },
  { category: 'AI', skills: ['LangGraph', 'Claude API', 'Claude Code', 'GitHub Copilot'] },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-5 leading-[1.75]">
        <p>
          Earlier this year I did a remote internship at Marketing Simplified, working on
          mediaJira, an ad operations platform built on Django and Next.js. Most of my work there
          was real-time messaging and making sure each customer's data stayed separate.
        </p>
        <p>
          I also built the online store for Universe Time Pty Ltd as a full-stack developer,
          including the storefront, Stripe payments, an admin panel for the staff and the
          deployment.
        </p>
        <p>
          Before I moved into engineering I was a product manager at HelloRide for three years. A
          lot of that time was spent with developers working through APIs, data models and release
          plans, so I'm used to thinking about why a feature exists, not just how to build it.
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-line pl-4">
            <dd className="text-[22px] font-semibold tracking-tight tabular-nums">{s.value}</dd>
            <dt className="mt-1 text-[12px] leading-snug text-muted pr-2">{s.label}</dt>
          </div>
        ))}
      </dl>

      <dl className="mt-12 divide-y divide-line border-t border-line text-[14px]">
        {toolkit.map((group) => (
          <div key={group.category} className="grid sm:grid-cols-[140px_1fr] gap-x-4 gap-y-0.5 py-2.5">
            <dt className="text-muted">{group.category}</dt>
            <dd>{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
