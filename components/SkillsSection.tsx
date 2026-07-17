"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  Server,
  Wrench,
  Palette,
  TrendingUp,
  Sparkles,
  Clock,
  Award,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// ── Structured Data (JSON-LD) ────────────────────────────────────
const skillsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarah Nkansah",
  knowsAbout: [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
    "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM",
    "AWS Lambda", "Vercel", "CI/CD", "Git",
    "Figma", "UI/UX Design", "Responsive Design",
    "Technical SEO", "Google Analytics", "Core Web Vitals",
    "Content Strategy", "Digital Marketing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Software Engineer & Digital Marketing Specialist",
    occupationLocation: { "@type": "Country", name: "Ghana" },
    skills: "Full-Stack Development, UI/UX Design, SEO, Digital Marketing",
  },
};

// ── Types ────────────────────────────────────────────────────────
type Level = "expert" | "advanced" | "intermediate" | "familiar";

interface Skill {
  name: string;
  level: Level;
  years: string;
}

interface Category {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "blue" | "purple" | "cyan" | "pink" | "indigo";
  skills: Skill[];
}

// ── Data ─────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    title: "Frontend Engineering",
    subtitle: "React • Next.js • TypeScript",
    icon: <Code2 className="w-5 h-5" />,
    color: "blue",
    skills: [
      { name: "React",             level: "expert",       years: "5+ yrs" },
      { name: "Next.js",           level: "expert",       years: "4+ yrs" },
      { name: "TypeScript",        level: "expert",       years: "4+ yrs" },
      { name: "JavaScript (ES6+)", level: "expert",       years: "5+ yrs" },
      { name: "Tailwind CSS",      level: "expert",       years: "4+ yrs" },
      { name: "HTML5 & CSS3",      level: "expert",       years: "5+ yrs" },
      { name: "React Native",      level: "advanced",     years: "3+ yrs" },
      { name: "Ant Design",        level: "advanced",     years: "3+ yrs" },
      { name: "Material Tailwind", level: "advanced",     years: "2+ yrs" },
      { name: "Bootstrap",         level: "advanced",     years: "4+ yrs" },
      { name: "Framer Motion",     level: "intermediate", years: "2+ yrs" },
      { name: "Shadcn / Flowbite", level: "intermediate", years: "1+ yrs" },
    ],
  },
  {
    title: "Backend Engineering & Databases",
    subtitle: "APIs • Authentication • Databases",
    icon: <Server className="w-5 h-5" />,
    color: "purple",
    skills: [
      { name: "Node.js",            level: "expert",       years: "5+ yrs" },
      { name: "Express.js",         level: "expert",       years: "5+ yrs" },
      { name: "REST API Design",    level: "expert",       years: "5+ yrs" },
      { name: "PostgreSQL",         level: "expert",       years: "4+ yrs" },
      { name: "MongoDB / Mongoose", level: "expert",       years: "4+ yrs" },
      { name: "Prisma ORM",         level: "expert",       years: "3+ yrs" },
      { name: "JWT Authentication", level: "expert",       years: "4+ yrs" },
      { name: "Supabase",           level: "advanced",     years: "2+ yrs" },
      { name: "Firebase",           level: "advanced",     years: "3+ yrs" },
      { name: "OAuth 2.0",          level: "advanced",     years: "3+ yrs" },
      { name: "SQL",                level: "advanced",     years: "4+ yrs" },
      { name: "WebSockets",         level: "intermediate", years: "2+ yrs" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    subtitle: "Cloud • CI/CD • Infrastructure",
    icon: <Wrench className="w-5 h-5" />,
    color: "cyan",
    skills: [
      { name: "Vercel",             level: "expert",       years: "4+ yrs" },
      { name: "Git & GitHub",       level: "expert",       years: "5+ yrs" },
      { name: "SSL / HTTPS",        level: "expert",       years: "4+ yrs" },
      { name: "Paystack",           level: "expert",       years: "3+ yrs" },
      { name: "Hubtel Integration", level: "expert",       years: "3+ yrs" },
      { name: "AWS Lambda",         level: "advanced",     years: "3+ yrs" },
      { name: "API Gateway (AWS)",  level: "advanced",     years: "3+ yrs" },
      { name: "Nginx",              level: "advanced",     years: "3+ yrs" },
      { name: "PM2",                level: "advanced",     years: "3+ yrs" },
      { name: "CI/CD Pipelines",    level: "advanced",     years: "3+ yrs" },
      { name: "Cloudinary",         level: "advanced",     years: "2+ yrs" },
      { name: "Docker",             level: "familiar",     years: "1+ yrs" },
    ],
  },

  {
    title: "Digital Marketing & SEO",
    subtitle: "SEO • Analytics • Digital Growth",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "indigo",
    skills: [
      { name: "Technical SEO",           level: "expert",       years: "4+ yrs" },
      { name: "On-Page SEO",             level: "expert",       years: "4+ yrs" },
      { name: "Core Web Vitals",         level: "expert",       years: "3+ yrs" },
      { name: "Google Analytics (GA4)",  level: "expert",       years: "4+ yrs" },
      { name: "Google Search Console",   level: "expert",       years: "4+ yrs" },
      { name: "Schema Markup / JSON-LD", level: "advanced",     years: "3+ yrs" },
      { name: "Content Strategy",        level: "advanced",     years: "4+ yrs" },
      { name: "Keyword Research",        level: "advanced",     years: "4+ yrs" },
      { name: "Social Media Marketing",  level: "advanced",     years: "3+ yrs" },
      { name: "Email Marketing",         level: "advanced",     years: "3+ yrs" },
      { name: "Conversion Rate Opt.",    level: "advanced",     years: "3+ yrs" },
      { name: "Marketing Automation",    level: "intermediate", years: "2+ yrs" },
    ],
  },
];

// ── Level config — NO progress bars, badges + stars only ─────────
const levelConfig: Record<Level, {
  label: string;
  stars: number;
  badge: string;
  starColor: string;
}> = {
  expert:       {
    label: "Expert",
    stars: 5,
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    starColor: "text-emerald-500",
  },
  advanced:     {
    label: "Advanced",
    stars: 4,
    badge: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    starColor: "text-blue-500",
  },
  intermediate: {
    label: "Intermediate",
    stars: 3,
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    starColor: "text-amber-500",
  },
  familiar:     {
    label: "Familiar",
    stars: 2,
    badge: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
    starColor: "text-gray-400",
  },
};

// ── Color map ─────────────────────────────────────────────────────
const colorMap: Record<Category["color"], {
  bg: string; border: string; icon: string;
  top: string; dot: string; glow: string;
}> = {
  blue: {
    bg:     "from-blue-500/[0.03] to-indigo-500/[0.05] dark:from-blue-500/[0.06] dark:to-indigo-500/[0.09]",
    border: "border-blue-500/10 dark:border-blue-500/18 group-hover/card:border-blue-500/35",
    icon:   "bg-blue-500/10 text-blue-500",
    top:    "from-blue-500 to-indigo-500",
    dot:    "bg-blue-500",
    glow:   "group-hover/card:shadow-blue-500/8",
  },
  purple: {
    bg:     "from-purple-500/[0.03] to-violet-500/[0.05] dark:from-purple-500/[0.06] dark:to-violet-500/[0.09]",
    border: "border-purple-500/10 dark:border-purple-500/18 group-hover/card:border-purple-500/35",
    icon:   "bg-purple-500/10 text-purple-500",
    top:    "from-purple-500 to-violet-500",
    dot:    "bg-purple-500",
    glow:   "group-hover/card:shadow-purple-500/8",
  },
  cyan: {
    bg:     "from-cyan-500/[0.03] to-teal-500/[0.05] dark:from-cyan-500/[0.06] dark:to-teal-500/[0.09]",
    border: "border-cyan-500/10 dark:border-cyan-500/18 group-hover/card:border-cyan-500/35",
    icon:   "bg-cyan-500/10 text-cyan-500",
    top:    "from-cyan-500 to-teal-500",
    dot:    "bg-cyan-500",
    glow:   "group-hover/card:shadow-cyan-500/8",
  },
  pink: {
    bg:     "from-pink-500/[0.03] to-rose-500/[0.05] dark:from-pink-500/[0.06] dark:to-rose-500/[0.09]",
    border: "border-pink-500/10 dark:border-pink-500/18 group-hover/card:border-pink-500/35",
    icon:   "bg-pink-500/10 text-pink-500",
    top:    "from-pink-500 to-rose-500",
    dot:    "bg-pink-500",
    glow:   "group-hover/card:shadow-pink-500/8",
  },
  indigo: {
    bg:     "from-indigo-500/[0.03] to-purple-500/[0.05] dark:from-indigo-500/[0.06] dark:to-purple-500/[0.09]",
    border: "border-indigo-500/10 dark:border-indigo-500/18 group-hover/card:border-indigo-500/35",
    icon:   "bg-indigo-500/10 text-indigo-500",
    top:    "from-indigo-500 to-purple-500",
    dot:    "bg-indigo-500",
    glow:   "group-hover/card:shadow-indigo-500/8",
  },
};

// ── Animation variants ────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const cardSlide = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const skillRow = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};


// ═════════════════════════════════════════════════════════════════
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-heading-wrap",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".skills-heading-wrap", start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".legend-badge",
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: ".skills-legend-row", start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".summary-strip",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".summary-strip", start: "top 92%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsStructuredData) }}
      />

      <section ref={sectionRef} className="mt-16" id="skills"
        itemScope itemType="https://schema.org/Person">

        {/* ══ HEADING ══════════════════════════════════════════ */}
        <div className="skills-heading-wrap mb-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4
                         bg-indigo-500/[0.06] border border-indigo-500/[0.12]
                         dark:bg-indigo-500/10 dark:border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              Skills & Expertise
            </span>
          </div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp} initial="hidden"
            whileInView="visible" viewport={{ once: true }} custom={0.05}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3"
          >
            Technical Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
                            bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          {/* Gradient accent */}
          <motion.div
            variants={fadeInUp} initial="hidden"
            whileInView="visible" viewport={{ once: true }} custom={0.1}
            className="h-[3px] w-20 rounded-full mb-4
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
          />

          {/* SEO-rich description */}
          <motion.p
            variants={fadeInUp} initial="hidden"
            whileInView="visible" viewport={{ once: true }} custom={0.15}
            className="text-sm md:text-base text-muted-foreground  leading-relaxed"
            itemProp="description"
          >
            My technical expertise spans{" "}
            <strong className="text-foreground">full-stack web development</strong>,{" "}
   
            <strong className="text-foreground">cloud infrastructure</strong>,{" "}
            <strong className="text-foreground">SEO</strong>, and{" "}
            <strong className="text-foreground">digital marketing</strong>. I specialise
            in building scalable, high-performance web applications using modern
            JavaScript technologies.
          </motion.p>
        </div>

      

        {/* Divider */}
        <div className="relative mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
        </div>

        {/* ══ CATEGORY GRID ════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-2 gap-5"
        >
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            const expertCount = cat.skills.filter(s => s.level === "expert").length;

            return (
              <motion.div
                key={cat.title}
                variants={cardSlide}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className={`group/card relative rounded-2xl overflow-hidden
                            transition-all duration-500 hover:shadow-xl ${c.glow}`}
              >
                {/* Bg + border + top accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bg}`} />
                <div className={`absolute inset-0 border ${c.border} rounded-2xl transition-colors duration-400`} />
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.top}
                                opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-6">

                  {/* ── Card header ── */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${c.icon} shrink-0 mt-0.5`}>
                      {cat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base leading-tight"
                          itemProp="knowsAbout">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                        {cat.subtitle}
                      </p>
                    </div>
                    {/* Expert count pill */}
                    <div className="shrink-0 flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full
                                       border ${c.icon} border-current/20`}>
                        {cat.skills.length} Core Skills
                      </span>
                      <span className="text-[9px] text-muted-foreground">
                        {expertCount} expert level
                      </span>
                    </div>
                  </div>

                  {/* ── Skills list ── */}
                  <motion.ul
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2.5"
                  >
                    {cat.skills.map((skill) => {
                      const cfg = levelConfig[skill.level];
                      return (
                        <motion.li
                          key={skill.name}
                          variants={skillRow}
                          className="group/skill flex items-center justify-between
                                     py-2 px-3 rounded-xl
                                     hover:bg-foreground/[0.03] transition-colors duration-200"
                        >
                          {/* Left: dot + name */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot} opacity-50
                                           group-hover/skill:opacity-100 transition-opacity`} />
                            <span className="text-sm font-medium text-foreground/75
                                           group-hover/skill:text-foreground
                                           transition-colors duration-200 truncate"
                                  itemProp="knowsAbout">
                              {skill.name}
                            </span>
                          </div>

                          {/* Right: years + stars + badge */}
                          <div className="flex items-center gap-2 shrink-0 ml-3">
                            {/* Years */}
                            <span className="hidden md:flex items-center gap-1 text-[10px]
                                           text-muted-foreground font-medium">
                              <Clock className="w-2.5 h-2.5" />
                              {skill.years}
                            </span>

                            {/* Star rating */}
                            <div className={`hidden sm:flex gap-0.5 ${cfg.starColor}`}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-2.5 h-2.5 ${i < cfg.stars ? "fill-current" : "opacity-15"}`}
                                />
                              ))}
                            </div>

                            {/* Level badge */}
                            <span className={`text-[9px] font-bold uppercase tracking-wider
                                            px-2 py-0.5 rounded-full border ${cfg.badge}
                                            hidden sm:inline-block whitespace-nowrap`}>
                              {cfg.label}
                            </span>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

   

      </section>
    </>
  );
}