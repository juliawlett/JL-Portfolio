"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all flex items-center justify-center shadow-sm"
      title={theme === "light" ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-slate-700 hover:text-brand-600 transition-colors" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
      )}
    </button>
  );
}
