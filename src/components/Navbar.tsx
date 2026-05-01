"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || forceScrolled
            ? "border-b border-white/10 bg-[rgba(10,15,26,0.78)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white">
              IS
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.02em] text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs text-[var(--muted)]">{personalInfo.role}</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${personalInfo.email}`} className="button-primary">
              Hire Me
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(7,10,18,0.96)] px-6 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-lg font-medium text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setMenuOpen(false)}
                className="button-primary mt-2 justify-center"
              >
                Contact Ishant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
