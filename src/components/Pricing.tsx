"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { Plan } from "@/types";
import {
  Check,
  Sparkles,
  MessageCircle,
  AlertCircle,
  ArrowUpRight,
  Clock,
  CreditCard,
  ShieldCheck,
  Globe,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const isPromo = siteConfig.promo.isActive;

  // Separa os 3 planos padrão de sites e o plano sob consulta horizontal
  const standardPlans = siteConfig.plans.filter((p) => p.id !== "sob-consulta");
  const customPlan = siteConfig.plans.find((p) => p.id === "sob-consulta") || siteConfig.plans[3];

  const getWhatsAppPlanUrl = (plan: Plan) => {
    const priceText = isPromo ? `R$ ${plan.pricePromo}` : `R$ ${plan.priceBase}`;
    const promoNote = isPromo ? " na condição promocional de " : " pelo valor de ";
    const message = `Olá Júlia! Gostaria de fechar o ${plan.name}${promoNote}${priceText} para meu negócio.`;
    return `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Escopo e prazo fechados",
      description: "Contrato claro com entrega de 3 a 15 dias úteis sem custos surpresa.",
    },
    {
      icon: CreditCard,
      title: "Pagamento facilitado",
      description: "50% de entrada no início e 50% somente após aprovação do projeto.",
    },
    {
      icon: Globe,
      title: "1º ano de domínio incluso",
      description: "Registro oficial .com.br como bônus em todos os planos de sites.",
    },
    {
      icon: Code2,
      title: "Código 100% autoral",
      description: "Sem mensalidades de construtores genéricos. O código do site é seu.",
    },
  ];

  return (
    <section id="planos" className="section-base py-24 relative overflow-hidden border-t border-light-border dark:border-dark-border">
      {/* Luz ambiente decorativa de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/5 dark:bg-brand-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Investimento transparente</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planos claros para quem quer{" "}
            <span className="text-brand-600 dark:text-brand-400">sair do improviso</span>.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Propostas evolutivas e objetivas: escolha o plano ideal para a fase atual da sua empresa, com prazo fechado e sem surpresas no orçamento.
          </p>

          {/* Banner de Aviso Promocional Dinâmico: Linha única sem quebra de texto */}
          {isPromo && (
            <div className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900/50 text-xs sm:text-sm text-brand-900 dark:text-brand-200 shadow-sm max-w-full">
              <AlertCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                <strong>{siteConfig.promo.badgeText}:</strong> {siteConfig.promo.urgencyNotice}
              </span>
            </div>
          )}
        </motion.div>

        {/* 1. LINHA SUPERIOR: Grid dos 3 Planos de Sites (Essencial, Profissional, Avançado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8">
          {standardPlans.map((plan: Plan, index: number) => {
            const displayPrice = isPromo ? plan.pricePromo : plan.priceBase;
            const hasDiscount = isPromo && plan.pricePromo < plan.priceBase;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-brand-500 shadow-xl shadow-brand-500/15 scale-100 lg:-translate-y-2 ring-4 ring-brand-500/10 bg-white dark:bg-dark-surface"
                    : "border-light-border dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-dark-surface shadow-sm"
                }`}
              >
                {/* Brilho suave que acompanha harmoniosamente as curvas do card */}
                {plan.popular && (
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-500/10 via-brand-500/5 to-transparent rounded-t-3xl pointer-events-none" />
                )}

                {/* Badge Flutuante no Plano Mais Escolhido perfeitamente integrado */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-600 text-white text-xs font-bold tracking-wide shadow-md shadow-brand-600/30 whitespace-nowrap flex items-center gap-1.5 ring-4 ring-white dark:ring-dark-surface z-20">
                    <Sparkles className="w-3.5 h-3.5 text-brand-200" />
                    <span>Mais escolhido por empresas</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Nome e Escopo */}
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {plan.name}
                    </h3>
                    
                    {/* Badge de Prazo e Páginas */}
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-[11px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      <Clock className="w-3 h-3 text-brand-600 dark:text-brand-400 shrink-0" />
                      <span>{plan.period}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed min-h-[38px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Bloco de Preço */}
                  <div className="pt-3 pb-3 border-y border-slate-100 dark:border-white/[0.06]">
                    {hasDiscount && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-slate-400 line-through">
                          De R$ {plan.priceBase.toLocaleString("pt-BR")}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-[10px] font-bold">
                          Condição especial
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-1">
                      {plan.prefix && (
                        <span className="text-xs text-slate-400 font-medium">
                          {plan.prefix}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">R$</span>
                      <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {displayPrice.toLocaleString("pt-BR")}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      <CreditCard className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>50% de entrada + 50% na aprovação</span>
                    </div>
                  </div>

                  {/* Lista de Recursos / Benefícios Inclusos */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      O que está incluso:
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => {
                        const isBonus = feature.includes("🎁");
                        const cleanFeature = feature.replace("🎁 ", "");

                        if (isBonus) {
                          return (
                            <li
                              key={feature}
                              className="p-2.5 rounded-xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-900/40 text-[11px] font-semibold text-brand-950 dark:text-brand-200 flex items-start gap-2"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{cleanFeature}</span>
                            </li>
                          );
                        }

                        return (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                          >
                            <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Botão de Ação WhatsApp */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/[0.06]">
                  <a
                    href={getWhatsAppPlanUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer ${
                      plan.popular
                        ? "bg-brand-600 hover:bg-brand-700 text-white shadow-brand-600/25 hover:shadow-brand-600/35"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/10"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Escolha o {plan.name.toLowerCase()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. LINHA INFERIOR: Card Horizontal Completo para Sistemas e Plataformas Sob Medida */}
        {customPlan && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
            className="card-clean rounded-3xl p-6 sm:p-8 lg:p-9 border border-light-border dark:border-white/[0.08] bg-white dark:bg-dark-surface shadow-sm relative overflow-hidden mb-12"
          >
            {/* Filete luminoso superior sutil */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Coluna 1: Título, Descrição e Preço (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  <span>Engenharia sob medida</span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {customPlan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {customPlan.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-400 font-medium">A partir de</span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">R$</span>
                    <span className="font-heading text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                      {(isPromo ? customPlan.pricePromo : customPlan.priceBase).toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-600 dark:text-brand-400 font-semibold mt-1">
                    Conforme escopo, arquitetura técnica e contrato fechado
                  </p>
                </div>
              </div>

              {/* Coluna 2: Recursos e Tecnologias Inclusas (4 cols) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/[0.06] pt-6 lg:pt-0 lg:pl-8 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  O que contempla esta modalidade:
                </p>
                <ul className="space-y-2.5">
                  {customPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 3: Botão de Contratação e Atendimento (3 cols) */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/[0.06] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center gap-3">
                <div className="text-left lg:text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Análise técnica de viabilidade</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Briefing direto com a desenvolvedora para estimar prazo e stack ideal.
                  </p>
                </div>

                <a
                  href={getWhatsAppPlanUrl(customPlan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar sistemas e plataformas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                <p className="text-[10px] text-center text-slate-400">
                  Sem intermediários • Resposta ágil pelo WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Faixa de Garantias e Segurança do Investimento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-clean rounded-2xl p-6 sm:p-8 border border-light-border dark:border-white/[0.08] bg-white dark:bg-dark-surface shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Rodapé Informativo */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          <p>
            * Condição promocional válida por tempo limitado. Os valores podem ser ajustados conforme o escopo final e materiais enviados.
          </p>
        </div>
      </div>
    </section>
  );
}
