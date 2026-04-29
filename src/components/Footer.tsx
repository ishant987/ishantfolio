"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-shell border-t border-white/10 pt-14 md:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
        className="panel overflow-hidden p-8 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Let&apos;s build products that are useful from day one.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              I&apos;m open to strong product engineering work, collaborative
              teams, and projects where execution matters as much as the idea.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${personalInfo.email}`} className="button-primary">
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm text-[var(--muted)] md:grid-cols-2 lg:grid-cols-4">
          <a href={`mailto:${personalInfo.email}`} className="contact-line">
            {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className="contact-line">
            {personalInfo.phone}
          </a>
          <span className="contact-line">{personalInfo.location}</span>
          <a
            href={personalInfo.playStore}
            target="_blank"
            rel="noreferrer"
            className="contact-line"
          >
            Zivo on Play Store
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>{personalInfo.name}</span>
          <span>{new Date().getFullYear()} Portfolio</span>
        </div>
      </motion.div>
    </footer>
  );
}
