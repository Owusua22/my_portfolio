"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sarahnkansah",
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

const inputClassName =
  "w-full rounded-xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 hover:border-indigo-500/25 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    /*
      Replace this with a real API request later.

      Example:

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    */

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="relative isolate overflow-hidden pb-24 pt-8 md:pt-12">
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
          className="absolute -right-40 top-[28rem] h-96 w-96 rounded-full bg-purple-500/[0.08] blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/15 bg-indigo-500/[0.07] px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let&apos;s build something meaningful</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s turn your{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              idea into impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind, need a reliable development partner, or
            want to improve your digital product? Send a message and let&apos;s
            discuss how I can help.
          </p>
        </motion.header>

        {/* Availability badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for selected projects
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-sm">
            <Clock3 className="h-3.5 w-3.5 text-indigo-500" />
            Usually responds within 24–48 hours
          </div>
        </motion.div>

        {/* Main contact area */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Contact information */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/[0.08] blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                Contact details
              </p>

              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                Start a conversation.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share your idea, project requirements, or business goals. I’ll
                get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:sarah@example.com"
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/25 hover:bg-indigo-500/[0.04] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Email
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold text-foreground">
                      sarah@example.com
                    </span>
                  </span>

                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-500" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Location
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-foreground">
                      Accra, Ghana 🇬🇭
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Connect with me
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
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-muted-foreground shadow-sm transition-all duration-300 ${social.hoverClass}`}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-indigo-500/15 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.04] to-cyan-500/[0.06] p-4">
                <p className="text-sm font-semibold">What I can help with</p>

                <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground">
                  {[
                    "Full-stack web applications",
                    "E-commerce & payment integration",
                    "UI/UX design and product strategy",
                    "SEO and performance optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>

          {/* Contact form */}
          <motion.section
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            aria-labelledby="contact-form-heading"
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <div className="absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-purple-500/[0.07] blur-3xl" />

            <div className="relative">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                  Project inquiry
                </p>

                <h2
                  id="contact-form-heading"
                  className="mt-3 font-display text-2xl font-bold tracking-tight"
                >
                  Tell me about your project.
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Include your goals, timeline, and the kind of support you
                  need. The more context you provide, the better.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.1] via-background to-indigo-500/[0.06] px-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500"
                    >
                      <CheckCircle2 className="h-9 w-9" />
                    </motion.div>

                    <h3 className="mt-6 font-display text-2xl font-bold">
                      Message received!
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Thank you for reaching out. I&apos;ll review your message
                      and get back to you soon.
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Response typically within 24–48 hours
                    </span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-foreground"
                        >
                          Your name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Doe"
                          className={inputClassName}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-foreground"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@company.com"
                          className={inputClassName}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-foreground"
                      >
                        What can I help you with?
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="E-commerce website, mobile app, UI/UX design..."
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-foreground"
                        >
                          Project details
                        </label>

                        <span className="text-[11px] text-muted-foreground">
                          {formData.message.length}/1000
                        </span>
                      </div>

                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        maxLength={1000}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your idea, goals, timeline, target audience, and any features you need..."
                        className={`${inputClassName} resize-y leading-relaxed`}
                      />
                    </div>

                    <div className="flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        By submitting this form, you agree to be contacted about
                        your inquiry.
                      </p>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={isSubmitting ? undefined : { y: -2 }}
                        whileTap={isSubmitting ? undefined : { scale: 0.97 }}
                        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send message
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}