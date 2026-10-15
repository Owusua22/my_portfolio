import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development, mobile app development, digital marketing, SEO, graphic design, and video editing services by Sarah Nkansah in Ghana.",
  openGraph: {
    title: "Services — Sarah Nkansah",
    description:
      "Professional web development, mobile app development, digital marketing, SEO, graphic design, and video editing services.",
    url: "https://sarahnkansah.com/services",
  },
  alternates: {
    canonical: "https://sarahnkansah.com/services",
  },
};

const packages = [
  {
    title: "Starter Digital Presence",
    description:
      "Perfect for personal brands, small businesses, and professionals who need a clean online presence.",
    items: ["Portfolio or landing page", "Basic brand visuals", "Contact section", "Responsive design"],
  },
  {
    title: "Business Growth Kit",
    description:
      "A stronger package for businesses that need web, visuals, and marketing support.",
    items: ["Business website", "Social media graphics", "Content direction", "SEO-ready structure"],
  },
  {
    title: "Content Launch Package",
    description:
      "Ideal for campaigns, product launches, reels, TikToks, and social content.",
    items: ["Video editing", "Short-form content", "Campaign graphics", "Posting assets"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <span className="eyebrow">Services</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-900 dark:text-white">
              Digital services designed to help brands look professional and grow.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            I offer a flexible mix of development, marketing, design, and video
            editing services for individuals, startups, and businesses.
          </p>
        </div>
      </section>

      <section className="section no-top">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What I Offer</span>
            <h2>End-to-end creative and technical services</h2>
            <p>
              Choose one service or combine multiple services for a complete
              digital solution.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-list">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "rgba(156,179,128,0.03)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Packages</span>
            <h2>Popular ways to work together</h2>
            <p>
              These package ideas can be customised based on your project needs.
            </p>
          </div>

          <div className="package-grid">
            {packages.map((item) => (
              <article className="package-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul className="check-list compact-list">
                  {item.items.map((packageItem) => (
                    <li key={packageItem}>{packageItem}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Need something custom?</span>
              <h2>Let&apos;s create a service package around your goals.</h2>
              <p>
                Tell me what you are building, launching, or improving, and
                I&apos;ll help you plan the best approach.
              </p>
            </div>

            <Link href="/contact" className="button whitespace-nowrap">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
