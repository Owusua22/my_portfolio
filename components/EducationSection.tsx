"use client";

import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Award,

  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Code2,
  TrendingUp,
  Palette,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Types ─────────────────────────────────────────────────────────
type EntryType = "degree" | "certification" | "bootcamp" | "program";
type StatusType = "completed" | "in-progress";

interface EducationEntry {
  type: EntryType;
  title: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  status: StatusType;
  color: "indigo" | "purple" | "cyan" | "blue" | "emerald" | "violet";
  icon: React.ReactNode;
  description?: string;
  highlights?: string[];
  credential?: string;
}

// ── Data ──────────────────────────────────────────────────────────
const educationEntries: EducationEntry[] = [
  // ── Degrees ────────────────────────────────────────────────────
  {
    type: "degree",
    title: "B-Tech in Secretaryship & Management Studies",
    institution: "Accra Technical University",
    period: "2023 — 2025",
    status: "completed",
    color: "indigo",
    icon: <GraduationCap className="w-5 h-5" />,
    description:
      "Bachelor of Technology degree focused on business administration, management strategy, and organisational communication.",
    highlights: [
      "Business Administration & Strategy",
      "Organisational Management",
      "Communication & Leadership",
      "Project Management Principles",
    ],
  },
  {
    type: "degree",
    title: "HND in Bilingual Secretaryship & Management Studies",
    institution: "Accra Technical University",
    period: "2019 — 2023",
    status: "completed",
    color: "blue",
    icon: <GraduationCap className="w-5 h-5" />,
    description:
      "Higher National Diploma with a bilingual focus — English & French — covering secretaryship, management, and business communication.",
    highlights: [
      "Bilingual Communication (English & French)",
      "Business Management",
      "Secretaryship & Administration",
      "Organisational Behaviour",
    ],
  },

  // ── Bootcamp ───────────────────────────────────────────────────
  {
    type: "bootcamp",
    title: "Software Development Bootcamp",
    institution: "CodeTrain Africa",
    institutionUrl: "https://codetrain.africa",
    period: "2021 — 2022",
    status: "completed",
    color: "purple",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Intensive full-stack software development programme covering modern JavaScript, React, Node.js, and product thinking.",
    highlights: [
      "Full-Stack JavaScript Development",
      "React & Node.js",
      "RESTful API Design",
      "Agile & Product Thinking",
      "Collaborative Engineering Practices",
    ],
  },

  // ── Certifications ─────────────────────────────────────────────
  {
    type: "program",
    title: "Digital Marketing Programme",
    institution: "Generation Ghana",
    period: "2024 — Present",
    status: "in-progress",
    color: "emerald",
    icon: <TrendingUp className="w-5 h-5" />,
    description:
      "Professional digital marketing programme covering SEO, social media strategy, content marketing, analytics, and paid advertising.",
    highlights: [
      "Search Engine Optimisation (SEO)",
      "Social Media Strategy",
      "Content Marketing",
      "Google Analytics & GA4",
      "Paid Advertising (Google Ads / Meta)",
    ],
  },
  {
    type: "certification",
    title: "Foundations of User Experience (UX) Design",
    institution: "Coursera / Google",
    institutionUrl: "https://coursera.org",
    period: "2023",
    status: "completed",
    color: "cyan",
    icon: <Palette className="w-5 h-5" />,
    description:
      "Google-certified course covering UX research, wireframing, prototyping, and user-centered design principles.",
    highlights: [
      "UX Research & Empathy Mapping",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Design Thinking Process",
    ],
    credential: "Google Certificate",
  },
  {
    type: "certification",
    title: "Google Ads Certification",
    institution: "Coursera / Google",
    institutionUrl: "https://coursera.org",
    period: "2023",
    status: "completed",
    color: "violet",
    icon: <Award className="w-5 h-5" />,
    description:
      "Google-certified training in Google Ads campaign strategy, keyword bidding, ad copywriting, and performance analytics.",
    highlights: [
      "Google Ads Campaign Management",
      "Keyword Strategy & Bidding",
      "Ad Copywriting & A/B Testing",
      "Performance Analytics & ROAS",
    ],
    credential: "Google Certificate",
  },
];

