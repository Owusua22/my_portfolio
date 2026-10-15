"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

/* ------------------------------------------------------------------ */
/*  Tokens & data                                                      */
/* ------------------------------------------------------------------ */
const ACCENT = "#f97316";
const ACCENT_LIGHT = "#fb923c";
const INK = "#1f2933";
const MUTED = "#5b6470";
const ORANGE = "249,115,22";

const SERVICES = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    desc: "Fast, responsive websites and web apps in React and Next.js, built so your team can keep maintaining them after launch.",
    gradient: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
    bgTint: "rgba(249,115,22,0.06)",
    shape: "circle",
  },
  {
    icon: "bi-phone",
    title: "Mobile Apps",
    desc: "iOS and Android apps in React Native, from the first screen through to the store release.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    bgTint: "rgba(139,92,246,0.06)",
    shape: "blob",
  },
  {
    icon: "bi-hdd-network",
    title: "Backend & APIs",
    desc: "Node.js and Express services with PostgreSQL or MongoDB, secured with JWT and OAuth 2.0.",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    bgTint: "rgba(6,182,212,0.06)",
    shape: "diamond",
  },
  {
    icon: "bi-credit-card-2-front",
    title: "E-commerce & Payments",
    desc: "Carts, checkouts and Paystack or Hubtel payments that work on a phone, on a slow connection.",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    bgTint: "rgba(16,185,129,0.06)",
    shape: "triangle",
  },
  {
    icon: "bi-cloud-arrow-up",
    title: "Cloud & Deployment",
    desc: "Vercel, AWS Lambda and Nginx setups with SSL and CI/CD, so releases stop being stressful.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    bgTint: "rgba(59,130,246,0.06)",
    shape: "circle",
  },
  {
    icon: "bi-search",
    title: "Technical SEO",
    desc: "Core Web Vitals, schema markup, sitemaps and Search Console, built into the site rather than bolted on.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    bgTint: "rgba(236,72,153,0.06)",
    shape: "blob",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Analytics & Growth",
    desc: "GA4 reporting, conversion fixes, and email flows in Mailchimp or HubSpot that follow up with leads.",
    gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    bgTint: "rgba(239,68,68,0.06)",
    shape: "diamond",
  },
  {
    icon: "bi-diagram-3",
    title: "Automation & Planning",
    desc: "Workflow automation, plus requirements, roadmaps and MVP scoping for ideas that aren't built yet.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
    bgTint: "rgba(99,102,241,0.06)",
    shape: "triangle",
  },
];

/* ------------------------------------------------------------------ */
/*  Decorative shapes                                                  */
/* ------------------------------------------------------------------ */
function DecoShape({
  shape,
  gradient,
  hover,
  reducedMotion,
}: {
  shape: string;
  gradient: string;
  hover: boolean;
  reducedMotion: boolean;
}) {
  const base: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    opacity: hover ? 0.18 : 0.07,
    transition: reducedMotion ? "none" : "opacity .4s ease, transform .4s ease",
    transform: hover && !reducedMotion ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0deg)",
  };

  if (shape === "circle") {
    return (
      <span
        aria-hidden="true"
        style={{
          ...base,
          bottom: -40,
          right: -40,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: gradient,
        }}
      />
    );
  }
  if (shape === "blob") {
    return (
      <span
        aria-hidden="true"
        style={{
          ...base,
          bottom: -30,
          right: -20,
          width: 140,
          height: 140,
          borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
          background: gradient,
        }}
      />
    );
  }
  if (shape === "diamond") {
    return (
      <span
        aria-hidden="true"
        style={{
          ...base,
          bottom: -20,
          right: -20,
          width: 120,
          height: 120,
          borderRadius: 18,
          background: gradient,
          transform: hover && !reducedMotion
            ? "scale(1.15) rotate(53deg)"
            : "rotate(45deg)",
        }}
      />
    );
  }
  /* triangle */
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 160"
      style={{
        ...base,
        bottom: -30,
        right: -20,
        width: 150,
        height: 150,
      }}
    >
      <polygon points="80,10 155,145 5,145" fill="url(#triGrad)" />
      <defs>
        <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradient.includes("#f97316") ? "#f97316" : "#10b981"} />
          <stop offset="100%" stopColor={gradient.includes("#ef4444") ? "#ef4444" : "#34d399"} />
        </linearGradient>
      </defs>
    </svg>
  );
}

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

