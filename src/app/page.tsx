import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { metrics, personalInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top" className="home-light">
      <Navbar forceScrolled />

      <section className="hero-shell">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white md:text-7xl lg:text-[5.5rem]">
              I build software that ships.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-strong)] md:text-lg">
              {personalInfo.intro}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              {personalInfo.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                View  Projects
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="panel p-7 md:p-9">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              Quick Snapshot
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="soft-card">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(69,118,255,0.14),rgba(255,255,255,0.03))] p-5">
              <p className="text-sm font-medium text-white">Current role</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
                {personalInfo.role}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Footer />
    </main>
  );
}
