// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Frontend Developer Portfolio of [Your Name]',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen px-4 sm:px-8 md:px-16 bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
