
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const interests = [
  "Backend Development",
  "Web Applications",
  "Mobile Development",
  "Database Design",
  "System Integration",
  "Workflow Automation",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F3F1EC] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E]"
        >
          02 / A Little About Me
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">

          {/* Left: Main introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="display-font text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#171717] md:text-6xl">
              I enjoy building things that solve{" "}
              <span className="text-[#647C8E]">
                real problems.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-sm leading-8 text-[#666666] md:text-base">
              <p>
                I'm a Full Stack Developer from Malaysia with
                an interest in building practical software
                solutions across web, mobile and backend systems.
              </p>

              <p>
                My work involves developing applications,
                designing backend functionality, working with
                databases and connecting different systems
                through integrations and automation.
              </p>

              <p>
                I enjoy understanding how different parts of
                a system work together, from the user-facing
                experience to the underlying data and business
                logic.
              </p>
            </div>

            {/* Personal philosophy */}
            <div className="mt-12 border-l-2 border-[#647C8E] pl-6">
              <p className="display-font text-xl font-medium leading-relaxed text-[#171717] md:text-2xl">
                Good software isn't just about writing code.
                It's about understanding the problem and
                building the right solution.
              </p>
            </div>
          </motion.div>

          {/* Right: Developer interests */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col"
          >
            {/* Background */}
            <div className="border-t border-[#D8D8D2] py-7">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#647C8E]">
                Background
              </p>

              <p className="text-sm leading-7 text-[#666666]">
                Working across the software development
                lifecycle, with experience in application
                development, backend engineering, database
                management and system integration.
              </p>
            </div>

            {/* Technical interests */}
            <div className="border-t border-[#D8D8D2] py-7">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#647C8E]">
                Areas of Interest
              </p>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="border border-[#D8D8D2] px-3 py-2 text-[11px] text-[#555555]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Development approach */}
            <div className="border-t border-b border-[#D8D8D2] py-7">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#647C8E]">
                How I Approach Development
              </p>

              <div className="space-y-5">
                {[
                  {
                    number: "01",
                    title: "Understand the problem",
                    description:
                      "Start with the requirements and the people using the system.",
                  },
                  {
                    number: "02",
                    title: "Build with purpose",
                    description:
                      "Choose practical technologies and create maintainable solutions.",
                  },
                  {
                    number: "03",
                    title: "Improve continuously",
                    description:
                      "Test, refine and learn from every development cycle.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-5"
                  >
                    <span className="pt-1 text-[10px] tracking-wider text-[#647C8E]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-[#171717]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#777777]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact link */}
            <a
              href="#contact"
              className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#171717] transition-colors hover:text-[#647C8E]"
            >
              Let's connect

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
