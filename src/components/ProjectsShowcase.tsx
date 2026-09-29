"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { Project } from "@/types";
import { ExternalLink, ArrowRight, Gauge, Clock, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Serviços & B2B",
    "Luxo & Varejo",
    "Gastronomia & Lazer",
    "Saúde & Bem-Estar",
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="cases" className="section-base py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção com Animação de Entrada */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Portfólio Selecionado & Cases Reais</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projetos reais pensados para <span className="text-brand-600 dark:text-brand-400">gerar faturamento</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Cada negócio possui uma dor e uma audiência única. Conheça as páginas desenvolvidas com engenharia de conversão, design autoral e velocidade instantânea.
          </p>

          {/* Abas de Filtros por Categoria */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-105"
                    : "bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white border border-light-border dark:border-dark-border"
                }`}
              >
                {cat}
                {cat === "Todos" && ` (${siteConfig.projects.length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de Cards dos Projetos com Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="card-clean rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              {/* Header do Card (Mockup do Navegador com a Foto Real do Projeto) */}
              <div className="p-3 pb-0">
                <div className="w-full rounded-xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border overflow-hidden group-hover:border-brand-300 dark:group-hover:border-brand-700 transition-all shadow-sm">
                  {/* Top Bar simulando Browser */}
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-[#141822] border-b border-light-border dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate max-w-[150px]">
                      {project.url.replace("https://", "")}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-600 transition-colors"
                      title="Abrir site no ar"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Imagem Real do Print com Efeito Hover */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      alt={`Print oficial do site ${project.title}`}
                      fill
                      className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badges Flutuantes sobre a Imagem */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md text-[10px] font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-white/10 shadow-sm">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>{project.metrics.pageSpeed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-brand-600 dark:text-brand-400 font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{project.pageType}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-light-surface dark:bg-white/[0.04] text-[10px] font-medium text-slate-600 dark:text-slate-400 border border-light-border dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ações: Ver Case Dedicado e Site ao Vivo */}
                <div className="pt-4 border-t border-light-border dark:border-white/[0.07] flex items-center justify-between gap-3">
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline transition-colors"
                  >
                    <span>Estudo de caso</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-light-surface dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-200 border border-light-border dark:border-white/[0.08] transition-colors"
                  >
                    <span>Ver no ar</span>
                    <ExternalLink className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
