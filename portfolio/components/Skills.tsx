import {
  Code2,
  Layout,
  Server,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "./page";
import GlowingDotsBackground from "./Animation";
import Footer from "./Footer";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layout: Layout,
  server: Server,
  terminal: TerminalSquare,
};

export default function Skills() {
  return (
    <GlowingDotsBackground>
      <section
        id="skills"
        className="px-4 pt-12 md:pt-24 lg:pl-96 pb-4"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeading index="02" title="What I Know" />

          {/* Skills Layout */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-paper/40 backdrop-blur-xl dark:border-paper/10 dark:bg-ink/40">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3 dark:border-paper/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45 dark:text-paper/45">
                  skillset
                </span>
              </div>

              <span className="font-mono text-[10px] text-ink/30 dark:text-paper/30">
                {skills.length.toString().padStart(2, "0")} categories
              </span>
            </div>

            {/* Skill Rows */}
            <div className="divide-y divide-ink/10 dark:divide-paper/10">
              {skills.map((group, index) => {
                const Icon = iconMap[group.icon] ?? Code2;

                return (
                  <div
                    key={group.group}
                    className="
                      group relative
                      grid
                      gap-8
                      px-5 py-8
                      transition-all duration-500
                      hover:bg-ink/[0.025]
                      dark:hover:bg-paper/[0.025]
                      md:grid-cols-[180px_1fr]
                      md:px-8
                    "
                  >
                    {/* Category */}
                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-teal-600/70 dark:text-teal-300/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-ink/10 bg-paper/70 text-teal-600 transition-transform duration-500 group-hover:scale-110 dark:border-paper/10 dark:bg-paper/[0.04] dark:text-teal-300">
                          <Icon size={17} strokeWidth={1.7} />
                        </div>
                      </div>

                      <h3 className="mt-4 font-display text-sm font-semibold text-ink dark:text-paper">
                        {group.group}
                      </h3>

                      <p className="mt-1 max-w-[170px] text-xs leading-relaxed text-ink/40 dark:text-paper/40">
                        {group.blurb}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex items-center">
                      <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                        {group.items.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="
                              group/skill
                              inline-flex items-center gap-2
                              rounded-lg
                              border border-ink/10
                              bg-paper/50
                              px-3 py-2
                              font-mono text-[11px]
                              text-ink/65
                              transition-all duration-300
                              hover:-translate-y-0.5
                              hover:border-teal-500/30
                              hover:bg-teal-500/[0.05]
                              hover:text-teal-600
                              dark:border-paper/10
                              dark:bg-paper/[0.03]
                              dark:text-paper/60
                              dark:hover:border-teal-300/30
                              dark:hover:bg-teal-300/[0.05]
                              dark:hover:text-teal-300
                            "
                          >
                            <span
                              className="
                                h-1 w-1 rounded-full
                                bg-ink/20
                                transition-colors duration-300
                                group-hover/skill:bg-teal-500
                                dark:bg-paper/20
                                dark:group-hover/skill:bg-teal-300
                              "
                            />

                            {skill}

                            <span className="text-[9px] text-ink/20 dark:text-paper/20">
                              {String(skillIndex + 1).padStart(2, "0")}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Accent */}
                    <div
                      className="
                        pointer-events-none
                        absolute left-0 top-0
                        h-full w-[2px]
                        scale-y-0
                        bg-teal-500
                        transition-transform duration-500
                        group-hover:scale-y-100
                        dark:bg-teal-300
                      "
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between border-t border-ink/10 px-5 py-3 dark:border-paper/10 md:px-8">
              <span className="font-mono text-[10px] text-ink/30 dark:text-paper/30">
                constantly_learning
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500 dark:bg-teal-300" />
                <span className="font-mono text-[10px] text-teal-600/70 dark:text-teal-300/70">
                  active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GlowingDotsBackground>

  );
}