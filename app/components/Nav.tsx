const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <header className="flex items-center justify-between py-8 text-[14px]">
      <a href="#" className="font-medium">
        Feng Yan
      </a>
      <nav>
        <ul className="flex gap-5 text-muted">
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
