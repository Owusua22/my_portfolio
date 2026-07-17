"use client";

import Image from "next/image";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
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
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const categoryStyles: Record<ProjectCategory, string> = {
  "E-Commerce":
    "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "Artificial Intelligence":
    "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "Full-Stack":
    "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  Mobile:
    "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
};

const categoryGradients: Record<ProjectCategory, string> = {
  "E-Commerce":
    "from-amber-500/20 via-orange-500/10 to-indigo-500/20",
  "Artificial Intelligence":
    "from-violet-500/20 via-indigo-500/10 to-cyan-500/20",
  "Full-Stack":
    "from-indigo-500/20 via-purple-500/10 to-cyan-500/20",
  Mobile:
    "from-emerald-500/20 via-cyan-500/10 to-blue-500/20",
};

export default function ProjectsClient({
  projects,
}: ProjectsClientProps) {
  const reduceMotion = useReducedMotion();

  const categoryCount = new Set(
    projects.map((project) => project.category),
  ).size;

  const technologyCount = new Set(
    projects.flatMap((project) => project.technologies),
  ).size;

  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-12 h-[32rem] w-[32rem]
            rounded-full bg-indigo-500/[0.07] blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -30, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-[40rem] h-[34rem] w-[34rem]
            rounded-full bg-purple-500/[0.07] blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      {/* Hero */}
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pb-20 pt-10 text-center md:pb-28 md:pt-3"
      >
        <motion.div
          variants={fadeUpVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full
            border border-indigo-500/15 bg-indigo-500/[0.07] px-4
            py-2 text-xs font-semibold text-indigo-700 shadow-sm
            backdrop-blur-md dark:text-indigo-300"
        >
        
         My Portfolio
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          className="mx-auto max-w-5xl font-display text-4xl
            font-extrabold leading-[1.08] tracking-tight sm:text-5xl
            md:text-6xl lg:text-7xl"
        >
          Projects Built
         
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="mx-auto mt-8 max-w-2xl text-base leading-8
            text-muted-foreground sm:text-lg"
        >
          Explore production e-commerce platforms, mobile applications,
          artificial intelligence health prediction webapp, and a website for the formal speaker of parliament.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <SummaryBadge
            value={String(projects.length)}
            label="Live projects"
          />
          <SummaryBadge
            value={String(categoryCount)}
            label="Specializations"
          />
          <SummaryBadge
            value={`${technologyCount}+`}
            label="Technologies"
          />
        </motion.div>

        {/* Animated scroll arrow */}
        <motion.a
          variants={fadeUpVariants}
          href="#selected-projects"
          aria-label="Scroll to selected projects"
          className="group mx-auto mt-12 flex w-fit flex-col items-center
            gap-2 text-muted-foreground transition-colors
            hover:text-indigo-600 focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-indigo-500
            focus-visible:ring-offset-4 dark:hover:text-indigo-400"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <span
            className="text-[10px] font-bold uppercase
              tracking-[0.22em]"
          >
            Explore projects
          </span>

          <span
            className="flex h-12 w-8 items-start justify-center
              rounded-full border border-foreground/15 bg-background/60
              pt-2.5 shadow-md backdrop-blur-md transition-colors
              group-hover:border-indigo-500/35"
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 10, 0],
                      opacity: [0.5, 1, 0.5],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </span>
        </motion.a>
      </motion.header>

      <Divider />

      {/* Projects */}
      <section
        id="selected-projects"
        aria-labelledby="project-list-heading"
        className="scroll-mt-20 pt-16 md:pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex flex-col justify-between gap-5
            sm:flex-row sm:items-end md:mb-14"
        >
          <div>
            <div
              className="mb-3 flex items-center gap-2 text-indigo-600
                dark:text-indigo-400"
            >
              <Layers3 className="h-4 w-4" aria-hidden="true" />

              <span
                className="text-xs font-bold uppercase
                  tracking-[0.18em]"
              >
                Selected projects
              </span>
            </div>

            <h2
              id="project-list-heading"
              className="max-w-xl font-display text-3xl font-bold
                tracking-tight sm:text-4xl"
            >
              Real life projects
            </h2>
          </div>

        
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

 
    </main>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const primaryLink = project.links[0];
  const isReversed = index % 2 !== 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      id={project.slug}
      initial={{
        opacity: 0,
        y: 55,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.85,
        ease,
      }}
      className="group relative scroll-mt-24 overflow-hidden
        rounded-[2rem] border border-foreground/[0.08] bg-card/75
        shadow-sm backdrop-blur-md transition-colors duration-500
        hover:border-indigo-500/25"
    >
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.35,
          duration: 0.9,
          ease,
        }}
        className="absolute inset-x-12 top-0 z-30 h-px origin-center
          bg-gradient-to-r from-transparent via-indigo-500/80
          to-transparent"
      />

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.55, 0.85, 0.55],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-32 h-80 w-80 rounded-full
          bg-gradient-to-br blur-3xl
          ${isReversed ? "-left-32" : "-right-32"}
          ${categoryGradients[project.category]}`}
      />

      <div
        className="relative grid min-h-[34rem]
          lg:grid-cols-[1.08fr_0.92fr]"
      >
        {/* Screenshot */}
        <div
          className={`relative min-h-[21rem] overflow-hidden
            border-foreground/[0.07] sm:min-h-[28rem] lg:min-h-full
            ${
              isReversed
                ? "lg:order-2 lg:border-l"
                : "lg:border-r"
            }`}
        >
          <ProjectScreenshot project={project} />

          {/* Browser bar */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-4 z-20 flex h-10
              items-center gap-1.5 rounded-xl border border-white/10
              bg-slate-950/80 px-3 shadow-2xl backdrop-blur-xl
              sm:inset-x-6"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span
              className="ml-2 truncate rounded-md bg-white/[0.08]
                px-3 py-1 text-[8px] text-white/40 sm:ml-4"
            >
              {primaryLink.href}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0
              bg-gradient-to-t from-black/55 via-transparent to-black/10"
          />

          {/* Large animated project arrow */}
          <motion.a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            title={`Open ${project.title}`}
            whileHover={{
              scale: 1.1,
              rotate: -4,
            }}
            whileTap={{ scale: 0.92 }}
            className="group/open absolute bottom-6 right-6 z-30
              flex h-16 w-16 items-center justify-center rounded-full
              border border-white/20 bg-white text-slate-950 shadow-2xl
              shadow-black/30 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-white
              focus-visible:ring-offset-2 focus-visible:ring-offset-black
              sm:h-20 sm:w-20"
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUpRight
                className="h-6 w-6 transition-transform duration-300
                  group-hover/open:rotate-45 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </motion.span>

            <span className="sr-only">
              Open the live {project.title} project
            </span>
          </motion.a>

          <div
            className="absolute bottom-6 left-6 z-20 hidden
              items-center gap-2 rounded-full border border-white/15
              bg-black/60 px-4 py-2 text-xs font-semibold text-white
              backdrop-blur-xl sm:flex"
          >
            <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
            Live project
          </div>
        </div>

        {/* Content */}
        <div
          className={`relative flex flex-col justify-center p-6
            sm:p-8 lg:p-10 xl:p-12
            ${isReversed ? "lg:order-1" : ""}`}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              aria-hidden="true"
              className="font-mono text-xs font-semibold
                text-muted-foreground/50"
            >
              {projectNumber}
            </span>

            <span
              className={`rounded-full border px-3 py-1 text-[10px]
                font-bold uppercase tracking-[0.14em]
                ${categoryStyles[project.category]}`}
            >
              {project.category}
            </span>

            {project.featured && (
              <span
                className="inline-flex items-center gap-1 rounded-full
                  border border-amber-500/20 bg-amber-500/10 px-2.5
                  py-1 text-[10px] font-bold uppercase tracking-wider
                  text-amber-700 dark:text-amber-300"
              >
                <Sparkles className="h-2.5 w-2.5" />
                Featured
              </span>
            )}

            {project.year && (
              <time
                dateTime={project.year}
                className="ml-auto text-xs font-medium
                  text-muted-foreground"
              >
                {project.year}
              </time>
            )}
          </div>

          <h3
            className="font-display text-2xl font-bold tracking-tight
              transition-colors duration-300
              group-hover:text-indigo-600
              dark:group-hover:text-indigo-400 sm:text-3xl"
          >
            {project.title}
          </h3>

          <p
            className="mt-5 text-sm leading-7 text-foreground/70
              sm:text-[0.95rem]"
          >
            {project.description}
          </p>

          <div className="mt-7 border-t border-foreground/[0.07] pt-6">
            <p
              className="mb-3 text-[10px] font-bold uppercase
                tracking-[0.16em] text-muted-foreground"
            >
              Technology and services
            </p>

            <ul
              className="flex flex-wrap gap-2"
              aria-label={`Technologies used for ${project.title}`}
            >
              {project.technologies.map((technology, technologyIndex) => (
                <motion.li
                  key={technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: technologyIndex * 0.04,
                    duration: 0.35,
                  }}
                  className="rounded-lg border border-foreground/[0.07]
                    bg-background/70 px-2.5 py-1.5 text-[11px]
                    font-medium text-muted-foreground transition-colors
                    group-hover:border-indigo-500/15
                    group-hover:text-foreground"
                >
                  {technology}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.map((link, linkIndex) => (
              <ProjectAction
                key={`${project.slug}-${link.type}`}
                link={link}
                projectTitle={project.title}
                primary={linkIndex === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectScreenshot({
  project,
}: {
  project: Project;
}) {
  if (!project.screenshot) {
    return (
      <div
        className={`flex h-full min-h-[21rem] items-center
          justify-center bg-gradient-to-br sm:min-h-[28rem]
          ${categoryGradients[project.category]}`}
      >
        <div className="text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center
              justify-center rounded-2xl border border-foreground/10
              bg-background/60 text-muted-foreground shadow-lg
              backdrop-blur-md"
          >
            <ImageIcon className="h-7 w-7" aria-hidden="true" />
          </div>

          <p className="mt-4 text-sm font-semibold text-foreground/70">
            Project screenshot
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Add a screenshot for this project
          </p>
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
      className="object-cover object-top transition-transform
        duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

interface ProjectActionProps {
  link: ProjectLink;
  projectTitle: string;
  primary?: boolean;
}

function ProjectAction({
  link,
  projectTitle,
  primary = false,
}: ProjectActionProps) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} for ${projectTitle}`}
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.96 }}
      className={`group/link inline-flex items-center justify-center
        gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-indigo-500
        ${
          primary
            ? `bg-gradient-to-r from-indigo-600 to-purple-600
              text-white shadow-lg shadow-indigo-500/20`
            : `border border-foreground/[0.1] bg-background/70
              text-foreground hover:border-indigo-500/25
              hover:bg-indigo-500/10 hover:text-indigo-600
              dark:hover:text-indigo-400`
        }`}
    >
      <ProjectLinkIcon type={link.type} />

      <span>{link.label}</span>

      <LoopingArrow external />
    </motion.a>
  );
}

