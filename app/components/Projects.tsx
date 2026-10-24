import Section from './Section';

type Project = {
  title: string;
  tagline: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  status?: string;
};

const projects: Project[] = [
  {
    title: 'Web Builder Agent',
    tagline: 'An AI agent that plans, writes, debugs and deploys websites from a chat request.',
    role: 'Capstone, University of Wollongong · team of 6 · I own the agent',
    period: 'Jan 2026 — Nov 2026',
    highlights: [
      'LangGraph state machine: turns a request into a plan, writes code, runs it, reads build errors and stack traces, fixes them and deploys in Docker',
      'Claude API tool calls for file edits, shell commands and deployment',
      'Streams each step to the chat UI so users can follow progress and preview the result',
    ],
    stack: ['LangGraph', 'Claude API', 'Next.js', 'Docker'],
    links: [{ label: 'GitHub', href: 'https://github.com/YanFeng02' }],
  },
  {
    title: 'RxTech',
    tagline: 'Online store for an Australian robotic lawn mower retailer, built solo.',
    role: 'Sole developer',
    period: 'Feb 2026 — Aug 2026',
    status: 'Live',
    highlights: [
      'Product catalogue, spec comparison and mobile-first checkout',
      'Admin back office so non-technical staff can manage products, stock and orders',
      'Stripe (AUD payments, webhooks, refunds) and Clerk auth with role-based access',
      'Deployed on Vercel and AWS with CI/CD from GitHub',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Clerk', 'Vercel', 'AWS'],
    links: [{ label: 'rxtech.com.au', href: 'https://rxtech.com.au' }],
  },
];

export default function Projects() {
  return (
    <Section id="work" title="Selected work">
      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {project.title}
                {project.status && (
                  <span className="ml-2 text-[12px] font-normal text-muted">· {project.status}</span>
                )}
              </h3>
              <span className="text-[13px] text-muted tabular-nums">{project.period}</span>
            </div>
            <div className="text-[14px] text-muted">{project.role}</div>

            <p className="mt-3 leading-relaxed">{project.tagline}</p>

            <ul className="mt-3 space-y-1.5 text-[14px] text-muted list-disc pl-5 marker:text-line">
              {project.highlights.map((h) => (
                <li key={h} className="leading-relaxed">{h}</li>
              ))}
            </ul>

            <p className="mt-3 text-[13px] text-muted font-mono">{project.stack.join(' · ')}</p>

            {project.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-4 text-[14px]">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
