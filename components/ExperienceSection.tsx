"use client";

import { useEffect, useRef } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Types ────────────────────────────────────────────────────────
interface Achievement {
  metric: string;
  label: string;
  color: "indigo" | "purple" | "cyan" | "emerald";
}

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  companyDesc?: string;
  location: string;
  period: string;
  type: "Full-time" | "Freelance" | "Contract" | "Part-time";
  current?: boolean;
  color: "indigo" | "purple" | "cyan" | "blue" | "violet";
  tagline: string;
  achievements?: Achievement[];
  description: string[];
  tags: string[];
}

// ── Data ─────────────────────────────────────────────────────────
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
    tagline: "Leading cross-functional engineering teams to deliver web & mobile products at scale.",
  
    description: [
      "Led a cross-functional team of 4–8 developers and designers, delivering web and mobile applications aligned with business objectives and project timelines.",
      "Architected and developed scalable React, Next.js, React Native, Node.js, and PostgreSQL solutions supporting e-commerce, inventory management, customer engagement, and internal operations.",
      "Spearheaded the development and launch of the company's mobile application, delivering a seamless shopping experience for thousands of customers across Ghana.",
      "Improved website performance by 40–60%, optimizing Core Web Vitals, reducing page load times, and enhancing SEO — contributing to increased organic traffic and customer engagement.",
      "Implemented CI/CD workflows, Git branching strategies, and code review standards that reduced deployment time by 50% and improved release quality.",
      "Integrated third-party payment gateways, SMS services, and APIs including Transflow, AWS, streamlining customer transactions and operational workflows.",

      "Collaborated with stakeholders across marketing, operations, and executive leadership to translate business requirements into scalable digital products.",
      "Established software development standards, documentation, and agile workflows that improved team productivity and reduced technical debt.",
      "Managed the complete product lifecycle — from ideation and requirements gathering to MVP delivery, testing, launch, and continuous improvement.",
   
      "Collaborated with leadership to define product vision, KPIs, launch strategies, and success metrics for new digital initiatives.",
    ],
    tags: [
      "React", "Next.js", "React Native", "Node.js", "PostgreSQL",
      "AWS",  "Team Leadership",
    ],
  },

  // ── NEW: Cell-7 AI ──────────────────────────────────────────
  {
    title: "Product Manager",
    company: "Cell-7 AI",
    companyUrl: "https://cell7.ai",
    companyDesc: "AI-Powered Health Technology Startup",
    location: "Remote",
    period: "2024 - Present",
    type: "Freelance",
    current: false,
    color: "violet",
    tagline: "Driving AI-powered healthcare assistant product strategy from discovery through launch.",
 
    description: [
      "Defined and executed the product roadmap for AI-powered healthcare solutions, aligning engineering priorities with business goals and user needs.",
      "Led product discovery sessions with founders, designers, engineers, and healthcare stakeholders to prioritize features based on customer feedback and market research.",
      "Managed the complete product lifecycle — from ideation and requirements gathering to MVP delivery, testing, launch, and continuous product improvement.",
      "Coordinated cross-functional teams across engineering, UI/UX, marketing, and business operations to deliver product milestones on schedule.",
      "Authored product requirements documents (PRDs), user stories, acceptance criteria, and sprint plans, improving delivery predictability and reducing development ambiguity.",
      "Introduced Agile product management practices that improved sprint planning efficiency and accelerated feature delivery by 25–40%.",
      "Analyzed user behavior, feature adoption, and product performance using analytics to guide roadmap decisions and optimize user engagement.",
      "Worked closely with engineering teams to prioritize technical debt, scalability, and performance while balancing business priorities.",
      "Conducted competitor analysis, customer research, and feature validation to identify growth opportunities and improve product-market fit.",
      "Collaborated with leadership to define product vision, KPIs, launch strategies, and success metrics for new digital health initiatives.",
    ],
    tags: [
   
    ],
  },


];

// ── Key achievements ──────────────────────────────────────────────
const keyAchievements = [
  {
    icon: <Award className="w-4 h-4" />,
    text: "Promoted to Technical Team Lead within 4 months of joining Franko Trading due to exceptional technical contributions and leadership.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    text: "Improved website SEO, Core Web Vitals, and application performance — contributing to higher search visibility and faster user experiences.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "Led cross-functional engineering teams of up to 8 members from product conception through deployment using Agile methodologies.",
  },
  {
    icon: <Brain className="w-4 h-4" />,
    text: "Managed end-to-end product strategy and execution for AI-powered healthcare solutions at Cell-7 AI, bridging business objectives with engineering delivery.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    text: "Successfully delivered multiple high-impact web and mobile products supporting business growth and digital transformation.",
  },
];

