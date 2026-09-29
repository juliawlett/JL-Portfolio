"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import {
  MessageCircle,
  Sparkles,
  Target,
  Building2,
  Zap,
  Layers,
  Check,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  User,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFunnel() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    siteType: "Landing page de vendas / tráfego pago",
    niche: "",
    urgency: "O quanto antes (urgente)",
    clientName: "",
    notes: "",
  });

  const siteTypeOptions = [
    {
      id: "Landing page de vendas / tráfego pago",
      title: "Landing page de vendas",
      badge: "Foco em conversão",
      description: "Ideal para tráfego pago (Meta/Google Ads) e captação direta de clientes no WhatsApp.",
      icon: Target,
    },
    {
      id: "Site institucional completo",
      title: "Site institucional completo",
      badge: "Autoridade e marca",
      description: "Presença digital sólida com múltiplas páginas, serviços, credibilidade e SEO estruturado.",
      icon: Building2,
    },
    {
      id: "Redesign e aceleração de site lento",
      title: "Redesign e aceleração",
      badge: "Performance < 1s",
      description: "Reconstrução com código ultraleve moderno, melhorando pontuação no Google e retenção.",
      icon: Zap,
    },
    {
      id: "Sistema / portal web sob medida",
      title: "Sistema web sob medida",
      badge: "Painéis e portais",
      description: "Aplicações sob medida com autenticação, integrações de APIs, dashboards ou agendamento.",
      icon: Layers,
    },
  ];

  const urgencyOptions = [
    {
      id: "O quanto antes (urgente)",
      label: "O quanto antes (urgente)",
      detail: "Prioridade máxima de início",
    },
    {
      id: "Nas próximas 2 semanas",
      label: "Nas próximas 2 semanas",
      detail: "Prazo ideal para planejamento",
    },
    {
      id: "No próximo mês",
      label: "No próximo mês",
      detail: "Início estruturado sem pressa",
    },
    {
      id: "Apenas pesquisando valores",
      label: "Apenas pesquisando valores",
      detail: "Diagnóstico e estimativa sem custo",
    },
  ];

  const nicheSuggestions = [
    "Clínica & Saúde",
    "Advocacia & Direito",
    "Energia Solar & Engenharia",
    "Consultoria & Serviços B2B",
    "E-commerce & Varejo",
    "Arquitetura & Design",
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá Júlia! Gostaria de um orçamento para criação do meu site:
- *Nome:* ${formData.clientName || "Não informado"}
- *Tipo de site:* ${formData.siteType}
- *Nicho / Ramo:* ${formData.niche || "Geral"}
- *Previsão de início:* ${formData.urgency}
${formData.notes ? `- *Detalhes:* ${formData.notes}` : ""}

Vi as condições no seu portfólio e gostaria de verificar sua disponibilidade na agenda!`;

    const url = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const directWhatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Gostaria de conversar diretamente sobre a criação de um site para minha empresa."
  )}`;

  const currentStepTitle =
    step === 1
      ? "Qual é o objetivo principal do seu projeto?"
      : step === 2
      ? "Qual é o seu nicho e previsão de início?"
      : "Para quem devemos direcionar a proposta?";

  return (
    <section id="contato" className="section-accent py-24 relative overflow-hidden border-t border-light-border dark:border-dark-border">
      {/* Luz ambiente sutil decorativa de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-brand-500/5 dark:bg-brand-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Editorial da Seção com Simetria Central */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Orçamento e diagnóstico gratuito</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Vamos tirar seu projeto <span className="text-brand-600 dark:text-brand-400">do papel</span>?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Responda 3 perguntas rápidas para receber uma proposta personalizada ou fale diretamente no WhatsApp.
          </p>
        </motion.div>

        {/* Card Principal do Funil: Padrão max-w-7xl com Simetria e Espaçamento Calibrados */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-clean rounded-3xl p-6 sm:p-10 lg:p-12 border border-light-border dark:border-white/[0.08] shadow-lg relative bg-white dark:bg-dark-surface overflow-hidden"
        >
          {/* Filete luminoso superior sutil em dark mode */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent pointer-events-none" />

          {/* Stepper Fino com Indicadores e Título do Passo */}
          <div className="mb-8 pb-6 border-b border-slate-100 dark:border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900/40 text-brand-700 dark:text-brand-300 font-bold text-[11px] tracking-wide">
                  Etapa {step} de 3
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {currentStepTitle}
                </span>
              </div>

              {/* Indicadores de Passos em Pill e Botão Rápido WhatsApp */}
              <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-2">
                  {[
                    { num: 1, label: "Solução" },
                    { num: 2, label: "Segmento" },
                    { num: 3, label: "Contato" },
                  ].map((s) => {
                    const isActive = step === s.num;
                    const isPassed = step > s.num;

                    return (
                      <div key={s.num} className="flex items-center gap-1.5">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                            isActive
                              ? "bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/20"
                              : isPassed
                              ? "bg-emerald-600 text-white"
                              : "bg-slate-100 dark:bg-dark-bg text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {isPassed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : s.num}
                        </div>
                        <span
                          className={`text-xs font-medium hidden md:inline transition-colors ${
                            isActive
                              ? "text-slate-900 dark:text-white font-semibold"
                              : isPassed
                              ? "text-emerald-600 dark:text-emerald-400 font-medium"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-white/10" />

                {/* Botão Rápido de WhatsApp Direto */}
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition-all hover:scale-[1.02] shadow-2xs group cursor-pointer"
                  title="Falar diretamente com a Júlia no WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">WhatsApp direto</span>
                  <span className="sm:hidden">WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-600/70 dark:text-emerald-400/70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Linha Fina de Progresso com Transição Macia */}
            <div className="w-full bg-slate-100 dark:bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
              <motion.div
                className="bg-brand-600 h-full rounded-full"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* ETAPA 1: Tipo de site / Solução em 4 colunas perfeitamente simétricas */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Qual tipo de solução digital você busca para o seu negócio?
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Selecione a opção que melhor descreve o seu objetivo principal:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {siteTypeOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = formData.siteType === option.id;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, siteType: option.id })}
                          className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group relative ${
                            isSelected
                              ? "bg-brand-50/70 dark:bg-brand-950/40 border-brand-500 ring-2 ring-brand-500/20 shadow-sm"
                              : "bg-white dark:bg-dark-bg/60 border-light-border dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-sm"
                          }`}
                        >
                          <div>
                            {/* Linha Superior: Ícone e Radio Selector */}
                            <div className="flex items-center justify-between w-full mb-3.5">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-brand-600 text-white shadow-sm"
                                    : "bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400 group-hover:text-brand-600"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>

                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "border-brand-600 bg-brand-600 text-white"
                                    : "border-slate-300 dark:border-white/20 group-hover:border-slate-400"
                                }`}
                              >
                                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                              </div>
                            </div>

                            {/* Título com Altura Mínima Simétrica */}
                            <span
                              className={`text-sm sm:text-base font-bold block mb-1.5 min-h-[44px] flex items-center transition-colors ${
                                isSelected
                                  ? "text-brand-950 dark:text-white"
                                  : "text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400"
                              }`}
                            >
                              {option.title}
                            </span>

                            {/* Badge de Posicionamento */}
                            <span className="inline-block text-[10px] font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-0.5 rounded-md mb-3 border border-brand-200/60 dark:border-brand-900/40">
                              {option.badge}
                            </span>
                          </div>

                          {/* Descrição com Alinhamento e Borda Superior Fina */}
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[52px] pt-2.5 border-t border-slate-100 dark:border-white/[0.04]">
                            {option.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Ação com Altura Padronizada (h-12) e Atalho WhatsApp Direto */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors py-1 cursor-pointer group"
                    >
                      <span className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </span>
                      <span>Prefere tirar dúvidas antes? <strong className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2">Falar no WhatsApp direto</strong></span>
                    </a>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto h-12 px-7 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <span>Avançar para etapa 2</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ETAPA 2: Nicho e Urgência com grid em 4 colunas simétricas */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white">
                      Qual é o seu nicho ou ramo de atuação?
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="Ex: Clínica médica, advocacia, energia solar, consultoria, e-commerce..."
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full h-12 pl-10 pr-4 rounded-xl bg-white dark:bg-dark-bg border border-light-border dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-xs sm:text-sm"
                      />
                    </div>

                    {/* Sugestões Rápidas de Nicho */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-400 font-medium">Sugestões rápidas:</span>
                      {nicheSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setFormData({ ...formData, niche: suggestion })}
                          className={`text-[11px] px-3 py-1 rounded-lg border transition-colors cursor-pointer ${
                            formData.niche === suggestion
                              ? "bg-brand-50 dark:bg-brand-950/60 border-brand-400 text-brand-700 dark:text-brand-300 font-semibold"
                              : "bg-slate-50 dark:bg-dark-bg/60 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                          }`}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <label className="block text-sm font-bold text-slate-900 dark:text-white">
                      Qual é a previsão para iniciar este projeto?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                      {urgencyOptions.map((opt) => {
                        const isSelected = formData.urgency === opt.id;

                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: opt.id })}
                            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-full min-h-[96px] group ${
                              isSelected
                                ? "bg-brand-50/70 dark:bg-brand-950/40 border-brand-500 text-brand-950 dark:text-white ring-2 ring-brand-500/20 shadow-sm"
                                : "bg-white dark:bg-dark-bg/60 border-light-border dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-slate-300 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between w-full mb-2.5">
                              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                {opt.label}
                              </p>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "border-brand-600 bg-brand-600 text-white"
                                    : "border-slate-300 dark:border-white/20"
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>

                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                              {opt.detail}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Ações com Altura Padronizada (h-12) */}
                  <div className="pt-2 flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="h-12 px-6 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-dark-bg text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/[0.06] inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="h-12 px-7 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <span>Avançar para etapa final</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ETAPA 3: Nome, Observações, Resumo e Envio em layout 2 colunas equilibrado */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Coluna Esquerda: Dados de Contato e Detalhes (7 colunas) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                          Qual é o seu nome ou o da sua empresa?
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="Seu nome completo ou nome da empresa"
                            value={formData.clientName}
                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-white dark:bg-dark-bg border border-light-border dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                          Algum detalhe extra ou referência que gostaria de citar? (Opcional)
                        </label>
                        <div className="relative">
                          <textarea
                            rows={3}
                            placeholder="Ex: Já tenho identidade visual / Gostaria de fotos profissionais / Preciso integrar com formulário de agendamento..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg border border-light-border dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-xs sm:text-sm resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Coluna Direita: Resumo do Diagnóstico + Card da Júlia (5 colunas) */}
                    <div className="lg:col-span-5 space-y-3.5">
                      {/* Resumo Dinâmico do Diagnóstico */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-white/[0.06] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                            Resumo da sua solicitação:
                          </span>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-semibold cursor-pointer"
                          >
                            Alterar
                          </button>
                        </div>

                        <div className="flex flex-col gap-1.5 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">Solução:</span>
                            <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">
                              {siteTypeOptions.find((o) => o.id === formData.siteType)?.title || formData.siteType}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">Nicho:</span>
                            <span className="font-semibold text-slate-900 dark:text-white">
                              {formData.niche || "Não informado"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">Urgência:</span>
                            <span className="font-semibold text-slate-900 dark:text-white">
                              {formData.urgency}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Faixa de Garantia e Confiança com Avatar da Júlia */}
                      <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/30 flex items-center gap-3.5 text-xs text-slate-700 dark:text-slate-300">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-brand-200 dark:border-brand-800">
                          <Image
                            src="/images/foto-julia.png"
                            alt="Júlia Letícia"
                            width={44}
                            height={44}
                            className="object-cover object-top w-full h-full"
                          />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-1 ring-white" />
                        </div>

                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Atendimento direto com a Júlia Letícia
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                            Você receberá um diagnóstico técnico e orçamento detalhado no WhatsApp em até 2 horas úteis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ações Finais Padronizadas com h-12 */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-white/[0.06]">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="h-12 px-6 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-dark-bg text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all hover:bg-slate-50 dark:hover:bg-white/[0.06] inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="submit"
                      className="h-12 px-8 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 transition-all cursor-pointer hover:shadow-lg hover:shadow-brand-600/30 inline-flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar diagnóstico no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
