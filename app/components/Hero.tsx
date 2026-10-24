import Image from 'next/image';

const links = [
  { label: 'GitHub', href: 'https://github.com/YanFeng02' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yan-feng-b18929190/' },
  { label: 'Email', href: 'mailto:fengyanfrank@126.com' },
];

export default function Hero() {
  return (
    <section className="pt-16 pb-16">
      <div className="flex items-center gap-4">
        <Image
          src="/avatar.jpg"
          alt="Feng Yan"
          width={128}
          height={128}
          className="w-16 h-16 rounded-full object-cover ring-1 ring-line"
          priority
        />
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight leading-tight">Feng Yan</h1>
          <p className="text-[15px] text-muted">Full-stack developer in Sydney</p>
        </div>
      </div>

      <p className="mt-8 text-[17px] leading-[1.7]">
        I build web apps with Django and Next.js, and lately AI agents with LangGraph and the
        Claude API. I'm finishing my Master of Computer Science at UOW this December.{' '}
        <span className="text-muted">
          Before that I spent three years as a product manager in Shanghai.
        </span>
      </p>

      <div className="mt-8">
        <div className="flex gap-5 text-[14px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
