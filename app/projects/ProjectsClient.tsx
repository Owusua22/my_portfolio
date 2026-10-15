"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ImageIcon,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  FaApple,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa";
import type {
  Project,
  ProjectCategory,
  ProjectLink,
  ProjectLinkType,
} from "./projects-data";

interface ProjectsClientProps {
  projects: Project[];
}

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const categoryStyles: Record<ProjectCategory, string> = {
  "E-Commerce": "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "Artificial Intelligence": "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "Full-Stack": "border-brand/25 bg-brand/10 text-brand-600 dark:text-brand-300",
  "Mobile": "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
};

const categoryGradients: Record<ProjectCategory, string> = {
  "E-Commerce": "from-amber-500/20 via-orange-500/10 to-brand/20",
  "Artificial Intelligence": "from-violet-500/20 via-brand/10 to-cyan-500/20",
  "Full-Stack": "from-brand/20 via-brand-500/10 to-cyan-500/20",
  "Mobile": "from-emerald-500/20 via-cyan-500/10 to-brand/20",
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const reduceMotion = useReducedMotion();

  const categoryCount = new Set(projects.map((p) => p.category)).size;
  const technologyCount = new Set(projects.flatMap((p) => p.technologies)).size;

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-48 top-12 h-[32rem] w-[32rem] rounded-full bg-brand/[0.07] blur-3xl"
        />
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-48 top-[40rem] h-[34rem] w-[34rem] rounded-full bg-brand/[0.04] blur-3xl"
        />
      </div>

      {/* Hero */}
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pb-20 pt-10 text-center md:pb-28 md:pt-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUpVariants} className="mb-6">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.07] px-4 py-2 text-xs font-semibold text-brand-600 dark:text-brand-300 shadow-sm backdrop-blur-md"
          >
            <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
            My Portfolio
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gray-900 dark:text-white">Projects </span>
            <span className="text-brand-500 dark:text-brand-400">Built</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg"
          >
            Production e-commerce platforms, AI health applications, and full-stack
            web projects — built with modern technologies and real-world impact.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <SummaryBadge value={String(projects.length)} label="Live projects" />
            <SummaryBadge value={String(categoryCount)} label="Specializations" />
            <SummaryBadge value={`${technologyCount}+`} label="Technologies" />
          </motion.div>

          {/* Scroll arrow */}
          <motion.a
            variants={fadeUpVariants}
            href="#selected-projects"
            aria-label="Scroll to selected projects"
            className="group mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-gray-500 dark:text-gray-400 transition-colors hover:text-brand-500 dark:hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
              Explore projects
            </span>
            <span className="flex h-12 w-8 items-start justify-center rounded-full border border-foreground/15 bg-background/60 pt-2.5 shadow-md backdrop-blur-md transition-colors group-hover:border-brand/35">
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </span>
          </motion.a>
        </div>
      </motion.header>

      <Divider />

      {/* Projects */}
      <section
        id="selected-projects"
        aria-labelledby="project-list-heading"
        className="scroll-mt-20 pt-16 md:pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-14"
          >
            <div>
              <div className="mb-3 flex items-center gap-2 text-brand-500 dark:text-brand-400">
                <Layers3 className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Selected projects
                </span>
              </div>
              <h2 id="project-list-heading" className="max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-gray-900 dark:text-white">Real-life </span>
                <span className="text-brand-500 dark:text-brand-400">projects</span>
              </h2>
            </div>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-10">
          <div className="cta-band flex-col text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="text-gray-900 dark:text-white">Ready to build </span>
              <span className="text-brand-500 dark:text-brand-400">something together?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help transform your business with a
              tailored digital solution.
            </p>
            <Link href="/contact">
              <span className="btn-brand text-base px-8 py-4">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Project Card ──────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const primaryLink = project.links[0];
  const isReversed = index % 2 !== 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 55, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease }}
      className="group relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-card/75 shadow-sm backdrop-blur-md transition-colors duration-500 hover:border-brand/25"
    >
      {/* Top accent line */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.9, ease }}
        className="absolute inset-x-12 top-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-brand/80 to-transparent"
      />

      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-32 h-80 w-80 rounded-full bg-gradient-to-br blur-3xl ${isReversed ? "-left-32" : "-right-32"} ${categoryGradients[project.category]}`}
      />

      <div className="relative grid min-h-[34rem] lg:grid-cols-[1.08fr_0.92fr]">
        {/* Screenshot */}
        <div className={`relative min-h-[21rem] overflow-hidden border-foreground/[0.07] sm:min-h-[28rem] lg:min-h-full ${isReversed ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
          <ProjectScreenshot project={project} />

          {/* Browser bar */}
          <div aria-hidden="true" className="absolute inset-x-4 top-4 z-20 flex h-10 items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/80 px-3 shadow-2xl backdrop-blur-xl sm:inset-x-6">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 truncate rounded-md bg-white/[0.08] px-3 py-1 text-[8px] text-white/40 sm:ml-4">
              {primaryLink.href}
            </span>
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

          {/* Open project button */}
          <motion.a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            title={`Open ${project.title}`}
            whileHover={{ scale: 1.1, rotate: -4 }}
            whileTap={{ scale: 0.92 }}
            className="group/open absolute bottom-6 right-6 z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white text-slate-950 shadow-2xl shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-20 sm:w-20"
          >
            <motion.span
              animate={reduceMotion ? undefined : { x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover/open:rotate-45 sm:h-7 sm:w-7" aria-hidden="true" />
            </motion.span>
            <span className="sr-only">Open the live {project.title} project</span>
          </motion.a>

          <div className="absolute bottom-6 left-6 z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl sm:flex">
            <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
            Live project
          </div>
        </div>

        {/* Content */}
        <div className={`relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${isReversed ? "lg:order-1" : ""}`}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span aria-hidden="true" className="font-mono text-xs font-semibold text-muted-foreground/50">
              {projectNumber}
            </span>
            <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${categoryStyles[project.category]}`}>
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                <Sparkles className="h-2.5 w-2.5" />
                Featured
              </span>
            )}
            {project.year && (
              <time dateTime={project.year} className="ml-auto text-xs font-medium text-muted-foreground">
                {project.year}
              </time>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-foreground/70 sm:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-7 border-t border-foreground/[0.07] pt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Technology and services
            </p>
            <ul className="flex flex-wrap gap-2" aria-label={`Technologies used for ${project.title}`}>
              {project.technologies.map((technology, ti) => (
                <motion.li
                  key={technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.04, duration: 0.35 }}
                  className="rounded-lg border border-foreground/[0.07] bg-background/70 px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors group-hover:border-brand/15 group-hover:text-foreground"
                >
                  {technology}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.map((link, li) => (
              <ProjectAction key={`${project.slug}-${link.type}`} link={link} projectTitle={project.title} primary={li === 0} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ── Project Screenshot ────────────────────────────────────────────

function ProjectScreenshot({ project }: { project: Project }) {
  if (!project.screenshot) {
    return (
      <div className={`flex h-full min-h-[21rem] items-center justify-center bg-gradient-to-br sm:min-h-[28rem] ${categoryGradients[project.category]}`}>
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-foreground/10 bg-background/60 text-muted-foreground shadow-lg backdrop-blur-md">
            <ImageIcon className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="mt-4 text-sm font-semibold text-foreground/70">Project screenshot</p>
          <p className="mt-1 text-xs text-muted-foreground">Add a screenshot for this project</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={project.screenshot.src}
      alt={project.screenshot.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 55vw"
      quality={90}
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

// ── Project Action ────────────────────────────────────────────────

function ProjectAction({ link, projectTitle, primary = false }: { link: ProjectLink; projectTitle: string; primary?: boolean }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} for ${projectTitle}`}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`group/link inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
        primary
          ? "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-600"
          : "border border-foreground/[0.1] bg-background/70 text-foreground hover:border-brand/25 hover:bg-brand/10 hover:text-brand-600 dark:hover:text-brand-400"
      }`}
    >
      <ProjectLinkIcon type={link.type} />
      <span>{link.label}</span>
      <LoopingArrow external />
    </motion.a>
  );
}

