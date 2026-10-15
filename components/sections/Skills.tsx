"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";

/* ------------------------------------------------------------------ */
/*  Tokens (orange is the only brand colour; text stays neutral)       */
/* ------------------------------------------------------------------ */
const ACCENT = "#f97316";
const ACCENT_TEXT = "#9a3412"; // dark orange for readable text on orange tints
const INK = "#1f2933";
const MUTED = "#5b6470";
const ORANGE = "249,115,22";

type Level = "Expert" | "Advanced" | "Intermediate" | "Familiar";
type Skill = [name: string, level: Level];

type TechGroup = {
  id: string;
  title: string;
  tagline: string;
  skills: Skill[];
  icon: React.ReactNode;
};

type SoftSkill = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */
const svgProps = {
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const CodeIcon = (
  <svg {...svgProps}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);
const ServerIcon = (
  <svg {...svgProps}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);
const CloudIcon = (
  <svg {...svgProps}>
    <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5H7Z" />
  </svg>
);
const ChartIcon = (
  <svg {...svgProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);
const UsersIcon = (
  <svg {...svgProps}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.2a3.2 3.2 0 0 1 0 5.6M21 20c0-2.6-1.5-4.8-3.6-5.7" />
  </svg>
);
const LinkIcon = (
  <svg {...svgProps}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </svg>
);
const ChatIcon = (
  <svg {...svgProps}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
  </svg>
);
const CompassIcon = (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);
const FlagIcon = (
  <svg {...svgProps}>
    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
  </svg>
);
const LoopIcon = (
  <svg {...svgProps}>
    <path d="M20 7H8a4 4 0 0 0-4 4v1M4 17h12a4 4 0 0 0 4-4v-1M17 4l3 3-3 3M7 14l-3 3 3 3" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const TECH: TechGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "Interfaces for the web and mobile",
    icon: CodeIcon,
    skills: [
      ["React", "Expert"],
      ["Next.js", "Expert"],
      ["TypeScript", "Expert"],
      ["JavaScript (ES6+)", "Expert"],
      ["Tailwind CSS", "Expert"],
      ["HTML5 & CSS3", "Expert"],
      ["React Native", "Advanced"],
      ["Ant Design", "Advanced"],
      ["Material Tailwind", "Advanced"],
      ["Bootstrap", "Advanced"],
      ["Framer Motion", "Intermediate"],
      ["Shadcn / Flowbite", "Intermediate"],
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering & Databases",
    tagline: "APIs, authentication and data",
    icon: ServerIcon,
    skills: [
      ["Node.js", "Expert"],
      ["Express.js", "Expert"],
      ["REST API Design", "Expert"],
      ["PostgreSQL", "Expert"],
      ["MongoDB / Mongoose", "Expert"],
      ["Prisma ORM", "Expert"],
      ["JWT Authentication", "Expert"],
      ["Supabase", "Advanced"],
      ["Firebase", "Advanced"],
      ["OAuth 2.0", "Advanced"],
      ["SQL", "Advanced"],
      ["WebSockets", "Intermediate"],
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    tagline: "Deployment, payments and delivery",
    icon: CloudIcon,
    skills: [
      ["Vercel", "Expert"],
      ["Git & GitHub", "Expert"],
      ["SSL / HTTPS", "Expert"],
      ["Paystack", "Expert"],
      ["Hubtel Integration", "Expert"],
      ["AWS Lambda", "Advanced"],
      ["API Gateway (AWS)", "Advanced"],
      ["Nginx", "Advanced"],
      ["PM2", "Advanced"],
      ["CI/CD Pipelines", "Advanced"],
      ["Cloudinary", "Advanced"],
      ["Docker", "Familiar"],
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    tagline: "Getting products found and used",
    icon: ChartIcon,
    skills: [
      ["Technical SEO", "Expert"],
      ["On-Page SEO", "Expert"],
      ["Core Web Vitals", "Expert"],
      ["Google Analytics (GA4)", "Expert"],
      ["Google Search Console", "Expert"],
      ["Schema Markup / JSON-LD", "Advanced"],
      ["Content Strategy", "Advanced"],
      ["Keyword Research", "Advanced"],
      ["Social Media Marketing", "Advanced"],
      ["Email Marketing", "Advanced"],
      ["Conversion Rate Optimisation", "Advanced"],
      ["Marketing Automation", "Intermediate"],
    ],
  },
];

const SOFT: SoftSkill[] = [
  {
    title: "Team leadership",
    text: "Led a team of 4 to 8 developers and designers, and stepped into the technical lead role within four months of joining.",
    icon: UsersIcon,
  },
  {
    title: "Cross-functional work",
    text: "Turning what marketing, operations and leadership ask for into something engineers can actually build.",
    icon: LinkIcon,
  },
  {
    title: "Clear communication",
    text: "Product requirements, user stories and documentation written so nobody on the team has to guess. Trained in business communication in English and French.",
    icon: ChatIcon,
  },
  {
    title: "Product thinking",
    text: "I take an idea from discovery to MVP to launch, then keep improving it using what users really do.",
    icon: CompassIcon,
  },
  {
    title: "Ownership",
    text: "I stay with a product from concept to deployment, including the unglamorous parts like performance and SEO.",
    icon: FlagIcon,
  },
  {
    title: "Agile delivery",
    text: "Sprint planning, code review standards and Git branching habits that make releases predictable.",
    icon: LoopIcon,
  },
];

/* ------------------------------------------------------------------ */
/*  Viewport hook                                                      */
/* ------------------------------------------------------------------ */
function useViewport() {
  const [vp, setVp] = useState({ width: 1200, reducedMotion: false });
  useEffect(() => {
    const update = () =>
      setVp({
        width: window.innerWidth,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return vp;
}

const srOnly: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

/* ------------------------------------------------------------------ */
/*  Shared pieces                                                      */
/* ------------------------------------------------------------------ */
function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        flexShrink: 0,
        borderRadius: 14,
        color: ACCENT,
        background: `rgba(${ORANGE},0.10)`,
        border: `1px solid rgba(${ORANGE},0.22)`,
      }}
    >
      {children}
    </span>
  );
}

function Card({
  children,
  delay,
  reducedMotion,
  padding,
  labelledBy,
}: {
  children: React.ReactNode;
  delay: number;
  reducedMotion: boolean;
  padding: number;
  labelledBy: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-labelledby={labelledBy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        padding,
        borderRadius: 22,
        background: "rgba(255,255,255,0.9)",
        border: `1px solid rgba(${ORANGE},0.18)`,
        boxShadow: hover
          ? "0 22px 46px rgba(120,53,15,0.14)"
          : "0 12px 30px rgba(120,53,15,0.07)",
        transform: hover && !reducedMotion ? "translateY(-4px)" : "none",
        transition: reducedMotion ? "none" : "transform .3s ease, box-shadow .3s ease",
      }}
    >
      {children}
    </article>
  );
}

function SubHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h3
      id={id}
      style={{
        margin: 0,
        fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: INK,
      }}
    >
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */
export default function Skills() {
  const { width, reducedMotion } = useViewport();
  const isMobile = width < 576;
  const isTablet = width < 992;
  const techCols = isTablet ? 1 : 2;
  const softCols = isMobile ? 1 : isTablet ? 2 : 3;
  const cardPad = isMobile ? 20 : 26;

  return (
    <section
      id="skills"
      className="skills section"
      aria-labelledby="skills-title"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* soft background glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "6%",
          left: "-12%",
          width: "min(40vw, 520px)",
          height: "min(40vw, 520px)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${ORANGE},0.12), transparent 65%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-8%",
          right: "-12%",
          width: "min(40vw, 520px)",
          height: "min(40vw, 520px)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${ORANGE},0.10), transparent 65%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <SectionTitle
        title="Skills"
        description=""
      />

      <div className="container" style={{ position: "relative" }}>
        {/* ======================= TECHNICAL ======================= */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 22,
          }}
        >
          <SubHeading id="skills-technical">Technical skills</SubHeading>

          {/* legend */}
          <p
            style={{
              margin: 0,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
              fontSize: 13,
              color: MUTED,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: `rgba(${ORANGE},0.35)`,
                border: `1px solid rgba(${ORANGE},0.7)`,
              }}
            />
            Expert
            <span
              aria-hidden="true"
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: `rgba(${ORANGE},0.05)`,
                border: `1px solid rgba(${ORANGE},0.3)`,
              }}
            />
            Advanced, intermediate or familiar
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${techCols}, minmax(0, 1fr))`,
            gap: isMobile ? 16 : 22,
            marginBottom: isMobile ? 56 : 72,
          }}
        >
          {TECH.map((group, i) => {
            const experts = group.skills.filter(([, level]) => level === "Expert").length;
            return (
              <Card
                key={group.id}
                delay={100 + i * 60}
                reducedMotion={reducedMotion}
                padding={cardPad}
                labelledBy={`skills-${group.id}`}
              >
                <header style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <IconTile>{group.icon}</IconTile>
                  <div style={{ minWidth: 0 }}>
                    <h4
                      id={`skills-${group.id}`}
                      style={{
                        margin: 0,
                        fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.01em",
                        color: INK,
                      }}
                    >
                      {group.title}
                    </h4>
                    <p style={{ margin: "2px 0 0", fontSize: 13, color: MUTED }}>
                      {group.tagline} · {group.skills.length} skills, {experts} at expert level
                    </p>
                  </div>
                </header>

                <ul
                  aria-label={`${group.title} skills`}
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {group.skills.map(([name, level]) => {
                    const expert = level === "Expert";
                    return (
                      <li
                        key={name}
                        style={{
                          padding: "7px 13px",
                          borderRadius: 999,
                          fontSize: 13,
                          fontWeight: expert ? 700 : 600,
                          lineHeight: 1.2,
                          color: expert ? ACCENT_TEXT : INK,
                          background: `rgba(${ORANGE},${expert ? 0.16 : 0.05})`,
                          border: `1px solid rgba(${ORANGE},${expert ? 0.45 : 0.22})`,
                        }}
                      >
                        {name}
                        <span style={srOnly}>, {level.toLowerCase()}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* ======================= SOFT SKILLS ======================= */}
        <div style={{ marginBottom: 22 }}>
          <SubHeading id="skills-soft">Soft skills</SubHeading>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${softCols}, minmax(0, 1fr))`,
            gap: isMobile ? 16 : 22,
          }}
        >
          {SOFT.map((skill, i) => (
            <Card
              key={skill.title}
              delay={100 + i * 60}
              reducedMotion={reducedMotion}
              padding={cardPad}
              labelledBy={`soft-${i}`}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <IconTile>{skill.icon}</IconTile>
                <h4
                  id={`soft-${i}`}
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    color: INK,
                  }}
                >
                  {skill.title}
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: MUTED }}>{skill.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}