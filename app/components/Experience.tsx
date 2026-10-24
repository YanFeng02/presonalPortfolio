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
    period: 'Oct 2026 – Now',
    description:
      'Running live demos at the Sydney Home Show and Costco roadshows. Sold 7 mowers so far, all face to face.',
    photos: [
      { src: '/experience/anthbot-sydney.jpg', alt: 'At the Anthbot stand, Sydney Home Show', width: 750, height: 1000 },
    ],
  },
  {
    kind: 'work',
    title: 'Full-Stack Engineer Intern',
    org: 'Marketing Simplified',
    location: 'Remote',
    period: 'Mar–Jun 2026',
    description:
      'Worked on mediaJira, an ad operations platform, as part of a distributed team. We ran Agile sprints with Jira tickets and GitHub PR reviews. What I built there is under Selected work.',
  },
  {
    kind: 'edu',
    title: 'Master of Computer Science',
    org: 'University of Wollongong',
    location: 'Australia',
    period: 'Jul 2024 – Dec 2026',
    description:
      'Coursework in full-stack web development, AI and cybersecurity, computer networks and cryptography.',
    tag: 'Current',
  },
  {
    kind: 'work',
    title: 'Senior Product Manager',
    org: 'Hello TransTech (HelloRide)',
    location: 'Shanghai',
    period: 'May 2021 – Jul 2024',
    description: 'HelloRide is a shared-mobility platform with over 500 million registered users.',
    highlights: [
      'Owned the internal BI and data visualisation platform. Over 80% of staff across every business unit used it.',
      'Shipped an LLM-based tool for asking data questions in plain language, using metadata annotation and a Dify knowledge base, so business teams could get numbers without writing SQL.',
      'Designed rule-based access provisioning tied to the HR system, which cut more than 20,000 manual approvals a year by 90%.',
    ],
    photos: [
      { src: '/experience/helloride-team.jpg', alt: 'With teammates at HelloRide, Shanghai', width: 1200, height: 900 },
      { src: '/experience/helloride-group.jpg', alt: 'HelloRide team event, Shanghai', width: 1200, height: 800 },
    ],
  },
  {
    kind: 'edu',
    title: 'Master of Finance (Merit)',
    org: 'Queen Mary University of London',
    location: 'United Kingdom',
    period: 'Oct 2019 – Nov 2020',
    description: '',
  },
  {
    kind: 'edu',
    title: 'Bachelor of Economics',
    org: 'Jiangxi Agricultural University',
    location: 'China',
    period: 'Sep 2015 – Jun 2019',
    description: '',
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="space-y-10">
        {timeline.map((item) => (
          <li key={item.title} className="grid sm:grid-cols-[140px_1fr] gap-x-4 gap-y-1">
            <div className="text-[13px] text-muted tabular-nums pt-0.5">{item.period}</div>
            <div>
              <h3 className="font-semibold tracking-tight">
                {item.title}
                {item.tag && (
                  <span className="ml-2 rounded-full bg-subtle px-2 py-0.5 align-middle text-[11px] font-normal text-muted">
                    {item.tag}
                  </span>
                )}
              </h3>
              <div className="text-[14px] text-muted">
                {item.org}, {item.location}
              </div>
              {item.description && <p className="mt-3 text-[15px] leading-relaxed">{item.description}</p>}
              {item.highlights && (
                <ul className="mt-3 space-y-2 text-[14px] text-muted">
                  {item.highlights.map((h) => (
                    <li key={h} className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-px before:bg-muted">
                      {h}
                    </li>
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
                        className="h-28 sm:h-32 w-auto rounded-lg ring-1 ring-line object-cover hover:opacity-90 transition-opacity"
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
