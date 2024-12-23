import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Senior Software Developer',
  icons: {
    icon: [
      {
        url: 'https://cdn.dribbble.com/users/1125518/screenshots/3597500/portfolio-icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: 'https://cdn.dribbble.com/users/1125518/screenshots/3597500/portfolio-icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://cdn.dribbble.com/users/1125518/screenshots/3597500/portfolio-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}