import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Introduction */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#647C8E] md:text-xs"
        >
          Full Stack Developer
          <span className="mx-3 text-[#D8D8D2]">/</span>
          Based in Malaysia
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="display-font text-[clamp(2.8rem,7.5vw,6.8rem)] font-semibold leading-[1.05] tracking-[-0.065em]"
        >
          <motion.span
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="block text-[#171717]"
          >
            Turning complex ideas
          </motion.span>

          <motion.span
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-[#647C8E]"
          >
            into practical solutions.
          </motion.span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#777777] md:text-base"
        >
          I build web applications, backend systems and digital experiences that
          solve real-world problems through thoughtful engineering.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#work"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="group flex items-center gap-3 bg-[#171717] px-7 py-4 text-xs font-medium text-white! transition-colors duration-300 hover:bg-[#647C8E]"
          >
            <span className="text-white!">Explore my work</span>

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="flex items-center gap-2 border border-[#D8D8D2] px-7 py-4 text-xs font-medium text-[#171717] transition-colors duration-300 hover:border-[#647C8E] hover:text-[#647C8E]"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#777777] transition-colors hover:text-[#647C8E]"
        aria-label="Scroll to selected work"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
