import { BriefcaseBusiness, Check, MapPin } from "lucide-react";
import { experience } from "@/data/content";
import { SectionHeading } from "./page";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-20 md:pl-[350px] lg:pr-16"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Experience" />

        <div className="relative mt-14">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-teal-500/50 via-ink/10 to-transparent dark:from-teal-300/50 dark:via-paper/10 md:block" />

          <div className="space-y-10">
            {experience.map((role, i) => (
              <article
                key={i}
                className="group relative grid gap-6 md:grid-cols-[40px_1fr]"
              >
                {/* Timeline Marker */}
                <div className="relative z-10 hidden md:flex">
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center
                      rounded-full border
                      bg-paper
                      shadow-sm
                      transition-all duration-500
                      dark:bg-ink
                      ${
                        role.current
                          ? "border-teal-500/40 text-teal-600 shadow-teal-500/10 dark:border-teal-300/40 dark:text-teal-300"
                          : "border-ink/10 text-ink/40 dark:border-paper/10 dark:text-paper/40"
                      }
                    `}
                  >
                    <BriefcaseBusiness size={16} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Experience Content */}
                <div
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-ink/10
                    bg-paper/50
                    p-6
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-teal-500/20
                    hover:shadow-xl hover:shadow-ink/5
                    dark:border-paper/10
                    dark:bg-ink/40
                    dark:hover:border-teal-300/20
                    dark:hover:shadow-black/20
                  "
                >
                  {/* Top Accent */}
                  <div
                    className={`
                      absolute left-0 top-0 h-full w-[2px]
                      transition-transform duration-500
                      group-hover:scale-y-100
                      ${
                        role.current
                          ? "bg-teal-500 dark:bg-teal-300"
                          : "bg-ink/10 dark:bg-paper/10"
                      }
                    `}
                  />

                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        {/* Mobile Icon */}
                        <div
                          className={`
                            flex h-9 w-9 items-center justify-center
                            rounded-lg
                            md:hidden
                            ${
                              role.current
                                ? "bg-teal-500/10 text-teal-600 dark:bg-teal-300/10 dark:text-teal-300"
                                : "bg-ink/[0.04] text-ink/50 dark:bg-paper/[0.05] dark:text-paper/50"
                            }
                          `}
                        >
                          <BriefcaseBusiness size={15} />
                        </div>

                        <div>
                          <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">
                            {role.role}
                          </h3>

                          <p className="mt-0.5 font-body text-sm text-ink/50 dark:text-paper/50">
                            {role.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-ink/10 bg-ink/[0.025] px-3 py-1 font-mono text-[10px] text-ink/50 dark:border-paper/10 dark:bg-paper/[0.03] dark:text-paper/50">
                        {role.period}
                      </span>

                      {role.current && (
                        <span className="flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 font-mono text-[10px] font-medium text-teal-600 dark:bg-teal-300/10 dark:text-teal-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500 dark:bg-teal-300" />
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-ink/[0.07] dark:bg-paper/[0.08]" />

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {role.points.map((point, j) => (
                      <li
                        key={j}
                        className="group/point flex gap-3 text-[14px] leading-relaxed text-ink/60 dark:text-paper/60"
                      >
                        <span
                          className="
                            mt-[7px]
                            flex h-4 w-4 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-ink/[0.04]
                            text-ink/40
                            transition-colors
                            group-hover/point:bg-teal-500/10
                            group-hover/point:text-teal-600
                            dark:bg-paper/[0.05]
                            dark:text-paper/40
                            dark:group-hover/point:bg-teal-300/10
                            dark:group-hover/point:text-teal-300
                          "
                        >
                          <Check size={9} strokeWidth={2.5} />
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Metadata */}
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-ink/30 dark:text-paper/30">
                    <MapPin size={11} />
                    <span>Professional Experience</span>

                    <span className="ml-auto">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}