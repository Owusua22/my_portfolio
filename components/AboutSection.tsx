"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  ExternalLink,
  MapPin,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  isMotionValue,
} from "framer-motion";
import ProfilePicture from "./ProfilePicture";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarah Nkansah",
  jobTitle: "Full-Stack Software Developer & UI/UX Designer",
  description:
    "Sarah Nkansah is a Full-Stack Software Developer, UI/UX Designer, and Digital Solutions Specialist based in Ghana.",
  url: "https://sarahnkansah.com",
  sameAs: [
    "https://github.com/sarahnkansah",
    "https://linkedin.com/in/sarahnkansah",
    "https://twitter.com/sarahnkansah",
  ],
};

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const heroWordVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -70 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const heroTitleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const narrativeContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const narrativeItem: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const vcaptionParallax = useTransform(scrollYProgress, [0.2, 0.6], [-12, 25])

  useEffect(() => {
 

    const handleMouseMove = (event: MouseEvent) => {
      if (isTouchDevice) return;
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 18,
        y: (event.clientY / window.innerHeight - 0.5) * 18,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section ref={sectionRef} id="about" className="relative">
        {/* Ambient background */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0">
            <div
              className="absolute left-[12%] top-16"
              style={{ transform: !isTouchDevice ? `translate(\({mousePosition.x * 0.28}px, \){mousePosition.y * 0.28}px)` : 'none' }}
            >
              <motion.div
                animate={{ x: [0, 18, 0], y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="h-[480px] w-[480px] rounded-full opacity-[0.03] dark:opacity-[0.05]"
                style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
              />
            </div>

            <div
              className="absolute right-[8%] top-[38%]"
              style={{ transform: !isTouchDevice ? `translate(${mousePosition.x * -0.18}px, ${mousePosition.y * -0.18}px)` : 'none' }}
            >
              <motion.div
                animate={{ x: [0, -12, 0], y: [0, 18, 0] }}
                transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-[560px] w-[560px] rounded-full opacity-[0.02] dark:opacity-[0.04]"
                style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
              />
            </div>
          </motion.div>

          <div
            className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <article itemScope itemType="https://schema.org/Person" className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero section */}
          <header className="relative pb-16 pt-6">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
              {/* Avatar column */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                className="flex shrink-0 flex-col items-center gap-6"
              >
                <div className="group relative">
                  <div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r
                      from-indigo-500 via-purple-500 to-cyan-500 opacity-0
                      blur-2xl transition-opacity duration-700
                      group-hover:opacity-30"
                  />

                  <div
                    className="animate-spin-slow absolute -inset-1.5 rounded-full
                      bg-gradient-to-r from-indigo-500/40 via-purple-500/40
                      to-cyan-500/40 opacity-70"
                  />

                  <div
                    className="relative h-48 w-48 overflow-hidden rounded-full
                      shadow-2xl shadow-indigo-500/15 ring-4 ring-white/10
                      dark:ring-white/5 md:h-64 md:w-64 lg:h-72 lg:w-72"
                  >
                    <ProfilePicture />
                  </div>

                  <div className="absolute bottom-5 right-5 z-10">
                    <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-[3px] ring-white dark:ring-gray-900" />
                  </div>
                </div>

           
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.45 }}
                  className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Available for hire
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Accra, Ghana 🇬🇭</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.45 }}
                  className="flex flex-col items-center gap-3 mt-1"
                >
                  <div className="flex items-center gap-3">
                    <SocialLink icon={<FaGithub />} href="https://github.com/sarahnkansah" />
                    <SocialLink icon={<FaLinkedin />} href="https://linkedin.com/in/sarahnkansah" />
                    <SocialLink icon={<FaXTwitter />} href="https://twitter.com/sarahnkansah" />
                  </div>
                </motion.div>

              </motion.div>

              {/* Text content */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                className="min-w-0 flex-1 space-y-5 text-center lg:text-left"
              >

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3.5 py-1.5 dark:border-indigo-500/20 dark:bg-indigo-500/10"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                    Full-Stack Architect · SEO Expert
                  </span>
                </motion.div>

                <div className="overflow-hidden" style={{ perspective: "900px" }}>
                  <motion.h1
                    variants={heroTitleContainer}
                    initial="hidden"
                    animate="visible"
                    className="font-display text-[clamp(1.8rem,8vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight"
                  >
                    <span className="block">
                      {"I Build".split(" ").map((word) => (
                        <motion.span key={word} variants={heroWordVariants} className="mr-[0.25em] inline-block">
                          {word}
                        </motion.span>
                      ))}

                      <motion.span variants={heroWordVariants} className="relative mr-[0.25em] inline-block">
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                          Modern and scalable 
                        </span>
                      </motion.span>
                    </span>

                    <span className="mt-1 block">
                      {"Web Applications".split(" ").map((word) => (
                        <motion.span key={word} variants={heroWordVariants} className="mr-[0.25em] inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 1.4, ease: "easeInOut" }}
                  style={{ transformOrigin: "left center" }}
                  className="mx-auto h-[3px] w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 lg:mx-0"
                />

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.75 }}
                  className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem] lg:mx-0"
                >
                  Hi, I&apos;m{" "}
                  <strong
                    itemProp="name"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text font-bold text-transparent"
                  >
                    Sarah Nkansah
                  </strong>{" "}
                  — a Full-Stack Developer who builds fast, scalable web
                  applications that solve real business problems. I combine modern web
                  technologies with SEO best practices to create digital products that are
                  reliable, high-performing, and easy to find online.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.55 }}
                  className="flex flex-wrap justify-center gap-2 lg:justify-start"
                >
                  {[
                    "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "AWS", "PostgreSQL", "MongoDB",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="cursor-default rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3 py-1 text-[11px] font-semibold text-indigo-700 transition-all duration-200 hover:bg-indigo-500/15 hover:translate-y-[-1px] dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {technology}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.55 }}
                  className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center lg:justify-start"
                >
                  <a
                    href="/projects"
                    className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/25 active:scale-[0.98]"
                  >
                    <span className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%]" />
                    <span className="relative text-white">View My Work</span>
                    <ArrowRight className="relative h-4 w-4 text-white/90 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-500/20 px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:translate-y-[-1px] active:scale-[0.98]"
                  >
                    <span>Hire Me</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-16 hidden flex-col items-center gap-1.5 lg:flex"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            </motion.div>
          </header>

          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 rounded-full border border-indigo-500/[0.12] bg-indigo-500/[0.06] px-3.5 dark:border-indigo-500/20 dark:bg-indigo-500/10"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400 ">
              About Me
            </span>
          </motion.div>

          <motion.section
            variants={narrativeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-4"
          >
            <div className="mb-10 space-y-5 text-base leading-relaxed text-foreground/80">
              <motion.p variants={narrativeItem}>
                I&apos;m <strong className="text-foreground">Sarah Nkansah</strong>, a <strong className="text-foreground">Full-Stack Software Engineer</strong>, <strong className="text-foreground">UI/UX Designer</strong>, and <strong className="text-foreground">SEO Specialist</strong> based in Ghana. I build high performance digital products that are visually engaging, technically scalable, and strategically optimized to help businesses attract users, increase conversions, and grow online.
              </motion.p>

              <motion.p variants={narrativeItem}>
                From concept to deployment, I transform ideas into production ready applications — modern web platforms with <strong className="text-foreground">React</strong> and <strong className="text-foreground">Next.js</strong>, cross platform mobile apps with <strong className="text-foreground">React Native</strong>, and secure backend systems using <strong className="text-foreground">Node.js</strong>, <strong className="text-foreground">Express.js</strong>, and scalable databases including <strong className="text-foreground">MongoDB</strong>, <strong className="text-foreground">PostgreSQL</strong> and <strong className="text-foreground">Supabase</strong>.
              </motion.p>
            </div>

            <motion.div
              variants={narrativeItem}
              style={{ y: isTouchDevice ? 0 : vcaptionParallax }}
              className="relative mb-10 mt-16 overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br
                  from-indigo-500/[0.04] via-purple-500/[0.02]
                  to-cyan-500/[0.04] dark:from-indigo-500/[0.08]
                  dark:via-purple-500/[0.04] dark:to-cyan-500/[0.08]"
              />

              <div className="absolute inset-0 rounded-2xl border border-indigo-500/10 dark:border-indigo-500/20" />

              <div className="relative grid gap-12 p-6 sm:p-8 md:grid-cols-2 md:p-10">

                <div>
                  <motion.div className="mb-6 ml-0 sm:-ml-6">
                    <span className="font-serif text-[5rem] leading-none font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent opacity-40">
                      “
                    </span>
                  </motion.div>

                  <h3 className="mb-6 text-2xl font-bold leading-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    What Sets Me Apart
                  </h3>

                  <ul className="space-y-3">
                    {[
                      "End-to-end product development",
                      "Performance-first architecture",
                      "SEO built into every project",
                      "User-focused",
                      "Team collaboration",
                    
                      "Cross-functional leadership",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.07, duration: 0.35 }}
                        className="group flex items-start gap-2.5 text-sm text-foreground/75 transition-all hover:text-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform group-hover:scale-150"
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <FeatureList
                  title="I Help Businesses"
                  icon={<Rocket className="h-4 w-4 text-purple-500" />}
                  iconClassName="bg-purple-500/10"
                  bulletClassName="from-purple-500 to-cyan-500"
                  direction="right"
                  items={[
                    "Launch scalable web & mobile products",
                    "Improve search visibility & organic traffic",
                    "Streamline workflows through automation",
                    "Deliver fast, secure, maintainable solutions",
                    "Integrate payment gateways & e-commerce",
                    "Build & optimize cloud infrastructure",
                  ]}
                />
              </div>
            </motion.div>
          </motion.section>

          <Divider />
        </article>
      </section>
    </>
  );
}

function Divider() {
  return (
    <div aria-hidden="true" className="relative my-12">
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30" />
    </div>
  );
}

function SocialLink({ icon, href }: { icon: ReactNode, href: string }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border border-border/40 p-2.5 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      {icon}
    </motion.a>
  )
}

type StatCardProps = {
  number: string;
  label: string;
  icon: ReactNode;
  color: "indigo" | "purple" | "cyan";
};

type FeatureListProps = {
  title: string;
  icon: ReactNode;
  iconClassName: string;
  bulletClassName: string;
  direction: "left" | "right";
  items: string[];
};

function FeatureList({ title, icon, iconClassName, bulletClassName, direction, items }: FeatureListProps) {
  const initialX = direction === "left" ? -8 : 8;

  return (
    <div className="pt-2">
      <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold">
        <span className={`rounded-lg p-1.5 \){iconClassName}`}>{icon}</span>
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.07, duration: 0.35 }}
            className="group flex items-start gap-2.5 text-sm text-foreground/75 transition-all hover:text-foreground"
          >
            <span
              aria-hidden="true"
              className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${bulletClassName} transition-transform group-hover:scale-150`}
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}