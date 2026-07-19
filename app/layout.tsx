import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import TechSidebar from "@/components/TechSidebar";
import ToolsSidebar from "@/components/ToolsSidebar";
import Footer from "@/components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sarah Nkansah — Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Sarah Nkansah, a Full-Stack Software Developer, UI/UX Designer, and Digital Solutions Specialist.",
  icons: {
    icon: "/logo.png",      // Update this path to match your logo file name in the public folder
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

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
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-2 md:py-6 page-transition">
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}