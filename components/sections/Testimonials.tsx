"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import SectionTitle from "@/components/SectionTitle";

/* ------------------------------------------------------------------ */
/*  Tokens                                                             */
/* ------------------------------------------------------------------ */
const ACCENT = "#f97316";
const ACCENT_LIGHT = "#fb923c";
const INK = "#111827";
const MUTED = "#6b7280";

/* ------------------------------------------------------------------ */
/*  Data – rewritten around technical delivery                         */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    quote:
      "Before Sarah, every post we published looked like it came from a different company. She built our entire visual identity from scratch — colour palette, typography, iconography, and twelve reusable templates that our small team now uses daily across three platforms. What used to take an hour per post takes five minutes, and everything looks cohesive. She didn't just hand us pretty graphics; she engineered a design system we can actually maintain without a designer on staff.",
    image: "/assets/img/person/peron5.jpg",
    name: "Mary Dickson",
    role: "CEO, Wemomprenuers",
   
  },
  {
    quote:
      "We had built AI models that predict disease risk years before symptoms appear, but our website read like a research paper and scared off every clinician who landed on it. Sarah rebuilt the positioning, the page architecture, and the demo request flow from the ground up. She translated dense health-tech jargon into language that investors and hospital administrators actually understand. Within the first month the Tally-powered demo form was generating qualified leads. The site went from our weakest asset to our strongest sales tool.",
    image: "/assets/img/person/josh.jpg",
    name: "Joshua Fordjour",
    role: "CEO, Cell-7 AI",
  
  },
];

/* ------------------------------------------------------------------ */
/*  CSS (passed via dangerouslySetInnerHTML to prevent hydration lag)  */
/* ------------------------------------------------------------------ */
const TESTIMONIALS_CSS = `
  .t-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 52px 56px 48px;
    position: relative;
    box-shadow:
      0 1px 2px rgba(0,0,0,0.03),
      0 8px 24px rgba(0,0,0,0.04),
      0 24px 48px rgba(0,0,0,0.03);
    border: 1px solid rgba(0,0,0,0.04);
    overflow: hidden;
  }
  .t-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT});
    border-radius: 24px 24px 0 0;
  }
  .t-quote-mark {
    position: absolute;
    top: 28px;
    right: 40px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 140px;
    line-height: 1;
    font-weight: 900;
    color: rgba(249,115,22,0.06);
    pointer-events: none;
    user-select: none;
  }
  .t-nav-btn {
    width: 44px; height: 44px;
    border-radius: 50%;
    border: 1.5px solid rgba(0,0,0,0.08);
    background: #fff;
    color: ${INK};
    display: grid; place-items: center;
    cursor: pointer;
    transition: all .25s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .t-nav-btn:hover {
    border-color: ${ACCENT};
    background: ${ACCENT};
    color: #fff;
    box-shadow: 0 6px 18px rgba(249,115,22,0.25);
    transform: scale(1.06);
  }
  .t-dot {
    height: 6px;
    border-radius: 99px;
    transition: all .4s cubic-bezier(.22,1,.36,1);
  }

  .testimonials-slider .swiper-slide {
    opacity: 0 !important;
    transition: opacity .7s ease !important;
    pointer-events: none;
  }
  .testimonials-slider .swiper-slide-active {
    opacity: 1 !important;
    pointer-events: auto;
  }

  @media (max-width: 767px) {
    .t-card {
      padding: 36px 24px 32px !important;
      border-radius: 18px !important;
    }
    .t-quote-mark {
      font-size: 90px !important;
      top: 16px !important;
      right: 16px !important;
    }
  }
`;

/* ------------------------------------------------------------------ */
/*  Stars                                                              */
/* ------------------------------------------------------------------ */
function Stars() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={ACCENT}
        >
          <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiper = new Swiper(sliderRef.current, {
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 700,
      loop: true,
      autoplay: { delay: 8000, disableOnInteraction: false },
      grabCursor: false,
      navigation: {
        nextEl: ".t-next",
        prevEl: ".t-prev",
      },
      on: {
        init(s) {
          setActive(s.realIndex);
        },
        slideChange(s) {
          setActive(s.realIndex);
        },
      },
    });

    swiperInstanceRef.current = swiper;

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials section"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(175deg, #faf8f5 0%, #f5f0eb 40%, #f8f5f1 100%)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: TESTIMONIALS_CSS }} />

      <SectionTitle
        title="What Clients Say"
        description="Feedback from founders and teams I've built products, platforms, and systems for."
      />

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* ---- Slider ---- */}
          <div className="testimonials-slider swiper" ref={sliderRef}>
            <div className="swiper-wrapper">
              {TESTIMONIALS.map((t) => (
                <div className="swiper-slide" key={t.name}>
                  <div className="t-card">
                    <span className="t-quote-mark" aria-hidden="true">
                      &rdquo;
                    </span>

                    <Stars />

                    <blockquote
                      style={{
                        margin: "0 0 32px",
                        fontSize: "clamp(1rem, 2.2vw, 1.12rem)",
                        lineHeight: 1.8,
                        color: "#374151",
                        fontWeight: 450,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <div
                      style={{
                        width: 48,
                        height: 3,
                        borderRadius: 99,
                        background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT})`,
                        marginBottom: 24,
                      }}
                    />

                    {/* Author */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "3px solid #fff",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 800,
                            color: INK,
                            lineHeight: 1.2,
                          }}
                        >
                          {t.name}
                        </div>
                        <div
                          style={{
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: MUTED,
                            marginTop: 2,
                          }}
                        >
                          {t.role}
                        </div>
                      </div>

                      {/* Project tag */}
                      <span
                        style={{
                          marginLeft: "auto",
                          padding: "5px 12px",
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 700,
                          color: ACCENT,
                          background: "rgba(249,115,22,0.07)",
                          border: "1px solid rgba(249,115,22,0.12)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                      
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Controls ---- */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginTop: 36,
            }}
          >
            <button
              className="t-nav-btn t-prev"
              aria-label="Previous testimonial"
              type="button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => swiperInstanceRef.current?.slideToLoop(i)}
                  className="t-dot"
                  style={{
                    padding: 0,
                    border: "none",
                    cursor: "pointer",
                    width: i === active ? 28 : 8,
                    background:
                      i === active
                        ? `linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT})`
                        : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>

            <button
              className="t-nav-btn t-next"
              aria-label="Next testimonial"
              type="button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}