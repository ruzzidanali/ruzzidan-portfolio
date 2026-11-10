import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E] md:text-xs"
        >
          Full Stack Developer
          <span className="mx-3 text-[#D8D8D2]">/</span>
          Based in Malaysia
        </motion.p>

        {/* Main headline */}
        <div className="display-font text-[clamp(2.8rem,7.5vw,6.8rem)] font-semibold leading-[1.05] tracking-[-0.065em]">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-[#171717]"
          >
            Turning complex ideas
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#647C8E]"
          >
            into practical solutions.
          </motion.h1>
        </div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#777777] md:text-base"
        >
          I build web applications, backend systems and digital experiences that
          solve real-world problems through thoughtful engineering.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group flex items-center gap-3 bg-[#171717] px-7 py-4 text-xs font-medium text-white! transition-colors duration-300 hover:bg-[#647C8E]"
          >
            <span className="text-white">Explore my work</span>
            <ArrowUpRight
              size={15}
              className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 border border-[#D8D8D2] px-7 py-4 text-xs font-medium text-[#171717] transition-colors duration-300 hover:border-[#647C8E] hover:text-[#647C8E]"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#777777] transition-colors hover:text-[#647C8E]"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
