import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page-light">
      <Navbar forceScrolled />

      <section className="project-hero-shell">
        <div
          className="project-page-glow project-page-glow-one"
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle, ${project.accent}26 0%, transparent 72%)`,
          }}
        />
        <div
          className="project-page-glow project-page-glow-two"
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle, ${project.accent}18 0%, transparent 72%)`,
          }}
        />
        <div className="mx-auto max-w-7xl px-3 pb-16 pt-32 md:px-5 md:pb-24 md:pt-40">
          <div className="project-detail-shell overflow-hidden p-6 md:p-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: project.accent,
                  backgroundColor: `${project.accent}18`,
                }}
              >
                {project.category}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {project.year}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {project.status}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {project.overview}
            </p>

            {project.image ? (
              <div className="project-shot-frame mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="relative flex min-h-[280px] items-center justify-center bg-slate-50 p-3 md:min-h-[420px] md:p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="project-meta-card">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Project Link
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block break-all text-sm text-slate-900"
                >
                  {project.url}
                </a>
              </div>
              <div className="project-meta-card md:col-span-2">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="project-detail-shell p-8 md:p-10">
            <p className="section-eyebrow-light">Overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              What this project delivers
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
              {project.description}
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
              {project.overview}
            </p>
          </div>

          <div className="project-detail-shell p-8 md:p-10">
            <p className="section-eyebrow-light">Highlights</p>
            <div className="mt-6 space-y-4">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm leading-7 text-slate-700">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
