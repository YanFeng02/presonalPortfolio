import Section from './Section';

const stats = [
  { value: '3 yrs', label: 'Product management' },
  { value: '500M+', label: 'Platform users' },
  { value: '80%+', label: 'BI platform adoption' },
  { value: '30s → 2s', label: 'Bulk import speed-up' },
];

const toolkit = [
  { category: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'] },
  { category: 'Backend', skills: ['Django', 'Django REST Framework', 'Django Channels', 'Celery', 'Node.js'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'Tiptap'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'DevOps & Cloud', skills: ['Docker', 'Nginx', 'AWS', 'Vercel', 'Git', 'CI/CD'] },
  { category: 'AI', skills: ['LangGraph', 'Claude API (tool use)', 'Claude Code', 'GitHub Copilot'] },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed">
        <p>
          I'm a full-stack developer finishing my Master of Computer Science at the University
          of Wollongong (Dec 2026). During a remote internship at Marketing Simplified I built
          real-time and multi-tenant features for mediaJira, an advertising operations SaaS
          running on Django, Next.js and 18 Docker services.
        </p>
        <p>
          I also built{' '}
          <a href="https://rxtech.com.au" target="_blank" rel="noopener noreferrer" className="link">
            rxtech.com.au
          </a>{' '}
          on my own — an e-commerce store for an Australian robotic mower retailer, from
          storefront to Stripe payments and deployment.
        </p>
        <p>
          Before switching to engineering I spent three years as a product manager at HelloRide,
          working closely with developers on APIs, data models and releases. That's why I'm
          comfortable owning a feature from requirements all the way to production.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-[13px] text-muted">{s.label}</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">{s.value}</dd>
          </div>
        ))}
      </dl>

      <dl className="mt-10 space-y-2 text-[14px]">
        {toolkit.map((group) => (
          <div key={group.category} className="grid sm:grid-cols-[140px_1fr] gap-x-4">
            <dt className="text-muted">{group.category}</dt>
            <dd>{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
