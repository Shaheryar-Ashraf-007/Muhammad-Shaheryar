import { ArrowUpRight } from "lucide-react";
import { about, stats, profile, status } from "@/data/content";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 pb-20 md:px-14 pt-8 lg:pt-24">
      {/* Mobile Profile Image */}
      <div className="flex items-center justify-center lg:hidden">
        <div className="relative flex items-center justify-center">
          {/* Animated outer ring */}
          <div className="absolute inset-[-10px] animate-spin rounded-full border-[3px] border-transparent border-t-teal-400 border-r-cyan-400" />

          {/* Glow ring */}
          <div className="absolute inset-[-6px] rounded-full border border-teal-400/30 shadow-[0_0_25px_rgba(45,212,191,0.35)]" />

          {/* Profile image */}
          <div className="relative rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 p-[5px]">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={240}
              height={240}
              className="rounded-full border-4 border-background object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:hidden">
  <div className="flex items-center gap-3 rounded-full border border-ink/[0.08] bg-ink/[0.03] px-5 py-2.5 font-mono text-xs shadow-sm backdrop-blur-sm dark:border-paper/[0.1] dark:bg-paper/[0.05]">
    
    {/* Status */}
    <span className="flex items-center gap-2 text-ink/80 dark:text-paper/80">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60 dark:bg-teal-300" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 dark:bg-teal-300" />
      </span>

      {status.available ? "Available" : "Unavailable"}
    </span>

    {/* Divider */}
    <span className="h-4 w-px bg-ink/10 dark:bg-paper/10" />

    {/* Timezone */}
    <span className="text-ink/50 dark:text-paper/50">
      {status.timezone}
    </span>

  </div>
</div>

      {/* About Content */}
      <div className="mx-auto max-w-3xl mt-4">
        <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
          <span className="text-teal-500 dark:text-teal-300">◆</span>
          {profile.roles.slice(0, 2).join(", ")} · {profile.location}
        </p>

        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink dark:text-paper md:text-5xl">
          About Me.
        </h2>

        {/* About Paragraphs */}
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

        {/* Current Position */}
        <h2 className="pt-4 font-display text-xl font-semibold tracking-tight text-ink dark:text-paper md:text-2xl">
          Current Position.
        </h2>

        <div className="mt-4">
          <p className="text-base leading-relaxed text-ink/70 dark:text-paper/70 md:text-[17px]">
            Technical Support Executive at <span className="font-semibold underline">ibex.Pakistan</span>
          </p>
        </div>

         <h2 className="pt-4 font-display text-xl font-semibold tracking-tight text-ink dark:text-paper md:text-2xl">
          Education.
        </h2>

        <div className="mt-4">
          <p className="text-base leading-relaxed text-ink/70 dark:text-paper/70 md:text-[17px]">
            Bachelor of Science in Computer Science from <span className="font-semibold underline">Government College University Faisalabad (GCUF)</span>
          </p>
          <h3 className="text-xl pt-4 pb-4">CGPA:<span className="font-semibold underline text-[17px] text-ink/70 dark:text-paper/70"> 3.32/4.00</span>
             </h3>
            
         


        </div>

        

        {/* Projects Link */}
        <a
          href="#projects"
          className="mt-7 inline-flex items-center gap-1.5 font-mono text-sm text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
        >
          See my projects
          <ArrowUpRight size={15} />
        </a>

        {/* Stats Bar */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
  {stats.map((s, i) => (
    <div
      key={s.label}
      className="group relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper/80 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.08)] dark:border-paper/[0.1] dark:bg-paper/[0.03] dark:hover:border-teal-300/30"
    >
      {/* Subtle teal glow */}
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-teal-400/10 blur-2xl transition-opacity duration-300 group-hover:bg-teal-400/20" />

      {/* Number */}
      <div className="relative">
        <p className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper">
          {s.value}
          <span className="ml-1 text-teal-500 dark:text-teal-300">+</span>
        </p>

        {/* Accent line */}
        <div className="mt-3 h-[2px] w-7 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-12 dark:bg-teal-300" />

        {/* Label */}
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45 dark:text-paper/45">
          {s.label}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
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