// ── Color map ──────────────────────────────────────────────────────
const colorMap = {
  indigo: {
    bg:      "from-indigo-500/[0.03] to-purple-500/[0.05] dark:from-indigo-500/[0.07] dark:to-purple-500/[0.09]",
    border:  "border-indigo-500/10 dark:border-indigo-500/20 group-hover/card:border-indigo-500/30",
    dot:     "bg-gradient-to-b from-indigo-500 to-purple-600 shadow-indigo-500/30",
    icon:    "bg-indigo-500/10 text-indigo-500",
    tag:     "bg-indigo-500/[0.06] border-indigo-500/[0.12] text-indigo-700 dark:text-indigo-300",
    top:     "from-indigo-500 to-purple-500",
    badge:   "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
    bullet:  "bg-indigo-500",
    chevron: "text-indigo-500",
  },
  blue: {
    bg:      "from-blue-500/[0.03] to-indigo-500/[0.05] dark:from-blue-500/[0.07] dark:to-indigo-500/[0.09]",
    border:  "border-blue-500/10 dark:border-blue-500/20 group-hover/card:border-blue-500/30",
    dot:     "bg-gradient-to-b from-blue-500 to-indigo-600 shadow-blue-500/30",
    icon:    "bg-blue-500/10 text-blue-500",
    tag:     "bg-blue-500/[0.06] border-blue-500/[0.12] text-blue-700 dark:text-blue-300",
    top:     "from-blue-500 to-indigo-500",
    badge:   "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    bullet:  "bg-blue-500",
    chevron: "text-blue-500",
  },
  purple: {
    bg:      "from-purple-500/[0.03] to-violet-500/[0.05] dark:from-purple-500/[0.07] dark:to-violet-500/[0.09]",
    border:  "border-purple-500/10 dark:border-purple-500/20 group-hover/card:border-purple-500/30",
    dot:     "bg-gradient-to-b from-purple-500 to-violet-600 shadow-purple-500/30",
    icon:    "bg-purple-500/10 text-purple-500",
    tag:     "bg-purple-500/[0.06] border-purple-500/[0.12] text-purple-700 dark:text-purple-300",
    top:     "from-purple-500 to-violet-500",
    badge:   "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
    bullet:  "bg-purple-500",
    chevron: "text-purple-500",
  },
  cyan: {
    bg:      "from-cyan-500/[0.03] to-teal-500/[0.05] dark:from-cyan-500/[0.07] dark:to-teal-500/[0.09]",
    border:  "border-cyan-500/10 dark:border-cyan-500/20 group-hover/card:border-cyan-500/30",
    dot:     "bg-gradient-to-b from-cyan-500 to-teal-600 shadow-cyan-500/30",
    icon:    "bg-cyan-500/10 text-cyan-500",
    tag:     "bg-cyan-500/[0.06] border-cyan-500/[0.12] text-cyan-700 dark:text-cyan-300",
    top:     "from-cyan-500 to-teal-500",
    badge:   "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
    bullet:  "bg-cyan-500",
    chevron: "text-cyan-500",
  },
  emerald: {
    bg:      "from-emerald-500/[0.03] to-teal-500/[0.05] dark:from-emerald-500/[0.07] dark:to-teal-500/[0.09]",
    border:  "border-emerald-500/10 dark:border-emerald-500/20 group-hover/card:border-emerald-500/30",
    dot:     "bg-gradient-to-b from-emerald-500 to-teal-600 shadow-emerald-500/30",
    icon:    "bg-emerald-500/10 text-emerald-500",
    tag:     "bg-emerald-500/[0.06] border-emerald-500/[0.12] text-emerald-700 dark:text-emerald-300",
    top:     "from-emerald-500 to-teal-500",
    badge:   "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    bullet:  "bg-emerald-500",
    chevron: "text-emerald-500",
  },
  violet: {
    bg:      "from-violet-500/[0.03] to-purple-500/[0.05] dark:from-violet-500/[0.07] dark:to-purple-500/[0.09]",
    border:  "border-violet-500/10 dark:border-violet-500/20 group-hover/card:border-violet-500/30",
    dot:     "bg-gradient-to-b from-violet-500 to-purple-600 shadow-violet-500/30",
    icon:    "bg-violet-500/10 text-violet-500",
    tag:     "bg-violet-500/[0.06] border-violet-500/[0.12] text-violet-700 dark:text-violet-300",
    top:     "from-violet-500 to-purple-500",
    badge:   "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
    bullet:  "bg-violet-500",
    chevron: "text-violet-500",
  },
};