// ── Color map ─────────────────────────────────────────────────────
const cardColorMap = {
  indigo: {
    bg:      "from-indigo-500/[0.03] to-purple-500/[0.05] dark:from-indigo-500/[0.07] dark:to-purple-500/[0.09]",
    border:  "border-indigo-500/10 dark:border-indigo-500/20 group-hover/exp:border-indigo-500/30",
    dot:     "bg-gradient-to-b from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25",
    icon:    "bg-indigo-500/10 text-indigo-500",
    tag:     "bg-indigo-500/[0.06] border-indigo-500/[0.12] text-indigo-700 dark:text-indigo-300",
    top:     "from-indigo-500 to-purple-500",
    badge:   "bg-indigo-500 text-white",
    chevron: "text-indigo-500",
  },
  violet: {
    bg:      "from-violet-500/[0.03] to-purple-500/[0.05] dark:from-violet-500/[0.07] dark:to-purple-500/[0.09]",
    border:  "border-violet-500/10 dark:border-violet-500/20 group-hover/exp:border-violet-500/30",
    dot:     "bg-gradient-to-b from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25",
    icon:    "bg-violet-500/10 text-violet-500",
    tag:     "bg-violet-500/[0.06] border-violet-500/[0.12] text-violet-700 dark:text-violet-300",
    top:     "from-violet-500 to-purple-500",
    badge:   "bg-violet-500 text-white",
    chevron: "text-violet-500",
  },
  purple: {
    bg:      "from-purple-500/[0.03] to-violet-500/[0.05] dark:from-purple-500/[0.07] dark:to-violet-500/[0.09]",
    border:  "border-purple-500/10 dark:border-purple-500/20 group-hover/exp:border-purple-500/30",
    dot:     "bg-gradient-to-b from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25",
    icon:    "bg-purple-500/10 text-purple-500",
    tag:     "bg-purple-500/[0.06] border-purple-500/[0.12] text-purple-700 dark:text-purple-300",
    top:     "from-purple-500 to-violet-500",
    badge:   "bg-purple-500 text-white",
    chevron: "text-purple-500",
  },
  cyan: {
    bg:      "from-cyan-500/[0.03] to-teal-500/[0.05] dark:from-cyan-500/[0.07] dark:to-teal-500/[0.09]",
    border:  "border-cyan-500/10 dark:border-cyan-500/20 group-hover/exp:border-cyan-500/30",
    dot:     "bg-gradient-to-b from-cyan-500 to-teal-600 shadow-lg shadow-cyan-500/25",
    icon:    "bg-cyan-500/10 text-cyan-500",
    tag:     "bg-cyan-500/[0.06] border-cyan-500/[0.12] text-cyan-700 dark:text-cyan-300",
    top:     "from-cyan-500 to-teal-500",
    badge:   "bg-cyan-500 text-white",
    chevron: "text-cyan-500",
  },
  blue: {
    bg:      "from-blue-500/[0.03] to-indigo-500/[0.05] dark:from-blue-500/[0.07] dark:to-indigo-500/[0.09]",
    border:  "border-blue-500/10 dark:border-blue-500/20 group-hover/exp:border-blue-500/30",
    dot:     "bg-gradient-to-b from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25",
    icon:    "bg-blue-500/10 text-blue-500",
    tag:     "bg-blue-500/[0.06] border-blue-500/[0.12] text-blue-700 dark:text-blue-300",
    top:     "from-blue-500 to-indigo-500",
    badge:   "bg-blue-500 text-white",
    chevron: "text-blue-500",
  },
};

const achievementColors = {
  indigo:  "from-indigo-500/[0.06] to-indigo-500/[0.02] border-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  purple:  "from-purple-500/[0.06] to-purple-500/[0.02] border-purple-500/15 text-purple-700 dark:text-purple-300",
  cyan:    "from-cyan-500/[0.06] to-cyan-500/[0.02] border-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  emerald: "from-emerald-500/[0.06] to-emerald-500/[0.02] border-emerald-500/15 text-emerald-700 dark:text-emerald-300",
};

// ── Animation variants ────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const listItem = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.055 } },
};