function ProjectLinkIcon({
  type,
}: {
  type: ProjectLinkType;
}) {
  const className = "h-4 w-4";

  switch (type) {
    case "app-store":
      return <FaApple className={className} aria-hidden="true" />;

    case "google-play":
      return <FaGooglePlay className={className} aria-hidden="true" />;

    case "github":
      return <FaGithub className={className} aria-hidden="true" />;

    case "website":
    default:
      return <ArrowUpRight className={className} aria-hidden="true" />;
  }
}

function LoopingArrow({
  external,
}: {
  external: boolean;
}) {
  const ArrowIcon = external ? ArrowUpRight : ArrowRight;

  return (
    <span className="relative h-4 w-4 overflow-hidden">
      <motion.span
        className="absolute inset-0"
        animate={{
          x: external ? [0, 5, 0] : [0, 6, 0],
          y: external ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowIcon className="h-4 w-4" aria-hidden="true" />
      </motion.span>
    </span>
  );
}

function SummaryBadge({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      className="flex items-center gap-2 rounded-full border
        border-foreground/[0.08] bg-background/60 px-4 py-2
        text-xs shadow-sm backdrop-blur-md"
    >
      <span className="font-bold text-indigo-600 dark:text-indigo-400">
        {value}
      </span>

      <span className="text-muted-foreground">{label}</span>
    </motion.div>
  );
}

function Divider() {
  return (
    <div aria-hidden="true" className="flex items-center">
      <div
        className="h-px flex-1 bg-gradient-to-r from-transparent
          via-indigo-500/25 to-indigo-500/40"
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mx-4 h-2 w-2 rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-500"
      />

      <div
        className="h-px flex-1 bg-gradient-to-r from-indigo-500/40
          via-indigo-500/25 to-transparent"
      />
    </div>
  );
}