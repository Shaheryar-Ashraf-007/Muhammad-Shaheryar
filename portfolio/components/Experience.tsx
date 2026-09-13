import { experience } from "@/data/content";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="03" title="Experience" />

        <ol className="mt-12 border-l border-ink/[0.1] dark:border-paper/[0.12]">
          {experience.map((role, i) => (
            <li key={i} className="relative pb-14 pl-9 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                  role.current
                    ? "bg-teal-500 dark:bg-teal-300"
                    : "bg-ink/25 dark:bg-paper/30"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                  {role.role}{" "}
                  <span className="font-body text-base font-normal text-ink/55 dark:text-paper/55">
                    · {role.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-ink/45 dark:text-paper/45">
                  {role.period}
                  {role.current && (
                    <span className="ml-2 rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-600 dark:bg-teal-300/10 dark:text-teal-300">
                      Current
                    </span>
                  )}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {role.points.map((point, j) => (
                  <li
                    key={j}
                    className="max-w-prose text-[15px] leading-relaxed text-ink/65 dark:text-paper/65"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