// ── Project Link Icon ─────────────────────────────────────────────

function ProjectLinkIcon({ type }: { type: ProjectLinkType }) {
  const className = "h-4 w-4";
  switch (type) {
    case "app-store": return <FaApple className={className} aria-hidden="true" />;
    case "google-play": return <FaGooglePlay className={className} aria-hidden="true" />;
    case "github": return <FaGithub className={className} aria-hidden="true" />;
    case "website":
    default: return <ArrowUpRight className={className} aria-hidden="true" />;
  }
}

// ── Looping Arrow ─────────────────────────────────────────────────

function LoopingArrow({ external }: { external: boolean }) {
  const ArrowIcon = external ? ArrowUpRight : ArrowRight;
  return (
    <span className="relative h-4 w-4 overflow-hidden">
      <motion.span
        className="absolute inset-0"
        animate={{ x: external ? [0, 5, 0] : [0, 6, 0], y: external ? [0, -5, 0] : 0 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowIcon className="h-4 w-4" aria-hidden="true" />
      </motion.span>
    </span>
  );
}

// ── Summary Badge ─────────────────────────────────────────────────

function SummaryBadge({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      className="flex items-center gap-2 rounded-full border border-foreground/[0.08] bg-background/60 px-4 py-2 text-xs shadow-sm backdrop-blur-md"
    >
      <span className="font-bold text-brand-500 dark:text-brand-400">{value}</span>
      <span className="text-muted-foreground">{label}</span>
    </motion.div>
  );
}

// ── Divider ───────────────────────────────────────────────────────

function Divider() {
  return (
    <div aria-hidden="true" className="flex items-center">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/25 to-brand/40" />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-4 h-2 w-2 rounded-full bg-gradient-to-r from-brand to-brand-500"
      />
      <div className="h-px flex-1 bg-gradient-to-r from-brand/40 via-brand/25 to-transparent" />
    </div>
  );
}
