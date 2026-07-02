"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[50px_50px]" />

      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        <div className="space-y-8 pt-8 lg:pt-0 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for freelance & opportunities
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-zinc-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-600 via-fuchsia-600 to-rose-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400">
              Parvez
            </span>
          </h1>

          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-lg">
            A passionate{" "}
            <span className="text-zinc-900 dark:text-white font-medium">
              Web Developer
            </span>{" "}
            crafting beautiful, high-performance digital experiences with modern
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-95 text-base"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <a
              href="/resume.pdf"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-2xl font-medium text-zinc-900 dark:text-white transition-all"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-6">
            <div>
              <div className="text-4xl font-mono font-semibold text-zinc-900 dark:text-white">
                1.5+
              </div>
              <div className="text-sm text-zinc-500">YEARS EXPERIENCE</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-semibold text-zinc-900 dark:text-white">
                20+
              </div>
              <div className="text-sm text-zinc-500">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-75 sm:w-90 lg:w-105 aspect-square">
            <div className="absolute inset-0 rounded-[3.5rem] bg-linear-to-br from-violet-500 via-fuchsia-500 to-rose-500 animate-[spin_20s_linear_infinite] opacity-30 blur-xl" />

            {/* Main Photo */}
            <div className="relative z-10 w-full h-full rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden border-6 border-white dark:border-zinc-900 shadow-2xl">
              <Image
                src="/parvez-rahman.png"
                alt="Parvez - Web Developer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                width={800}
                height={800}
                priority
              />
            </div>

            <div className="absolute inset-0 rounded-[3.5rem] border border-white/30 dark:border-white/20 animate-[spin_25s_linear_infinite]" />

            <div className="absolute -inset-4 rounded-[4rem] border border-transparent bg-linear-to-r from-transparent via-white/20 to-transparent dark:via-white/10 animate-[spin_30s_linear_infinite_reverse]" />

            <div className="absolute -inset-8 border border-zinc-200/60 dark:border-white/10 rounded-[4rem] -rotate-6 pointer-events-none/" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500">
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-linear-to-b from-transparent via-zinc-400 dark:via-zinc-500 to-transparent"></div>
      </div>
    </section>
  );
}
