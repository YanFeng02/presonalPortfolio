export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-line text-[13px] text-muted">
      © {year} Feng Yan
    </footer>
  );
}
