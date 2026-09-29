"use client";

import React, { useState } from "react";
import {
  Gauge,
  Smartphone,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Zap,
  TrendingDown,
  TrendingUp,
  Code2,
  Lock,
  Layers,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedMetric, AnimatedProgress } from "./AnimatedMetric";

interface PillarData {
  id: string;
  label: string;
  icon: React.ElementType;
  tagline: string;
  template: {
    highlight: string;
    details: string;
    metrics: string;
    metricLabel: string;
    isCritical: boolean;
  };
  custom: {
    highlight: string;
    details: string;
    metrics: string;
    metricLabel: string;
    isPositive: boolean;
  };
}

export default function AntiTemplate() {
  const [activeTab, setActiveTab] = useState<string>("speed");

  const pillars: PillarData[] = [
    {
      id: "speed",
      label: "Velocidade e PageSpeed",
      icon: Gauge,
      tagline: "Como o tempo de abertura impacta diretamente suas vendas e campanhas",
      template: {
        highlight: "Lentidão crônica e código inflado",
        details:
          "Plataformas pré-fabricadas carregam centenas de scripts residuais, fontes pesadas e folhas de estilo genéricas que você nem utiliza. No 4G, a página engasga e demora mais de 3.5 segundos.",
        metrics: "Score 41/100 · 3.8s LCP",
        metricLabel: "Google PageSpeed Mobile (Crítico)",
        isCritical: true,
      },
      custom: {
        highlight: "Carregamento instantâneo compilado na borda",
        details:
          "Construído com Next.js e Tailwind CSS, entregando somente os bytes essenciais compactados em servidores Edge globais. Seu site abre em frações de segundo mesmo com sinal oscilante de celular.",
        metrics: "Score 98/100 · 0.7s LCP",
        metricLabel: "Google PageSpeed Mobile (Excelente)",
        isPositive: true,
      },
    },
    {
      id: "mobile",
      label: "Experiência no celular",
      icon: Smartphone,
      tagline: "Mais de 85% dos seus potenciais clientes acessam através de smartphones",
      template: {
        highlight: "Adaptação forçada de desktop",
        details:
          "O construtor apenas 'comprime' o layout de computador para telas menores. O resultado são botões difíceis de clicar, títulos que quebram de forma estranha e formulários frios que afastam o lead.",
        metrics: "53% taxa de desistência",
        metricLabel: "Abandono por frustração ergonômica",
        isCritical: true,
      },
      custom: {
        highlight: "Engenharia mobile-first nativa",
        details:
          "Toda a hierarquia visual é desenhada considerando a pegada natural do polegar. Alvos de toque generosos de 44px+, tipografia nítida e botão de WhatsApp estratégico sempre acessível em 1 toque.",
        metrics: "Retenção de 94%",
        metricLabel: "Aproveitamento máximo do tráfego pago",
        isPositive: true,
      },
    },
    {
      id: "authority",
      label: "Autoridade e design autoral",
      icon: Sparkles,
      tagline: "A percepção de valor define se o cliente negocia desconto ou paga o seu preço",
      template: {
        highlight: "Visual clonado e genérico",
        details:
          "O mesmo modelo já foi baixado por milhares de outros profissionais e concorrentes. O visitante inconscientemente sente que sua empresa é improvisada e passa a comparar você apenas pelo menor preço.",
        metrics: "Zero diferenciação",
        metricLabel: "Percepção de commodity no mercado",
        isCritical: true,
      },
      custom: {
        highlight: "Identidade autoral sob medida",
        details:
          "Direção de arte criada para valorizar os diferenciais da sua marca. Tipografia refinada, contraste profissional e estética contemporânea que transmitem confiança instantânea logo no primeiro segundo.",
        metrics: "Autoridade imediata",
        metricLabel: "Justifica cobrança de honorários maiores",
        isPositive: true,
      },
    },
    {
      id: "tech",
      label: "Estabilidade e segurança",
      icon: ShieldCheck,
      tagline: "A tranquilidade de não acordar com o site fora do ar no meio de uma campanha",
      template: {
        highlight: "Castelo de cartas de plugins",
        details:
          "Dependência de 25+ plugins de desenvolvedores desconhecidos que precisam de atualizações constantes. Uma simples atualização pode quebrar o layout, quebrar o formulário ou abrir brechas de invasão.",
        metrics: "Alto risco de quebra",
        metricLabel: "Dependência e retrabalho constante",
        isCritical: true,
      },
      custom: {
        highlight: "Código limpo e blindado",
        details:
          "Arquitetura moderna sem banco de dados vulnerável nem plugins de terceiros. Seu site é publicado em rede com certificado SSL automático, proteção contra ataques e 99.9% de disponibilidade no ar.",
        metrics: "Zero plugins frágeis",
        metricLabel: "Estabilidade com manutenção descomplicada",
        isPositive: true,
      },
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section className="section-base py-20 relative border-y border-light-border dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Editorial com Voice Refinada */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Engenharia vs. templates prontos</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O custo invisível de um{" "}
            <span className="text-brand-600 dark:text-brand-400">template genérico</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Plataformas 'arrasta-e-solta' e geradores automáticos parecem econômicos no início, mas
            cobram um preço alto em tráfego desperdiçado, lentidão no celular e clientes que desistem no
            primeiro clique.
          </p>
        </motion.div>

        {/* Seletor de Pilares Interativos */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-inner gap-1">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-slate-900 dark:text-white shadow-sm bg-white dark:bg-dark-bg"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-400 dark:text-slate-500"
                    }`}
                  />
                  <span>{pillar.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visão de Contraste Lado a Lado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          >
            {/* CARD 1: O Caminho do Template Pronto */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-surface/60 border border-rose-200/70 dark:border-rose-900/30 shadow-sm flex flex-col justify-between">
              <div>
                {/* Header do Card */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-rose-100 dark:border-rose-950/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Template pronto ou construtor genérico
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Wix, WordPress pré-fabricado ou geradores automáticos
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40">
                    Alto atrito
                  </span>
                </div>

                {/* Bloco de Métrica Técnica Simulada */}
                <div className="my-6 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
                  <div className="flex items-center justify-between text-xs text-rose-800 dark:text-rose-300 font-medium mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
                      {currentPillar.template.metricLabel}
                    </span>
                    <AnimatedMetric key={`${currentPillar.id}-template-metric`} value={currentPillar.template.metrics} className="font-bold font-mono" />
                  </div>
                  <div className="w-full h-2 rounded-full bg-rose-200/60 dark:bg-rose-900/40 overflow-hidden">
                    <AnimatedProgress key={`${currentPillar.id}-template-bar`} value={40} className="h-full bg-rose-500 rounded-full" />
                  </div>
                </div>

                {/* Conteúdo Explicativo */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {currentPillar.template.highlight}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {currentPillar.template.details}
                  </p>
                </div>
              </div>

              {/* Consequência Financeira / Comercial */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-dark-border/60">
                <div className="flex items-start gap-2 text-xs text-rose-700 dark:text-rose-400 font-medium">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <span>
                    <strong>Impacto no bolso:</strong> você investe em anúncios, mas boa parte dos leads
                    desiste antes mesmo de falar com você.
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2: O Padrão Autoral Júlia Letícia */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-surface/90 border-2 border-brand-500/40 dark:border-brand-500/50 shadow-md flex flex-col justify-between">
              {/* Badge de Destaque */}
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand-600 text-white text-[11px] font-semibold tracking-wide shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-200" />
                <span>Padrão de alta conversão</span>
              </div>

              <div>
                {/* Header do Card */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Desenvolvimento autoral sob medida
                      </h3>
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                        Engenharia com Next.js, Tailwind e UX estratégica
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40">
                    Alta retenção
                  </span>
                </div>

                {/* Bloco de Métrica Técnica Simulada */}
                <div className="my-6 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                  <div className="flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300 font-medium mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {currentPillar.custom.metricLabel}
                    </span>
                    <AnimatedMetric key={`${currentPillar.id}-custom-metric`} value={currentPillar.custom.metrics} className="font-bold font-mono text-emerald-700 dark:text-emerald-400" delay={0.08} />
                  </div>
                  <div className="w-full h-2 rounded-full bg-emerald-200/60 dark:bg-emerald-900/40 overflow-hidden">
                    <AnimatedProgress key={`${currentPillar.id}-custom-bar`} value={98} className="h-full bg-emerald-500 rounded-full" delay={0.08} />
                  </div>
                </div>

                {/* Conteúdo Explicativo */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {currentPillar.custom.highlight}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentPillar.custom.details}
                  </p>
                </div>
              </div>

              {/* Consequência Financeira / Comercial */}
              <div className="mt-8 pt-4 border-t border-light-border dark:border-dark-border">
                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Retorno real:</strong> cada centavo em tráfego é aproveitado em uma página rápida,
                    com credibilidade imediata e foco em fechar negócios.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Barra de Síntese e Conclusão de Engenharia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl p-6 sm:p-7 bg-white dark:bg-dark-surface/90 border border-light-border dark:border-dark-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Um site não é um gasto estético — é o seu vendedor número um trabalhando 24 horas por dia.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Economizar na estrutura técnica que recebe seus clientes é como montar uma loja física impecável, mas trancar a porta na cara do visitante.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 divide-x divide-light-border dark:divide-dark-border">
            <div className="text-center pr-3">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                <AnimatedMetric value="0.7s" />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Tempo de carga</div>
            </div>
            <div className="text-center pl-6">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                <AnimatedMetric value="98+" delay={0.08} />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">PageSpeed Google</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
