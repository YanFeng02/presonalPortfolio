import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Tracker from './components/Tracker';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Feng Yan · Full-stack developer',
  description:
    'Full-stack developer in Sydney working with Django, Next.js and AI agents. Master of Computer Science at UOW, previously a product manager.',
  openGraph: {
    title: 'Feng Yan · Full-stack developer',
    description: 'Full-stack developer · Sydney · Django, Next.js, AI agents',
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <Tracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
