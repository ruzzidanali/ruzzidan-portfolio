
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const technologies = [
  "Flutter",
  "C#",
  ".NET",
  "PostgreSQL",
  "Supabase",
];

const features = [
  "Activity Tracking",
  "Streaks",
  "Challenges",
  "Personal Records",
  "Goals",
  "Leaderboard",
  "Social & Following",
  "Authentication",
  "User Profiles",
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#EAE8E2] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E]">
              01 / Selected Projects
            </p>

            <h2 className="display-font text-5xl font-semibold tracking-[-0.055em] text-[#171717] md:text-7xl">
              Selected Work
              <span className="text-[#647C8E]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777777]">
            A collection of applications and systems built through
            engineering, experimentation and problem-solving.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid overflow-hidden border border-[#D8D8D2] bg-[#F3F1EC] lg:grid-cols-2"
        >

          {/* Project visual */}
          <div className="group relative min-h-90 overflow-hidden bg-[#EAE8E2] md:min-h-125 lg:min-h-full">

            <img
              src="/images/paceup-showcase.png"
              alt="PaceUp fitness application showcasing activity tracking, challenges, goals and personal records"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/10" />

            <span className="absolute bottom-6 left-6 z-10 bg-[#171717] px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-white">
              PROJECT / 001 — PACEUP
            </span>
          </div>

          {/* Project information */}
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">

            <div>

              {/* Project label */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#647C8E]">
                  Featured Project
                </span>

                <span className="text-xs text-[#777777]">
                  01 / 01
                </span>
              </div>

              {/* Project title */}
              <h3 className="display-font text-4xl font-semibold tracking-tight text-[#171717] md:text-5xl">
                PaceUp
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#777777]">
                Fitness & Social Mobile Application
              </p>

              {/* Project overview */}
              <div className="mt-8 space-y-4">
                <p className="text-sm leading-8 text-[#666666] md:text-base">
                  PaceUp is a fitness and social mobile application
                  designed to make physical activity more engaging
                  through activity tracking, personal goals,
                  challenges, performance records and community
                  interaction.
                </p>

                <p className="text-sm leading-8 text-[#666666] md:text-base">
                  I led the product and engineering development,
                  building the Flutter mobile application and
                  C# / .NET backend. The platform uses PostgreSQL
                  and Supabase for data management and backend
                  services.
                </p>
              </div>

              {/* Technology stack */}
              <div className="mt-9">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#777777]">
                  Engineering Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#D8D8D2] px-3 py-2 text-[11px] text-[#555555]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core features */}
              <div className="mt-8">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#777777]">
                  Core Features
                </p>

                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-[#D8D8D2] px-3 py-2 text-[11px] text-[#555555]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project metadata */}
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#D8D8D2] pt-6">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#999999]">
                    My Role
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#171717]">
                    Product & Engineering
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#999999]">
                    Platform
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#171717]">
                    Flutter · .NET API
                  </p>
                </div>

              </div>
            </div>

            {/* Project links */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#D8D8D2] pt-7">

              <a
                href="https://github.com/ruzzidanali/PaceUp"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-medium text-[#171717] transition-colors hover:text-[#647C8E]"
              >
                <Code2 size={17} />

                View source code

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>
        </motion.article>

        {/* Additional projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="border border-dashed border-[#C9C7C0] p-7 md:p-9">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999]">
              02 / More Projects
            </span>

            <p className="mt-5 text-sm text-[#777777]">
              More projects coming soon.
            </p>
          </div>

          <div className="border border-dashed border-[#C9C7C0] p-7 md:p-9">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999]">
              03 / Experiments
            </span>

            <p className="mt-5 text-sm text-[#777777]">
              Exploring new ideas and technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