/* ------------------------------------------------------------------ */
/*  Service tile – highly visual                                       */
/* ------------------------------------------------------------------ */
function ServiceCard({
  s,
  index,
  compact,
  reducedMotion,
}: {
  s: (typeof SERVICES)[number];
  index: number;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="#contact"
      aria-label={`${s.title}: enquire about this service`}
      data-aos="fade-up"
      data-aos-delay={80 + index * 60}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 14 : 18,
        padding: compact ? "24px 20px 28px" : "32px 28px 36px",
        borderRadius: 22,
        background: hover
          ? `linear-gradient(160deg, #ffffff 0%, ${s.bgTint} 100%)`
          : "#ffffff",
        border: `1px solid ${hover ? "transparent" : "rgba(0,0,0,0.06)"}`,
        boxShadow: hover
          ? "0 24px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.03)"
          : "0 4px 16px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
        transform: hover && !reducedMotion ? "translateY(-6px)" : "none",
        transition: reducedMotion
          ? "none"
          : "transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, background .35s ease",
        textDecoration: "none",
        color: INK,
        overflow: "hidden",
        outline: "none",
        minHeight: compact ? 180 : 220,
      }}
    >
      {/* Decorative background shape */}
      <DecoShape
        shape={s.shape}
        gradient={s.gradient}
        hover={hover}
        reducedMotion={reducedMotion}
      />

      {/* Top bar accent */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: s.gradient,
          borderRadius: "22px 22px 0 0",
          opacity: hover ? 1 : 0,
          transition: reducedMotion ? "none" : "opacity .3s ease",
        }}
      />

      {/* Icon badge */}
      <span
        aria-hidden="true"
        style={{
          width: compact ? 52 : 62,
          height: compact ? 52 : 62,
          display: "grid",
          placeItems: "center",
          borderRadius: 18,
          background: s.gradient,
          color: "#fff",
          fontSize: compact ? 22 : 28,
          boxShadow: hover
            ? `0 12px 28px rgba(0,0,0,0.18)`
            : `0 6px 16px rgba(0,0,0,0.10)`,
          transform: hover && !reducedMotion ? "scale(1.1) rotate(-6deg)" : "none",
          transition: reducedMotion
            ? "none"
            : "transform .4s cubic-bezier(.175,.885,.32,1.275), box-shadow .35s ease",
          flexShrink: 0,
        }}
      >
        <i className={`bi ${s.icon}`} />
      </span>

      {/* Text */}
      <div style={{ minWidth: 0, position: "relative", zIndex: 1 }}>
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: compact ? 16 : 18,
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: INK,
          }}
        >
          {s.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: compact ? 13 : 14,
            lineHeight: 1.65,
            color: MUTED,
          }}
        >
          {s.desc}
        </p>
      </div>

      {/* Arrow indicator */}
      <span
        aria-hidden="true"
        style={{
          marginTop: "auto",
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          fontWeight: 700,
          color: hover ? ACCENT : MUTED,
          opacity: hover ? 1 : 0,
          transform: hover ? "translateX(0)" : "translateX(-8px)",
          transition: reducedMotion ? "none" : "all .3s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        Learn more
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Services – full-width grid                                         */
/* ------------------------------------------------------------------ */
export default function Services() {
  const { width, reducedMotion } = useViewport();
  const isMobile = width < 576;
  const isTablet = width < 992;

  const columns = isMobile ? 1 : isTablet ? 2 : width < 1200 ? 3 : 4;

  return (
    <section
      id="services"
      className="services section"
      aria-labelledby="services-title"
    >
      <SectionTitle
        title="Services"
        description=""
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: isMobile ? 14 : isTablet ? 18 : 22,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.title}
              s={s}
              index={i}
              compact={isMobile}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}