import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personal } from "@/lib/data/personal";

const siteUrl = "https://sarveshkarthik.dev";
const title = `${personal.name} | Software Developer | AI/ML | Data`;
const description =
  "Portfolio of Sarvesh Karthik, an Information Technology student building practical software systems in Java, Python, SQL, PostgreSQL, REST APIs, and AI/ML — with projects spanning database engineering, automation, and applied ML.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${personal.name}`,
  },
  description,
  keywords: [
    "Sarvesh Karthik",
    "Software Developer",
    "AI/ML",
    "Data Analytics",
    "Backend Developer",
    "Python",
    "Java",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${personal.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Marks that JS is running so CSS can opt into scroll-reveal hiding. Runs before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js','')",
          }}
        />
      </head>
      <body className="font-sans antialiased transition-theme">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
