import {
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import { profile, status } from "@/data/content";
import { SectionHeading } from "./page";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:pl-96 lg:pr-16"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="06" title="Contact" />

        {/* Contact Panel */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-paper/40 backdrop-blur-xl dark:border-paper/10 dark:bg-ink/40">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-teal-500/[0.08] blur-3xl dark:bg-teal-300/[0.06]" />

          <div className="relative p-7 sm:p-10 md:p-12">
            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Mail
                    size={16}
                    className="text-teal-600 dark:text-teal-300"
                  />

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 dark:text-paper/40">
                    Get in touch
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl md:text-5xl">
                  Let's build something{" "}
                  <span className="text-teal-500 dark:text-teal-300">
                    great.
                  </span>
                </h2>
              </div>

              {/* Availability */}
              <div
                className={`
                  flex w-fit items-center gap-2 rounded-full px-3 py-1.5
                  font-mono text-[10px]
                  ${
                    status.available
                      ? "bg-teal-500/10 text-teal-600 dark:bg-teal-300/10 dark:text-teal-300"
                      : "bg-ink/[0.05] text-ink/50 dark:bg-paper/[0.05] dark:text-paper/50"
                  }
                `}
              >
                <span
                  className={`
                    h-1.5 w-1.5 rounded-full
                    ${
                      status.available
                        ? "animate-pulse bg-teal-500 dark:bg-teal-300"
                        : "bg-ink/30 dark:bg-paper/30"
                    }
                  `}
                />

                {status.available
                  ? "AVAILABLE FOR WORK"
                  : "NOT CURRENTLY AVAILABLE"}
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-ink/60 dark:text-paper/60 md:text-base">
              {status.available
                ? "I'm open to internship, freelance, and full-time opportunities."
                : "I'm not taking on new work right now, but feel free to reach out."}{" "}
              The fastest way to reach me is email — I read everything.
            </p>

            {/* Email CTA */}
            <div className="mt-10">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  "Hello",
                )}&body=${encodeURIComponent("Hi")}`}
                className="
    group flex items-center justify-between gap-4
    rounded-2xl border border-ink/10 bg-paper/60
    px-5 py-5 transition-all duration-300
    hover:border-teal-500/30 hover:bg-teal-500/[0.03]
    dark:border-paper/10 dark:bg-paper/[0.03]
    dark:hover:border-teal-300/30 dark:hover:bg-teal-300/[0.03]
    sm:px-6
  "
              >
                <span className="min-w-0">
                  <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.15em] text-ink/35 dark:text-paper/35">
                    Email me
                  </span>

                  <span className="block break-all font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-teal-600 dark:text-paper dark:group-hover:text-teal-300 sm:text-2xl md:text-3xl">
                    {profile.email}
                  </span>
                </span>

                <span
                  className="
      flex h-11 w-11 shrink-0 items-center justify-center
      rounded-full bg-ink text-paper
      transition-all duration-300
      group-hover:-translate-y-1 group-hover:translate-x-1
      dark:bg-paper dark:text-ink
    "
                >
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-8 flex flex-col justify-between gap-6 border-t border-ink/10 pt-6 dark:border-paper/10 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-5">
                {profile.phone && (
                  <div className="flex items-center gap-2 text-ink/50 dark:text-paper/50">
                    <Phone size={14} />

                    <span className="font-mono text-xs">{profile.phone}</span>
                  </div>
                )}

                {profile.phone && (
                  <div className="h-4 w-px bg-ink/10 dark:bg-paper/10" />
                )}

                <span className="font-mono text-[10px] text-ink/35 dark:text-paper/35">
                  Usually responds within 24h
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {/* GitHub */}
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-ink/10
                    text-ink/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-ink/20
                    hover:bg-ink/[0.05]
                    hover:text-ink
                    dark:border-paper/10
                    dark:text-paper/50
                    dark:hover:border-paper/20
                    dark:hover:bg-paper/[0.06]
                    dark:hover:text-paper
                  "
                >
                  <Github size={16} />
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-ink/10
                    text-ink/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-ink/20
                    hover:bg-ink/[0.05]
                    hover:text-ink
                    dark:border-paper/10
                    dark:text-paper/50
                    dark:hover:border-paper/20
                    dark:hover:bg-paper/[0.06]
                    dark:hover:text-paper
                  "
                >
                  <Linkedin size={16} />
                </a>

                {/* LeetCode */}
                <a
                  href={profile.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-ink/10
                    text-ink/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-ink/20
                    hover:bg-ink/[0.05]
                    hover:text-ink
                    dark:border-paper/10
                    dark:text-paper/50
                    dark:hover:border-paper/20
                    dark:hover:bg-paper/[0.06]
                    dark:hover:text-paper
                  "
                >
                  <Code2 size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="flex items-center justify-between border-t border-ink/10 px-7 py-3 dark:border-paper/10 sm:px-10 md:px-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/25 dark:text-paper/25">
              Open to opportunities
            </span>

            <span className="font-mono text-[9px] text-ink/25 dark:text-paper/25">
              06 / CONTACT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
