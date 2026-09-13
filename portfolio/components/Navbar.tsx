"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";
import {profile} from "./../data/content"

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/components/Experience.tsx", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-86 right-0 top-5 z-50 w-[1000px] flex justify-center px-4">
      <nav
        className="
        w-[900px]
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
        {/* Navigation */}
        <div className="flex items-center justify-center gap-10">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative rounded-full
                  px-4 py-2
                  font-mono text-[12px]
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-ink/[0.07] text-ink dark:bg-paper/[0.08] dark:text-paper"
                      : "text-ink/45 hover:bg-ink/[0.04] hover:text-ink/80 dark:text-paper/45 dark:hover:bg-paper/[0.05] dark:hover:text-paper/80"
                  }
                `}
              >
                {item.label}

                {/* Active indicator */}
                {isActive && (
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
            );
          })}
      

        {/* Divider */}
        <div className="mx-2 h-5 w-px bg-ink/10 dark:bg-paper/10" />

        {/* Social Links */}
        <div className="flex items-center gap-1">
          {/* GitHub */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              text-ink/50
              transition-all duration-300
              hover:bg-ink/[0.07]
              hover:text-ink
              dark:text-paper/50
              dark:hover:bg-paper/[0.08]
              dark:hover:text-paper
            "
          >
            <Github size={16} strokeWidth={1.8} />
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
              text-ink/50
              transition-all duration-300
              hover:bg-ink/[0.07]
              hover:text-ink
              dark:text-paper/50
              dark:hover:bg-paper/[0.08]
              dark:hover:text-paper
            "
          >
            <Linkedin size={16} strokeWidth={1.8} />
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
              text-ink/50
              transition-all duration-300
              hover:bg-ink/[0.07]
              hover:text-ink
              dark:text-paper/50
              dark:hover:bg-paper/[0.08]
              dark:hover:text-paper
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[16px] w-[16px] fill-current"
              aria-hidden="true"
            >
              <path d="M13.483 0a1.67 1.67 0 0 0-1.19.493L3.02 9.766a4.34 4.34 0 0 0 0 6.137l5.077 5.077a4.34 4.34 0 0 0 6.137 0l2.69-2.69a1.68 1.68 0 1 0-2.377-2.377l-2.69 2.69a.98.98 0 0 1-1.384 0L5.396 14.526a.98.98 0 0 1 0-1.384l9.273-9.273a.98.98 0 0 1 1.384 0l2.69 2.69a1.68 1.68 0 0 0 2.377-2.377L18.43 1.19A1.67 1.67 0 0 0 17.24.697L13.483 0Z" />
              <path d="M11.2 10.2a1.68 1.68 0 1 0 0 3.36h8.3a1.68 1.68 0 1 0 0-3.36h-8.3Z" />
            </svg>
          </a>
        </div>
          </div>
      </nav>
    </header>
  );
}