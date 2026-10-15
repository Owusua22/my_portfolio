import type { Metadata, Viewport } from "next";
import { Roboto, Noto_Sans } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css/bundle";
import "@/styles/main.css";

import AosInit from "@/components/AosInit";
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://sarahnkansah.com";
const SITE_NAME = "Sarah Nkansah | Full-Stack Developer & Technical SEO Specialist";
const SITE_DESCRIPTION =
  "Sarah Nkansah is a Full-Stack Web Developer, Technical SEO Specialist, and Digital Marketing Strategist in Ghana building high-speed Next.js platforms, React Native apps, and data-driven organic search growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sarah Nkansah | Full-Stack Developer & Technical SEO Specialist in Ghana",
    template: "%s | Sarah Nkansah",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Sarah Nkansah Portfolio",
  keywords: [
    "Sarah Nkansah",
    "Full-Stack Developer Ghana",
    "Web Developer Accra",
    "Technical SEO Specialist Ghana",
    "React Developer",
    "Next.js Developer Ghana",
    "Digital Marketing Strategist",
  ],
  authors: [{ name: "Sarah Nkansah", url: SITE_URL }],
  creator: "Sarah Nkansah",
  publisher: "Sarah Nkansah",
  alternates: {
    canonical: SITE_URL,
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
    icon: "/sn_logo.png",
    apple: "/sn_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Sarah Nkansah | Full-Stack Developer & Technical SEO Specialist",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/sn_logo.png",
        width: 1200,
        height: 630,
        alt: "Sarah Nkansah - Full-Stack Developer & SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Nkansah | Full-Stack Developer & Technical SEO Specialist",
    description: SITE_DESCRIPTION,
    images: ["/sn_logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Sarah Nkansah",
      "url": SITE_URL,
      "image": `${SITE_URL}/sn_logo.png`,
      "jobTitle": [
        "Full-Stack Web Developer",
        "Technical SEO Specialist",
        "Digital Marketing Strategist"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/sarah-nkansah",
        "https://github.com/Owusua22"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "Ghana"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Sarah Nkansah Portfolio",
      "description": SITE_DESCRIPTION
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GH" className={`${roboto.variable} ${notoSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {/* JSON-LD Structured Data inside body to avoid Next.js head hydration conflicts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a
          href="#main-content"
          className="visually-hidden-focusable"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 999999,
            padding: "8px 16px",
            background: "#f97316",
            color: "#ffffff",
            borderRadius: "6px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Skip to main content
        </a>

        <AosInit />
        <Header />
        <main id="main-content" className="main" role="main">
          {children}
        </main>
        <ScrollTop />
      </body>
    </html>
  );
}