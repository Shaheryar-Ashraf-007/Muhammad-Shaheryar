"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

import { profile } from "./../data/content";

const nav = [
  { href: "/about", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (pathname === "/" && href === "/about")
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================= */}

      <header className="fixed left-86 right-0 top-5 z-50 hidden justify-center px-4 lg:flex">
        <nav
          className="
            w-full max-w-[900px]
            rounded-full
            border border-ink/10
            bg-paper/50
            px-2 py-2
            shadow-sm
            backdrop-blur-xl
            transition-all
            dark:border-paper/10
            dark:bg-ink/40
          "
        >
          <div className="flex items-center justify-center gap-6 xl:gap-10">

            {/* Navigation */}
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative rounded-full
                  px-4 py-2
                  font-mono text-[12px]
                  transition-all duration-300
                  ${
                    isActive(item.href)
                      ? "bg-ink/[0.07] text-ink dark:bg-paper/[0.08] dark:text-paper"
                      : "text-ink/45 hover:bg-ink/[0.04] hover:text-ink/80 dark:text-paper/45 dark:hover:bg-paper/[0.05] dark:hover:text-paper/80"
                  }
                `}
              >
                {item.label}

                {/* Active Indicator */}
                {isActive(item.href) && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-0.5
                      w-4
                      -translate-x-1/2
                      rounded-full
                      bg-teal-500
                      dark:bg-teal-300
                    "
                  />
                )}
              </Link>
            ))}

            {/* Divider */}
            <div className="mx-1 h-5 w-px bg-ink/10 dark:bg-paper/10" />

            {/* Social Links + Theme */}
            <div className="flex items-center gap-1">

              {/* GitHub */}
              <SocialLink
                href={profile.social.github}
                label="GitHub"
              >
                <Github size={16} strokeWidth={1.8} />
              </SocialLink>

              {/* LinkedIn */}
              <SocialLink
                href={profile.social.linkedin}
                label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.8} />
              </SocialLink>

              {/* LeetCode */}
              <SocialLink
                href={profile.social.leetcode}
                label="LeetCode"
              >
                <LeetCodeIcon />
              </SocialLink>

              {/* Theme Switcher */}
              {mounted && (
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="
                    rounded-full
                    p-1.5
                    text-ink/60
                    transition-colors
                    hover:bg-ink/[0.06]
                    hover:text-ink
                    dark:text-paper/60
                    dark:hover:bg-paper/[0.08]
                    dark:hover:text-paper
                  "
                >
                  {theme === "dark" ? (
                    <Sun size={15} />
                  ) : (
                    <Moon size={15} />
                  )}
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* ================================================= */}
      {/* MOBILE NAVBAR */}
      {/* ================================================= */}

      <header className="fixed left-0 right-0 top-4 z-50 px-4 lg:hidden">
        <nav
          className="
            rounded-2xl
            border border-ink/10
            bg-paper/70
            shadow-lg
            backdrop-blur-xl
            dark:border-paper/10
            dark:bg-ink/70
          "
        >
          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between px-4 py-3">

            {/* Name */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="
                font-display
                text-sm
                font-semibold
                tracking-tight
                text-ink
                dark:text-paper
              "
            >
              {profile.name} <span className="text-teal-500 font-bold">.</span>
            </Link>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1">

              {/* Theme Switcher */}
              {mounted && (
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="
                    rounded-full
                    p-1.5
                    text-ink/60
                    transition-colors
                    hover:bg-ink/[0.06]
                    hover:text-ink
                    dark:text-paper/60
                    dark:hover:bg-paper/[0.08]
                    dark:hover:text-paper
                  "
                >
                  {theme === "dark" ? (
                    <Sun size={15} />
                  ) : (
                    <Moon size={15} />
                  )}
                </button>
              )}

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={mobileOpen}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-ink/70
                  transition-all
                  duration-300
                  hover:bg-ink/[0.06]
                  dark:text-paper/70
                  dark:hover:bg-paper/[0.08]
                "
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={1.8} />
                ) : (
                  <Menu size={20} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* MOBILE MENU */}
          {/* ================================================= */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ${
                mobileOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                border-t
                border-ink/10
                px-3
                pb-3
                pt-2
                dark:border-paper/10
              "
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-1">

                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      font-mono
                      text-xs
                      transition-all
                      duration-200
                      ${
                        isActive(item.href)
                          ? "bg-teal-500/10 text-teal-600 dark:bg-teal-300/10 dark:text-teal-300"
                          : "text-ink/60 hover:bg-ink/[0.04] hover:text-ink dark:text-paper/60 dark:hover:bg-paper/[0.05] dark:hover:text-paper"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    {/* Active Dot */}
                    {isActive(item.href) && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-teal-500
                          dark:bg-teal-300
                        "
                      />
                    )}
                  </Link>
                ))}

              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-ink/10 dark:bg-paper/10" />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-1">

                {/* GitHub */}
                <SocialLink
                  href={profile.social.github}
                  label="GitHub"
                >
                  <Github size={16} strokeWidth={1.8} />
                </SocialLink>

                {/* LinkedIn */}
                <SocialLink
                  href={profile.social.linkedin}
                  label="LinkedIn"
                >
                  <Linkedin size={16} strokeWidth={1.8} />
                </SocialLink>

                {/* LeetCode */}
                <SocialLink
                  href={profile.social.leetcode}
                  label="LeetCode"
                >
                  <LeetCodeIcon />
                </SocialLink>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

/* ================================================= */
/* SOCIAL LINK */
/* ================================================= */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        text-ink/50
        transition-all
        duration-300
        hover:bg-ink/[0.07]
        hover:text-ink
        dark:text-paper/50
        dark:hover:bg-paper/[0.08]
        dark:hover:text-paper
      "
    >
      {children}
    </a>
  );
}

/* ================================================= */
/* LEETCODE ICON */
/* ================================================= */

function LeetCodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[16px] w-[16px] fill-current"
      aria-hidden="true"
    >
      <path d="M13.483 0a1.67 1.67 0 0 0-1.19.493L3.02 9.766a4.34 4.34 0 0 0 0 6.137l5.077 5.077a4.34 4.34 0 0 0 6.137 0l2.69-2.69a1.68 1.68 0 1 0-2.377-2.377l-2.69 2.69a.98.98 0 0 1-1.384 0L5.396 14.526a.98.98 0 0 1 0-1.384l9.273-9.273a.98.98 0 0 1 1.384 0l2.69 2.69a1.68 1.68 0 0 0 2.377-2.377L18.43 1.19A1.67 1.67 0 0 0 17.24.697L13.483 0Z" />
      <path d="M11.2 10.2a1.68 1.68 0 1 0 0 3.36h8.3a1.68 1.68 0 1 0 0-3.36h8.3Z" />
    </svg>
  );
}
