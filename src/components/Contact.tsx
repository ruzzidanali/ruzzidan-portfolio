
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Contact() {
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
    <footer
      id="contact"
      className="bg-[#171717] px-6 py-24 text-[#F3F1EC] md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-[#8DA3B2]">
            05 / Get In Touch
          </p>

          <h2 className="display-font max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl lg:text-8xl">
            Have a project
            <br />
            or an idea?
            <br />
            <span className="text-[#8DA3B2]">Let's connect.</span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#A5A5A5]">
            I'm always open to discussing software development, interesting
            projects and opportunities to build meaningful solutions.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="mt-16 grid border-t border-[#3A3A3A] md:grid-cols-2"
        >

          {/* Email */}
          <motion.a
            href="mailto:ruzzidan25@gmail.com"
            whileHover={
              shouldReduceMotion ? undefined : { x: 4 }
            }
            transition={{ duration: 0.2 }}
            className="group flex items-center justify-between border-b border-[#3A3A3A] py-8 transition-colors hover:text-[#8DA3B2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA3B2] md:border-r md:pr-10"
          >
            <div className="flex items-center gap-5">
              <Mail size={21} strokeWidth={1.5} />

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                  Email
                </p>

                <p className="text-sm md:text-base">
                  ruzzidan25@gmail.com
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ruzzidanali/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              shouldReduceMotion ? undefined : { x: 4 }
            }
            transition={{ duration: 0.2 }}
            className="group flex items-center justify-between border-b border-[#3A3A3A] py-8 transition-colors hover:text-[#8DA3B2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA3B2] md:pl-10"
          >
            <div className="flex items-center gap-5">
              <LinkedinIcon width={21} height={21} />

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]">
                  LinkedIn
                </p>

                <p className="text-sm md:text-base">
                  linkedin.com/in/ruzzidanali
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* Footer bottom */}
        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <a
              href="#home"
              className="display-font text-2xl font-semibold tracking-tight transition-colors hover:text-[#8DA3B2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA3B2]"
            >
              Ruzzidan<span className="text-[#8DA3B2]">.</span>
            </a>

            <p className="mt-3 text-xs text-[#8A8A8A]">
              Full Stack Developer · Malaysia
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#home"
              className="flex items-center gap-2 text-xs text-[#A5A5A5] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA3B2]"
            >
              Back to top

              <ArrowDown size={14} className="rotate-180" />
            </a>

            <p className="text-[10px] text-[#777777]">
              © {new Date().getFullYear()} Ruzzidan. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
