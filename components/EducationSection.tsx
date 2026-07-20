"use client";

import type { ReactNode } from "react";
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  GraduationCap,
  Palette,
  TrendingUp,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────

type EntryType = "degree" | "certification" | "bootcamp" | "program";
type StatusType = "completed" | "in-progress";

type EducationColor =
  | "indigo"
  | "blue"
  | "purple"
  | "cyan"
  | "emerald"
  | "violet";

interface EducationEntry {
  type: EntryType;
  title: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  status: StatusType;
  color: EducationColor;
  icon: ReactNode;
  description?: string;
  highlights?: string[];
  credential?: string;
}

interface ColorStyle {
  bg: string;
  border: string;
  dot: string;
  icon: string;
  tag: string;
  top: string;
  badge: string;
  bullet: string;
  text: string;
}

// ── Data ──────────────────────────────────────────────────────────

const educationEntries: EducationEntry[] = [
  {
    type: "degree",
    title: "B-Tech in Secretaryship & Management Studies",
    institution: "Accra Technical University",
    period: "2023 — 2025",
    status: "completed",
    color: "indigo",
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      "Bachelor of Technology degree focused on business administration, management strategy, organisational communication, and leadership.",
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
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      "Higher National Diploma with a bilingual English and French focus covering secretaryship, management, administration, and business communication.",
    highlights: [
      "Bilingual Communication — English & French",
      "Business Management",
      "Secretaryship & Administration",
      "Organisational Behaviour",
    ],
  },
  {
    type: "bootcamp",
    title: "Software Development Bootcamp",
    institution: "CodeTrain Africa",
    institutionUrl: "https://codetrain.africa",
    period: "2021 — 2022",
    status: "completed",
    color: "purple",
    icon: <Code2 className="h-5 w-5" />,
    description:
      "An intensive full-stack software development programme covering modern JavaScript, React, Node.js, APIs, and collaborative product development.",
    highlights: [
      "Full-Stack JavaScript Development",
      "React & Node.js",
      "RESTful API Design",
      "Agile & Product Thinking",
      "Collaborative Engineering Practices",
    ],
  },
  {
    type: "program",
    title: "Digital Marketing Programme",
    institution: "Generation Ghana",
    period: "2024 — Present",
    status: "in-progress",
    color: "emerald",
    icon: <TrendingUp className="h-5 w-5" />,
    description:
      "Professional digital marketing training covering SEO, content strategy, analytics, paid advertising, and social media marketing.",
    highlights: [
      "Search Engine Optimisation (SEO)",
      "Social Media Strategy",
      "Content Marketing",
      "Google Analytics & GA4",
      "Paid Advertising — Google Ads & Meta",
    ],
  },
  {
    type: "certification",
    title: "Foundations of User Experience (UX) Design",
    institution: "Coursera / Google",
    institutionUrl: "https://www.coursera.org",
    period: "2023",
    status: "completed",
    color: "cyan",
    icon: <Palette className="h-5 w-5" />,
    description:
      "Google-certified UX design training covering research, user journeys, wireframing, prototyping, and usability testing.",
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
    institutionUrl: "https://www.coursera.org",
    period: "2023",
    status: "completed",
    color: "violet",
    icon: <Award className="h-5 w-5" />,
    description:
      "Google-certified training in campaign strategy, keyword bidding, ad copywriting, testing, and advertising performance analytics.",
    highlights: [
      "Google Ads Campaign Management",
      "Keyword Strategy & Bidding",
      "Ad Copywriting & A/B Testing",
      "Performance Analytics & ROAS",
    ],
    credential: "Google Certificate",
  },
];

// ── Styling ───────────────────────────────────────────────────────

