"use client";

import type { ReactNode } from "react";
import {
  Award,
  Clock,
  Code2,
  Server,
  Sparkles,
  Star,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// ── Structured Data ──────────────────────────────────────────────

const skillsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarah Nkansah",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "AWS Lambda",
    "Vercel",
    "CI/CD",
    "Git",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "Technical SEO",
    "Google Analytics",
    "Core Web Vitals",
    "Content Strategy",
    "Digital Marketing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Software Engineer & Digital Marketing Specialist",
    occupationLocation: {
      "@type": "Country",
      name: "Ghana",
    },
    skills:
      "Full-Stack Development, UI/UX Design, SEO, Digital Marketing, Cloud Infrastructure",
  },
};

// ── Types ─────────────────────────────────────────────────────────

type Level = "expert" | "advanced" | "intermediate" | "familiar";

type CategoryColor = "blue" | "purple" | "cyan" | "pink" | "indigo";

interface Skill {
  name: string;
  level: Level;
  years: string;
}

interface Category {
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: CategoryColor;
  skills: Skill[];
}

interface ColorStyle {
  background: string;
  border: string;
  icon: string;
  accent: string;
  dot: string;
  count: string;
  glow: string;
}

interface LevelStyle {
  label: string;
  stars: number;
  badge: string;
  starColor: string;
}

// ── Skill Data ────────────────────────────────────────────────────

