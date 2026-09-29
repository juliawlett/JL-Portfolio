"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Code2 } from "lucide-react";

export default function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Halo de Luz Roxo Suave no Fundo */}
      <div className="absolute -inset-2 bg-brand-500/10 dark:bg-brand-900/20 rounded-full blur-2xl opacity-60 pointer-events-none" />

      {/* Container 3D com Perspectiva e Tilt */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
        className="relative z-10 cursor-pointer group"
      >
        <div
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
            transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-3xl overflow-hidden p-2 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-xl shadow-slate-200/50 dark:shadow-black/50 animate-float"
        >
          {/* Card interno com a foto do Avatar */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-dark-surface">
            <Image
              src="/images/foto-julia.png"
              alt="Júlia Letícia - Desenvolvedora Web & Web Designer"
              fill
              priority
              className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
            />

            {/* Vinheta sutil e reflexo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70" />

            {/* Badge Flutuante Inferior Dentro do Avatar */}
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 dark:bg-dark-surface/90 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Júlia Letícia</p>
                  <p className="text-[10px] text-brand-600 dark:text-brand-400 font-medium">Design & Dev Web</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-brand-50 dark:bg-white/[0.08] text-[10px] font-semibold text-brand-700 dark:text-slate-300">
                Projetos 2026
              </span>
            </div>
          </div>
        </div>

        {/* Card Flutuante 1: Métricas de Conversão */}
        <div
          style={{
            transform: `translateZ(30px) translateY(${isHovered ? -4 : 0}px)`,
            transition: "all 0.3s ease",
          }}
          className="absolute -top-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center gap-2.5 z-20 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Padrão Visual</p>
            <p className="text-xs font-bold text-slate-900 dark:text-white">100% Autoral</p>
          </div>
        </div>

        {/* Card Flutuante 2: Carregamento Ultra Rápido */}
        <div
          style={{
            transform: `translateZ(25px) translateY(${isHovered ? 4 : 0}px)`,
            transition: "all 0.3s ease",
          }}
          className="absolute -bottom-2 -right-3 sm:-right-5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border shadow-lg shadow-slate-200/50 dark:shadow-black/50 flex items-center gap-2.5 z-20 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Performance</p>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">PageSpeed 95+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
