"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Softvence Delta",
    role: "Frontend Developer",
    duration: "Oct 2025 - Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time • On-site",
    description:
      "Developing high-quality, responsive web applications using Next.js, TypeScript, and Tailwind CSS. Collaborating closely with designers and backend engineers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    current: true,
  },
  {
    company: "Dignity Of Noble",
    role: "Junior Full Stack Developer",
    duration: "Sep 2024 - Jan 2025",
    location: "Hyderabad, India (Remote)",
    type: "Full-time • Remote",
    description:
      "Worked on full-stack development including API development, database management, and frontend implementation for multiple client projects.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 bg-zinc-950 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-6">
            CHAPTER 02 — JOURNEY
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            My Experience
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-4 h-4 rounded-full ${exp.current ? "bg-emerald-500 ring-4 ring-emerald-500/30" : "bg-zinc-400"}`}
                      />
                      <span className="text-sm font-medium text-emerald-400">
                        {exp.current ? "CURRENT ROLE" : "PAST ROLE"}
                      </span>
                    </div>

                    <h3 className="text-3xl font-semibold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-zinc-400 mt-1">{exp.role}</p>

                    <div className="mt-8 space-y-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4" /> {exp.duration}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-4 h-4" /> {exp.type}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8 relative">
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 rounded-3xl border border-transparent bg-linear-to-r from-transparent via-white/30 to-transparent animate-[border-rotate_4s_linear_infinite]" />

                    <p className="text-lg leading-relaxed text-zinc-200 mb-8 relative z-10">
                      {exp.description}
                    </p>

                    <div className="relative z-10">
                      <p className="uppercase text-xs tracking-widest text-zinc-500 mb-4">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-5 py-2 bg-zinc-800 text-sm rounded-2xl text-white/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
