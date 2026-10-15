"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data & Brand Color Constants                                      */
/* ------------------------------------------------------------------ */
const ACCENT = "rgb(230, 127, 31)";
const EMERALD = "rgb(26, 120, 100)";

const STATS = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Delivered" },
  { number: "5+", label: "Happy Clients" },
];

/*
 * 12 tools placed evenly around the outer ring (30° apart, starting at the top).
 * Order alternates dev tools with marketing tools so the ring stays balanced.
 */
const TOOLS: { name: string; type: string }[] = [
  { name: "React", type: "react" },
  { name: "Next.js", type: "nextjs" },
  { name: "Google Analytics", type: "analytics" },
  { name: "Node.js", type: "nodejs" },
  { name: "Express", type: "express" },
  { name: "AWS", type: "aws" },
  { name: "Wireshark", type: "wireshark" },
  { name: "HubSpot", type: "hubspot" },
  { name: "Tailwind CSS", type: "tailwind" },
  { name: "Bootstrap", type: "bootstrap" },
  { name: "HTML5", type: "html" },
  { name: "Semrush", type: "semrush" },
];

const RING_RADIUS = 49; // % of the orbit box, matches the 98% dashed ring

const MARKETING_TOOLS = TOOLS.map((tool, i) => {
  const angle = (-90 + (360 / TOOLS.length) * i) * (Math.PI / 180);
  const left = 50 + RING_RADIUS * Math.cos(angle);
  const top = 50 + RING_RADIUS * Math.sin(angle);
  return {
    ...tool,
    // Tooltips near the top of the ring open downward so they never clip
    tip: (top < 20 ? "bottom" : "top") as "top" | "bottom",
    delay: `${(i * 0.35).toFixed(2)}s`,
    position: { top: `${top}%`, left: `${left}%` } as React.CSSProperties,
  };
});

