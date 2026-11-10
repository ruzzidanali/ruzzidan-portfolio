
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    period: "SEP 2025 — PRESENT",
    company: "Bubblelab Laundry Sdn Bhd",
    position: "IT Infrastructure & Developer Executive",
    type: "Professional Experience",
    summary:
      "Working across software development, data integration and IT systems to improve business operations through practical technology solutions.",
    projects: [
      {
        name: "Utility Bills Reader",
        description:
          "Developed a C# Web API to extract structured information from utility bills stored in Google Drive. Integrated the API with n8n workflows, with extracted data stored in Supabase before being transferred into the company's SQL Server database.",
        technologies: ["C#", ".NET Web API", "n8n", "Supabase", "SQL Server"],
      },
      {
        name: "Sales Data Integration & Automation",
        description:
          "Built a data integration workflow to process vendor sales data through Supabase and the company's SQL Server. Developed SQL stored procedures and triggers to transform transaction-level records into daily sales and reporting datasets, including rolling averages, growth calculations and nine-grid outlet performance analysis.",
        technologies: [
          "SQL Server",
          "T-SQL",
          "Supabase",
          "Data Integration",
          "Automation",
        ],
      },
      {
        name: "Maintenance Dashboard",
        description:
          "Built a maintenance monitoring dashboard using Lovable and Supabase to help track maintenance tickets across new, ongoing and overdue statuses.",
        technologies: ["Lovable", "Supabase"],
      },
    ],
  },
  {
    period: "MAR 2024 — MAR 2025",
    company: "SB Tape Group",
    position: "Project Web Engineer",
    type: "Professional Experience",
    summary:
      "Worked on the development and maintenance of internal web portals, supporting business operations and day-to-day IT requirements.",
    projects: [
      {
        name: "Portal Supplier",
        description:
          "Developed and maintained a supplier-facing web portal using ASP.NET Web Forms, C# and Microsoft SQL Server. Worked on application functionality, troubleshooting and ongoing portal improvements.",
        technologies: ["ASP.NET Web Forms", "C#", "MSSQL"],
      },
      {
        name: "Portal Maintenance",
        description:
          "Maintained and supported existing web portals to ensure their continued operation. Worked on troubleshooting issues, debugging application functionality and implementing maintenance updates using ASP.NET Web Forms, C# and Microsoft SQL Server.",
        technologies: ["ASP.NET Web Forms", "C#", "MSSQL"],
      },
      {
        name: "IT Support",
        description:
          "Provided IT support to users by troubleshooting hardware, software and system-related issues, assisting with technical problems and helping maintain day-to-day IT operations.",
        technologies: ["IT Support", "Troubleshooting", "Technical Support"],
      },
    ],
  },
  {
    period: "AUG 2023 — JAN 2024",
    company: "SB Tape Group",
    position: "Software Engineer Intern",
    type: "Internship",
    summary:
      "Gained practical experience in software development, enterprise systems and business reporting through several internal projects.",
    projects: [
      {
        name: "CXE Chat System",
        description:
          "Worked on a chat system project using ASP.NET and Oryzer Studio.",
        technologies: ["ASP.NET", "Oryzer Studio"],
      },
      {
        name: "AX Item Code",
        description:
          "Worked with Microsoft Dynamics AX to manage inventory and product item code records.",
        technologies: ["Microsoft Dynamics AX"],
      },
      {
        name: "SBG Dashboard Report",
        description:
          "Worked on an Overall Equipment Effectiveness (OEE) reporting project using Power BI.",
        technologies: ["Power BI", "OEE Reporting"],
      },
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="bg-[#EAE8E2] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E]">
              03 / Professional Journey
            </p>

            <h2 className="display-font text-5xl font-semibold tracking-[-0.055em] text-[#171717] md:text-7xl">
              Experience
              <span className="text-[#647C8E]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777777]">
            Professional experience across software development, backend
            engineering, data integration and business systems.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-1.75 top-0 w-px bg-[#D0CEC7] md:left-55" />

          <div className="space-y-16 md:space-y-20">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.position}`}
                initial="hidden"
                whileInView="visible"
                variants={reveal}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="relative grid gap-8 pl-10 md:grid-cols-[190px_1fr] md:gap-16 md:pl-0"
              >

                {/* Timeline marker */}
                <span className="absolute left-0 top-1.5 z-10 h-3.75 w-3.75 rounded-full border-[3px] border-[#EAE8E2] bg-[#647C8E]" />

                {/* Period */}
                <div className="md:pt-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#647C8E]">
                    {experience.period}
                  </p>

                  <p className="mt-3 text-xs text-[#999999]">
                    {experience.type}
                  </p>
                </div>

                {/* Experience content */}
                <div className="border-b border-[#D0CEC7] pb-12">

                  {/* Role heading */}
                  <div className="mb-5">
                    <h3 className="display-font text-2xl font-semibold tracking-tight text-[#171717] md:text-3xl">
                      {experience.position}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#647C8E]">
                      {experience.company}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="max-w-3xl text-sm leading-8 text-[#666666]">
                    {experience.summary}
                  </p>

                  {/* Projects */}
                  <div className="mt-10 space-y-9">
                    {experience.projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.name}
                        whileHover={
                          shouldReduceMotion ? undefined : { x: 3 }
                        }
                        transition={{ duration: 0.2 }}
                        className="border-l border-[#D0CEC7] pl-5"
                      >

                        {/* Project title */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] tabular-nums tracking-wider text-[#647C8E]">
                            0{projectIndex + 1}
                          </span>

                          <h4 className="text-sm font-semibold text-[#171717]">
                            {project.name}
                          </h4>
                        </div>

                        {/* Project description */}
                        <p className="mt-3 max-w-3xl text-xs leading-7 text-[#777777] md:text-sm">
                          {project.description}
                        </p>

                        {/* Project technologies */}
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border-b border-[#D0CEC7] pb-1 text-[10px] text-[#666666] transition-colors duration-200 hover:border-[#647C8E] hover:text-[#647C8E]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#D0CEC7] pt-8"
        >
          <p className="text-xs leading-7 text-[#777777]">
            Every role has been an opportunity to learn, build practical
            solutions and grow as a software engineer.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
