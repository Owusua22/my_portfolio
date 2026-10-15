import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sarah Nkansah for web development, digital marketing, SEO, product management, or collaboration opportunities. Based in Accra, Ghana.",
  openGraph: {
    title: "Contact — Sarah Nkansah",
    description:
      "Get in touch with Sarah Nkansah for web development, digital marketing, SEO, product management, or collaboration.",
    url: "https://sarahnkansah.com/contact",
  },
  alternates: {
    canonical: "https://sarahnkansah.com/contact",
  },
};

const contactOptions = [
  {
    title: "Hiring / Employment",
    description: "Looking for a full-stack developer, product manager, or digital strategist to join your team.",
    email: "digibiztechnologies1@gmail.com",
  },
  {
    title: "Freelance Projects",
    description: "Need a website, mobile app, e-commerce platform, or digital solution built from scratch.",
    email: "digibiztechnologies1@gmail.com",
  },
  {
    title: "Digital Marketing & SEO",
    description: "Want to improve your search rankings, traffic, and online visibility with a data-driven strategy.",
    email: "digibiztechnologies1@gmail.com",
  },
  {
    title: "Collaboration",
    description: "Interested in working together on a product, open-source project, or creative initiative.",
    email: "digibiztechnologies1@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <span className="eyebrow">Contact</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-900 dark:text-white">
              Have a project, business problem, or opportunity?
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Let&apos;s talk. I help businesses and employers turn digital
            challenges into practical, high-performing solutions — whether
            that&apos;s a website, a marketing strategy, or a full product build.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section" style={{ backgroundColor: "rgba(156,179,128,0.03)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", maxWidth: "100%" }}>
            <span className="eyebrow">Ways to Work Together</span>
            <h2>What can I help you with?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option) => (
              <article
                key={option.title}
                className="p-6 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-brand/30 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.email}?subject=${encodeURIComponent(`Enquiry: ${option.title}`)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 dark:text-brand-400 hover:opacity-80 transition-opacity"
                >
                  Send an email
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section no-top">
        <div className="container contact-grid">
          <div>
            <div className="section-header">
              <span className="eyebrow">Start a Conversation</span>
              <h2>Send a project enquiry</h2>
              <p>
                Share a few details about your project, goals, and timeline.
                I&apos;ll get back to you with the next steps.
              </p>
            </div>

            <ContactForm />
          </div>

          <aside className="contact-aside">
            <div className="info-card">
              <span className="eyebrow">Email</span>
              <h3>nanaowusua1996@gmail.com</h3>
              <p>For all enquiries — employment, freelance, and collaboration.</p>
            </div>

            <div className="info-card">
              <span className="eyebrow">Phone</span>
              <h3>+233 553 191 734</h3>
              <p>Available for calls during business hours (GMT+0).</p>
            </div>

            <div className="info-card">
              <span className="eyebrow">Availability</span>
              <h3>Available for remote and freelance projects</h3>
              <p>Open to full-time roles, contract work, and freelance engagements.</p>
            </div>

            <div className="info-card">
              <span className="eyebrow">Services</span>
              <div className="tag-list">
                <span className="tag">Web Development</span>
                <span className="tag">Mobile Apps</span>
                <span className="tag">SEO & Marketing</span>
                <span className="tag">Product Management</span>
                <span className="tag">Brand Design</span>
                <span className="tag">AI Solutions</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
