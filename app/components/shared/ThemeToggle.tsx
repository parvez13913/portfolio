"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-zinc-700" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 transition-all active:scale-95 text-zinc-400 hover:text-white cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="transition-transform" />
      ) : (
        <Moon size={20} className="transition-transform" />
      )}
    </button>
  );
}