/* ------------------------------------------------------------------ */
/*  Viewport Hook for Full Inline Responsiveness                      */
/* ------------------------------------------------------------------ */
function useViewport() {
  const [vp, setVp] = useState({ width: 1200, reducedMotion: false, touch: false });

  useEffect(() => {
    const update = () =>
      setVp({
        width: window.innerWidth,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        touch: window.matchMedia("(hover: none)").matches,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return vp;
}

/* ------------------------------------------------------------------ */
/*  Responsive SVG Tool Icons                                         */
/* ------------------------------------------------------------------ */
const TAILWIND_WAVE =
  "M32 14c-7 0-11 3.5-13 10.5 2.5-3.5 5.5-4.8 9-4 2 .5 3.4 1.9 5 3.5 2.6 2.6 5.6 5.7 12 5.7 7 0 11-3.5 13-10.5-2.5 3.5-5.5 4.8-9 4-2-.5-3.4-1.9-5-3.5C41.4 17.1 38.4 14 32 14Z";

function ToolLogo({ type, size }: { type: string; size: number }) {
  const s: React.CSSProperties = { width: size, height: size, display: "block" };

  switch (type) {
    /* ---------------- Developer tools ---------------- */
    case "react":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <g fill="none" stroke="#61DAFB" strokeWidth="3">
            <ellipse cx="32" cy="32" rx="25" ry="10" />
            <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)" />
          </g>
          <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <circle cx="32" cy="32" r="27" fill="#000" />
          <path
            d="M23 22v20M23 22l18 22"
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M41 22v12" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <path d="M32 5 56 18.500v27L32 59 8 45.500v-27Z" fill="#3C873A" />
          <path
            d="M24 43V23l16 20V23"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <text
            x="32"
            y="42"
            textAnchor="middle"
            fontSize="30"
            fontWeight="700"
            fontStyle="italic"
            fontFamily="Georgia, 'Times New Roman', serif"
            fill="#222"
          >
            ex
          </text>
          <rect x="12" y="48" width="40" height="3.5" rx="1.75" fill="#68A063" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <path d={TAILWIND_WAVE} transform="translate(6 3)" fill="#38BDF8" />
          <path d={TAILWIND_WAVE} transform="translate(-6 18)" fill="#38BDF8" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <rect x="6" y="6" width="52" height="52" rx="12" fill="#7952B3" />
          <text
            x="32"
            y="46"
            textAnchor="middle"
            fontSize="38"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fill="#fff"
          >
            B
          </text>
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <path d="M10 8h44l-4 42-18 6-18-6Z" fill="#E34F26" />
          <path d="M32 11v42l14.500-4.800L49.800 11Z" fill="#EF652A" />
          <text
            x="32"
            y="39"
            textAnchor="middle"
            fontSize="24"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fill="#fff"
          >
            5
          </text>
        </svg>
      );
    case "aws":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <text
            x="32"
            y="33"
            textAnchor="middle"
            fontSize="24"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fill="#232F3E"
          >
            aws
          </text>
          <path d="M13 41c11 8 27 8 38 0" fill="none" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M46 36l5.500 4.500-6.500 2" fill="none" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wireshark":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <path
            d="M32 7c-4 10-11 14-11 27 0 9 4.500 15 11 15 9 0 15-7.500 15-17 0-7.500-4-10.500-6.500-15-2 6.500-5 8.500-8.500 8.500 2.500-6.500 2.500-12.500 0-18.500Z"
            fill="#1679A7"
          />
          <path d="M32 24c-2 6-5 9-5 15 0 4 2.500 7 5 7" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
          <rect x="10" y="53" width="44" height="4" rx="2" fill="#0F4D6B" />
        </svg>
      );

    /* ---------------- Digital marketing tools ---------------- */
    case "analytics":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <rect x="10" y="29" width="12" height="25" rx="6" fill="#F9AB00" />
          <rect x="27" y="18" width="12" height="36" rx="6" fill="#F9AB00" />
          <circle cx="50" cy="13" r="7" fill="#F9AB00" />
          <rect x="44" y="29" width="12" height="25" rx="6" fill="#E37400" />
        </svg>
      );
    case "hubspot":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <circle cx="32" cy="32" r="8" fill="#FF7A59" />
          <circle cx="17" cy="18" r="6" fill="#FF7A59" />
          <circle cx="49" cy="19" r="6" fill="#FF7A59" />
          <circle cx="49" cy="47" r="6" fill="#FF7A59" />
          <path d="M26 26 20 21m18 5 7-5M38 37l7 7" stroke="#FF7A59" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "semrush":
      return (
        <svg viewBox="0 0 64 64" style={s} aria-hidden="true">
          <circle cx="31" cy="32" r="18" fill="#FF642D" />
          <path d="M16 36c8-8 18-11 32-7l8 3-8 6c-10 5-22 4-32-2Z" fill="#FF642D" />
          <circle cx="29" cy="29" r="5" fill="#fff" />
          <circle cx="29" cy="29" r="2.5" fill="#FF642D" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Main Hero Section                                                 */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const { width, reducedMotion, touch } = useViewport();
  const isMobile = width < 576;
  const isTablet = width < 992;

  /* Custom Hover States for CTA Buttons */
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

  /* Responsive Positioning Sizing Engine */
  const orbitMax = isMobile ? 290 : isTablet ? 400 : 520;
  // Slightly smaller icons than before: 12 tools share the ring now
  const icon = isMobile ? 36 : isTablet ? 44 : 54;
  const logo = Math.round(icon * 0.52);
  const overhang = Math.round(orbitMax * 0.06) + 8;
  const photoBorder = isMobile ? 6 : isTablet ? 8 : 10;

  /* Tooltip Dynamic Display State */
  const [active, setActive] = useState<string | null>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const close = (e: PointerEvent) => {
      if (!orbitRef.current?.contains(e.target as Node)) setActive(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [active]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sarah Nkansah - Full-Stack Developer & Digital Marketer",
    image: "https://yourdomain.com/assets/img/profile/sarah.jpeg",
    jobTitle: "Full-Stack Developer & Digital Marketing Consultant",
    description:
      "Full-stack web development with React, Next.js, Node.js and AWS, paired with SEO, Google Ads, HubSpot CRM pipelines and data-driven marketing campaigns.",
    knowsAbout: [
      "React and Next.js Development",
      "Node.js and Express APIs",
      "Tailwind CSS and Bootstrap",
      "AWS Cloud Deployment",
      "Network Analysis with Wireshark",
      "Search Engine Optimization (SEO)",
      "HubSpot CRM Automation",
      "Digital Marketing Strategy",
    ],
  };

  return (
    <section
      id="hero"
      className="hero section"
      aria-labelledby="hero-title"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "48px 0 40px" : isTablet ? "72px 0 64px" : "96px 0 80px",
      }}
    >
      {/* On-Page SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes heroFloat { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }
        @keyframes heroPulse { 0% { box-shadow: 0 0 0 0 rgba(230,127,31,0.5); } 70% { box-shadow: 0 0 0 8px rgba(230,127,31,0); } 100% { box-shadow: 0 0 0 0 rgba(230,127,31,0); } }
      `}</style>

      {/* Atmospheric Radial Gradients */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "min(45vw, 620px)",
          height: "min(45vw, 620px)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(26,120,100,0.18), transparent 65%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-12%",
          width: "min(38vw, 520px)",
          height: "min(38vw, 520px)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(230,127,31,0.14), transparent 65%)`,
          filter: "blur(65px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 32 : isTablet ? 48 : 56,
          }}
        >
          {/* ======================= COPY COLUMN ======================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              flex: "1 1 0",
              width: "100%",
              order: isTablet ? 2 : 1,
              textAlign: isTablet ? "center" : "left",
              display: "flex",
              flexDirection: "column",
              alignItems: isTablet ? "center" : "flex-start",
            }}
          >
            {/* Availability Badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px 6px 10px",
                borderRadius: 999,
                background: "#ffffff",
                border: `1px solid rgba(26,120,100,0.18)`,
                boxShadow: "0 6px 18px rgba(20,58,52,0.06)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 18,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: ACCENT,
                  animation: reducedMotion ? "none" : "heroPulse 2s infinite",
                }}
              />
              Available for new projects
            </span>

            <p
              style={{
                margin: "0 0 10px",
                fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: ACCENT,
              }}
            >
              Hi, I&apos;m Sarah Nkansah
            </p>

            {/* Ultra Bold Typography */}
            <h1
              id="hero-title"
              className="text-dark"
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(2.3rem, 6vw, 4.3rem)",
                fontWeight: 950,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
                maxWidth: isTablet ? "18ch" : "none",
              }}
            >
              A Full-Stack{" "}
              <span style={{ color: ACCENT, position: "relative", display: "inline-block" }}>
                Developer &amp; Digital Marketer
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-0.1em",
                    width: "100%",
                    height: "0.26em",
                    color: "rgba(230,127,31,0.25)",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M2 9c40-6 120-8 196-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p
              className="text-muted"
              style={{
                margin: "0 0 32px",
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.8,
                maxWidth: "54ch",
              }}
            >
              I build fast, secure web apps with React, Next.js and Node.js, then grow them with
              data-driven marketing, maximizing search visibility, acquiring high-quality leads,
              and boosting revenue for your business.
            </p>

            {/* Orange CTA Buttons with Icons */}
            <div
              className="cta-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "40px",
                justifyContent: isTablet ? "center" : "flex-start",
                width: "100%",
              }}
            >
              <a
                href="#portfolio"
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
                aria-label="View Sarah Nkansah's portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: ACCENT,
                  color: "#ffffff",
                  border: `2px solid ${ACCENT}`,
                  borderRadius: "50px",
                  padding: "12px 30px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: hoverPrimary
                    ? "0 12px 28px rgba(230, 127, 31, 0.35)"
                    : "0 8px 24px rgba(230, 127, 31, 0.25)",
                  transform: hoverPrimary ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              >
                View My Work
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: hoverPrimary ? "translateX(4px)" : "none",
                  }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="#contact"
                onMouseEnter={() => setHoverSecondary(true)}
                onMouseLeave={() => setHoverSecondary(false)}
                aria-label="Hire Sarah Nkansah for your next project"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: hoverSecondary ? "rgba(230, 127, 31, 0.08)" : "transparent",
                  color: ACCENT,
                  border: `2px solid ${ACCENT}`,
                  borderRadius: "50px",
                  padding: "11px 29px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: hoverSecondary ? "0 8px 20px rgba(230, 127, 31, 0.15)" : "none",
                  transform: hoverSecondary ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              >
                Hire Me
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>

            {/* Accessibly Rendered Metrics Summary */}
            <dl
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: isMobile ? 10 : 16,
                width: "100%",
                maxWidth: 530,
                margin: 0,
                paddingTop: 28,
                borderTop: `1px solid rgba(26,120,100,0.15)`,
              }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    padding: isMobile ? "10px 4px" : "14px 16px",
                    borderRadius: 16,
                    background: "rgba(255, 255, 255, 0.75)",
                    border: `1px solid rgba(26,120,100,0.12)`,
                    boxShadow: "0 10px 30px rgba(20,58,52,0.06)",
                    textAlign: "center",
                  }}
                >
                  <dt
                    className="text-muted"
                    style={{
                      fontSize: isMobile ? 9 : 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      lineHeight: 1.3,
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      fontSize: "clamp(1.5rem, 4vw, 2.3rem)",
                      fontWeight: 900,
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      color: ACCENT,
                    }}
                  >
                    {stat.number}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ======================= VISUAL ORBIT COLUMN ======================= */}
          <div
            style={{
              flex: "1 1 0",
              width: "100%",
              order: isTablet ? 1 : 2,
              display: "flex",
              justifyContent: "center",
              padding: `${overhang + (isTablet ? 8 : 0)}px ${overhang}px ${overhang}px`,
            }}
          >
            <div
              ref={orbitRef}
              data-aos="zoom-out"
              data-aos-delay="300"
              style={{
                position: "relative",
                width: `min(100%, ${orbitMax}px)`,
                aspectRatio: "1 / 1",
                display: "grid",
                placeItems: "center",
              }}
            >
              {/* Radial Blur Backdrop */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "78%",
                  height: "78%",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(26,120,100,0.22), transparent 70%)`,
                  filter: "blur(28px)",
                }}
              />

              {/* Orbiting Ring Outlines */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "98%",
                  height: "98%",
                  border: `1.5px dashed rgba(26,120,100,0.18)`,
                  borderRadius: "50%",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  border: `1.5px dashed rgba(26,120,100,0.35)`,
                  borderRadius: "50%",
                }}
              />

              {/* Scaled Profile Image Container (74% Aspect Width) */}
              <figure
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "74%",
                  aspectRatio: "1 / 1",
                  margin: 0,
                  overflow: "hidden",
                  borderRadius: "50%",
                  border: `${photoBorder}px solid #ffffff`,
                  background: "#e9f5f2",
                  boxShadow: "0 22px 60px rgba(20,58,52,0.22), 0 0 0 1px rgba(26,120,100,0.08)",
                }}
              >
                <img
                  src="/assets/img/profile/sarah.jpeg"
                  alt="Sarah Nkansah - Full-Stack Developer & Digital Marketer"
                  width={400}
                  height={400}
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </figure>

              {/* Floating Tool Integration System */}
              <ul
                aria-label="Development and digital marketing tools"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {MARKETING_TOOLS.map((tool) => {
                  const isActive = active === tool.name;
                  const tipBelow = tool.tip === "bottom";

                  return (
                    <li
                      key={tool.name}
                      style={{
                        position: "absolute",
                        ...tool.position,
                        width: icon,
                        height: icon,
                        // Every icon is centered on its point of the ring
                        transform: "translate(-50%, -50%)",
                        zIndex: isActive ? 10 : 3,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          animation: reducedMotion
                            ? "none"
                            : `heroFloat 5.5s ease-in-out ${tool.delay} infinite alternate`,
                        }}
                      >
                        <button
                          type="button"
                          aria-label={`${tool.name} skill`}
                          onMouseEnter={() => !touch && setActive(tool.name)}
                          onMouseLeave={() => !touch && setActive(null)}
                          onFocus={() => setActive(tool.name)}
                          onBlur={() => setActive(null)}
                          onClick={() => touch && setActive((a) => (a === tool.name ? null : tool.name))}
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            padding: 0,
                            border: 0,
                            borderRadius: "50%",
                            background: "#ffffff",
                            cursor: "pointer",
                            outline: "none",
                            transform: isActive ? "scale(1.18)" : "scale(1)",
                            boxShadow: isActive
                              ? `0 15px 35px rgba(26,120,100,0.30), 0 0 0 3px rgba(230,127,31,0.35)`
                              : "0 10px 25px rgba(25,55,50,0.16)",
                            transition: reducedMotion
                              ? "none"
                              : "transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.3s ease",
                          }}
                        >
                          <ToolLogo type={tool.type} size={logo} />

                          {/* Dynamic Action Tooltips */}
                          <span
                            role="tooltip"
                            aria-hidden={!isActive}
                            style={{
                              position: "absolute",
                              left: "50%",
                              ...(tipBelow
                                ? { top: "calc(100% + 10px)" }
                                : { bottom: "calc(100% + 10px)" }),
                              transform: `translate(-50%, ${isActive ? 0 : tipBelow ? -6 : 6}px)`,
                              opacity: isActive ? 1 : 0,
                              background: "#111827",
                              color: "#ffffff",
                              padding: "6px 12px",
                              borderRadius: 6,
                              fontSize: isMobile ? 10 : 11,
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                              pointerEvents: "none",
                              boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
                              transition: reducedMotion ? "none" : "opacity .25s ease, transform .25s ease",
                              zIndex: 20,
                            }}
                          >
                            {tool.name}
                            <span
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                left: "50%",
                                ...(tipBelow ? { top: -4 } : { bottom: -4 }),
                                width: 8,
                                height: 8,
                                background: "#111827",
                                transform: "translateX(-50%) rotate(45deg)",
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}