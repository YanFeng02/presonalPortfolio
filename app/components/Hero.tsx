import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-16 pb-14">
      <Image
        src="/avatar.jpg"
        alt="Feng Yan"
        width={72}
        height={72}
        className="w-[72px] h-[72px] rounded-full object-cover"
        priority
      />

      <h1 className="mt-6 text-[28px] font-semibold tracking-tight">Feng Yan</h1>
      <p className="mt-1 text-muted">Full-stack developer · Sydney, NSW</p>

      <p className="mt-6 leading-relaxed">
        I take features from requirements to production — Django and Next.js on the web,
        LangGraph and the Claude API for agents. Finishing a Master of Computer Science at
        UOW; previously a product manager at a platform with 500M+ users.
      </p>

      <p className="mt-4 text-[14px] text-muted">
        Open to full-time roles from Dec 2026 · Valid Australian work visa
      </p>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
        <a href="https://github.com/YanFeng02" target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yan-feng-b18929190/" target="_blank" rel="noopener noreferrer" className="link">
          LinkedIn
        </a>
        <a href="mailto:fengyanfrank@126.com" className="link">
          Email
        </a>
      </div>
    </section>
  );
}
