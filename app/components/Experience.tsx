import Image from 'next/image';
import Section from './Section';

type TimelineItem = {
  kind: 'work' | 'edu';
  title: string;
  org: string;
  location: string;
  period: string;
  description: string;
  highlights?: string[];
  tag?: string;
  photos?: { src: string; alt: string; width: number; height: number }[];
};

const timeline: TimelineItem[] = [
  {
    kind: 'work',
    title: 'Sales Representative (Casual)',
    org: 'Anthbot Robotic Mowers',
    location: 'Sydney',
    period: 'Oct 2026 — Present',
    description:
      'Ran live product demos at the Sydney Home Show and Costco roadshows, selling 7 robotic mowers face to face.',
    photos: [
      { src: '/photos/anthbot-sydney.jpg', alt: 'At the Anthbot stand, Sydney Home Show', width: 750, height: 1000 },
    ],
  },
  {
    kind: 'work',
    title: 'Full-Stack Engineer Intern',
    org: 'Marketing Simplified',
    location: 'Remote',
    period: 'Mar 2026 — Jun 2026',
    description:
      'Worked on mediaJira, an advertising operations platform (Django, Next.js, 18-service Docker setup), in a distributed team using Agile sprints, Jira and GitHub PR reviews.',
    highlights: [
      'Built a real-time support workspace with Django Channels — per-agent, per-conversation and new-ticket groups so events only reach the people who need them',
      'Enforced tenant isolation across REST and WebSocket, with ownership checks, upload validation and pagination',
      'Cut large CSV/XLSX import time from ~30s to under 2s with bulk inserts, fewer queries and parallel chunked uploads',
      'Designed the customer data model and idempotent organisation setup on first project',
      'Built queue and team management (T1–T4), invitations and a rich-text quick-reply library',
      'Built the Zoom integration end to end: OAuth 2.0, encrypted token storage, 27 unit tests, Next.js scheduling pages',
    ],
  },
  {
    kind: 'edu',
    title: 'Master of Computer Science',
    org: 'University of Wollongong',
    location: 'Australia',
    period: 'Jul 2024 — Dec 2026',
    description:
      'Full-Stack Web Development, AI and Cybersecurity, Computer Networks, Cryptography.',
    tag: 'Current',
  },
  {
    kind: 'work',
    title: 'Senior Product Manager',
    org: 'Hello TransTech (HelloRide)',
    location: 'Shanghai',
    period: 'May 2021 — Jul 2024',
    description: 'Shared-mobility platform with 500M+ registered users.',
    highlights: [
      'Owned the internal BI and data visualisation platform, used by 80%+ of staff across all business units',
      'Shipped an LLM-based natural-language data query tool (metadata annotation + Dify knowledge base) so business users could get data without SQL',
      'Designed rule-based access provisioning linked to the HR system, cutting 20,000+ manual approvals a year by 90%',
    ],
    photos: [
      { src: '/photos/helloride-team.jpg', alt: 'With teammates at HelloRide, Shanghai', width: 1200, height: 900 },
      { src: '/photos/helloride-group.jpg', alt: 'HelloRide team event, Shanghai', width: 1200, height: 800 },
    ],
  },
  {
    kind: 'edu',
    title: 'Master of Finance (Merit)',
    org: 'Queen Mary University of London',
    location: 'United Kingdom',
    period: 'Oct 2019 — Nov 2020',
    description: '',
  },
  {
    kind: 'edu',
    title: 'Bachelor of Economics',
    org: 'Jiangxi Agricultural University',
    location: 'China',
    period: 'Sep 2015 — Jun 2019',
    description: '',
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="space-y-8">
        {timeline.map((item) => (
          <li key={item.title} className="grid sm:grid-cols-[140px_1fr] gap-x-4 gap-y-1">
            <div className="text-[13px] text-muted pt-0.5">{item.period}</div>
            <div>
              <h3 className="font-medium">
                {item.title}
                {item.tag && <span className="ml-2 text-[12px] font-normal text-muted">· {item.tag}</span>}
              </h3>
              <div className="text-[14px] text-muted">
                {item.org}, {item.location}
              </div>
              {item.description && <p className="mt-2 text-[14px] leading-relaxed">{item.description}</p>}
              {item.highlights && (
                <ul className="mt-2 space-y-1.5 text-[14px] text-muted list-disc pl-5 marker:text-line">
                  {item.highlights.map((h) => (
                    <li key={h} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              )}
              {item.photos && (
                <div className="mt-4 flex gap-2 overflow-x-auto">
                  {item.photos.map((photo) => (
                    <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        title={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="200px"
                        className="h-28 sm:h-32 w-auto rounded-md border border-line object-cover hover:opacity-85 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
