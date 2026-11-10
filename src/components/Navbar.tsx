
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#D8D8D2] bg-[#F3F1EC]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="display-font text-2xl font-bold tracking-tight"
        >
          Ruzzidan<span className="text-[#647C8E]">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#555555] transition-colors duration-200 hover:text-[#647C8E]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="hidden items-center gap-2 md:flex">
          <span className="h-2 w-2 rounded-full bg-[#647C8E]" />
          <span className="text-xs text-[#555555]">
            Available for opportunities
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-[#171717] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#D8D8D2] bg-[#F3F1EC] md:hidden"
          >
            <div className="flex flex-col px-6 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[#D8D8D2] py-4 text-sm text-[#171717]"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#647C8E]" />
                <span className="text-xs text-[#555555]">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
