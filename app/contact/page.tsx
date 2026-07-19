"use client";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Owusua22",
    icon: FaGithub,
    hoverClass:
      "hover:border-foreground/30 hover:bg-foreground hover:text-background",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sarahnkansah",
    icon: FaLinkedin,
    hoverClass: "hover:border-blue-500/40 hover:bg-blue-600 hover:text-white",
  },
  {
    name: "X / Twitter",
    href: "https://twitter.com/sarahnkansah",
    icon: FaXTwitter,
    hoverClass:
      "hover:border-foreground/30 hover:bg-foreground hover:text-background",
  },
];

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden pb-4 pt-1 md:pt-2">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[28rem] h-96 w-96 rounded-full "
        />

     
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/15 bg-indigo-500/[0.07] px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Reach Out To Me</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s turn your{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              idea into impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-7xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind, need a reliable development partner, or
            want to improve application? Reach out directly via phone,
            email, or social channels below.
          </p>
        </motion.header>

        {/* Availability badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
      
          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-sm">
            <Clock3 className="h-3.5 w-3.5 text-indigo-500" />
            Usually respond within 30 minutes
          </div>
        </motion.div>

        {/* Contact details card container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-12 relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-md sm:p-10"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/[0.08] blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-purple-500/[0.08] blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
    Contact Details
            </p>

            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Get in touch with me.
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Whether you have a question or want to discuss a potential collaboration, feel free to contact me directly using any of the methods below.
            </p>

            {/* Direct Contact Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:missnkansah6@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Email Address
                  </span>
                  <span className="mt-1 block truncate text-sm sm:text-base font-semibold text-foreground">
                    missnkansah6@gmail.com
                  </span>
                </span>

                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-500" />
              </a>

              {/* Phone */}
              <a
                href="tel:0544111246"
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Phone Number
                  </span>
                  <span className="mt-1 block truncate text-sm sm:text-base font-semibold text-foreground">
                    0544111246
                  </span>
                </span>

                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-500" />
              </a>
            </div>

            {/* Location row */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                <MapPin className="h-6 w-6" />
              </span>

              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Location
                </span>
                <span className="mt-1 block text-sm sm:text-base font-semibold text-foreground">
                  Accra, Ghana 🇬🇭
                </span>
              </span>
            </div>

            {/* Social Links & Services */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 pt-6 border-t border-border/60">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Connect on Social Media
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit Sarah Nkansah on ${social.name}`}
                        title={social.name}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.92 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-muted-foreground shadow-sm transition-all duration-300 ${social.hoverClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}