// ═════════════════════════════════════════════════════════════════
export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".exp-heading-wrap",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".exp-heading-wrap", start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 2, ease: "power3.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".achievement-card",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: ".achievements-grid", start: "top 90%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-16" id="experience">

      {/* ══ HEADING ══════════════════════════════════════════ */}
      <div className="exp-heading-wrap mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4
                       bg-indigo-500/[0.06] border border-indigo-500/[0.12]
                       dark:bg-indigo-500/10 dark:border-indigo-500/20">
          <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]
                          text-indigo-600 dark:text-indigo-400">
            Work Experience
          </span>
        </div>

        <motion.h2
          variants={fadeInUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }} custom={0.05}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
                          bg-clip-text text-transparent">
            Experience
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
          5+ years building scalable digital products across e-commerce, AI health-tech,
          and SaaS — from individual contributor to{" "}
          <strong className="text-foreground">Technical Team Lead</strong> and{" "}
          <strong className="text-foreground">Product Manager</strong>.
        </motion.p>
      </div>

      {/* Divider */}
      <div className="relative mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
      </div>

      {/* ══ TIMELINE ═════════════════════════════════════════ */}
      <div className="relative">
        {/* Animated vertical line */}
        <div className="timeline-line hidden md:block absolute left-[19px] top-2 bottom-2
                       w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/25
                       via-violet-500/20 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const c = cardColorMap[exp.color];

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index * 0.08}
                className="group/exp relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-0 top-7 w-10 h-10 rounded-full
                                items-center justify-center ${c.dot} z-10`}>
                  {exp.color === "violet"
                    ? <Brain className="w-4 h-4 text-white" />
                    : <Briefcase className="w-4 h-4 text-white" />
                  }
                </div>

                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden
                               transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.bg}`} />
                  <div className={`absolute inset-0 border ${c.border} rounded-2xl
                                  transition-colors duration-400`} />
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.top}
                                  opacity-0 group-hover/exp:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-6 md:p-7">

                    {/* ── Card header ── */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                      <div className="flex-1 min-w-0">

                        {/* Title row */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="font-display font-bold text-base md:text-lg leading-tight">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                                           text-[10px] font-bold bg-emerald-500/10
                                           border border-emerald-500/20
                                           text-emerald-700 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Company + sub-label */}
                        <div className="mb-1.5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1 font-bold text-sm
                                           ${c.chevron} hover:underline transition-colors`}
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className={`font-bold text-sm ${c.chevron}`}>
                                {exp.company}
                              </span>
                            )}
                            {exp.companyDesc && (
                              <span className="text-xs text-muted-foreground font-normal">
                                — {exp.companyDesc}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span className="text-border">·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Tagline */}
                        <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                          {exp.tagline}
                        </p>
                      </div>

                      {/* Type badge */}
                      <span className={`shrink-0 self-start text-[10px] font-bold
                                       px-3 py-1.5 rounded-full ${c.badge}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* ── Metric achievement cards ── */}
                    {exp.achievements && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {exp.achievements.map((a, i) => (
                          <div
                            key={i}
                            className={`flex flex-col items-center p-3 rounded-xl text-center
                                        bg-gradient-to-b border ${achievementColors[a.color]}`}
                          >
                            <span className="font-display font-extrabold text-lg
                                           leading-none mb-1">
                              {a.metric}
                            </span>
                            <span className="text-[10px] font-medium opacity-75 leading-tight">
                              {a.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* ── Description bullets ── */}
                    <motion.ul
                      variants={stagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2 mb-6"
                    >
                      {exp.description.map((desc, di) => (
                        <motion.li
                          key={di}
                          variants={listItem}
                          className="flex items-start gap-2.5 group/bullet"
                        >
                          <ChevronRight className={`w-3.5 h-3.5 mt-[3px] shrink-0 ${c.chevron}
                                                   opacity-55 group-hover/bullet:opacity-100
                                                   transition-opacity`} />
                          <span className="text-sm leading-relaxed text-foreground/75
                                         group-hover/bullet:text-foreground/90
                                         transition-colors duration-200">
                            {desc}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* ── Tech / skill tags ── */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/[0.05]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="relative my-14">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
      </div>

      {/* ══ KEY ACHIEVEMENTS ═════════════════════════════════ */}
      <div>
        <motion.div
          variants={fadeInUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-2 rounded-xl bg-indigo-500/10">
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg">Key Achievements</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Highlights across all roles
            </p>
          </div>
        </motion.div>

        <div className="achievements-grid grid sm:grid-cols-2 gap-4">
          {keyAchievements.map((item, i) => (
            <div
              key={i}
              className="achievement-card group flex items-start gap-3 p-4 rounded-xl
                         bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03]
                         dark:from-indigo-500/[0.06] dark:to-purple-500/[0.06]
                         border border-indigo-500/10 dark:border-indigo-500/15
                         hover:border-indigo-500/25 hover:shadow-md
                         transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 shrink-0 mt-0.5
                             group-hover:bg-indigo-500/20 transition-colors">
                {item.icon}
              </div>
              <p className="text-sm leading-relaxed text-foreground/75
                           group-hover:text-foreground/90 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}