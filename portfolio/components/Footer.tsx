import { profile, status } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] px-6 py-8 dark:border-paper/[0.1] md:px-14">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink/45 dark:text-paper/45">
        <span>
          © {new Date().getFullYear()} {profile.name.replace(/[\[\]]/g, "")}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-teal-500 dark:bg-teal-300" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-300" />
          </span>
          {status.available ? "all systems operational" : "status: away"}
        </span>
      </div>
    </footer>
  );
}
