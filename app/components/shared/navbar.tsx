"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 flex items-center justify-center transition-all group-hover:scale-110">
              <span className="text-white font-bold text-2xl tracking-tighter">
                P
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tighter text-zinc-900 dark:text-white">
                Parvez
              </h1>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 -mt-1 font-mono">
                WEB DEVELOPER
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-zinc-900 dark:after:bg-white after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-white/10 py-8 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6 px-6 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-2 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}