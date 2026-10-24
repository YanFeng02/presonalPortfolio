const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Photos', href: '/photos' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-8 text-[14px]">
      <a href="/" className="font-medium">
        Feng Yan
      </a>
      <nav>
        <ul className="flex gap-4 sm:gap-5 text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-fg transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
