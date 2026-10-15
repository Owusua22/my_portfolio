"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { STATIC_PORTFOLIO, type PortfolioItem } from "@/lib/portfolioMock";

// ------------------------------------------------------------------
//  Filter Tabs Order
// ------------------------------------------------------------------
const TABS = [
  { key: "all", label: "All Projects" },
  { key: "real_life_projects", label: "Real-Life Projects" },
  { key: "landing_pages", label: "Landing Pages" },
  { key: "digital_marketing", label: "Digital Marketing" },

] as const;

type FilterTabKey = (typeof TABS)[number]["key"];

// Strict category display order
const SOURCE_ORDER: Record<string, number> = {
  real_life_projects: 1,
  landing_pages: 2,
  digital_marketing: 3,

};

// Colors
const ACCENT = "#f97316";
const ACCENT_DARK = "#ea580c";
const TEAL_ACCENT = "#0f766e";
const DARK_INK = "#0f172a";
const MUTED = "#64748b";

// ------------------------------------------------------------------
//  Helpers
// ------------------------------------------------------------------
const isYouTubeUrl = (url: string): boolean =>
  /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(url);

const isVimeoUrl = (url: string): boolean => /vimeo\.com\/\d+/.test(url);

const youtubeEmbedUrl = (url: string): string => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?#]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const vimeoEmbedUrl = (url: string): string => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : url;
};