const categories: Category[] = [
  {
    title: "Frontend Engineering",
    subtitle: "React • Next.js • TypeScript",
    icon: <Code2 className="h-5 w-5" />,
    color: "blue",
    skills: [
      { name: "React", level: "expert", years: "5+ yrs" },
      { name: "Next.js", level: "expert", years: "4+ yrs" },
      { name: "TypeScript", level: "expert", years: "4+ yrs" },
      { name: "JavaScript (ES6+)", level: "expert", years: "5+ yrs" },
      { name: "Tailwind CSS", level: "expert", years: "4+ yrs" },
      { name: "HTML5 & CSS3", level: "expert", years: "5+ yrs" },
      { name: "React Native", level: "advanced", years: "3+ yrs" },
      { name: "Ant Design", level: "advanced", years: "3+ yrs" },
      { name: "Material Tailwind", level: "advanced", years: "2+ yrs" },
      { name: "Bootstrap", level: "advanced", years: "4+ yrs" },
      { name: "Framer Motion", level: "intermediate", years: "2+ yrs" },
      { name: "Shadcn / Flowbite", level: "intermediate", years: "1+ yrs" },
    ],
  },
  {
    title: "Backend Engineering & Databases",
    subtitle: "APIs • Authentication • Databases",
    icon: <Server className="h-5 w-5" />,
    color: "purple",
    skills: [
      { name: "Node.js", level: "expert", years: "5+ yrs" },
      { name: "Express.js", level: "expert", years: "5+ yrs" },
      { name: "REST API Design", level: "expert", years: "5+ yrs" },
      { name: "PostgreSQL", level: "expert", years: "4+ yrs" },
      { name: "MongoDB / Mongoose", level: "expert", years: "4+ yrs" },
      { name: "Prisma ORM", level: "expert", years: "3+ yrs" },
      { name: "JWT Authentication", level: "expert", years: "4+ yrs" },
      { name: "Supabase", level: "advanced", years: "2+ yrs" },
      { name: "Firebase", level: "advanced", years: "3+ yrs" },
      { name: "OAuth 2.0", level: "advanced", years: "3+ yrs" },
      { name: "SQL", level: "advanced", years: "4+ yrs" },
      { name: "WebSockets", level: "intermediate", years: "2+ yrs" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    subtitle: "Cloud • CI/CD • Infrastructure",
    icon: <Wrench className="h-5 w-5" />,
    color: "cyan",
    skills: [
      { name: "Vercel", level: "expert", years: "4+ yrs" },
      { name: "Git & GitHub", level: "expert", years: "5+ yrs" },
      { name: "SSL / HTTPS", level: "expert", years: "4+ yrs" },
      { name: "Paystack", level: "expert", years: "3+ yrs" },
      { name: "Hubtel Integration", level: "expert", years: "3+ yrs" },
      { name: "AWS Lambda", level: "advanced", years: "3+ yrs" },
      { name: "API Gateway (AWS)", level: "advanced", years: "3+ yrs" },
      { name: "Nginx", level: "advanced", years: "3+ yrs" },
      { name: "PM2", level: "advanced", years: "3+ yrs" },
      { name: "CI/CD Pipelines", level: "advanced", years: "3+ yrs" },
      { name: "Cloudinary", level: "advanced", years: "2+ yrs" },
      { name: "Docker", level: "familiar", years: "1+ yrs" },
    ],
  },
  {
    title: "Digital Marketing & SEO",
    subtitle: "SEO • Analytics • Digital Growth",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "indigo",
    skills: [
      { name: "Technical SEO", level: "expert", years: "4+ yrs" },
      { name: "On-Page SEO", level: "expert", years: "4+ yrs" },
      { name: "Core Web Vitals", level: "expert", years: "3+ yrs" },
      { name: "Google Analytics (GA4)", level: "expert", years: "4+ yrs" },
      { name: "Google Search Console", level: "expert", years: "4+ yrs" },
      { name: "Schema Markup / JSON-LD", level: "advanced", years: "3+ yrs" },
      { name: "Content Strategy", level: "advanced", years: "4+ yrs" },
      { name: "Keyword Research", level: "advanced", years: "4+ yrs" },
      { name: "Social Media Marketing", level: "advanced", years: "3+ yrs" },
      { name: "Email Marketing", level: "advanced", years: "3+ yrs" },
      { name: "Conversion Rate Optimisation", level: "advanced", years: "3+ yrs" },
      { name: "Marketing Automation", level: "intermediate", years: "2+ yrs" },
    ],
  },
];

// ── Level Styles ──────────────────────────────────────────────────

const levelConfig: Record<Level, LevelStyle> = {
  expert: {
    label: "Expert",
    stars: 5,
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    starColor: "text-emerald-500",
  },
  advanced: {
    label: "Advanced",
    stars: 4,
    badge:
      "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    starColor: "text-blue-500",
  },
  intermediate: {
    label: "Intermediate",
    stars: 3,
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
    starColor: "text-amber-500",
  },
  familiar: {
    label: "Familiar",
    stars: 2,
    badge:
      "border-gray-500/20 bg-gray-500/10 text-gray-600 dark:text-gray-400",
    starColor: "text-gray-400",
  },
};

const levelOrder: Level[] = [
  "expert",
  "advanced",
  "intermediate",
  "familiar",
];

// ── Category Styles ───────────────────────────────────────────────

const colorMap: Record<CategoryColor, ColorStyle> = {
  blue: {
    background:
      "from-blue-500/[0.04] to-indigo-500/[0.06] dark:from-blue-500/[0.08] dark:to-indigo-500/[0.1]",
    border:
      "border-blue-500/10 dark:border-blue-500/20 group-hover/card:border-blue-500/35",
    icon: "bg-blue-500/10 text-blue-500",
    accent: "from-blue-500 via-indigo-500 to-transparent",
    dot: "bg-blue-500",
    count:
      "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300",
    glow: "group-hover/card:shadow-blue-500/10",
  },
  purple: {
    background:
      "from-purple-500/[0.04] to-violet-500/[0.06] dark:from-purple-500/[0.08] dark:to-violet-500/[0.1]",
    border:
      "border-purple-500/10 dark:border-purple-500/20 group-hover/card:border-purple-500/35",
    icon: "bg-purple-500/10 text-purple-500",
    accent: "from-purple-500 via-violet-500 to-transparent",
    dot: "bg-purple-500",
    count:
      "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-300",
    glow: "group-hover/card:shadow-purple-500/10",
  },
  cyan: {
    background:
      "from-cyan-500/[0.04] to-teal-500/[0.06] dark:from-cyan-500/[0.08] dark:to-teal-500/[0.1]",
    border:
      "border-cyan-500/10 dark:border-cyan-500/20 group-hover/card:border-cyan-500/35",
    icon: "bg-cyan-500/10 text-cyan-500",
    accent: "from-cyan-500 via-teal-500 to-transparent",
    dot: "bg-cyan-500",
    count:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    glow: "group-hover/card:shadow-cyan-500/10",
  },
  pink: {
    background:
      "from-pink-500/[0.04] to-rose-500/[0.06] dark:from-pink-500/[0.08] dark:to-rose-500/[0.1]",
    border:
      "border-pink-500/10 dark:border-pink-500/20 group-hover/card:border-pink-500/35",
    icon: "bg-pink-500/10 text-pink-500",
    accent: "from-pink-500 via-rose-500 to-transparent",
    dot: "bg-pink-500",
    count:
      "border-pink-500/20 bg-pink-500/10 text-pink-700 dark:text-pink-300",
    glow: "group-hover/card:shadow-pink-500/10",
  },
  indigo: {
    background:
      "from-indigo-500/[0.04] to-purple-500/[0.06] dark:from-indigo-500/[0.08] dark:to-purple-500/[0.1]",
    border:
      "border-indigo-500/10 dark:border-indigo-500/20 group-hover/card:border-indigo-500/35",
    icon: "bg-indigo-500/10 text-indigo-500",
    accent: "from-indigo-500 via-purple-500 to-transparent",
    dot: "bg-indigo-500",
    count:
      "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    glow: "group-hover/card:shadow-indigo-500/10",
  },
};

// ── Framer Motion ─────────────────────────────────────────────────

/*
  This explicit tuple fixes:
  Type 'number[]' is not assignable to type 'Easing'
*/
const motionEase: [number, number, number, number] = [
  0.25,
  0.46,
  0.45,
  0.94,
];

const categoryGridVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const categoryCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: motionEase,
    },
  },
};

const skillListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
};

const skillRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
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

// ── Stats ─────────────────────────────────────────────────────────

const totalSkills = categories.reduce(
  (total, category) => total + category.skills.length,
  0,
);

const expertSkills = categories.reduce(
  (total, category) =>
    total + category.skills.filter((skill) => skill.level === "expert").length,
  0,
);

// ── Main Component ────────────────────────────────────────────────

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section
        id="skills"
        itemScope
        itemType="https://schema.org/Person"
        className="relative mt-16 scroll-mt-24 overflow-hidden"
      >
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 24, 0],
                    y: [0, 18, 0],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-3xl"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -25, 0],
                    y: [0, 25, 0],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-500/[0.06] blur-3xl"
          />
        </div>

        {/* Header */}
        <div className="mb-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: motionEase }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3.5 py-1.5 dark:border-indigo-500/20 dark:bg-indigo-500/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              Skills & Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: motionEase }}
            className="mb-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl"
          >
            Technical Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: motionEase }}
            style={{ transformOrigin: "left center" }}
            className="mb-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.2, ease: motionEase }}
            itemProp="description"
            className="max-w-7xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            My technical expertise spans{" "}
            <strong className="text-foreground">
              full-stack web development
            </strong>
            , <strong className="text-foreground">cloud infrastructure</strong>
            , <strong className="text-foreground">technical SEO</strong>, and{" "}
            <strong className="text-foreground">digital marketing</strong>. I
            build scalable, high-performance digital products with modern
            JavaScript technologies and user-focused design principles.
          </motion.p>
        </div>


        {/* Skill level legend */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: motionEase }}
          className="mb-9 flex flex-wrap items-center gap-2"
        >
      

        
        </motion.div>

        {/* Divider */}
        <div aria-hidden="true" className="relative mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30" />
        </div>

        {/* Skill category cards */}
        <motion.div
          variants={categoryGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {categories.map((category) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}

// ── Skill Category Card ───────────────────────────────────────────

function SkillCategoryCard({
  category,
  shouldReduceMotion,
}: {
  category: Category;
  shouldReduceMotion: boolean;
}) {
  const colors = colorMap[category.color];

  const expertCount = category.skills.filter(
    (skill) => skill.level === "expert",
  ).length;

  return (
    <motion.article
      variants={categoryCardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className={`group/card relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl ${colors.glow}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.background}`}
      />

      <div
        className={`absolute inset-0 rounded-2xl border ${colors.border} transition-colors duration-500`}
      />

      <div
        className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${colors.accent} opacity-60 transition-opacity duration-500 group-hover/card:opacity-100`}
      />

      <div className="relative p-5 sm:p-6">
        {/* Card heading */}
        <div className="mb-6 flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
          >
            {category.icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3
              itemProp="knowsAbout"
              className="font-display text-base font-bold leading-tight"
            >
              {category.title}
            </h3>

            <p className="mt-1 text-[11px] font-medium text-muted-foreground">
              {category.subtitle}
            </p>
          </div>

          <div className="hidden shrink-0 text-right sm:block">
            <span
              className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${colors.count}`}
            >
              {category.skills.length} Skills
            </span>

            <p className="mt-1 text-[9px] text-muted-foreground">
              {expertCount} expert level
            </p>
          </div>
        </div>

        {/* Skill list */}
        <motion.ul
          variants={skillListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          aria-label={`${category.title} skills`}
          className="space-y-1.5"
        >
          {category.skills.map((skill) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              dotClassName={colors.dot}
            />
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}

// ── Skill Row ─────────────────────────────────────────────────────

function SkillRow({
  skill,
  dotClassName,
}: {
  skill: Skill;
  dotClassName: string;
}) {
  const config = levelConfig[skill.level];

  return (
    <motion.li
      variants={skillRowVariants}
      className="group/skill flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-foreground/[0.035]"
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full opacity-50 transition-opacity group-hover/skill:opacity-100 ${dotClassName}`}
        />

        <span
          itemProp="knowsAbout"
          className="truncate text-sm font-medium text-foreground/75 transition-colors group-hover/skill:text-foreground"
        >
          {skill.name}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="hidden items-center gap-1 text-[10px] font-medium text-muted-foreground lg:flex">
          <Clock className="h-2.5 w-2.5" />
          {skill.years}
        </span>

        <div className={`hidden gap-0.5 md:flex ${config.starColor}`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-2.5 w-2.5 ${
                index < config.stars ? "fill-current" : "opacity-15"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        <span
          className={`hidden whitespace-nowrap rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:inline-block ${config.badge}`}
        >
          {config.label}
        </span>
      </div>
    </motion.li>
  );
}

// ── Summary Statistic ─────────────────────────────────────────────

function SummaryStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-b border-r border-border/60 px-4 py-4 text-center last:border-r-0 sm:border-b-0">
      <p className="font-display text-lg font-bold text-indigo-600 dark:text-indigo-400">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}