import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code&Tools — Build. Learn. Create. | Tools for Developers & B.Tech Students",
    template: "%s | Code&Tools",
  },
  description:
    "Code&Tools is an all-in-one developer toolkit and programming-learning platform with private browser-based utilities, online multi-language compilers, file converters, compressors, and engineering tutorials.",
  keywords: [
    "developer tools",
    "code and tools",
    "code&tools",
    "b.tech tools",
    "online compiler",
    "json formatter",
    "jwt decoder",
    "base64 encoder",
    "uuid generator",
    "unix timestamp converter",
    "regex tester",
    "hash generator",
    "color converter",
    "yaml converter",
    "file converter",
    "file compressor",
    "learn c programming",
    "learn cpp",
    "learn java",
    "learn python",
    "learn typescript",
    "client-side utilities",
    "private developer tools",
  ],
  authors: [{ name: "Code&Tools Team" }],
  creator: "Code&Tools",
  publisher: "Code&Tools",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/codeandtools-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/branding/codeandtools-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Code&Tools",
    title: "Code&Tools — Build. Learn. Create.",
    description:
      "Developer tools, online compiler, file converters, compressors, and programming resources. 100% private, browser-based.",
    images: [
      {
        url: "/branding/codeandtools-og.png",
        width: 1400,
        height: 787,
        alt: "Code&Tools — Build. Learn. Create.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code&Tools — Build. Learn. Create.",
    description:
      "Code&Tools: compiler, learning guides, converters, compressors and more — 100% client-side.",
    images: ["/branding/codeandtools-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationJsonLd();
  const websiteSchema = getWebSiteJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([orgSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-blue-500/25 selection:text-blue-400">
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
