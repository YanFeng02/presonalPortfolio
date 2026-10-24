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
    <section id={id} className="py-12 border-t border-line">
      <h2 className="text-[13px] font-medium text-muted mb-6">{title}</h2>
      {children}
    </section>
  );
}
