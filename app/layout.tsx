import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feng Yan (Frank) — Full-Stack Developer',
  description:
    'Aspiring full-stack developer based in Sydney. Master of Computer Science at UOW. Building modern web products with React, Next.js, Django, and AI.',
  openGraph: {
    title: 'Feng Yan (Frank) — Full-Stack Developer',
    description: 'Full-stack developer · Sydney · Ex-PM at 500M+ user platform',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✦</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-apple-text antialiased">{children}</body>
    </html>
  );
}
