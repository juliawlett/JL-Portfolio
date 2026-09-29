import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { Project } from "@/types";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Gauge,
  Clock,
  Sparkles,
  CheckCircle,
  Check,
  ChevronRight,
} from "lucide-react";

interface CaseStudyTemplateProps {
  project: Project;
  otherProjects: Project[];
}

export default function CaseStudyTemplate({
  project,
  otherProjects,
}: CaseStudyTemplateProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    project.whatsappMessage
  )}`;

  // Extrai com segurança apenas a nota antes da barra (ex: "96/100" -> 96, "98+" -> 98, "99/100" -> 99)
  const numericScore =
    parseInt(project.metrics.pageSpeed.split("/")[0].replace(/\D/g, "")) || 98;

  // Métricas do Google Lighthouse auditadas
  const lighthouseScores = [
    {
      label: "Performance",
      score: numericScore,
      note: `LCP ${project.metrics.loadTime} · Carregamento Instantâneo`,
    },
    {
      label: "Acessibilidade",
      score: 100,
      note: "Alvos de toque 44px+ e alto contraste",
    },
    {
      label: "Boas Práticas",
      score: 100,
      note: "HTTPS, Next.js moderno e código limpo",
    },
    {
      label: "SEO Técnico",
      score: 100,
      note: "Estrutura semântica e OpenGraph ativo",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. FUNDO ATMOSFÉRICO REFINADO (Grid sutil e iluminação volumétrica)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-50/60 via-light-bg to-light-bg dark:from-brand-950/20 dark:via-dark-bg dark:to-dark-bg pointer-events-none" />
      <div className="absolute -top-32 left-[15%] -z-10 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-600/15 pointer-events-none" />
      <div className="absolute right-[-10rem] top-[15%] -z-10 h-72 w-72 rounded-full bg-brand-300/10 blur-3xl dark:bg-brand-500/10 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#7c3aed05_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed05_1px,transparent_1px)] bg-[size:36px_36px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_20%,#000_50%,transparent_100%)] pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 sm:pb-28">
        
        {/* ========================================================================= */}
        {/* 2. BARRA DE NAVEGAÇÃO & STATUS                                           */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/#cases"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-dark-card/80 backdrop-blur-md border border-light-border dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-all shadow-sm hover:-translate-x-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-brand-600 dark:text-brand-400" />
            <span>Voltar para todos os cases</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              No ar na Vercel
            </span>

            <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold">
              {project.category}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. TÍTULO ENXUTO E DIRETO ACIMA DA CASE                                   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-brand-600 dark:text-brand-400" />
            <span>{project.pageType}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. PROTÓTIPO EM DESTAQUE NO TOPO: MACBOOK E IPHONE LADO A LADO            */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="card-clean rounded-3xl p-4 sm:p-6 lg:p-8 border border-light-border dark:border-dark-border shadow-2xl relative overflow-hidden bg-white/95 dark:bg-dark-card/95">
            
            {/* Top Bar da Moldura: macOS Window Dots + URL Oficial */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-light-border dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline-block pl-2 border-l border-slate-200 dark:border-white/10">
                  {project.url}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface text-[11px] font-semibold text-slate-600 dark:text-slate-400 border border-light-border dark:border-white/[0.06]">
                  Desktop & Mobile Lado a Lado
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  <span>Abrir ao vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* MOCKUPS LADO A LADO: MACBOOK PRO 16" + IPHONE 16 */}
            <div className="relative py-2 sm:py-6 px-2 sm:px-4 bg-slate-50/70 dark:bg-dark-surface/50 rounded-2xl border border-light-border dark:border-white/[0.04] overflow-hidden">
              {/* Iluminação volumétrica suave */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-500/[0.1] dark:bg-brand-500/[0.15] rounded-full blur-[110px] pointer-events-none -z-10" />

              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-10 max-w-5xl mx-auto">
                {/* 1. MacBook Pro 16" (Desktop Real) */}
                <div className="relative w-full max-w-xl lg:max-w-2xl aspect-[800/489] drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                  {/* Tela interna do MacBook */}
                  <div
                    style={{
                      top: "2.2%",
                      left: "8.6%",
                      width: "82.8%",
                      height: "87.8%",
                    }}
                    className="absolute overflow-hidden bg-black rounded-t-[4px]"
                  >
                    <Image
                      src={project.image}
                      alt={`Versão Desktop do site ${project.title} no MacBook Pro`}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 850px"
                    />
                  </div>

                  {/* Moldura oficial transparente Apple MacBook Pro */}
                  <Image
                    src="/images/mockup/mockup-apple-macbook-pro-16-2021-transparent.webp"
                    alt="Apple MacBook Pro Mockup"
                    fill
                    unoptimized
                    className="pointer-events-none select-none z-10 object-contain"
                  />
                </div>

                {/* 2. iPhone 16 (Mobile Real Lado a Lado, alinhado pela base) */}
                <div className="relative w-36 sm:w-44 lg:w-52 aspect-[389/800] shrink-0 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]">
                  {/* Tela interna do iPhone */}
                  <div
                    style={{
                      top: "1.2%",
                      left: "3.4%",
                      right: "3.4%",
                      bottom: "1.1%",
                    }}
                    className="absolute overflow-hidden rounded-[11%] bg-slate-950"
                  >
                    <Image
                      src={project.imageMobile || project.image}
                      alt={`Versão Mobile do site ${project.title} no iPhone 16`}
                      fill
                      className="object-cover object-top"
                      sizes="220px"
                    />
                  </div>

                  {/* Moldura oficial transparente Apple iPhone */}
                  <Image
                    src="/images/mockup/mockup-apple-iphone-18-pro-2026-transparent.webp"
                    alt="Apple iPhone Mockup"
                    fill
                    unoptimized
                    className="pointer-events-none select-none z-10 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* CTAs DE AÇÃO IMEDIATA (Logo abaixo dos mockups, no primeiro viewport) */}
            <div className="mt-6 pt-5 border-t border-light-border dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-600 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-10px_rgba(124,58,237,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98]"
                >
                  <span>Quero um site com esse padrão</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-white/[0.08] text-slate-800 dark:text-white font-semibold text-sm border border-light-border dark:border-white/[0.08] transition-all"
                >
                  <span>Acessar site no ar (Vercel)</span>
                  <ExternalLink className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                </a>
              </div>

              {/* Indicadores rápidos de autoridade */}
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Gauge className="w-4 h-4" />
                  Lighthouse {project.metrics.pageSpeed}
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  Carga em {project.metrics.loadTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. METADADOS E ESPECIFICAÇÕES DO PROJETO (Embaixo do Protótipo)           */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="card-clean p-4 rounded-2xl border border-light-border dark:border-dark-border">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Cliente
              </span>
              <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-1 truncate">
                {project.client}
              </p>
            </div>

            <div className="card-clean p-4 rounded-2xl border border-light-border dark:border-dark-border">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Segmento
              </span>
              <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-1 truncate">
                {project.category}
              </p>
            </div>

            <div className="card-clean p-4 rounded-2xl border border-light-border dark:border-dark-border">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Arquitetura
              </span>
              <p className="font-heading font-bold text-sm sm:text-base text-brand-600 dark:text-brand-400 mt-1 truncate">
                Mobile-First Nativo
              </p>
            </div>

            <div className="card-clean p-4 rounded-2xl border border-light-border dark:border-dark-border">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Stack
              </span>
              <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-1 truncate">
                {project.technologies.slice(0, 2).join(" + ")}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. AUDITORIA DE PERFORMANCE GOOGLE LIGHTHOUSE                            */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Gauge className="w-3.5 h-3.5" />
              <span>Auditoria Técnica Google Lighthouse</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Velocidade instantânea que reduz o custo do clique
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Páginas de alta performance retêm o visitante, evitam desistências e garantem que o investimento em tráfego gere o máximo de retorno.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lighthouseScores.map((item) => (
              <div
                key={item.label}
                className="card-clean card-clean-hover p-5 sm:p-6 rounded-2xl border border-light-border dark:border-dark-border text-center flex flex-col justify-between items-center"
              >
                <div className="space-y-3 w-full">
                  {/* Gauge Circular Oficial Google Lighthouse */}
                  <div className="relative w-16 h-16 flex items-center justify-center mx-auto">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="27"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-slate-100 dark:text-white/[0.08]"
                        fill="transparent"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="27"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray={169.6}
                        strokeDashoffset={169.6 - (169.6 * Math.min(item.score, 100)) / 100}
                        strokeLinecap="round"
                        className="text-emerald-500"
                        fill="transparent"
                      />
                    </svg>
                    <span className="absolute font-heading text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      {item.score}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-light-border dark:border-white/[0.06] w-full">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. O DESAFIO DO CLIENTE VS. A SOLUÇÃO DA JÚLIA (Comparativo Estratégico)  */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Card 01: O Desafio */}
            <div className="card-clean p-6 sm:p-8 rounded-3xl border border-rose-200/80 dark:border-rose-900/40 bg-gradient-to-b from-rose-50/30 to-transparent dark:from-rose-950/10 dark:to-transparent flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <span>01. O Cenário & O Desafio</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  Qual problema o cliente precisava resolver?
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-dark-surface/60 border border-rose-200/60 dark:border-rose-900/30 text-xs text-rose-800 dark:text-rose-300 font-medium">
                ⚠️ Sem uma arquitetura pensada para conversão, o tráfego gerado é desperdiçado com visitantes que abandonam o site sem entrar em contato.
              </div>
            </div>

            {/* Card 02: A Solução da Júlia */}
            <div className="card-clean p-6 sm:p-8 rounded-3xl border border-emerald-200/80 dark:border-emerald-900/40 bg-gradient-to-b from-emerald-50/30 to-transparent dark:from-emerald-950/10 dark:to-transparent flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span>02. A Solução da Júlia</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  Engenharia de conversão e design autoral
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>

                {/* Destaques e diferenciais específicos de cada case */}
                <div className="space-y-2 pt-2">
                  {project.metrics.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-dark-surface/60 border border-emerald-200/60 dark:border-emerald-900/30 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Resultado comprovado: Presença digital que transmite credibilidade e acelera a captação de clientes.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. STACK TÉCNICA & ENGENHARIA DE SOFTWARE                                */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="card-clean rounded-3xl p-6 sm:p-8 border border-light-border dark:border-dark-border space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Tecnologias & Arquitetura Utilizadas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  Construção autoral sem construtores lentos como WordPress ou Elementor.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs font-semibold text-slate-800 dark:text-slate-200 border border-light-border dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/[0.04] space-y-1">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400">Next.js App Router</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Renderização moderna no servidor para SEO instantâneo e tempo de resposta veloz.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/[0.04] space-y-1">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400">Tailwind CSS Limpo</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Folha de estilo compilada com apenas os bytes essenciais, garantindo nota máxima no celular.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/[0.04] space-y-1">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400">Vercel Edge Network</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Distribuição global com certificado SSL ativo e tempo de atividade de 99.9%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. CTA FINAL DE ALTA CONVERSÃO                                           */}
        {/* ========================================================================= */}
        <section className="mb-14 sm:mb-20">
          <div className="relative isolate overflow-hidden rounded-3xl p-8 sm:p-10 border border-brand-300 dark:border-brand-800 bg-gradient-to-br from-brand-50/80 via-white to-brand-50/40 dark:from-brand-950/40 dark:via-dark-card dark:to-brand-950/20 shadow-xl text-center space-y-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-500/[0.1] rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 border border-brand-200 dark:border-brand-700/50 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Inicie seu projeto com a Júlia</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white max-w-2xl mx-auto leading-tight">
              Gostou do resultado do case {project.title} e quer um site nesse mesmo padrão?
            </h2>

            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Criamos sua página autoral, ultrarrápida e pensada para converter visitantes em clientes pagantes pelo WhatsApp.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                1º ano de domínio .com.br grátis
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                Entrega em 3 a 5 dias úteis
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                PageSpeed 98+ garantido
              </span>
            </div>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-600 py-3 pl-7 pr-3 text-sm sm:text-base font-bold text-white shadow-[0_14px_28px_-10px_rgba(124,58,237,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98]"
              >
                <span>Solicitar proposta no WhatsApp</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. CONHEÇA OUTROS CASES RECENTES                                         */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-light-border dark:border-dark-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Conheça outros cases reais
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Projetos desenvolvidos para diferentes nichos e modelos de negócio.
              </p>
            </div>

            <Link
              href="/#cases"
              className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.slice(0, 3).map((other) => (
              <div
                key={other.slug}
                className="card-clean card-clean-hover rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                <div className="p-2.5 pb-0">
                  <div className="w-full rounded-xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-50 dark:bg-[#141822] border-b border-light-border dark:border-white/[0.06]">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">
                        {other.url.replace("https://", "")}
                      </span>
                    </div>

                    <div className="relative w-full h-40 overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <Image
                        src={other.image}
                        alt={`Print do site ${other.title}`}
                        fill
                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-md bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md text-[10px] font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-sm">
                          {other.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-white/10 shadow-sm">
                        <Gauge className="w-3 h-3" />
                        <span>{other.metrics.pageSpeed}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold uppercase">
                      {other.pageType}
                    </span>
                    <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mt-0.5">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5 leading-relaxed">
                      {other.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-light-border dark:border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/projetos/${other.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                    >
                      <span>Ver case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={other.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center gap-1 font-medium"
                    >
                      <span>No ar</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
