"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { ExternalLink } from "lucide-react";

export default function DynamicPrototype() {
  const projects = siteConfig.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentProject = projects[currentIndex];

  // Alternância automática fluida entre os cases a cada 5 segundos
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-2xl mx-auto lg:max-w-none select-none py-1 group"
    >
      {/* Halo de iluminação volumétrica ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-brand-500/[0.12] dark:bg-brand-500/[0.18] rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* MOCKUP MACBOOK PRO REAL 16" (800x489) - ENCAIXE SEM GAPS E SEM BARRAS      */}
      {/* ========================================================================= */}
      <div className="relative w-full aspect-[800/489] transition-transform duration-500 ease-out group-hover:scale-[1.01] drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
        
        {/* TELA INTERNA DO MACBOOK: Posicionamento milimétrico que desliza sob a moldura preta */}
        <div
          style={{
            top: "2.2%",
            left: "8.6%",
            width: "82.8%",
            height: "87.8%",
          }}
          className="absolute overflow-hidden bg-black rounded-t-[4px]"
        >
          {projects.map((proj, idx) => {
            const isActive = currentIndex === idx;
            return (
              <div
                key={`screen-${proj.slug}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={proj.image}
                  alt={`Site de ${proj.title} no MacBook`}
                  fill
                  priority={idx === 0}
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            );
          })}
        </div>

        {/* MOLDURA TRANSPARENTE OFICIAL APPLE MACBOOK PRO 16" */}
        <Image
          src="/images/mockup/mockup-apple-macbook-pro-16-2021-transparent.webp"
          alt="Apple MacBook Pro 16 Mockup"
          fill
          priority
          unoptimized
          className="pointer-events-none select-none z-10 object-contain"
        />

        {/* ========================================================================= */}
        {/* MOCKUP IPHONE REAL (389x800) - ENCAIXE SUB-BEZEL ZERO-GAP                */}
        {/* ========================================================================= */}
        <div className="absolute -bottom-2 -right-1 sm:-bottom-3 sm:-right-3 w-24 sm:w-34 md:w-40 aspect-[389/800] z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
          {/* TELA INTERNA DO IPHONE: Desliza sob o bisel de titânio em todas as 4 extremidades */}
          <div
            style={{
              top: "1.2%",
              left: "3.4%",
              right: "3.4%",
              bottom: "1.1%",
            }}
            className="absolute overflow-hidden rounded-[11%] bg-slate-950"
          >
            {projects.map((proj, idx) => {
              const isActive = currentIndex === idx;
              const mImg = proj.imageMobile || proj.image;
              return (
                <div
                  key={`mobile-${proj.slug}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={mImg}
                    alt={`Site de ${proj.title} no iPhone`}
                    fill
                    priority={idx === 0}
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100px, 160px"
                  />
                </div>
              );
            })}

            {/* BARRA INFERIOR DE GESTO DA APPLE (HOME INDICATOR) */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-0.5 sm:h-1 bg-white/35 rounded-full z-20 pointer-events-none" />
          </div>

          {/* MOLDURA TRANSPARENTE OFICIAL APPLE IPHONE 18 PRO */}
          <Image
            src="/images/mockup/mockup-apple-iphone-18-pro-2026-transparent.webp"
            alt="Apple iPhone Mockup"
            fill
            priority
            unoptimized
            className="pointer-events-none select-none z-10 object-contain"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BARRA INFERIOR REFINADA (SENIOR UI/UX: STATUS, PAGINAÇÃO E LINK AO VIVO)  */}
      {/* ========================================================================= */}
      <div className="mt-7 sm:mt-8 flex items-center justify-between gap-3 px-1 text-xs">
        {/* Status e Título do Projeto Ativo */}
        <div className="flex items-center gap-2 truncate">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold text-slate-900 dark:text-white truncate">
            {currentProject.title}
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
          <span className="text-slate-500 dark:text-slate-400 text-[11px] hidden sm:inline truncate">
            {currentProject.category}
          </span>
        </div>

        {/* Indicadores de Paginação Discretos e Clicáveis */}
        <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-full bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/[0.06]">
          {projects.map((proj, idx) => (
            <button
              key={proj.slug}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ver projeto ${proj.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-5 bg-brand-600 shadow-2xs"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Link Direto para o Site no Ar */}
        <a
          href={currentProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-semibold inline-flex items-center gap-1 shrink-0 transition-colors"
        >
          <span>Ver no ar</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
