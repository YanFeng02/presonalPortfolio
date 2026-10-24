export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <h2 className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted mb-8">{title}</h2>
      {children}
    </section>
  );
}
