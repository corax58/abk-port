"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
      // Plain route (e.g. /projects) — let Link navigate normally.
      setMobileMenuOpen(false);
      return;
    }

    const targetPath = href.slice(0, hashIndex) || "/";
    if (pathname === targetPath) {
      // Already on the target page — smooth-scroll instead of reloading.
      e.preventDefault();
      const element = document.querySelector(href.slice(hashIndex));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise let Link navigate to the homepage and jump to the hash.
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all bg-background/80 backdrop-blur-md duration-300 border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <a
              href="#"
              className="text-2xl font-bold font-heading tracking-tight "
            >
              abubeker<span className="text-primary">.dev</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="sm"
                onClick={() => window.open("mailto:abubekercorax@gmail.com")}
                className="rounded-xs"
              >
                Hire Me
              </Button>
              <AnimatedThemeToggler />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <AnimatedThemeToggler />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b  overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button
                  className="w-full rounded-xs"
                  onClick={() => window.open("mailto:abubekercorax@gmail.com")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
