"use client";

import type { ReactNode } from "react";
import {
  Award,
  Brain,
  Briefcase,
  Calendar,
  ChevronRight,
  ExternalLink,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────

type ExperienceColor = "indigo" | "purple" | "cyan" | "blue" | "violet";

type EmploymentType = "Full-time" | "Freelance" | "Contract" | "Part-time";

type AchievementColor = "indigo" | "purple" | "cyan" | "emerald";

interface Achievement {
  metric: string;
  label: string;
  color: AchievementColor;
}

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  companyDesc?: string;
  location: string;
  period: string;
  type: EmploymentType;
  current?: boolean;
  color: ExperienceColor;
  tagline: string;
  achievements?: Achievement[];
  description: string[];
  tags: string[];
}

interface CardColorStyle {
  bg: string;
  border: string;
  dot: string;
  icon: string;
  tag: string;
  top: string;
  badge: string;
  text: string;
}

interface KeyAchievement {
  icon: ReactNode;
  text: string;
}

// ── Experience Data ───────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    title: "Technical Team Lead & Mobile Application Developer",
    company: "Franko Trading Limited",
    companyUrl: "https://www.frankotrading.com/",
    location: "Accra, Ghana",
    period: "2024 — Present",
    type: "Full-time",
    current: true,
    color: "indigo",
    tagline:
      "Leading cross-functional engineering teams to deliver scalable web and mobile products.",
    achievements: [
      {
        metric: "40–60%",
        label: "Performance improvement",
        color: "indigo",
      },
      {
        metric: "50%",
        label: "Faster deployments",
        color: "purple",
      },
      {
        metric: "4–8",
        label: "Team members led",
        color: "cyan",
      },
      {
        metric: "1",
        label: "Mobile app launched",
        color: "emerald",
      },
    ],
    description: [
      "Led a cross-functional team of 4–8 developers and designers, delivering web and mobile applications aligned with business objectives and project timelines.",
      "Architected and developed scalable React, Next.js, React Native, Node.js, and PostgreSQL solutions supporting e-commerce, inventory management, customer engagement, and internal operations.",
      "Spearheaded the development and launch of the company's mobile application, delivering a seamless shopping experience for customers across Ghana.",
      "Improved website performance by 40–60%, optimising Core Web Vitals, reducing page load times, and improving SEO visibility and customer engagement.",
      "Implemented CI/CD workflows, Git branching strategies, and code review standards that reduced deployment time by 50% and improved release quality.",
      "Integrated third-party payment gateways, SMS services, and APIs including Transflow and AWS, streamlining customer transactions and operational workflows.",
      "Collaborated with marketing, operations, and executive stakeholders to translate business requirements into scalable digital products.",
      "Established software development standards, documentation, and Agile workflows that improved team productivity and reduced technical debt.",
      "Managed the complete product lifecycle from ideation and requirements gathering to MVP delivery, testing, launch, and continuous improvement.",
    ],
    tags: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Team Leadership",
      "CI/CD",
    ],
  },
  {
    title: "Product Manager",
    company: "Cell-7 AI",
    companyUrl: "https://cell7.ai",
    companyDesc: "AI-Powered Health Technology Startup",
    location: "Remote",
    period: "2024 — Present",
    type: "Freelance",
    current: true,
    color: "violet",
    tagline:
      "Driving AI-powered healthcare product strategy from discovery through launch.",
    description: [
      "Defined and executed the product roadmap for AI-powered healthcare solutions, aligning engineering priorities with business goals and user needs.",
      "Led product discovery sessions with founders, designers, engineers, and healthcare stakeholders to prioritise features based on customer feedback and market research.",
      "Managed the complete product lifecycle from ideation and requirements gathering to MVP delivery, testing, launch, and continuous product improvement.",
      "Coordinated cross-functional teams across engineering, UI/UX, marketing, and business operations to deliver product milestones on schedule.",
      "Authored product requirements documents, user stories, acceptance criteria, and sprint plans to improve delivery predictability and reduce development ambiguity.",
      "Introduced Agile product management practices that improved sprint planning efficiency and accelerated feature delivery.",
      "Analysed user behaviour, feature adoption, and product performance to guide roadmap decisions and improve user engagement.",
      "Worked closely with engineering teams to prioritise technical debt, scalability, and performance while balancing business priorities.",
      "Conducted competitor analysis, customer research, and feature validation to identify growth opportunities and improve product-market fit.",
      "Collaborated with leadership to define product vision, KPIs, launch strategies, and success metrics for digital health initiatives.",
    ],
    tags: [
      "Product Strategy",
      "AI Healthcare",
      "Agile Delivery",
      "User Research",
      "Roadmaps",
      "PRDs",
      "Analytics",
      "Stakeholder Management",
    ],
  },
];

// ── Key Achievements ──────────────────────────────────────────────

