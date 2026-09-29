"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cases", href: "/#cases", sectionId: "cases" },
    { name: "Serviços", href: "/#servicos", sectionId: "servicos" },
    { name: "Planos e preços", href: "/#planos", sectionId: "planos" },
    { name: "Como funciona", href: "/#metodo", sectionId: "metodo" },
    { name: "Sobre", href: "/#sobre", sectionId: "sobre" },
    { name: "Dúvidas", href: "/#faq", sectionId: "faq" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    navLinks.forEach(({ sectionId }) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Gostaria de um orçamento para criar um site/landing page para meu negócio."
  )}`;

  // Efeito máquina de escrever no logo (@devjulia -> #devjulia -> .devjulia)
  const typewriterWords = ["@devjulia", "#devjulia", ".devjulia"];
  const [logoText, setLogoText] = useState("@devjulia");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIdx % typewriterWords.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (logoText === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setLogoText(currentWord.slice(0, logoText.length + 1));
        }, 110);
      }
    } else {
      if (logoText === "") {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % typewriterWords.length);
      } else {
        timer = setTimeout(() => {
          setLogoText(logoText.slice(0, -1));
        }, 60);
      }
    }

    return () => clearTimeout(timer);
  }, [logoText, isDeleting, wordIdx]);

  return (
    <>
      {/* Barra Fina de Progresso de Scroll no Topo da Tela */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-600 origin-left z-50 pointer-events-none"
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3.5 shadow-sm dark:shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identidade com Efeito Digitação Máquina de Escrever (@devjulia -> #devjulia -> .devjulia) */}
          <Link
            href="/"
            className="group flex items-center font-mono select-none w-[140px] sm:w-[165px] shrink-0 overflow-hidden"
            aria-label="Júlia Letícia - @devjulia"
          >
            <span className="font-mono text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors inline-flex items-center whitespace-nowrap">
              <span>{logoText}</span>
              <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-brand-600 dark:bg-brand-400 ml-1 translate-y-[2px] animate-pulse rounded-[1px]" />
            </span>
          </Link>

          {/* Links de Navegação Desktop (Tópicos refinados com cápsula moderna e 100% estável) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.04] p-1.5 rounded-full border border-slate-200/70 dark:border-white/[0.06] backdrop-blur-sm">
            {navLinks.map((link) => {
              const sectionId = link.sectionId;
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveSection(sectionId)}
                  className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-600 text-white shadow-sm shadow-brand-600/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.08] hover:shadow-2xs"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Ações Desktop: Toggle de Tema & CTA WhatsApp Apenas com Ícone Lucide */}
          <div className="hidden lg:flex items-center justify-end gap-2.5 w-[140px] sm:w-[165px] shrink-0">
            {/* Botão Dark/Light Mode */}
            <ThemeToggle />

            {/* CTA WhatsApp com Apenas Ícone Lucide */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com Júlia"
              title="Falar no WhatsApp"
              className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-2xs hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Ações Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-800/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Gaveta Mobile com AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-light-border dark:border-dark-border px-4 pt-4 pb-6 mt-3 space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => {
              const sectionId = link.sectionId;
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:text-brand-600"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar orçamento no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