// ── Type label map ─────────────────────────────────────────────────
const typeLabel: Record<EntryType, string> = {
  degree:        "Degree",
  certification: "Certification",
  bootcamp:      "Bootcamp",
  program:       "Programme",
};

// ── Animation variants ─────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 36 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const highlightItem = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

// ── Grouped sections ───────────────────────────────────────────────
const degrees       = educationEntries.filter(e => e.type === "degree");
const bootcamps     = educationEntries.filter(e => e.type === "bootcamp");
const certPrograms  = educationEntries.filter(
  e => e.type === "certification" || e.type === "program"
);

// ═════════════════════════════════════════════════════════════════
export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".edu-heading-wrap",
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-heading-wrap",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".edu-timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.8, ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".cert-card",
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: "power2.out",
          scrollTrigger: {
            trigger: ".cert-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-16" id="education">

      {/* ══ HEADING ══════════════════════════════════════════ */}
      <div className="edu-heading-wrap mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4
                       bg-indigo-500/[0.06] border border-indigo-500/[0.12]
                       dark:bg-indigo-500/10 dark:border-indigo-500/20">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]
                          text-indigo-600 dark:text-indigo-400">
            Education & Certifications
          </span>
        </div>

        <motion.h2
          variants={fadeInUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }} custom={0.05}
          className="font-display text-2xl md:text-3xl lg:text-4xl
                     font-extrabold tracking-tight mb-3"
        >
          Academic &{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
                          bg-clip-text text-transparent">
            Professional Training
          </span>
        </motion.h2>

        <motion.div
          variants={fadeInUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }} custom={0.1}
          className="h-[3px] w-20 rounded-full mb-4
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
        />

        <motion.p
          variants={fadeInUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }} custom={0.15}
          className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed"
        >
          A foundation in{" "}
          <strong className="text-foreground">business & management</strong>{" "}
          combined with intensive{" "}
          <strong className="text-foreground">software engineering</strong>,{" "}
          <strong className="text-foreground">UX design</strong>, and{" "}
          <strong className="text-foreground">digital marketing</strong> training.
        </motion.p>
      </div>

      {/* Divider */}
      <Divider />

      {/* ══ FORMAL DEGREES (Timeline layout) ════════════════ */}
      <SubHeading
        icon={<GraduationCap className="w-4 h-4 text-indigo-500" />}
        title="Formal Education"
        subtitle="University degrees & academic qualifications"
        delay={0}
      />

      <div className="relative mt-6 mb-12">
        {/* Animated timeline line */}
        <div className="edu-timeline-line hidden md:block absolute left-[19px] top-2 bottom-2
                       w-px bg-gradient-to-b from-indigo-500/40 via-blue-500/25
                       to-transparent" />

        <div className="space-y-6">
          {[...degrees, ...bootcamps].map((entry, index) => {
            const c = colorMap[entry.color];
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.1}
                className="group/card relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-0 top-6 w-10 h-10
                                rounded-full items-center justify-center
                                ${c.dot} shadow-lg z-10`}>
                  <div className="text-white">{entry.icon}</div>
                </div>

                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden
                               transition-all duration-500
                               hover:shadow-xl hover:-translate-y-0.5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.bg}`} />
                  <div className={`absolute inset-0 border ${c.border} rounded-2xl
                                  transition-colors duration-400`} />
                  <div className={`absolute top-0 left-0 w-full h-[2px]
                                  bg-gradient-to-r ${c.top} opacity-0
                                  group-hover/card:opacity-100
                                  transition-opacity duration-500`} />

                  <div className="relative p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row
                                   sm:items-start gap-3 mb-4">
                      <div className="flex-1 min-w-0">

                        {/* Title */}
                        <h3 className="font-display font-bold text-base
                                      leading-tight mb-1.5">
                          {entry.title}
                        </h3>

                        {/* Institution */}
                        <div className="flex flex-wrap items-center gap-2
                                       text-sm mb-1.5">
                          {entry.institutionUrl ? (
                            <a
                              href={entry.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-1 font-semibold
                                         ${c.chevron} hover:underline`}
                            >
                              {entry.institution}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className={`font-semibold ${c.chevron}`}>
                              {entry.institution}
                            </span>
                          )}
                        </div>

                        {/* Period + status */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1 text-xs
                                          text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {entry.period}
                          </span>
                          <StatusBadge status={entry.status} />
                        </div>
                      </div>

                      {/* Type badge */}
                      <span className={`shrink-0 self-start text-[10px] font-bold
                                       px-2.5 py-1 rounded-full border ${c.badge}`}>
                        {typeLabel[entry.type]}
                      </span>
                    </div>

                    {/* Description */}
                    {entry.description && (
                      <p className="text-sm text-muted-foreground
                                   leading-relaxed mb-4 italic">
                        {entry.description}
                      </p>
                    )}

                    {/* Highlights */}
                    {entry.highlights && (
                      <motion.ul
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-1.5"
                      >
                        {entry.highlights.map((h, hi) => (
                          <motion.li
                            key={hi}
                            variants={highlightItem}
                            className="flex items-center gap-2
                                      group/hl text-sm"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0
                                           ${c.bullet} opacity-60
                                           group-hover/hl:opacity-100
                                           transition-opacity`} />
                            <span className="text-foreground/70
                                           group-hover/hl:text-foreground/90
                                           transition-colors text-sm">
                              {h}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ══ CERTIFICATIONS & PROGRAMMES ══════════════════════ */}
      <SubHeading
        icon={<Award className="w-4 h-4 text-purple-500" />}
        title="Certifications & Programmes"
        subtitle="Professional training, Google certificates & specialisations"
        delay={0.1}
      />

      <div className="cert-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {certPrograms.map((entry, index) => {
          const c = colorMap[entry.color];
          return (
            <div
              key={index}
              className="cert-card group/cert relative rounded-2xl overflow-hidden
                         transition-all duration-500 hover:shadow-xl
                         hover:-translate-y-1 cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.bg}`} />
              <div className={`absolute inset-0 border ${c.border} rounded-2xl
                              transition-colors duration-400`} />
              <div className={`absolute top-0 left-0 w-full h-[2px]
                              bg-gradient-to-r ${c.top} opacity-0
                              group-hover/cert:opacity-100
                              transition-opacity duration-500`} />

              <div className="relative p-5">
                {/* Icon + type */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${c.icon}`}>
                    {entry.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] font-bold px-2.5 py-1
                                     rounded-full border ${c.badge}`}>
                      {typeLabel[entry.type]}
                    </span>
                    <StatusBadge status={entry.status} compact />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm leading-snug mb-1.5">
                  {entry.title}
                </h3>

                {/* Institution */}
                <div className="mb-2">
                  {entry.institutionUrl ? (
                    <a
                      href={entry.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs font-semibold
                                 ${c.chevron} hover:underline`}
                    >
                      {entry.institution}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className={`text-xs font-semibold ${c.chevron}`}>
                      {entry.institution}
                    </span>
                  )}
                </div>

                {/* Period */}
                <div className="flex items-center gap-1 text-xs
                               text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {entry.period}
                </div>

                {/* Description */}
                {entry.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {entry.description}
                  </p>
                )}

                {/* Highlights as tags */}
                {entry.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-3
                                 border-t border-foreground/[0.05]">
                    {entry.highlights.map((h) => (
                      <span
                        key={h}
                        className={`text-[9px] font-semibold px-2 py-0.5
                                   rounded-full border ${c.tag}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Credential badge */}
                {entry.credential && (
                  <div className="mt-3 pt-3 border-t border-foreground/[0.05]
                                 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] font-semibold
                                   text-emerald-700 dark:text-emerald-400">
                      {entry.credential}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>


    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────

function Divider() {
  return (
    <div className="relative my-10">
      <div className="h-px bg-gradient-to-r from-transparent
                     via-indigo-500/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
    </div>
  );
}

function SubHeading({
  icon, title, subtitle, delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-center gap-3 mb-1"
    >
      <div className="p-2 rounded-xl bg-indigo-500/10">{icon}</div>
      <div>
        <h3 className="font-display font-bold text-lg">{title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function StatusBadge({
  status,
  compact = false,
}: {
  status: StatusType;
  compact?: boolean;
}) {
  if (status === "in-progress") {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full font-bold border
                        bg-amber-500/10 border-amber-500/20
                        text-amber-700 dark:text-amber-400
                        ${compact ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}>
        <Clock className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
        In Progress
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-bold border
                      bg-emerald-500/10 border-emerald-500/20
                      text-emerald-700 dark:text-emerald-400
                      ${compact ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}>
      <CheckCircle2 className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
      Completed
    </span>
  );
}