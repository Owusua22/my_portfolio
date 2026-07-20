import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import TechSidebar from "@/components/TechSidebar";
import ToolsSidebar from "@/components/ToolsSidebar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://sarahnkansah.com"),

  title: {
    default:
      "Sarah Nkansah | Full-Stack Developer, SEO Specialist & Digital Solutions Expert",
    template: "%s | Sarah Nkansah",
  },

  description:
    "Sarah Nkansah is a Full-Stack Software Developer, React & Next.js Developer, SEO Specialist, and Digital Solutions Expert based in Ghana. I build high-performance websites, web applications, and scalable digital products that help businesses grow.",

  keywords: [
    "Sarah Nkansah",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "SEO Specialist",
    "Technical SEO",
    "Digital Marketing",
    "Website Developer Ghana",
    "Web Developer Ghana",
    "Portfolio",
    "Product Manager",
    "UI Developer",
    "Business Automation",
    "Digital Solutions",
  ],

  authors: [
    {
      name: "Sarah Nkansah",
      url: "https://sarahnkansah.com",
    },
  ],

  creator: "Sarah Nkansah",

  publisher: "Sarah Nkansah",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://sarahnkansah.com",
  },

  openGraph: {
    title:
      "Sarah Nkansah | Full-Stack Developer, SEO Specialist & Digital Solutions Expert",

    description:
      "Explore the portfolio of Sarah Nkansah—a Full-Stack Developer specializing in React, Next.js, Node.js, SEO, and scalable digital solutions.",

    url: "https://sarahnkansah.com",

    siteName: "Sarah Nkansah",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sarah Nkansah Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sarah Nkansah | Full-Stack Developer & SEO Specialist",

    description:
      "Building modern web applications with React, Next.js, Node.js, and SEO strategies that drive business growth.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  applicationName: "Sarah Nkansah Portfolio",

  referrer: "origin-when-cross-origin",

  verification: {
    google: "google-site-verification=1XvLSvehYYMe3SQTth8FM__l9bgCL6NzgA3ZE1ET5No",
  },
};

// Modern display font for headings, logo, nav
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Modern body font - way more character than Inter
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background grid-pattern">
            <Header />
            <TechSidebar />
            <ToolsSidebar />
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-2 md:py-4 page-transition">
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}