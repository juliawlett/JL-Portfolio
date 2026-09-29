"use client";

import React, { useState } from "react";
import {
  Target,
  Building2,
  Zap,
  Layers,
  Sparkles,
  ArrowDown,
  Users,
  Clock,
  CheckCircle2,
  Check,
  TrendingUp,
  ShieldCheck,
  Search,
  Gauge,
  Database,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedMetric, AnimatedProgress } from "./AnimatedMetric";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"landing" | "institucional" | "redesign" | "sistemas">("landing");

  const tabs = [
    {
      id: "landing" as const,
      label: "Landing pages",
      badge: "Vendas diretas",
      icon: Target,
    },
    {
      id: "institucional" as const,
      label: "Sites institucionais",
      badge: "Autoridade",
      icon: Building2,
    },
    {
      id: "redesign" as const,
      label: "Redesign de site",
      badge: "Aceleração",
      icon: Zap,
    },
    {
      id: "sistemas" as const,
      label: "Sistemas web",
      badge: "Sob medida",
      icon: Layers,
    },
  ];

  return (
    <section id="servicos" className="section-surface py-20 sm:py-24 relative border-y border-light-border dark:border-dark-border overflow-hidden">
      {/* Luz ambiente sutil decorativa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/5 dark:bg-brand-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Soluções sob medida</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Qual é o formato ideal para o seu <span className="text-brand-600 dark:text-brand-400">momento atual</span>?
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Selecione abaixo a sua necessidade para entender o perfil de entrega, os benefícios práticos e o plano recomendado.
          </p>
        </motion.div>

        {/* Abas Horizontais com Muito Respiro e Ergonomia */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-dark-surface border border-light-border dark:border-white/[0.08] shadow-sm gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-600 dark:text-brand-400"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`hidden md:inline-block text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Painel Central com Layout Split e Amplo Espaçamento */}
        <div className="card-clean rounded-3xl p-6 sm:p-10 lg:p-12 border border-light-border dark:border-white/[0.08] bg-white dark:bg-dark-surface shadow-sm relative overflow-hidden">
          {/* Filete luminoso superior sutil */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* 1. ABA: LANDING PAGES */}
            {activeTab === "landing" && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
              >
                {/* Lado Esquerdo: Diagnóstico e Explicação Clara */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-3">
                      <Target className="w-3.5 h-3.5" />
                      <span>Foco em tráfego pago &amp; campanhas</span>
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                      Landing pages desenhadas para transformar cliques em clientes no WhatsApp
                    </h3>
                  </div>

                  {/* Para quem é & Cenário em Mini-Cards Simétricos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Para quem é</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Profissionais liberais, clínicas, advogados e infoprodutores que investem em anúncios (Google ou Meta Ads).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Quando contratar</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Quando você precisa de uma página única ultrarrápida, sem distrações e com foco 100% em conversão direta.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefícios práticos */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Entregáveis estratégicos inclusos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Carregamento em < 1s no 4G",
                        "Copywriting com quebra de objeções",
                        "Mobile-first ergonômico",
                        "Pixel do Meta & Google Analytics",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ação Padronizada (h-12) */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href="#planos"
                      className="h-12 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shrink-0"
                    >
                      <span>Ver valores do Plano essencial</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Entrega em 3 a 5 dias úteis com domínio grátis.</span>
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Card Visual com Altura Simétrica */}
                <div className="lg:col-span-5 h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full space-y-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Painel de Performance
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Lighthouse <AnimatedMetric value="99/100" />
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 space-y-2 shadow-2xs">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Tempo de carregamento no 4G:</span>
                          <AnimatedMetric value="0.6 segundos" className="text-emerald-600 text-sm font-bold" delay={0.08} />
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                          <AnimatedProgress value={95} className="bg-emerald-500 h-full rounded-full" delay={0.12} />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 flex items-center gap-3.5 shadow-2xs">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Retenção de tráfego</p>
                          <p className="text-sm font-bold text-slate-900 dark:text-white"><AnimatedMetric value="+38% em mensagens no WhatsApp" delay={0.16} /></p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Construída sem construtores lentos como Wix ou Elementor. Código Next.js puro para máxima taxa de conversão.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. ABA: SITES INSTITUCIONAIS */}
            {activeTab === "institucional" && (
              <motion.div
                key="institucional"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
              >
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-3">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Presença digital &amp; autoridade de marca</span>
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                      Sites institucionais que transmitem a verdadeira solidez da sua empresa
                    </h3>
                  </div>

                  {/* Para quem é & Cenário em Mini-Cards Simétricos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Para quem é</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Clínicas médicas, consultórios, escritórios de advocacia, consultorias e empresas B2B consolidadas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Quando contratar</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Quando clientes pesquisam sua marca e você precisa de uma presença impecável com credibilidade imediata.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Entregáveis estratégicos inclusos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Estrutura completa (Início, Sobre, Serviços, Contato)",
                        "SEO avançado para buscas no Google",
                        "Design 100% autoral e exclusivo",
                        "Card visual de compartilhamento nas redes",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href="#planos"
                      className="h-12 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shrink-0"
                    >
                      <span>Ver valores do Plano profissional</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>O formato mais escolhido por empresas consolidadas.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Arquitetura de Navegação Corporativa
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-900/40">
                          4 páginas
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { title: "Página Inicial", desc: "Apresentação de impacto e diferenciais da empresa" },
                          { title: "Sobre / História", desc: "Autoridade, credenciais e trajetória dos sócios" },
                          { title: "Serviços & Especialidades", desc: "Detalhamento claro com quebra de dúvidas" },
                          { title: "Contato & Localização", desc: "Mapa, WhatsApp, formulário e dados oficiais" },
                        ].map((page, idx) => (
                          <div
                            key={page.title}
                            className="p-3 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 flex items-center justify-between shadow-2xs"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-900 dark:text-white">
                                {idx + 1}. {page.title}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">{page.desc}</p>
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40 shrink-0">
                              SEO Ativo
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <Search className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      <span>Indexação completa no Google para o nome da sua marca.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. ABA: REDESIGN DE SITE */}
            {activeTab === "redesign" && (
              <motion.div
                key="redesign"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
              >
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-3">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Performance &amp; revitalização</span>
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                      Reconstrua seu site lento e acabe com o desperdício de clientes
                    </h3>
                  </div>

                  {/* Para quem é & Cenário em Mini-Cards Simétricos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Para quem é</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Empresas que já possuem site (Wix, WordPress, Elementor), mas sofrem com lentidão e baixa conversão.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Quando contratar</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Quando o site demora mais de 3s para abrir no celular, afasta clientes exigentes e tem nota vermelha no Google.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Entregáveis estratégicos inclusos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Aceleração para nota 95+ no PageSpeed",
                        "Design moderno sem visual genérico de template",
                        "Preservação do domínio e histórico no Google",
                        "Eliminação de plugins pesados e riscos de invasão",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href="#planos"
                      className="h-12 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shrink-0"
                    >
                      <span>Ver opções de planos para redesign</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Migração segura sem tirar seu site do ar.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Comparativo de Transformação Real
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
                          PageSpeed
                        </span>
                      </div>

                      {/* Antes */}
                      <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40 space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400">
                          <span>Antes (Construtor lento / WP antigo)</span>
                          <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-[10px]">3.8s no 4G</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          Plugins pesados, códigos residuais e mais de 50% dos visitantes desistindo antes da página abrir.
                        </p>
                      </div>

                      {/* Depois */}
                      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <span>Depois (Engenharia Next.js sob medida)</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-[10px] font-bold">0.7s no 4G</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          Nota 98+ no Google, carregamento instantâneo e layout moderno que converte visitantes em clientes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <Gauge className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Menor custo por clique em anúncios devido à alta qualidade técnica.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. ABA: SISTEMAS WEB */}
            {activeTab === "sistemas" && (
              <motion.div
                key="sistemas"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
              >
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-3">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Engenharia de software &amp; automação</span>
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                      Sistemas web e portais sob medida para operações que cresceram
                    </h3>
                  </div>

                  {/* Para quem é & Cenário em Mini-Cards Simétricos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Para quem é</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Startups, clínicas com prontuário/agendamento próprio e empresas que precisam automatizar rotinas manuais.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">Quando contratar</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          Quando um site comum não atende mais e você precisa de login, área restrita, painéis gerenciais ou APIs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Entregáveis estratégicos inclusos:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Frontend e backend integrados com banco de dados",
                        "Autenticação segura e área de membros com login",
                        "Painel administrativo com relatórios",
                        "Integrações com APIs, webhooks e nuvem",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href="#planos"
                      className="h-12 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shrink-0"
                    >
                      <span>Ver detalhes de Sistemas sob medida</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Escopo técnico personalizado conforme contrato.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 dark:bg-dark-bg/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Módulos da Arquitetura Sob Medida
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-900/40">
                          Full-Stack
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 flex items-center gap-3.5 shadow-2xs">
                          <div className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Área de Clientes com Login</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Acesso seguro por e-mail e senha com níveis de permissão</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 flex items-center gap-3.5 shadow-2xs">
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Banco de Dados em Nuvem</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Dados seguros, escaláveis e com backups automatizados</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200/60 dark:border-white/5 flex items-center gap-3.5 shadow-2xs">
                          <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800/40 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Painel Administrativo Próprio</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Gestão simplificada de clientes, agendamentos ou pedidos</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Construído sob demanda de acordo com o fluxo de trabalho da sua empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
