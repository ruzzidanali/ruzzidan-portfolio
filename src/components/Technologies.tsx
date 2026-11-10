
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Globe2,
  Smartphone,
  Database,
  Server,
  Workflow,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Backend Development",
    description: "Building application logic, APIs and server-side functionality.",
    icon: Code2,
    technologies: ["C#", ".NET", "ASP.NET Core", "Web API", "Entity Framework Core", "Java"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive and interactive web experiences.",
    icon: Globe2,
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications.",
    icon: Smartphone,
    technologies: ["Flutter", "Dart"],
  },
  {
    number: "04",
    title: "Database & Storage",
    description: "Managing relational databases and application data.",
    icon: Database,
    technologies: ["Microsoft SQL Server", "PostgreSQL", "Supabase", "SQL", "T-SQL"],
  },
  {
    number: "05",
    title: "DevOps & Infrastructure",
    description: "Managing development workflows, deployments and environments.",
    icon: Server,
    technologies: ["Docker", "Git", "GitHub", "Render"],
  },
  {
    number: "06",
    title: "Automation & Analytics",
    description: "Connecting workflows and preparing data for business insights.",
    icon: Workflow,
    technologies: ["n8n", "Power BI", "Lovable"],
  },
];

export default function Technologies() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="technologies"
      className="bg-[#F3F1EC] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E]">
              04 / Technical Toolkit
            </p>

            <h2 className="display-font text-5xl font-semibold tracking-[-0.055em] text-[#171717] md:text-7xl">
              Technologies
              <span className="text-[#647C8E]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777777]">
            Tools and technologies I use to build applications,
            develop backend systems and solve practical problems.
          </p>
        </motion.div>

        {/* Technology categories */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.number}
                initial="hidden"
                whileInView="visible"
                variants={reveal}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : (index % 2) * 0.1,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -3 }
                }
                className="group border border-[#D8D6D0] bg-[#F7F6F2] p-7 transition-colors duration-300 hover:border-[#647C8E] md:p-9"
              >

                {/* Category header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#D8D6D0] text-[#647C8E] transition-colors duration-300 group-hover:border-[#647C8E] group-hover:bg-[#647C8E] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999999]">
                      Category / {category.number}
                    </span>
                  </div>

                  <span className="display-font text-2xl font-medium tabular-nums text-[#D0CEC7] transition-colors duration-300 group-hover:text-[#647C8E]">
                    {category.number}
                  </span>
                </div>

                {/* Category information */}
                <h3 className="display-font text-xl font-semibold tracking-tight text-[#171717] md:text-2xl">
                  {category.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#777777]">
                  {category.description}
                </p>

                {/* Technology tags */}
                <div className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-[#D8D6D0] px-3 py-2 text-[11px] text-[#555555] transition-colors duration-300 group-hover:border-[#C5C3BD]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-[#D8D6D0] pt-7"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#777777]">
            My focus is not limited to a particular technology.
            I enjoy understanding the problem first, then choosing
            the right tools to build a practical and maintainable solution.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
