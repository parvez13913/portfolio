"use client";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn/UI",
      "DaisyUI",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Grok",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-800">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-6">
            CHAPTER 04 — EXPERTISE
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 h-full hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-white mb-8 pb-4 border-b border-white/10">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-6 py-3 bg-zinc-800 hover:bg-white hover:text-zinc-900 text-sm font-medium text-zinc-300 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Always learning new technologies • Currently exploring AI
            integration
          </p>
        </div>
      </div>
    </section>
  );
}
