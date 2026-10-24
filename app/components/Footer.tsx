export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-14 pb-10 flex flex-wrap justify-between gap-4 text-[13px] text-muted">
      <span>© {year} Feng Yan</span>
      <span className="flex gap-5">
        <a href="https://github.com/YanFeng02" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yan-feng-b18929190/" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
          LinkedIn
        </a>
      </span>
    </footer>
  );
}
