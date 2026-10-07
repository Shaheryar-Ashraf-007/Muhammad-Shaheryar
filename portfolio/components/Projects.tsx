import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";
import { SectionHeading } from "./page";
import GlowingDotsBackground from "./Animation";

export default function Projects() {
  return (
    <GlowingDotsBackground>
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-16 md:ml-[330px] md:px-14 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-300/5" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-300/5" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading index="04" title="Projects" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-paper p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/5 dark:border-paper/[0.1] dark:bg-ink dark:hover:border-teal-300/40 dark:hover:shadow-teal-300/5"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-300/[0.05]" />

              {/* Top accent */}
              <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-teal-300/60" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium tracking-wider text-teal-600 dark:text-teal-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-6 bg-ink/10 dark:bg-paper/10" />
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                      className="rounded-full border border-transparent p-2 text-ink/50 transition-all duration-300 hover:border-ink/10 hover:bg-ink/[0.05] hover:text-ink dark:text-paper/50 dark:hover:border-paper/10 dark:hover:bg-paper/[0.06] dark:hover:text-paper"
                    >
                      <Github
                        size={17}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:-rotate-6"
                      />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live site`}
                      className="rounded-full border border-transparent p-2 text-ink/50 transition-all duration-300 hover:border-teal-500/20 hover:bg-teal-500/[0.06] hover:text-teal-600 dark:text-paper/50 dark:hover:border-teal-300/20 dark:hover:bg-teal-300/[0.06] dark:hover:text-teal-300"
                    >
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* Project title */}
                <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-teal-700 dark:text-paper dark:group-hover:text-teal-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xl text-[14px] leading-7 text-ink/60 dark:text-paper/60">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative mt-8">
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-ink/35 dark:text-paper/35">
                  Built with
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-ink/[0.08] bg-ink/[0.035] px-2.5 py-1.5 font-mono text-[10px] text-ink/55 transition-colors duration-300 group-hover:border-teal-500/10 dark:border-paper/[0.08] dark:bg-paper/[0.035] dark:text-paper/55 dark:group-hover:border-teal-300/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom hover indicator */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-500 group-hover:w-full dark:bg-teal-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
</GlowingDotsBackground>
  );
}
