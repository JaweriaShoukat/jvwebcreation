import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jvwebcreation.vercel.app"),
  title: {
    default: "Jaweria Shoukat — Frontend & Backend Developer",
    template: "%s | Jaweria Shoukat",
  },
  description: "Portfolio of Jaweria Shoukat, Frontend & Backend Developer specializing in Next.js, React, WordPress, Headless CMS, Sanity.io and Tailwind CSS. View my projects and get in touch.",
  keywords: [
    "Jaweria Shoukat",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React.js Developer",
    "WordPress Developer",
    "Sanity.io",
    "Tailwind CSS",
    "Web Developer Pakistan",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Jaweria Shoukat" }],
  creator: "Jaweria Shoukat",
  publisher: "Jaweria Shoukat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jvwebcreation.vercel.app",
    title: "Jaweria Shoukat — Frontend & Backend Developer",
    description: "Portfolio of Jaweria Shoukat, Frontend & Backend Developer specializing in Next.js, React, WordPress, Headless CMS, Sanity.io and Tailwind CSS.",
    siteName: "Jaweria Shoukat Portfolio",
    images: [
      {
        url: "/images/blacklogo.png",
        width: 1200,
        height: 630,
        alt: "Jaweria Shoukat — Frontend & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaweria Shoukat — Frontend & Backend Developer",
    description: "Portfolio of Jaweria Shoukat, Frontend & Backend Developer specializing in Next.js, React, WordPress, Headless CMS, Sanity.io and Tailwind CSS.",
    images: ["/images/blacklogo.png"],
    creator: "@jaweeriashoukat",
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
  icons: {
    icon: "/images/blacklogo.png",
    shortcut: "/images/blacklogo.png",
    apple: "/images/blacklogo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jaweria Shoukat",
              jobTitle: "Frontend & Backend Developer",
              url: "https://jvwebcreation.vercel.app",
              email: "jaweeriashoukat@gmail.com",
              telephone: "+92 303 0804811",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              sameAs: [
                "https://github.com/JaweriaShoukat",
                "https://www.linkedin.com/in/jaweeriashoukat/",
              ],
              knowsAbout: [
                "Next.js",
                "React.js",
                "TypeScript",
                "Tailwind CSS",
                "WordPress",
                "Sanity.io",
                "GraphQL",
                "JavaScript",
                "PHP",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
