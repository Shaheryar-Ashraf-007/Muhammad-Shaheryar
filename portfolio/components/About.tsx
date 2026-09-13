import { ArrowUpRight } from "lucide-react";
import { about, stats, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="px-6 pb-20 pt-14 md:px-14 lg:pt-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
          <span className="text-teal-500 dark:text-teal-300">◆</span>
          {profile.roles.slice(0, 2).join(", ")} · {profile.location}
        </p>

        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink dark:text-paper md:text-5xl">
          About Me.
        </h2>

        <div className="mt-7 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-ink/70 dark:text-paper/70 md:text-[17px]"
            >
              {p}
            </p>
          ))}
        </div>

        <a
          href="#projects"
          className="mt-7 inline-flex items-center gap-1.5 font-mono text-sm text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
        >
          See my projects
          <ArrowUpRight size={15} />
        </a>

        {/* stats bar */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/[0.08] bg-ink/[0.08] dark:border-paper/[0.1] dark:bg-paper/[0.1] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-5 dark:bg-ink">
              <p className="font-display text-2xl font-semibold text-ink dark:text-paper">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-ink/50 dark:text-paper/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="section-num font-mono text-sm text-teal-600 dark:text-teal-300">
        {index}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
