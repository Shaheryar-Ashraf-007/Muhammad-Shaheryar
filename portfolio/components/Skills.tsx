import { Code2, Layout, Server, TerminalSquare, type LucideIcon } from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "./About";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layout: Layout,
  server: Server,
  terminal: TerminalSquare,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-dim px-6 py-20 dark:bg-ink-soft md:px-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="02" title="What I Know" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <div
                key={group.group}
                className="rounded-2xl border border-ink/10 bg-paper p-6 dark:border-paper/[0.12] dark:bg-ink"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:bg-teal-300/10 dark:text-teal-300">
                  <Icon size={17} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink dark:text-paper">
                  {group.group}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55 dark:text-paper/55">
                  {group.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-ink/65 dark:border-paper/15 dark:text-paper/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
