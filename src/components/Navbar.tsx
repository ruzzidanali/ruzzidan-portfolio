
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

        {/* Mobile navigation */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            className="flex items-center justify-center text-[#171717] transition-colors hover:text-[#647C8E] md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[min(88vw,380px)] max-w-none border-l border-[#D8D8D2] bg-[#F3F1EC] p-0 text-[#171717] shadow-none"
          >
            <SheetHeader className="border-b border-[#D8D8D2] px-6 py-7">
              <SheetTitle className="display-font text-2xl font-bold tracking-tight">
                Ruzzidan<span className="text-[#647C8E]">.</span>
              </SheetTitle>

              <SheetDescription className="sr-only">
                Navigate through the portfolio sections.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-1 flex-col px-6 py-8">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#777777]">
                Navigation
              </p>

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-[#D8D8D2] py-5 text-lg text-[#171717] transition-colors hover:text-[#647C8E]"
                  >
                    <span>{link.label}</span>

                    <span className="text-xs text-[#999999] transition-transform group-hover:translate-x-1 group-hover:text-[#647C8E]">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-[#D8D8D2] pt-6">
                <span className="h-2 w-2 rounded-full bg-[#647C8E]" />

                <span className="text-xs text-[#555555]">
                  Available for opportunities
                </span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
