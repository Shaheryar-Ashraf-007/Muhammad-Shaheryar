"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Download,
} from "lucide-react";
import { profile, status, nav } from "@/data/content";
import RoleRotator from "./RoleRotator";
import Image from "next/image";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <>
      {/* Mobile top bar */}
      <header className=" flex items-center justify-between border-b border-ink/[0.08] bg-paper/90 px-5 py-4 backdrop-blur-md dark:border-paper/[0.1] dark:bg-ink/90 lg:hidden ">
        <a href="#top" className="font-display text-sm font-semibold text-ink dark:text-paper">
          {initials || "JD"}
          <span className="text-teal-500 dark:text-teal-300">.</span>
        </a>
        <div className="flex items-center gap-1">
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-ink/70 hover:bg-ink/[0.06] dark:text-paper/70 dark:hover:bg-paper/[0.08]"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-ink/70 hover:bg-ink/[0.06] dark:text-paper/70 dark:hover:bg-paper/[0.08]"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[57px] z-40 border-b border-ink/[0.08] bg-paper px-5 py-5 dark:border-paper/[0.1] dark:bg-ink lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-ink/75 dark:text-paper/75"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 z-40 hidden w-[340px] flex-col justify-between border-r border-ink/[0.08] bg-paper px-9 py-10 dark:border-paper/[0.1] dark:bg-ink lg:flex">
        <div>
          <div className="mb-9 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 dark:text-paper/40">
              operator console
            </span>
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-1.5 text-ink/60 transition-colors hover:bg-ink/[0.06] hover:text-ink dark:text-paper/60 dark:hover:bg-paper/[0.08] dark:hover:text-paper"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
          </div>

          <div className="mb-2 flex h-32 w-32 items-center justify-center rounded-2xl  border-[4px] border-teal-300">
  <Image
    src={profile.avatarUrl}
    alt="Avatar"
    width={132}
    height={132}
    className="rounded-xl"
  />
</div>

          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink dark:text-paper">
            {profile.name}
          </h1>

          <div className="mt-1.5">
            <RoleRotator roles={profile.roles} />
          </div>

          <p className="mt-3 flex items-center gap-1.5 text-sm text-ink/50 dark:text-paper/50">
            <MapPin size={13} />
            {profile.location}
          </p>

          {/* status panel */}
          <div className="mt-7 space-y-2.5 rounded-xl border border-ink/[0.08] bg-ink/[0.02] px-4 py-4 font-mono text-xs dark:border-paper/[0.1] dark:bg-paper/[0.03]">
            <div className="flex items-center justify-between">
              <span className="text-ink/45 dark:text-paper/45">status</span>
              <span className="flex items-center gap-1.5 text-ink/80 dark:text-paper/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-teal-500 dark:bg-teal-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" />
                </span>
                {status.available ? "available" : "unavailable"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-ink/45 dark:text-paper/45">tz</span>
              <span className="text-ink/80 dark:text-paper/80">{status.timezone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-ink/45 dark:text-paper/45">response</span>
              <span className="text-ink/80 dark:text-paper/80">{status.responseTime}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={profile.resumeUrl}
              className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal-600 dark:bg-teal-300 dark:text-ink dark:hover:bg-teal-400"
            >
              <Download size={15} />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:border-ink/30 dark:border-paper/20 dark:text-paper dark:hover:border-paper/40"
            >
              {profile.email}
            </a>
          </div>

          

        </div>
      </aside>
    </>
  );
}
