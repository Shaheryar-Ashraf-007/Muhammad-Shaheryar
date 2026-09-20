import { profile, status } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-ink/[0.08] dark:border-paper/[0.08]">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-teal-500/50 blur-[1px] dark:bg-teal-300/50" />

      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-14">
        {/* Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-wide text-ink/40 dark:text-paper/40">
            © {new Date().getFullYear()}
          </span>

          <span className="h-3 w-px bg-ink/10 dark:bg-paper/10" />

          <span className="font-mono text-[11px] text-ink/55 dark:text-paper/55">
            {profile.name.replace(/[\[\]*]/g, "")}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-ink/[0.07] bg-ink/[0.025] px-3 py-1.5 dark:border-paper/[0.08] dark:bg-paper/[0.025]">
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-pulse-slow
                  rounded-full
                  bg-teal-500
                  opacity-60
                  dark:bg-teal-300
                "
              />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" />
            </span>

            <span className="font-mono text-[10px] tracking-wide text-ink/50 dark:text-paper/50">
              {status.available
                ? "all systems operational"
                : "status: away"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}