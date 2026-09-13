import { Github, Linkedin, Code2 } from "lucide-react";
import { profile, status } from "@/data/content";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="06" title="Contact" />

        <div className="mt-10">
          <p className="max-w-prose text-base leading-relaxed text-ink/70 dark:text-paper/70 md:text-lg">
            {status.available
              ? "I'm open to internship, freelance, and full-time opportunities."
              : "I'm not taking on new work right now, but feel free to reach out."}{" "}
            The fastest way to reach me is email — I read everything.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 block break-words font-display text-3xl font-semibold tracking-tight text-ink transition-colors hover:text-teal-500 dark:text-paper dark:hover:text-teal-300 sm:text-4xl md:text-5xl"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            {profile.phone && (
              <span className="font-mono text-sm text-ink/55 dark:text-paper/55">
                {profile.phone}
              </span>
            )}
            <div className="flex items-center gap-1">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-ink/55 hover:bg-ink/[0.06] hover:text-ink dark:text-paper/55 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-ink/55 hover:bg-ink/[0.06] hover:text-ink dark:text-paper/55 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={profile.social.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="rounded-full p-2 text-ink/55 hover:bg-ink/[0.06] hover:text-ink dark:text-paper/55 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
              >
                <Code2 size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
