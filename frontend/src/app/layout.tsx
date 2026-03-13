import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tracker — Price Comparison',
  description: 'Compare prices across Indian e-commerce platforms',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
