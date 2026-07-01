import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DecisionHub',
  description: 'Community-powered decision making for modern teams and curious minds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
