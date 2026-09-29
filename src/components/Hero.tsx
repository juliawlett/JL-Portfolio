"use client";

import React from "react";
import DynamicPrototype from "./DynamicPrototype";
import { siteConfig } from "@/data/config";
import { ArrowRight, Sparkles, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const credibilitySignals = [
  {
    title: "Design autoral",
    description: "que valoriza sua marca",
    icon: Sparkles,
  },
  {
    title: "Experiência no celular",
    description: "pensada em cada detalhe",
    icon: Smartphone,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const whatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Visitei seu portfólio e gostaria de solicitar um orçamento para o meu site."
  )}`;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-50/70 via-light-bg to-light-bg dark:from-brand-950/20 dark:via-dark-bg dark:to-dark-bg" />
      <div className="absolute -top-32 left-[18%] -z-10 h-80 w-80 rounded-full bg-brand-400/15 blur-3xl dark:bg-brand-600/20" />
      <div className="absolute right-[-10rem] top-[18%] -z-10 h-72 w-72 rounded-full bg-brand-300/15 blur-3xl dark:bg-brand-500/10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#7c3aed07_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed07_1px,transparent_1px)] bg-[size:36px_36px] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_28%,#000_48%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-xl text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/75 px-3.5 py-1.5 text-xs font-bold tracking-wide text-brand-700 shadow-sm dark:border-brand-900/60 dark:bg-dark-card/70 dark:text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para novos projetos
            </span>

            <h1 id="hero-title" className="mt-6 font-heading text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.45rem] dark:text-white">
              Seu negócio merece ser{" "}
              <span className="text-brand-600 dark:text-brand-400">encontrado — e escolhido.</span>
            </h1>

            <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300">
              <strong className="block text-slate-900 dark:text-white">Site profissional. Claro, rápido e feito para vender.</strong>
              <span className="mt-2 block">Transformo o que você faz em uma presença digital que transmite confiança, valoriza sua marca e facilita a chegada de novos clientes.</span>
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand-600 py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_14px_28px_-14px_rgba(124,58,237,0.72)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98]"
              >
                <span>Solicitar orçamento</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#cases"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-4 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
              >
                Conhecer projetos reais <span className="ml-1.5 text-brand-600 dark:text-brand-400">↓</span>
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 text-left min-[400px]:grid-cols-2">
              {credibilitySignals.map(({ title, description, icon: Icon }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] dark:border-white/[0.06] dark:bg-dark-card/80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold leading-snug text-slate-900 dark:text-white">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full"
          >
            <DynamicPrototype />
          </motion.div>
        </div>
      </div>
      <a
        href="#cases"
        aria-label="Rolar para conhecer os projetos"
        className="absolute bottom-4 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-brand-600/60 transition-colors duration-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4 focus-visible:ring-offset-light-bg lg:bottom-6 dark:text-brand-400/70 dark:hover:text-brand-300 dark:focus-visible:ring-offset-dark-bg"
      >
        <span aria-hidden="true" className="flex h-7 w-[18px] justify-center overflow-hidden rounded-full border border-current pt-1.5">
          <motion.span
            className="h-1.5 w-px rounded-full bg-current"
            initial={false}
            whileInView={reduceMotion ? { y: 0, opacity: 1 } : { y: [0, 7, 7], opacity: [0.8, 0.8, 0] }}
            viewport={{ once: false }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.8, repeat: Infinity, repeatDelay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          />
        </span>
      </a>
    </section>
  );
}
