"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarPlus,
  Check,
  Clock3,
  Copy,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EMAIL = "missnkansah6@gmail.com";
const PHONE_DISPLAY = "054 411 1246";
const PHONE_TEL = "0544111246";

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

const DURATIONS = [15, 30, 45, 60];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

// Floating (timezone-less) Google Calendar timestamp: YYYYMMDDTHHMMSS
function toGCalStamp(date: Date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
    date.getDate()
  )}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function buildGoogleCalendarLink(input: {
  date: string;
  time: string;
  duration: number;
  visitorName: string;
  visitorEmail: string;
  topic: string;
}) {
  const { date, time, duration, visitorName, visitorEmail, topic } = input;
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const start = new Date(year, month - 1, day, hour, minute);
  const end = new Date(start.getTime() + duration * 60000);

  const details = [
    topic ? `Topic: ${topic}` : null,
    visitorName ? `Requested by: ${visitorName}` : null,
    visitorEmail ? `Contact: ${visitorEmail}` : null,
    "Booked via sarahnkansah.com",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Meeting with Sarah Nkansah${topic ? ` — ${topic}` : ""}`,
    dates: `${toGCalStamp(start)}/${toGCalStamp(end)}`,
    details,
    add: EMAIL,
  });

  if (visitorEmail) params.append("add", visitorEmail);

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [accraTime, setAccraTime] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    duration: 30,
    topic: "",
  });

  useEffect(() => {
    const update = () =>
      setAccraTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Accra",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const todayISO = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — mailto still works as a fallback.
    }
  };

  const canSchedule = Boolean(form.date && form.time);

  const handleSchedule = () => {
    if (!canSchedule) return;
    window.open(
      buildGoogleCalendarLink({
        date: form.date,
        time: form.time,
        duration: form.duration,
        visitorName: form.name,
        visitorEmail: form.email,
        topic: form.topic,
      }),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="relative isolate overflow-hidden pt-1 md:pt-2">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[28rem] h-96 w-96 rounded-full"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a project in mind, need a reliable development partner, or
            want to level up an existing product? Reach out directly, or grab
            time on my calendar below.
          </p>
        </motion.header>

        {/* Status badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Usually respond within 30 minutes
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-sm">
            <Clock3 className="h-3.5 w-3.5 text-indigo-500" />
            {accraTime ? `${accraTime} local time in Accra` : "Accra, Ghana"}
          </div>
        </motion.div>

        {/* Thin heritage stripe — a quiet nod to Accra, not a headline element */}
        <div className="mx-auto mt-10 h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

        {/* Main grid: contact details + scheduling */}
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Contact details card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-md sm:p-8 lg:col-span-2"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/[0.08] blur-3xl" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              Contact Details
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Get in touch.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Prefer a quick note over a booked call? Use any of the channels
              below and I&apos;ll get back to you fast.
            </p>

            <div className="mt-6 space-y-3">
              {/* Email */}
              <div className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] hover:shadow-lg">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-foreground sm:text-base">
                      {EMAIL}
                    </span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email address"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-indigo-500/40 hover:text-indigo-500"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-foreground sm:text-base">
                    {PHONE_DISPLAY}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-500" />
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Accra,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-purple-500/[0.04] hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Location
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground sm:text-base">
                    Accra, Ghana 🇬🇭
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-500" />
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 border-t border-border/60 pt-6">
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
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-muted-foreground shadow-sm transition-all duration-300 ${social.hoverClass}`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Schedule a meeting card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-md sm:p-8 lg:col-span-3"
          >
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/[0.07] blur-3xl" />

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <CalendarPlus className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                  Book Time
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Schedule a meeting with me.
                </h2>
              </div>
            </div>

           

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Kwame Mensah"
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-indigo-500/50"
                />
              </div>

              <div>
                <label
                  htmlFor="visitorEmail"
                  className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Your email
                </label>
                <input
                  id="visitorEmail"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-indigo-500/50"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  min={todayISO}
                  value={form.date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, date: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-indigo-500/50"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, time: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-indigo-500/50"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Duration
                </label>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((minutes) => (
                    <button
                      key={minutes}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({ ...f, duration: minutes }))
                      }
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                        form.duration === minutes
                          ? "border-indigo-500/60 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                          : "border-border/70 text-muted-foreground hover:border-indigo-500/30"
                      }`}
                    >
                      {minutes} min
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="topic"
                  className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                Message
                </label>
                <textarea
                  id="topic"
                  rows={3}
                  value={form.topic}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, topic: e.target.value }))
                  }
                  placeholder="Quick project scope call, portfolio site rebuild, etc."
                  className="w-full resize-none rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-indigo-500/50"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSchedule}
              disabled={!canSchedule}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
            >
              <CalendarPlus className="h-4 w-4" />
              Schedule
            </button>

            {!canSchedule && (
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Pick a date and time to continue.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}