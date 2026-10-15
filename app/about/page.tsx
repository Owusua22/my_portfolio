import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Sarah Nkansah",
  description:
    "Learn about Sarah Nkansah — a full-stack developer, digital marketer, and product manager in Ghana with 4+ years of experience building scalable web applications and digital strategies.",
  openGraph: {
    title: "About Sarah Nkansah — Full-Stack Developer & Digital Strategist",
    description:
      "Full-stack developer, digital marketer, and product manager in Ghana. Building scalable web applications and digital strategies for businesses.",
    url: "https://sarahnkansah.com/about",
  },
  alternates: {
    canonical: "https://sarahnkansah.com/about",
  },
};

const skillGroups = [
  {
    title: "Development",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Digital Strategy",
    skills: ["SEO", "Content Strategy", "Google Analytics", "Social Media Marketing", "Email Marketing"],
  },
  {
    title: "Design & Creative",
    skills: ["UI/UX Design", "Figma", "Brand Identity", "Graphic Design", "Visual Systems"],
  },
  {
    title: "Business & Product",
    skills: ["Product Management", "Agile/Scrum", "Stakeholder Management", "Roadmapping", "User Research"],
  },
];

const approach = [
  {
    step: "01",
    title: "Understand the Problem",
    description:
      "I start by understanding the business goals, the target audience, and the real problem that needs solving. No code gets written until the strategy is clear.",
  },
  {
    step: "02",
    title: "Design with Purpose",
    description:
      "Every design decision is intentional. I focus on clarity, usability, and visual hierarchy that serves the business objective — not decoration.",
  },
  {
    step: "03",
    title: "Build for Scale",
    description:
      "I write clean, maintainable code using modern frameworks and best practices. The result is a product that performs well today and adapts tomorrow.",
  },
  {
    step: "04",
    title: "Measure and Iterate",
    description:
      "I track performance, gather feedback, and refine. Good digital products are never finished — they evolve with the business.",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "Prisma", "AWS", "Vercel",
  "Git", "Figma", "SEO", "Google Analytics", "REST APIs",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <span className="eyebrow">About Sarah</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-gray-900 dark:text-white">
              A developer who thinks like a business owner.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            I build digital products that work, and I understand why they need to exist.
            That combination of technical execution and business thinking is what I bring
            to every project.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="section">
        <div className="container split-grid">
          <div className="text-stack">
            <div className="section-header">
              <span className="eyebrow">Who I Am</span>
              <h2>
                I&apos;m Sarah Nkansah — a full-stack developer and digital
                strategist based in Ghana.
              </h2>
              <p>
                My background spans software engineering, product management,
                digital marketing, and design. This means I don&apos;t just
                build websites — I build solutions that align with business
                goals, user needs, and market realities.
              </p>
            </div>

            <p>
              I&apos;ve spent the past four years working across e-commerce,
              health-tech, and digital marketing — leading engineering teams,
              managing product roadmaps, and delivering end-to-end digital
              solutions. I understand both the technical architecture and the
              business strategy behind every project.
            </p>

            <p>
              Whether I&apos;m building a web application, optimising a website
              for search engines, designing a brand identity, or managing a
              product launch, my approach is the same: understand the problem
              deeply, then execute with precision.
            </p>

            <ul className="check-list">
              <li>Full-stack web and mobile application development</li>
              <li>Technical SEO and search engine optimisation</li>
              <li>Product management and Agile delivery</li>
              <li>Digital marketing strategy and execution</li>
              <li>Brand design and visual identity systems</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/projects"
                className="btn-brand"
              >
                View My Projects
              </Link>
              <Link
                href="/contact"
                className="btn-outline"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

          <aside className="profile-card">
            <div className="profile-orb">SN</div>
            <h2>Sarah Nkansah</h2>
            <p>
              Full-Stack Developer &middot; Product Manager &middot; Digital
              Strategist &middot; SEO Specialist
            </p>

            <div className="profile-badges">
              <span>Technical</span>
              <span>Strategic</span>
              <span>Business-Minded</span>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 space-y-3 text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Based in
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  Accra, Ghana
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Experience
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  4+ years in software development
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Current role
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  Technical Team Lead — Franko Trading
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Available for
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  Freelance projects &amp; collaborations
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* What I Do */}
      <section className="section" style={{ backgroundColor: "rgba(156,179,128,0.03)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What I Do</span>
            <h2>
              Skills that support complete digital execution
            </h2>
            <p>
              A blend of technical, creative, and strategic skills for building
              strong digital products and brand experiences.
            </p>
          </div>

          <div className="capability-grid">
            {skillGroups.map((group) => (
              <article className="capability-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How I Work</span>
            <h2>
              My approach is structured, clear, and outcome-focused.
            </h2>
            <p>
              Every project follows a disciplined process that ensures we
              solve the right problem and deliver real value.
            </p>
          </div>

          <div className="timeline">
            {approach.map((item) => (
              <article className="timeline-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section" style={{ backgroundColor: "rgba(156,179,128,0.03)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", maxWidth: "100%" }}>
            <span className="eyebrow">Technologies</span>
            <h2>
              The tools I use to build digital products
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <span key={tech} className="tag text-sm px-5 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Ready to work together?</span>
              <h2>Let&apos;s build something that matters.</h2>
              <p>
                Whether you need a developer, a digital strategist, or a
                product partner — I&apos;m here to help you turn ideas into
                results.
              </p>
            </div>

            <Link href="/contact" className="button whitespace-nowrap">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
