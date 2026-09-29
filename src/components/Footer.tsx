"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Visitei seu portfólio e gostaria de conversar sobre a criação de um site para o meu negócio."
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
          <div className="flex items-center gap-3.5 min-w-fit">
            <Link
              href="/"
              aria-label="Júlia Letícia — página inicial"
              className="grid size-10 place-items-center rounded-xl bg-brand-600 text-sm font-black tracking-[-0.08em] text-white shadow-sm shadow-brand-600/25"
            >
              JL
            </Link>
            <div>
              <p className="font-heading font-bold text-slate-900 dark:text-white leading-tight">
                Júlia Letícia
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {siteConfig.profile.location}
              </p>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><a href="/#cases" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Cases</a></li>
              <li><a href="/#servicos" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Serviços</a></li>
              <li><a href="/#planos" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Planos</a></li>
              <li><a href="/#metodo" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Processo</a></li>
              <li><a href="/#faq" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Dúvidas</a></li>
            </ul>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            <MessageCircle className="size-4" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-light-border dark:border-dark-border py-5 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Júlia Letícia. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {siteConfig.profile.instagram && (
              <a href={siteConfig.profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Instagram ↗</a>
            )}
            {siteConfig.profile.linkedin && (
              <a href={siteConfig.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">LinkedIn ↗</a>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
            >
              Voltar ao topo
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
