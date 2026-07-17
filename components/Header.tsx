"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isSolid = scrolled || mobileMenuOpen;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isSolid
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/85 backdrop-blur-2xl backdrop-saturate-150 border-b border-indigo-500/10 dark:border-indigo-500/10 shadow-[0_1px_3px_rgba(99,102,241,0.04),0_4px_16px_rgba(99,102,241,0.06)] dark:shadow-[0_1px_3px_rgba(99,102,241,0.1),0_4px_16px_rgba(99,102,241,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Subtle gradient line at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent transition-opacity duration-500 ${
          isSolid ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] py-3">
          {/* ==================== LOGO ==================== */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group relative"
            aria-label="Sarah Nkansah - Home"
          >
            <div className="relative">
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-500/30 
                            rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"
              />
              <div
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 
                            opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin-slow"
              />
              <div
                className="relative w-11 h-11 overflow-hidden rounded-xl 
                           bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
                           dark:from-indigo-500/10 dark:to-purple-500/10
                           border border-indigo-500/10 dark:border-indigo-500/20
                           group-hover:border-indigo-500/30 
                           group-hover:shadow-lg group-hover:shadow-indigo-500/10
                           transition-all duration-500 group-hover:rotate-3"
              >
                <Image
                  src="/logo.png"
                  alt="Sarah Nkansah Logo"
                  fill
                  sizes="44px"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="font-display text-base font-semibold text-foreground tracking-tight
                           group-hover:tracking-normal transition-all duration-300"
              >
                Sarah Nkansah
              </span>
              <span
                className="font-sans text-[10px] font-medium text-muted-foreground uppercase 
                           tracking-[0.2em] mt-1.5 flex items-center gap-1.5"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                  FullStack Developer
                </span>
              </span>
            </div>
          </Link>

          {/* ==================== DESKTOP NAV ==================== */}
          <nav className="hidden md:flex items-center gap-2">
            <div
              className="flex items-center gap-1 p-1.5 rounded-full 
                         bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08]
                         border border-indigo-500/10 dark:border-indigo-500/15
                         backdrop-blur-sm"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full 
                      transition-all duration-300 font-display tracking-tight
                      ${
                        active
                          ? "text-white"
                          : "text-muted-foreground hover:text-foreground hover:bg-indigo-500/5"
                      }`}
                  >
                    {active && (
                      <span
                        className="absolute inset-0 rounded-full -z-10
                                   bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                                   bg-[length:200%_100%] animate-gradient-x
                                   shadow-lg shadow-indigo-500/25"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="w-px h-6 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent mx-2" />

            <ThemeToggle />

            <Link
              href="/contact"
              className="group/cta relative ml-2 overflow-hidden px-6 py-2.5 rounded-full
                         text-sm font-display font-bold tracking-tight
                         transition-all duration-500 hover:scale-105 
                         hover:shadow-2xl hover:shadow-indigo-500/25"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                           bg-[length:200%_100%] animate-gradient-x"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shine 1.5s ease-in-out",
                }}
              />
              <span className="relative z-10 flex items-center gap-2 text-white">
                Let&apos;s Work
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-300" />
              </span>
            </Link>
          </nav>

          {/* ==================== MOBILE CONTROLS ==================== */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-11 h-11 flex items-center justify-center rounded-full 
                         border transition-all duration-500 overflow-hidden
                         ${
                           mobileMenuOpen
                             ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500/30 text-white shadow-lg shadow-indigo-500/25"
                             : "bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-500/10 dark:border-indigo-500/20 text-foreground hover:border-indigo-500/30 hover:bg-indigo-500/10"
                         }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    mobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            mobileMenuOpen ? "max-h-[420px] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 space-y-2">
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-4" />

            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative flex items-center justify-between py-4 px-5 text-sm font-medium 
                    font-display tracking-tight rounded-2xl transition-all duration-300 overflow-hidden
                    ${
                      active
                        ? "text-white shadow-lg shadow-indigo-500/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-indigo-500/5 dark:hover:bg-indigo-500/10"
                    }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms",
                    transform: mobileMenuOpen ? "translateX(0)" : "translateX(-12px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {active && (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                                 bg-[length:200%_100%] animate-gradient-x -z-10"
                    />
                  )}

                  <span className="flex items-center gap-3">
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                    )}
                    {link.label}
                  </span>

                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      active
                        ? "opacity-100 translate-x-0 text-white/80"
                        : "opacity-0 -translate-x-2"
                    }`}
                  />
                </Link>
              );
            })}

            <div
              className="pt-4"
              style={{
                transitionDelay: mobileMenuOpen ? "200ms" : "0ms",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(8px)",
                opacity: mobileMenuOpen ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative flex items-center justify-center gap-2.5 py-4 px-5 
                           text-sm font-bold rounded-2xl font-display tracking-tight
                           text-white overflow-hidden
                           shadow-lg shadow-indigo-500/20
                           active:scale-[0.98] transition-transform duration-150"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                             bg-[length:200%_100%] animate-gradient-x -z-10"
                />
                <span>Hire me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/20" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/10" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}