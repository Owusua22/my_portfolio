"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";

/* ------------------------------------------------------------------ */
/*  Tokens                                                             */
/* ------------------------------------------------------------------ */
const ACCENT = "#f97316";
const ACCENT_DARK = "#ea6a0a";
const GREEN = "rgb(26, 120, 100)";
const INK = "#0f2f2a";
const MUTED = "#4b625d";

const STACK = [
  { area: "Front end", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML"] },
  { area: "Back end", items: ["Node.js", "Express"] },
  { area: "Cloud & security", items: ["AWS", "Wireshark"] },
  { area: "Getting found", items: ["SEO", "Analytics", "HubSpot"] },
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

/* ------------------------------------------------------------------ */
/*  Orange CTA button                                                  */
/* ------------------------------------------------------------------ */
function CtaButton({
  href,
  label,
  variant,
  fullWidth,
  reducedMotion,
  icon,
  children,
}: {
  href: string;
  label: string;
  variant: "solid" | "outline";
  fullWidth: boolean;
  reducedMotion: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  const solid = variant === "solid";

  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: fullWidth ? "100%" : "auto",
        minHeight: 52,
        padding: "14px 28px",
        borderRadius: 999,
        fontSize: 15,
        fontWeight: 700,
        textDecoration: "none",
        whiteSpace: "nowrap",
        border: `2px solid ${solid && hover ? ACCENT_DARK : ACCENT}`,
        background: solid
          ? hover
            ? `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`
            : `linear-gradient(135deg, ${ACCENT}, #fb923c)`
          : hover
          ? ACCENT
          : "rgba(255,255,255,0.8)",
        color: solid || hover ? "#ffffff" : ACCENT,
        boxShadow: hover
          ? "0 16px 32px rgba(249,115,22,0.36)"
          : solid
          ? "0 10px 24px rgba(249,115,22,0.28)"
          : "0 6px 16px rgba(249,115,22,0.10)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: reducedMotion
          ? "none"
          : "transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease",
        outline: "none",
      }}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          width: "1.15em",
          height: "1.15em",
          transform: hover ? "translateX(4px)" : "none",
          transition: reducedMotion ? "none" : "transform .25s ease",
        }}
      >
        {icon}
      </span>
    </a>
  );
}

