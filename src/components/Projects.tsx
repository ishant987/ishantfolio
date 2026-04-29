"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  personalInfo,
  projects,
  skills,
} from "@/data/portfolio";

function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={light ? "section-eyebrow-light" : "section-eyebrow"}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl ${
          light ? "text-slate-950" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 md:text-base ${
          light ? "text-slate-600" : "text-[var(--muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="about" className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="panel p-8 md:p-10">
            <SectionHeader
              eyebrow="About"
              title="Software that feels practical, reliable, and ready for real teams."
              description="I build business-facing products that solve operational problems clearly. My work spans CRMs, AI-assisted workflows, offline-capable mobile apps, and company websites, with a focus on shipping usable systems instead of overcomplicating them."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="soft-card">
                <p className="text-sm font-medium text-white">Current role</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {personalInfo.role} at Zynapte Technologies Pvt Ltd.
                </p>
              </div>
              <div className="soft-card">
                <p className="text-sm font-medium text-white">What I enjoy</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Turning messy business requirements into clean product flows,
                  maintainable code, and dependable launches.
                </p>
              </div>
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="section-eyebrow">Focus Areas</p>
            <div className="mt-6 space-y-4">
              {[
                "Enterprise CRM systems and internal tooling",
                "AI-enhanced workflow products and integrations",
                "Fast, responsive web experiences for brands",
                "Offline-first mobile app experiences for business use",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-7 text-[var(--muted-strong)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section-shell pt-0">
        <div className="projects-stage">
          <div className="projects-ambient projects-ambient-one" aria-hidden="true" />
          <div className="projects-ambient projects-ambient-two" aria-hidden="true" />
          <div className="projects-light-shell rounded-[2rem] px-4 py-8 md:px-6 md:py-10">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work across CRMs, websites, mobile apps, and operational platforms."
            description="Each project below reflects the same goal: make the product useful quickly, keep the UI simple, and support real-world business flow without unnecessary friction."
            light
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-card-light group"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: project.accent }}
                  />
                  <div
                    className="project-card-wash"
                    aria-hidden="true"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.accent}18, transparent 55%)`,
                    }}
                  />
                  <div className="project-preview">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    ) : (
                      <div
                        className="project-preview-fallback"
                        style={{
                          background: `linear-gradient(135deg, ${project.accent}24, #ffffff 72%)`,
                        }}
                      >
                        <span>{project.shortTitle}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: project.accent,
                        backgroundColor: `${project.accent}16`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {project.year}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip-light">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-sm text-slate-500">{project.status}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: project.accent }}
                    >
                      View details
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel p-8 md:p-10">
            <SectionHeader
              eyebrow="Skills"
              title="A stack shaped by product work, not just tutorials."
              description="The toolkit below reflects technologies I’ve used across web apps, backend systems, mobile apps, integrations, and operational software."
            />
          </div>
          <div className="grid gap-6">
            <div className="panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Languages
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Frameworks and tools
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell pt-0">
        <SectionHeader
          eyebrow="Experience"
          title="Current work rooted in building products that teams can actually use."
          description="A concise view of my professional experience and the educational foundation behind it."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel p-8 md:p-10">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="timeline-item">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--accent-soft)]">
                  {item.company}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div id="education" className="panel p-8 md:p-10">
            <p className="section-eyebrow">Education</p>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div
                  key={`${item.degree}-${item.period}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-white">
                      {item.degree}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                    {item.institute}
                  </p>
                  <p className="mt-3 text-sm text-[var(--accent-soft)]">
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
