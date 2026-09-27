import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devforge.dev'),
  title: {
    default: 'DevForge — Build. Learn. Create. | Tools for Developers & B.Tech Students',
    template: '%s | DevForge',
  },
  description:
    'DevForge is a complete toolkit for developers and B.Tech students with developer tools, online compilers, converters, compressors, and programming resources.',
  keywords: [
    'developer tools',
    'devforge',
    'b.tech tools',
    'online compiler',
    'json formatter',
    'jwt decoder',
    'base64 encoder',
    'uuid generator',
    'unix timestamp converter',
    'regex tester',
    'hash generator',
    'color converter',
    'yaml converter',
    'file converter',
    'client-side utilities',
    'private developer tools',
  ],
  authors: [{ name: 'DevForge Team' }],
  creator: 'DevForge',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/branding/devforge-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/branding/devforge-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devforge.dev',
    siteName: 'DevForge',
    title: 'DevForge — Build. Learn. Create.',
    description:
      'Developer tools, online compiler, file converters, compressors, and programming resources. 100% private, browser-based.',
    images: [
      {
        url: '/branding/devforge-og.png',
        width: 1400,
        height: 787,
        alt: 'DevForge — Build. Learn. Create.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevForge — Build. Learn. Create.',
    description:
      'DevForge: compiler, learning guides, converters, compressors and more — 100% client-side.',
    images: ['/branding/devforge-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#090d16] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
