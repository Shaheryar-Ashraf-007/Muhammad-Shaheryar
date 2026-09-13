import { education } from "@/data/content";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="05" title="Education" />

        <div className="mt-10 space-y-8">
          {education.map((ed, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink/[0.08] pb-6 dark:border-paper/[0.1]"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">
                  {ed.school}
                </h3>
                <p className="mt-1 text-[15px] text-ink/65 dark:text-paper/65">{ed.degree}</p>
                {ed.detail && (
                  <p className="mt-1 text-sm text-ink/45 dark:text-paper/45">{ed.detail}</p>
                )}
              </div>
              <span className="font-mono text-xs text-ink/45 dark:text-paper/45">{ed.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
