import Section from './Section';

type Project = {
  title: string;
  tagline: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: 'mediaJira',
    tagline: 'An ad operations platform for marketing teams, with 18 services running in Docker.',
    role: 'Full-stack engineer intern at Marketing Simplified',
    period: 'Mar–Jun 2026',
    highlights: [
      'Built the real-time support workspace with Django Channels. Agents, conversations and new tickets each get their own group, so messages only go to the people who need them.',
      "Made sure one organisation can never see another's data, across both REST and WebSocket, with ownership checks, upload validation and pagination.",
      'Brought large CSV/XLSX imports down from about 30 seconds to under 2 by batching inserts, cutting repeated queries and uploading chunks in parallel.',
      'Designed the customer data model and made organisation setup safe to retry.',
      'Built queue and team management (T1 to T4 tiers), invitations and a rich-text quick-reply library.',
      'Built the Zoom integration end to end: OAuth 2.0, encrypted token storage, 27 unit tests and the scheduling pages in Next.js.',
    ],
    stack: ['Django', 'Django Channels', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
  },
  {
    title: 'Web Builder Agent',
    tagline: 'A chat-based tool that writes, fixes and deploys a website for you.',
    role: 'Capstone project at UOW, team of 6. I built the agent.',
    period: 'Jan–Nov 2026',
    highlights: [
      'The agent is a LangGraph state machine. It plans the site, writes the code, runs it, reads any build errors or stack traces, fixes them and deploys the result in Docker.',
      'It uses Claude API tool calls to edit files, run shell commands and deploy.',
      'Every step streams to the chat UI, so you can watch it work and preview the site as it goes.',
    ],
    stack: ['LangGraph', 'Claude API', 'Next.js', 'Docker'],
    link: { label: 'GitHub', href: 'https://github.com/YanFeng02' },
  },
  {
    title: 'Universe Time Pty Ltd',
    tagline: 'Online store for an Australian robotic mower retailer.',
    role: 'Full-stack developer',
    period: 'Feb–Aug 2026',
    highlights: [
      'Product catalogue, side-by-side spec comparison and a checkout that works well on phones.',
      'An admin back office so staff can manage products, stock and orders without touching code.',
      'Stripe for AUD payments, webhooks and refunds, plus Clerk login with role-based access.',
      'Hosted on Vercel and AWS, with CI/CD from GitHub.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Clerk', 'Vercel', 'AWS'],
  },
];

export default function Projects() {
  return (
    <Section id="work" title="Selected work">
      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.title} className="rounded-xl border border-line p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[17px] font-semibold tracking-tight">
                {project.title}
              </h3>
              <span className="text-[13px] text-muted tabular-nums">{project.period}</span>
            </div>
            <div className="mt-0.5 text-[14px] text-muted">{project.role}</div>

            <p className="mt-4 leading-relaxed">{project.tagline}</p>

            <ul className="mt-3 space-y-2 text-[14px] text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-px before:bg-muted">
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col items-start gap-4">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-subtle px-2.5 py-0.5 text-[12px] text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium hover:text-muted transition-colors"
                >
                  {project.link.label} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