// ------------------------------------------------------------------
//  Main Portfolio Component
// ------------------------------------------------------------------
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<FilterTabKey>("all");
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>("");

  // Sort & Load Data
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      // Sort strictly: Real-life -> Landing pages -> Digital marketing -> Creative
      // Within each bucket, featured items take priority
      const sorted = [...STATIC_PORTFOLIO].sort((a, b) => {
        const orderA = SOURCE_ORDER[a.sourceType] ?? 99;
        const orderB = SOURCE_ORDER[b.sourceType] ?? 99;
        if (orderA !== orderB) return orderA - orderB;
        if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
        return 0;
      });

      setItems(sorted);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Filter items based on active tab
  const visibleItems = useMemo(() => {
    if (activeTab === "all") return items;
    return items.filter((item) => item.sourceType === activeTab);
  }, [items, activeTab]);

  // Modal Handlers
  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setSelectedGalleryImage(
      item.galleryImages?.length ? item.galleryImages[0] : item.image
    );
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setSelectedGalleryImage("");
  };

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [modalOpen]);

  return (
    <section id="portfolio" className="portfolio section" style={{ padding: "80px 0" }}>
      <style>{`
        .portfolio-tabs-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 0 auto 44px auto;
          padding: 6px;
          background: #f1f5f9;
          border-radius: 999px;
          max-width: fit-content;
        }
        .portfolio-tab-pill {
          padding: 9px 20px;
          font-size: 13.5px;
          font-weight: 700;
          color: #475569;
          border-radius: 999px;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .portfolio-tab-pill.active {
          background: #ffffff;
          color: ${DARK_INK};
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .portfolio-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          cursor: pointer;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
          border-color: rgba(249, 115, 22, 0.4);
        }
        .portfolio-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #0f172a;
        }
        .portfolio-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover .portfolio-card-media img {
          transform: scale(1.06);
        }
        .portfolio-badge-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(6px);
          color: ${DARK_INK};
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }
        .portfolio-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .portfolio-tag {
          font-size: 11.5px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          background: #f1f5f9;
          color: #475569;
        }
        .portfolio-cta-row {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 750;
          color: ${ACCENT};
        }
        .portfolio-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .portfolio-modal-card {
          background: #ffffff;
          width: 100%;
          max-width: 920px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 22px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          position: relative;
        }
        .portfolio-modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: #f1f5f9;
          color: #0f172a;
          display: grid;
          place-items: center;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 20;
        }
        .portfolio-modal-close-btn:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .portfolio-tabs-nav {
            border-radius: 16px;
            width: 100%;
          }
          .portfolio-tab-pill {
            flex: 1 1 45%;
            text-align: center;
            padding: 8px 12px;
          }
        }
      `}</style>

      <SectionTitle
        title="Portfolio & Projects"
        description="Explore live real-life software deployments, high-converting landing pages, and data-backed digital marketing case studies."
      />

      <div className="container" data-aos="fade-up">
        {/* Dynamic Category Navigation Bar */}
        <div className="portfolio-tabs-nav">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`portfolio-tab-pill ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="d-flex align-items-center justify-content-center py-5">
            <div
              className="spinner-border"
              role="status"
              style={{ color: ACCENT }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : visibleItems.length === 0 ? (
          <div
            style={{
              background: "#ffffff",
              border: "1px dashed #cbd5e1",
              borderRadius: 20,
              padding: "4rem 2rem",
              textAlign: "center",
              maxWidth: 520,
              margin: "20px auto 0",
            }}
          >
            <i
              className="bi bi-folder2-open"
              style={{ fontSize: "2.4rem", color: ACCENT }}
            />
            <h4 className="mt-3 fw-bold text-dark">No projects found</h4>
            <p className="text-muted small mb-0">
              Please choose another filter above.
            </p>
          </div>
        ) : (
          /* Portfolio Showcase Grid */
          <div className="portfolio-grid">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="portfolio-card"
                onClick={() => openModal(item)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(item);
                  }
                }}
              >
                {/* Visual Thumbnail */}
                <div className="portfolio-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" />

                  {/* Category Pill */}
                  <span className="portfolio-badge-pill">
                    {item.category}
                  </span>

                  {/* Featured Pill */}
                  {item.isFeatured && (
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: 999,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Featured
                    </span>
                  )}

                  {/* Live Link or Strategy Label Pill */}
                  {item.projectUrl ? (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        background: "rgba(15, 23, 42, 0.85)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: 8,
                        fontSize: 11,
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <i className="bi bi-globe" style={{ color: "#38bdf8" }} />
                      Live Platform
                    </span>
                  ) : item.driveUrl ? (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        background: "rgba(15, 23, 42, 0.85)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: 8,
                        fontSize: 11,
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <i className="bi bi-file-earmark-text" style={{ color: "#facc15" }} />
                      Case Study Deck
                    </span>
                  ) : null}
                </div>

                {/* Card Body */}
                <div className="portfolio-card-body">
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: 17.5,
                      fontWeight: 800,
                      color: DARK_INK,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 16px",
                      fontSize: 13.5,
                      color: MUTED,
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {item.summary || item.description}
                  </p>

                  {/* Tools / Tech Chips */}
                  {item.tools && item.tools.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 16,
                      }}
                    >
                      {item.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="portfolio-tag">
                          {tool}
                        </span>
                      ))}
                      {item.tools.length > 3 && (
                        <span className="portfolio-tag">
                          +{item.tools.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Action Link */}
                  <div className="portfolio-cta-row">
                    <span>
                      {item.sourceType === "real_life_projects"
                        ? "View Live Project"
                        : item.sourceType === "landing_pages"
                        ? "Inspect Landing Page"
                        : item.sourceType === "digital_marketing"
                        ? "Read Case Study"
                        : "View Project"}
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* ============================================================
          INTERACTIVE CASE STUDY & PROJECT DEEP DIVE MODAL
      ============================================================ */}
      {modalOpen && selectedItem && (
        <div
          className="portfolio-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="portfolio-modal-card">
            {/* Close Button */}
            <button
              type="button"
              className="portfolio-modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <i className="bi bi-x-lg" />
            </button>

            {/* Media Presentation Frame */}
            <div style={{ background: "#0b0f19", position: "relative" }}>
              {selectedItem.videoUrl ? (
                <div style={{ aspectRatio: "16 / 9", width: "100%" }}>
                  {isYouTubeUrl(selectedItem.videoUrl) ? (
                    <iframe
                      src={youtubeEmbedUrl(selectedItem.videoUrl)}
                      title={selectedItem.title}
                      style={{ width: "100%", height: "100%", border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : isVimeoUrl(selectedItem.videoUrl) ? (
                    <iframe
                      src={vimeoEmbedUrl(selectedItem.videoUrl)}
                      title={selectedItem.title}
                      style={{ width: "100%", height: "100%", border: "none" }}
                      allowFullScreen
                    />
                  ) : (
                    <video
                      controls
                      playsInline
                      src={selectedItem.videoUrl}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              ) : (
                <div style={{ maxHeight: 420, width: "100%", overflow: "hidden" }}>
                  <img
                    src={selectedGalleryImage || selectedItem.image}
                    alt={selectedItem.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}

              {/* Gallery Thumbnails (if multiple images) */}
              {selectedItem.galleryImages &&
                selectedItem.galleryImages.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      padding: 10,
                      background: "rgba(15, 23, 42, 0.9)",
                      overflowX: "auto",
                    }}
                  >
                    {selectedItem.galleryImages.map((thumb, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedGalleryImage(thumb)}
                        style={{
                          width: 60,
                          height: 44,
                          borderRadius: 6,
                          overflow: "hidden",
                          border:
                            selectedGalleryImage === thumb
                              ? `2px solid ${ACCENT}`
                              : "2px solid transparent",
                          padding: 0,
                          cursor: "pointer",
                          opacity: selectedGalleryImage === thumb ? 1 : 0.6,
                        }}
                      >
                        <img
                          src={thumb}
                          alt="Thumbnail preview"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </button>
                    ))}
                  </div>
                )}
            </div>

            {/* Modal Detail Body */}
            <div style={{ padding: "30px 26px" }}>
              {/* Category, Year, Client Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 10,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: ACCENT,
                    letterSpacing: "0.05em",
                  }}
                >
                  {selectedItem.category}
                </span>
                {selectedItem.year && (
                  <>
                    <span style={{ color: "#cbd5e1" }}>•</span>
                    <span style={{ fontSize: 13, color: MUTED }}>
                      {selectedItem.year}
                    </span>
                  </>
                )}
                {selectedItem.client && (
                  <>
                    <span style={{ color: "#cbd5e1" }}>•</span>
                    <span style={{ fontSize: 13, color: MUTED }}>
                      Client: <strong>{selectedItem.client}</strong>
                    </span>
                  </>
                )}
                {selectedItem.role && (
                  <>
                    <span style={{ color: "#cbd5e1" }}>•</span>
                    <span style={{ fontSize: 13, color: MUTED }}>
                      Role: <strong>{selectedItem.role}</strong>
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
                  fontWeight: 900,
                  color: DARK_INK,
                  lineHeight: 1.25,
                }}
              >
                {selectedItem.title}
              </h2>

              {/* Verified Result Banner */}
              {(selectedItem.results || selectedItem.result) && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "16px 18px",
                    borderRadius: 14,
                    background: "rgba(249, 115, 22, 0.08)",
                    border: "1px solid rgba(249, 115, 22, 0.2)",
                    marginBottom: 24,
                  }}
                >
                  <i
                    className="bi bi-graph-up-arrow"
                    style={{ fontSize: 22, color: ACCENT, marginTop: 2 }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 11.5,
                        fontWeight: 800,
                        color: ACCENT_DARK,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Measured Result / Business Impact
                    </div>
                    <div
                      style={{
                        fontSize: 14.5,
                        fontWeight: 700,
                        color: DARK_INK,
                        lineHeight: 1.5,
                        marginTop: 4,
                      }}
                    >
                      {selectedItem.results || selectedItem.result}
                    </div>
                  </div>
                </div>
              )}

              {/* Problem Statement (for web & landing projects) */}
              {selectedItem.problem && (
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: "16px 18px",
                    marginBottom: 20,
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 8px",
                      fontSize: 13,
                      fontWeight: 800,
                      color: TEAL_ACCENT,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    The Challenge & Objective
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "#334155",
                    }}
                  >
                    {selectedItem.problem}
                  </p>
                </div>
              )}

              {/* Summary / Description */}
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.75,
                  color: "#334155",
                  marginBottom: 24,
                  whiteSpace: "pre-line",
                }}
              >
                {selectedItem.description}
              </div>

              {/* STAR Framework Case Study Display (for marketing case studies) */}
              {(selectedItem.situation ||
                selectedItem.task ||
                selectedItem.action) && (
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: 22,
                    marginBottom: 26,
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 16px",
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: DARK_INK,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Strategy & Execution Framework
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: 16,
                    }}
                  >
                    {selectedItem.situation && (
                      <div>
                        <div
                          style={{
                            fontSize: 11.5,
                            fontWeight: 800,
                            color: TEAL_ACCENT,
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          01. Situation
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: MUTED,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {selectedItem.situation}
                        </p>
                      </div>
                    )}
                    {selectedItem.task && (
                      <div>
                        <div
                          style={{
                            fontSize: 11.5,
                            fontWeight: 800,
                            color: TEAL_ACCENT,
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          02. Task & Objective
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: MUTED,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {selectedItem.task}
                        </p>
                      </div>
                    )}
                    {selectedItem.action && (
                      <div>
                        <div
                          style={{
                            fontSize: 11.5,
                            fontWeight: 800,
                            color: TEAL_ACCENT,
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          03. Implementation & Action
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: MUTED,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {selectedItem.action}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Technologies & Services Chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 28,
                }}
              >
                {selectedItem.framework && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(249, 115, 22, 0.12)",
                      color: ACCENT_DARK,
                    }}
                  >
                    Framework: {selectedItem.framework}
                  </span>
                )}
                {selectedItem.tools?.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "#f1f5f9",
                      color: DARK_INK,
                    }}
                  >
                    {tool}
                  </span>
                ))}
                {selectedItem.services?.map((svc) => (
                  <span
                    key={svc}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(15, 118, 110, 0.08)",
                      color: TEAL_ACCENT,
                    }}
                  >
                    {svc}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  alignItems: "center",
                  paddingTop: 18,
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                {selectedItem.projectUrl && (
                  <a
                    href={selectedItem.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 22px",
                      borderRadius: 999,
                      background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`,
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 6px 18px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <i className="bi bi-box-arrow-up-right" />
                    Visit Live Website
                  </a>
                )}

                {selectedItem.driveUrl && (
                  <a
                    href={selectedItem.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      borderRadius: 999,
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      color: DARK_INK,
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    <i className="bi bi-file-earmark-slides" />
                    View Slide Deck / Document
                  </a>
                )}

                <Link
                  href="#contact"
                  onClick={closeModal}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 999,
                    color: MUTED,
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                    marginLeft: "auto",
                  }}
                >
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}