const keyAchievements: KeyAchievement[] = [
  {
    icon: <Award className="h-4 w-4" />,
    text: "Promoted to Technical Team Lead within four months of joining Franko Trading due to strong technical contributions and leadership.",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    text: "Improved website SEO, Core Web Vitals, and application performance, contributing to stronger search visibility and faster user experiences.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    text: "Led cross-functional engineering teams of up to eight members from product conception through deployment using Agile methodologies.",
  },
  {
    icon: <Brain className="h-4 w-4" />,
    text: "Managed end-to-end product strategy and execution for AI-powered healthcare solutions at Cell-7 AI.",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    text: "Delivered high-impact web and mobile products supporting business growth and digital transformation.",
  },
];

// ── Color Maps ────────────────────────────────────────────────────

const cardColorMap: Record<ExperienceColor, CardColorStyle> = {
  indigo: {
    bg: "from-indigo-500/[0.03] to-purple-500/[0.05] dark:from-indigo-500/[0.07] dark:to-purple-500/[0.09]",
    border:
      "border-indigo-500/10 dark:border-indigo-500/20 group-hover/exp:border-indigo-500/30",
    dot: "bg-gradient-to-b from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25",
    icon: "bg-indigo-500/10 text-indigo-500",
    tag: "border-indigo-500/[0.12] bg-indigo-500/[0.06] text-indigo-700 dark:text-indigo-300",
    top: "from-indigo-500 to-purple-500",
    badge: "bg-indigo-500 text-white",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  violet: {
    bg: "from-violet-500/[0.03] to-purple-500/[0.05] dark:from-violet-500/[0.07] dark:to-purple-500/[0.09]",
    border:
      "border-violet-500/10 dark:border-violet-500/20 group-hover/exp:border-violet-500/30",
    dot: "bg-gradient-to-b from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25",
    icon: "bg-violet-500/10 text-violet-500",
    tag: "border-violet-500/[0.12] bg-violet-500/[0.06] text-violet-700 dark:text-violet-300",
    top: "from-violet-500 to-purple-500",
    badge: "bg-violet-500 text-white",
    text: "text-violet-600 dark:text-violet-400",
  },
  purple: {
    bg: "from-purple-500/[0.03] to-violet-500/[0.05] dark:from-purple-500/[0.07] dark:to-violet-500/[0.09]",
    border:
      "border-purple-500/10 dark:border-purple-500/20 group-hover/exp:border-purple-500/30",
    dot: "bg-gradient-to-b from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25",
    icon: "bg-purple-500/10 text-purple-500",
    tag: "border-purple-500/[0.12] bg-purple-500/[0.06] text-purple-700 dark:text-purple-300",
    top: "from-purple-500 to-violet-500",
    badge: "bg-purple-500 text-white",
    text: "text-purple-600 dark:text-purple-400",
  },
  cyan: {
    bg: "from-cyan-500/[0.03] to-teal-500/[0.05] dark:from-cyan-500/[0.07] dark:to-teal-500/[0.09]",
    border:
      "border-cyan-500/10 dark:border-cyan-500/20 group-hover/exp:border-cyan-500/30",
    dot: "bg-gradient-to-b from-cyan-500 to-teal-600 shadow-lg shadow-cyan-500/25",
    icon: "bg-cyan-500/10 text-cyan-500",
    tag: "border-cyan-500/[0.12] bg-cyan-500/[0.06] text-cyan-700 dark:text-cyan-300",
    top: "from-cyan-500 to-teal-500",
    badge: "bg-cyan-500 text-white",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  blue: {
    bg: "from-blue-500/[0.03] to-indigo-500/[0.05] dark:from-blue-500/[0.07] dark:to-indigo-500/[0.09]",
    border:
      "border-blue-500/10 dark:border-blue-500/20 group-hover/exp:border-blue-500/30",
    dot: "bg-gradient-to-b from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25",
    icon: "bg-blue-500/10 text-blue-500",
    tag: "border-blue-500/[0.12] bg-blue-500/[0.06] text-blue-700 dark:text-blue-300",
    top: "from-blue-500 to-indigo-500",
    badge: "bg-blue-500 text-white",
    text: "text-blue-600 dark:text-blue-400",
  },
};

const achievementColors: Record<AchievementColor, string> = {
  indigo:
    "border-indigo-500/15 from-indigo-500/[0.06] to-indigo-500/[0.02] text-indigo-700 dark:text-indigo-300",
  purple:
    "border-purple-500/15 from-purple-500/[0.06] to-purple-500/[0.02] text-purple-700 dark:text-purple-300",
  cyan: "border-cyan-500/15 from-cyan-500/[0.06] to-cyan-500/[0.02] text-cyan-700 dark:text-cyan-300",
  emerald:
    "border-emerald-500/15 from-emerald-500/[0.06] to-emerald-500/[0.02] text-emerald-700 dark:text-emerald-300",
};

// ── Framer Motion Variants ────────────────────────────────────────

/*
  Use string easing to prevent:
  Type 'number[]' is not assignable to type 'Easing'
*/

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const bulletListVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const bulletVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// ── Main Component ────────────────────────────────────────────────

export default function ExperienceSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative mt-16 scroll-mt-24"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3.5 py-1.5 dark:border-indigo-500/20 dark:bg-indigo-500/10"
        >
          <Briefcase className="h-3.5 w-3.5 text-indigo-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            Work Experience
          </span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
          className="mb-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
          className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Over five years of experience building scalable digital products
          across e-commerce, AI health-tech, and SaaS — from software
          development to{" "}
          <strong className="text-foreground">Technical Team Lead</strong> and{" "}
          <strong className="text-foreground">Product Manager</strong>.
        </motion.p>
      </div>

      <SectionDivider />

      {/* ── Timeline ───────────────────────────────────────── */}
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top center" }}
          className="absolute bottom-2 left-[19px] top-2 hidden w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/25 via-violet-500/20 to-transparent md:block"
        />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.title}`}
              experience={experience}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>

      <SectionDivider large />

      {/* ── Achievements ───────────────────────────────────── */}
      <section aria-labelledby="achievements-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="rounded-xl bg-indigo-500/10 p-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
          </div>

          <div>
            <h3
              id="achievements-heading"
              className="font-display text-lg font-bold"
            >
              Key Achievements
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Highlights across professional roles
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {keyAchievements.map((achievement, index) => (
            <motion.article
              key={achievement.text}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="group flex items-start gap-3 rounded-xl border border-indigo-500/10 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] p-4 transition-all duration-300 hover:border-indigo-500/25 hover:shadow-md dark:from-indigo-500/[0.06] dark:to-purple-500/[0.06]"
            >
              <div className="mt-0.5 shrink-0 rounded-lg bg-indigo-500/10 p-2 text-indigo-500 transition-colors group-hover:bg-indigo-500/20">
                {achievement.icon}
              </div>

              <p className="text-sm leading-relaxed text-foreground/75 transition-colors group-hover:text-foreground">
                {achievement.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </section>
  );
}

// ── Experience Card ───────────────────────────────────────────────

function ExperienceCard({
  experience,
  index,
  reduceMotion,
}: {
  experience: ExperienceItem;
  index: number;
  reduceMotion: boolean;
}) {
  const color = cardColorMap[experience.color];

  return (
    <motion.article
      id={`${experience.company.toLowerCase().replace(/\s+/g, "-")}-${index}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group/exp relative md:pl-14"
    >
      {/* Desktop timeline marker */}
      <div
        className={`absolute left-0 top-7 z-10 hidden h-10 w-10 items-center justify-center rounded-full text-white md:flex ${color.dot}`}
      >
        {experience.color === "violet" ? (
          <Brain className="h-4 w-4" />
        ) : (
          <Briefcase className="h-4 w-4" />
        )}
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${color.bg}`} />

        <div
          className={`absolute inset-0 rounded-2xl border ${color.border} transition-colors duration-500`}
        />

        <div
          className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${color.top} opacity-0 transition-opacity duration-500 group-hover/exp:opacity-100`}
        />

        <div className="relative p-5 sm:p-6 md:p-7">
          {/* Card header */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex min-w-0 flex-1 gap-3">
              {/* Mobile icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:hidden ${color.icon}`}
              >
                {experience.color === "violet" ? (
                  <Brain className="h-4 w-4" />
                ) : (
                  <Briefcase className="h-4 w-4" />
                )}
              </div>

              <div className="min-w-0">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-bold leading-tight md:text-lg">
                    {experience.title}
                  </h3>

                  {experience.current && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Current
                    </span>
                  )}
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-1.5">
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-75 hover:underline ${color.text}`}
                    >
                      {experience.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className={`text-sm font-bold ${color.text}`}>
                      {experience.company}
                    </span>
                  )}

                  {experience.companyDesc && (
                    <span className="text-xs text-muted-foreground">
                      — {experience.companyDesc}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {experience.location}
                  </span>

                  <span className="hidden text-border sm:inline">•</span>

                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {experience.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                  {experience.tagline}
                </p>
              </div>
            </div>

            <span
              className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold ${color.badge}`}
            >
              {experience.type}
            </span>
          </div>

          {/* Metrics */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {experience.achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className={`flex flex-col items-center rounded-xl border bg-gradient-to-b p-3 text-center ${achievementColors[achievement.color]}`}
                >
                  <span className="font-display text-lg font-extrabold leading-none">
                    {achievement.metric}
                  </span>

                  <span className="mt-1 text-[10px] font-medium leading-tight opacity-75">
                    {achievement.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Responsibilities */}
          <motion.ul
            variants={bulletListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-6 space-y-2"
          >
            {experience.description.map((description) => (
              <motion.li
                key={description}
                variants={bulletVariants}
                className="group/bullet flex items-start gap-2.5"
              >
                <ChevronRight
                  className={`mt-[3px] h-3.5 w-3.5 shrink-0 opacity-55 transition-opacity group-hover/bullet:opacity-100 ${color.text}`}
                />

                <span className="text-sm leading-relaxed text-foreground/75 transition-colors group-hover/bullet:text-foreground">
                  {description}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tags */}
          {experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-foreground/[0.06] pt-4">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${color.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ── Divider ───────────────────────────────────────────────────────

function SectionDivider({ large = false }: { large?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={large ? "relative my-14" : "relative mb-12"}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30" />
    </div>
  );
}