const ArrowIcon = (
  <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%" }}>
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DownloadIcon = (
  <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%" }}>
    <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export default function About() {
  const { width, reducedMotion } = useViewport();
  const isMobile = width < 576;
  const isTablet = width < 992;

  const imgMax = isMobile ? 300 : isTablet ? 360 : 420;
  const overlap = isMobile ? 14 : 22; // how far cards poke outside the image

  return (
    <section
      id="about"
      className="about section light-background"
      aria-labelledby="about-title"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* soft background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "-12%",
          width: "min(40vw, 520px)",
          height: "min(40vw, 520px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,120,100,0.14), transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <SectionTitle
        title="About Me"
        description="A full-stack developer in Accra who builds the whole product, then makes sure people can find it."
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            alignItems: isTablet ? "center" : "flex-start",
            gap: isMobile ? 44 : isTablet ? 56 : 64,
          }}
        >
          {/* ======================= IMAGE ======================= */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            style={{
              flex: isTablet ? "0 0 auto" : "0 0 42%",
              width: "100%",
              maxWidth: isTablet ? imgMax + overlap * 2 : "none",
              display: "flex",
              justifyContent: "center",
              padding: `${overlap}px ${overlap}px ${overlap + 8}px`,
              position: isTablet ? "relative" : "sticky",
              top: isTablet ? undefined : 110,
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: imgMax }}>
              {/* offset outline frame */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translate(${overlap * 0.7}px, ${overlap * 0.7}px)`,
                  borderRadius: 24,
                  border: `2px solid ${ACCENT}`,
                  opacity: 0.55,
                  pointerEvents: "none",
                }}
              />
              {/* glow behind */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "10% -6% -6% 10%",
                  borderRadius: 32,
                  background: "radial-gradient(circle at 70% 70%, rgba(26,120,100,0.22), transparent 70%)",
                  filter: "blur(24px)",
                  pointerEvents: "none",
                }}
              />

              {/* photo */}
              <figure
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  aspectRatio: "4 / 5",
                  margin: 0,
                  overflow: "hidden",
                  borderRadius: 24,
                  background: "linear-gradient(180deg, #f3f7f6 0%, #e9f5f2 100%)",
                  boxShadow: "0 24px 55px rgba(20,58,52,0.18), 0 0 0 1px rgba(26,120,100,0.08)",
                }}
              >
                <img
                  src="/assets/img/profile/sarah_about.png"
                  alt="Sarah Nkansah, full-stack developer, smiling in a professional portrait"
                  width={420}
                  height={525}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 18%", // keeps the face in frame
                    display: "block",
                  }}
                />
                {/* bottom fade for text legibility on the badge */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "38%",
                    background: "linear-gradient(180deg, transparent, rgba(15,47,42,0.35))",
                    pointerEvents: "none",
                  }}
                />
              </figure>

              {/* top-right chip */}
              <span
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: overlap * 0.8,
                  right: -overlap * 0.6,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid rgba(26,120,100,0.15)",
                  boxShadow: "0 10px 24px rgba(20,58,52,0.14)",
                  fontSize: isMobile ? 11 : 12,
                  fontWeight: 700,
                  color: GREEN,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT }}
                />
                Front end to server
              </span>

              {/* experience card */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  left: -overlap,
                  bottom: overlap,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: isMobile ? "12px 16px" : "14px 20px",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(26,120,100,0.14)",
                  boxShadow: "0 16px 36px rgba(20,58,52,0.16)",
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? 28 : 34,
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: ACCENT,
                  }}
                >
                  2+
                </span>
                <span
                  style={{
                    fontSize: isMobile ? 11 : 12,
                    fontWeight: 700,
                    lineHeight: 1.25,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: INK,
                  }}
                >
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* ======================= CONTENT ======================= */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            style={{
              flex: "1 1 0",
              width: "100%",
              maxWidth: isTablet ? 680 : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: isTablet ? "center" : "flex-start",
              textAlign: isTablet ? "center" : "left",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(249,115,22,0.10)",
                border: "1px solid rgba(249,115,22,0.25)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 16,
              }}
            >
              Full-Stack Developer
            </span>

           <p
  style={{
    margin: "0 0 18px",
    fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
    lineHeight: 1.7,
    color: INK,
    maxWidth: "58ch",
  }}
>
  I&apos;m <strong>Sarah Nkansah</strong>. I build websites and mobile apps, work in
  digital marketing and SEO. I enjoy
  figuring out how things work and finding practical ways to make technology
  useful for people and businesses.
</p>

<p
  style={{
    margin: "0 0 16px",
    lineHeight: 1.8,
    color: MUTED,
    maxWidth: "62ch",
  }}
>
  I trained in software engineering at Codetrain Africa and am developing my
  digital marketing skills through Generation Ghana. My experience includes
  building company websites with Next.js, developing mobile applications with
  React Native, and working on backend systems using Node.js and Express.
</p>

<p
  style={{
    margin: "0 0 16px",
    lineHeight: 1.8,
    color: MUTED,
    maxWidth: "62ch",
  }}
>
  Working across development and digital marketing has changed how I approach
  projects. When I build a website, I think beyond its design and code. I want
  to know whether people can find it on Google, whether it works well on their
  phones, and whether it makes it easy for them to get what they need. 
</p>

<p
  style={{
    margin: "0 0 24px",
    lineHeight: 1.8,
    color: MUTED,
    maxWidth: "62ch",
  }}
>
  I enjoy solving problems, learning new technologies, and finding better ways
  to do things. I&apos;m always looking for opportunities to apply what I know,
  learn from others, and work on projects that challenge me to grow.
</p>

           


            {/* CTAs */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
                justifyContent: isTablet ? "center" : "flex-start",
                gap: 12,
                width: isMobile ? "100%" : "auto",
              }}
            >
              <CtaButton
                href="#portfolio"
                label="View Sarah Nkansah's work"
                variant="solid"
                fullWidth={isMobile}
                reducedMotion={reducedMotion}
                icon={ArrowIcon}
              >
                View My Work
              </CtaButton>
              <CtaButton
                href="https://docs.google.com/document/d/10CZgm5_UpRXNiH0FDcQG873euCqdITG4srnvXjzU-RY/edit?usp=sharing"
                label="Download Sarah Nkansah's CV"
                variant="outline"
                fullWidth={isMobile}
                reducedMotion={reducedMotion}
                icon={DownloadIcon}
              >
                Download CV
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}