const colorMap: Record<EducationColor, ColorStyle> = {
  indigo: {
    bg: "from-indigo-500/[0.04] to-purple-500/[0.06] dark:from-indigo-500/[0.08] dark:to-purple-500/[0.1]",
    border:
      "border-indigo-500/10 dark:border-indigo-500/20 group-hover/card:border-indigo-500/30",
    dot: "bg-gradient-to-b from-indigo-500 to-purple-600 shadow-indigo-500/30",
    icon: "bg-indigo-500/10 text-indigo-500",
    tag: "border-indigo-500/[0.12] bg-indigo-500/[0.06] text-indigo-700 dark:text-indigo-300",
    top: "from-indigo-500 to-purple-500",
    badge:
      "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    bullet: "bg-indigo-500",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  blue: {
    bg: "from-blue-500/[0.04] to-indigo-500/[0.06] dark:from-blue-500/[0.08] dark:to-indigo-500/[0.1]",
    border:
      "border-blue-500/10 dark:border-blue-500/20 group-hover/card:border-blue-500/30",
    dot: "bg-gradient-to-b from-blue-500 to-indigo-600 shadow-blue-500/30",
    icon: "bg-blue-500/10 text-blue-500",
    tag: "border-blue-500/[0.12] bg-blue-500/[0.06] text-blue-700 dark:text-blue-300",
    top: "from-blue-500 to-indigo-500",
    badge:
      "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300",
    bullet: "bg-blue-500",
    text: "text-blue-600 dark:text-blue-400",
  },
  purple: {
    bg: "from-purple-500/[0.04] to-violet-500/[0.06] dark:from-purple-500/[0.08] dark:to-violet-500/[0.1]",
    border:
      "border-purple-500/10 dark:border-purple-500/20 group-hover/card:border-purple-500/30",
    dot: "bg-gradient-to-b from-purple-500 to-violet-600 shadow-purple-500/30",
    icon: "bg-purple-500/10 text-purple-500",
    tag: "border-purple-500/[0.12] bg-purple-500/[0.06] text-purple-700 dark:text-purple-300",
    top: "from-purple-500 to-violet-500",
    badge:
      "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300",
    bullet: "bg-purple-500",
    text: "text-purple-600 dark:text-purple-400",
  },
  cyan: {
    bg: "from-cyan-500/[0.04] to-teal-500/[0.06] dark:from-cyan-500/[0.08] dark:to-teal-500/[0.1]",
    border:
      "border-cyan-500/10 dark:border-cyan-500/20 group-hover/card:border-cyan-500/30",
    dot: "bg-gradient-to-b from-cyan-500 to-teal-600 shadow-cyan-500/30",
    icon: "bg-cyan-500/10 text-cyan-500",
    tag: "border-cyan-500/[0.12] bg-cyan-500/[0.06] text-cyan-700 dark:text-cyan-300",
    top: "from-cyan-500 to-teal-500",
    badge:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    bullet: "bg-cyan-500",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  emerald: {
    bg: "from-emerald-500/[0.04] to-teal-500/[0.06] dark:from-emerald-500/[0.08] dark:to-teal-500/[0.1]",
    border:
      "border-emerald-500/10 dark:border-emerald-500/20 group-hover/card:border-emerald-500/30",
    dot: "bg-gradient-to-b from-emerald-500 to-teal-600 shadow-emerald-500/30",
    icon: "bg-emerald-500/10 text-emerald-500",
    tag: "border-emerald-500/[0.12] bg-emerald-500/[0.06] text-emerald-700 dark:text-emerald-300",
    top: "from-emerald-500 to-teal-500",
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    bullet: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  violet: {
    bg: "from-violet-500/[0.04] to-purple-500/[0.06] dark:from-violet-500/[0.08] dark:to-purple-500/[0.1]",
    border:
      "border-violet-500/10 dark:border-violet-500/20 group-hover/card:border-violet-500/30",
    dot: "bg-gradient-to-b from-violet-500 to-purple-600 shadow-violet-500/30",
    icon: "bg-violet-500/10 text-violet-500",
    tag: "border-violet-500/[0.12] bg-violet-500/[0.06] text-violet-700 dark:text-violet-300",
    top: "from-violet-500 to-purple-500",
    badge:
      "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    bullet: "bg-violet-500",
    text: "text-violet-600 dark:text-violet-400",
  },
};

const typeLabels: Record<EntryType, string> = {
  degree: "Degree",
  certification: "Certification",
  bootcamp: "Bootcamp",
  program: "Programme",
};

// ── Framer Motion ─────────────────────────────────────────────────

/*
  This tuple type fixes the TypeScript error.

  Do not use:
  ease: [0.25, 0.46, 0.45, 0.94]

  TypeScript infers that as number[].
*/
const motionEase: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

function revealVariant(
  delay = 0,
  y = 28,
  duration = 0.7,
): Variants {
  return {
    hidden: {
      opacity: 0,
      y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: motionEase,
      },
    },
  };
}

const highlightListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const highlightItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

// ── Grouped data ──────────────────────────────────────────────────

const formalEducation = educationEntries.filter(
  (entry) => entry.type === "degree" || entry.type === "bootcamp",
);

const certificationsAndPrograms = educationEntries.filter(
  (entry) => entry.type === "certification" || entry.type === "program",
);

// ── Main Component ────────────────────────────────────────────────

export default function EducationSection() {
  return (
    <section id="education" className="relative mt-16 scroll-mt-24">
      {/* Header */}
      <div className="mb-10">
        <motion.div
          variants={revealVariant(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3.5 py-1.5 dark:border-indigo-500/20 dark:bg-indigo-500/10"
        >
          <GraduationCap
            className="h-3.5 w-3.5 text-indigo-500"
            aria-hidden="true"
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            Education & Certifications
          </span>
        </motion.div>

        <motion.h2
          variants={revealVariant(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl"
        >
          Academic &{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Professional Training
          </span>
        </motion.h2>

        <motion.div
          variants={revealVariant(0.1, 0, 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
        />

        <motion.p
          variants={revealVariant(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          A foundation in{" "}
          <strong className="text-foreground">business and management</strong>{" "}
          combined with intensive{" "}
          <strong className="text-foreground">software engineering</strong>,{" "}
          <strong className="text-foreground">UX design</strong>, and{" "}
          <strong className="text-foreground">digital marketing</strong>{" "}
          training.
        </motion.p>
      </div>

      <Divider />

      {/* Formal education */}
      <SectionHeading
        icon={<GraduationCap className="h-4 w-4 text-indigo-500" />}
        title="Formal Education"
        subtitle="University degrees and hands-on software development training"
      />

      <div className="relative mt-6 mb-14">
        {/* Animated timeline */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: motionEase }}
          className="absolute bottom-2 left-[19px] top-2 hidden w-px origin-top bg-gradient-to-b from-indigo-500/50 via-blue-500/30 to-transparent md:block"
        />

        <div className="space-y-6">
          {formalEducation.map((entry, index) => (
            <TimelineCard
              key={entry.title}
              entry={entry}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Certifications */}
      <SectionHeading
        icon={<Award className="h-4 w-4 text-purple-500" />}
        title="Certifications & Programmes"
        subtitle="Professional training, certifications, and specialist learning"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsAndPrograms.map((entry, index) => (
          <CertificationCard
            key={entry.title}
            entry={entry}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

// ── Timeline Card ─────────────────────────────────────────────────

function TimelineCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const color = colorMap[entry.color];

  return (
    <motion.article
      variants={revealVariant(index * 0.1, 36, 0.65)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -3 }}
      className="group/card relative md:pl-14"
    >
      {/* Desktop timeline icon */}
      <div
        className={`absolute left-0 top-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full text-white shadow-lg md:flex ${color.dot}`}
      >
        {entry.icon}
      </div>

      <div className="relative overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-xl">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color.bg}`}
        />

        <div
          className={`absolute inset-0 rounded-2xl border ${color.border} transition-colors duration-500`}
        />

        <div
          className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${color.top} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`}
        />

        <div className="relative p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              {/* Mobile icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:hidden ${color.icon}`}
              >
                {entry.icon}
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-base font-bold leading-tight">
                  {entry.title}
                </h3>

                <InstitutionLink entry={entry} color={color} />

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {entry.period}
                  </span>

                  <StatusBadge status={entry.status} />
                </div>
              </div>
            </div>

            <span
              className={`w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${color.badge}`}
            >
              {typeLabels[entry.type]}
            </span>
          </div>

          {entry.description && (
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          )}

          {entry.highlights && (
            <motion.ul
              variants={highlightListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-1.5 sm:grid-cols-2"
            >
              {entry.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={highlightItemVariants}
                  className="group/highlight flex items-center gap-2 text-sm"
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full opacity-60 transition-opacity group-hover/highlight:opacity-100 ${color.bullet}`}
                  />

                  <span className="text-foreground/70 transition-colors group-hover/highlight:text-foreground">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ── Certification Card ────────────────────────────────────────────

function CertificationCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const color = colorMap[entry.color];

  return (
    <motion.article
      variants={revealVariant(index * 0.1, 24, 0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -5 }}
      className="group/card relative overflow-hidden rounded-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color.bg}`} />

      <div
        className={`absolute inset-0 rounded-2xl border ${color.border} transition-colors duration-500`}
      />

      <div
        className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${color.top} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`}
      />

      <div className="relative flex h-full flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${color.icon}`}
          >
            {entry.icon}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${color.badge}`}
            >
              {typeLabels[entry.type]}
            </span>

            <StatusBadge status={entry.status} compact />
          </div>
        </div>

        <h3 className="font-display text-sm font-bold leading-snug">
          {entry.title}
        </h3>

        <InstitutionLink entry={entry} color={color} compact />

        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" aria-hidden="true" />
          {entry.period}
        </div>

        {entry.description && (
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {entry.description}
          </p>
        )}

        {entry.highlights && (
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-foreground/[0.06] pt-4">
            {entry.highlights.map((highlight) => (
              <span
                key={highlight}
                className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${color.tag}`}
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {entry.credential && (
          <div className="mt-4 flex items-center gap-1.5 border-t border-foreground/[0.06] pt-4">
            <CheckCircle2
              className="h-3.5 w-3.5 text-emerald-500"
              aria-hidden="true"
            />
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
              {entry.credential}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

// ── Reusable Components ───────────────────────────────────────────

function InstitutionLink({
  entry,
  color,
  compact = false,
}: {
  entry: EducationEntry;
  color: ColorStyle;
  compact?: boolean;
}) {
  const baseClassName = compact
    ? `mt-2 flex items-center gap-1 text-xs font-semibold ${color.text}`
    : `mt-2 flex items-center gap-1 text-sm font-semibold ${color.text}`;

  if (entry.institutionUrl) {
    return (
      <a
        href={entry.institutionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClassName} w-fit transition-opacity hover:opacity-75 hover:underline`}
      >
        {entry.institution}
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    );
  }

  return <p className={baseClassName}>{entry.institution}</p>;
}

function Divider() {
  return (
    <div aria-hidden="true" className="relative my-10">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30" />
    </div>
  );
}

function SectionHeading({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={revealVariant(0, 20, 0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-1 flex items-center gap-3"
    >
      <div className="rounded-xl bg-indigo-500/10 p-2">{icon}</div>

      <div>
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
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
  const sizeClassName = compact
    ? "px-2 py-0.5 text-[9px]"
    : "px-2.5 py-1 text-[10px]";

  const iconClassName = compact ? "h-2.5 w-2.5" : "h-3 w-3";

  if (status === "in-progress") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 font-bold text-amber-700 dark:text-amber-400 ${sizeClassName}`}
      >
        <Clock className={iconClassName} aria-hidden="true" />
        In Progress
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 font-bold text-emerald-700 dark:text-emerald-400 ${sizeClassName}`}
    >
      <CheckCircle2 className={iconClassName} aria-hidden="true" />
      Completed
    </span>
  );
}