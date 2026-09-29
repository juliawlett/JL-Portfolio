"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import {
  Target,
  Layout,
  Code2,
  Rocket,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StepData {
  step: string;
  number: number;
  title: string;
  shortTitle: string;
  timeframe: string;
  icon: React.ElementType;
  reasoning: string;
  premises: { label: string; desc: string }[];
  actions: string[];
  deliverable: {
    title: string;
    description: string;
  };
}

export default function Methodology() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepData[] = [
    {
      step: "01",
      number: 1,
      title: "Briefing e estratégia de conversão",
      shortTitle: "Estratégia e copy",
      timeframe: "Dias 1 a 3",
      icon: Target,
      reasoning:
        "Antes de desenhar qualquer botão, precisamos responder à pergunta central: por que alguém compraria de você e não do seu concorrente? Mapeamos as dores do seu cliente e organizamos a mensagem para que cada seção quebre uma objeção real de compra.",
      premises: [
        { label: "Público e objeções", desc: "Mapeamento do perfil de comprador e do que o impede de agir." },
        { label: "Diferenciação", desc: "Destaque do que torna seu serviço superior e único no mercado." },
        { label: "Hierarquia persuasiva", desc: "Ordem dos blocos pensada para conduzir o lead com clareza até o contato." },
      ],
      actions: [
        "Estudo do seu modelo de negócio, diferenciais e concorrentes diretos",
        "Roteirização completa da copy (textos, títulos e botões de chamada)",
        "Estruturação lógica das seções para retenção máxima de atenção",
      ],
      deliverable: {
        title: "Roteiro estratégico de copy aprovado",
        description:
          "Você recebe e valida no WhatsApp todo o texto e a ordem dos blocos antes de iniciarmos o design.",
      },
    },
    {
      step: "02",
      number: 2,
      title: "Design autoral e prototipagem (V1)",
      shortTitle: "Design autoral",
      timeframe: "Dias 4 a 8",
      icon: Layout,
      reasoning:
        "Seu site precisa respirar a autoridade que o seu serviço entrega. Desenho uma interface exclusiva e autoral, onde cada cor, tipografia e espaçamento guiam os olhos do visitante com elegância até a ação de contato.",
      premises: [
        { label: "Visual exclusivo", desc: "Direção de arte desenhada do zero, sem templates batidos." },
        { label: "Ergonomia mobile", desc: "Botões e navegação projetados para o toque natural do polegar." },
        { label: "Percepção de valor", desc: "Tipografia e contraste refinados que justificam cobrar mais." },
      ],
      actions: [
        "Criação da paleta de cores institucional e tipografia contemporânea",
        "Desenho minucioso da versão mobile para navegação fluida em smartphones",
        "Seleção e aplicação de mockups e imagens de alta fidelidade",
      ],
      deliverable: {
        title: "Primeira versão visual completa (V1)",
        description:
          "Apresentação da interface navegável para você experimentar e solicitar ajustes inclusos no seu plano.",
      },
    },
    {
      step: "03",
      number: 3,
      title: "Desenvolvimento e otimização de performance",
      shortTitle: "Código e velocidade",
      timeframe: "Dias 9 a 12",
      icon: Code2,
      reasoning:
        "Design bonito que demora para abrir no celular não gera vendas. Transformo a interface aprovada em código limpo com Next.js e Tailwind, garantindo que sua página carregue em menos de 1 segundo mesmo no 4G da rua.",
      premises: [
        { label: "Velocidade instantânea", desc: "Carregamento em menos de 1 segundo para reter o lead." },
        { label: "Código moderno", desc: "Arquitetura pura sem plugins pesados ou quebras de sistema." },
        { label: "Métricas ativas", desc: "Rastreamento pronto para medir cliques e conversões de anúncios." },
      ],
      actions: [
        "Codificação modular com Next.js, React e Tailwind CSS",
        "Otimização extrema de imagens e código para alcançar nota 95+ no PageSpeed",
        "Instalação e testes do Pixel do Meta, Google Analytics e eventos de WhatsApp",
      ],
      deliverable: {
        title: "Link privado de homologação",
        description:
          "Você testa a página real funcionando direto no seu celular antes do lançamento oficial ao público.",
      },
    },
    {
      step: "04",
      number: 4,
      title: "Deploy, domínio e lançamento oficial",
      shortTitle: "Lançamento oficial",
      timeframe: "Dias 13 a 15",
      icon: Rocket,
      reasoning:
        "Publicar um site exige segurança de ponta a ponta. Cuido de todo o processo técnico do domínio .com.br, instalo o certificado de segurança SSL e faço a publicação em servidores globais para o site nunca cair.",
      premises: [
        { label: "Domínio próprio", desc: "Configuração técnica do seu endereço oficial .com.br." },
        { label: "Segurança SSL", desc: "Cadeado de segurança ativo para proteger dados dos visitantes." },
        { label: "Pronto para tráfego", desc: "Testes completos em múltiplos dispositivos e navegadores." },
      ],
      actions: [
        "Apontamento técnico do domínio oficial no Registro.br ou provedor atual",
        "Ativação do certificado SSL e deploy em infraestrutura global na nuvem",
        "Validação final de botões, formulários e velocidade de carregamento",
      ],
      deliverable: {
        title: "Site 100% no ar e funcionando",
        description:
          "Seu site publicado em nuvem de alta velocidade, seguro e pronto para receber visitas e novos clientes.",
      },
    },
  ];

  const current = steps[activeStep];
  const IconCurrent = current.icon;

  return (
    <section id="metodo" className="section-surface py-20 relative border-y border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Minimalista e Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-2">
            Processo de trabalho
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Como seu site nasce, <span className="text-brand-600 dark:text-brand-400">passo a passo</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Do primeiro rascunho de copy até a publicação oficial em até 15 dias úteis, com comunicação direta no WhatsApp.
          </p>
        </motion.div>

        {/* Linha Temporal Fina e Elegante (Hairline Track) */}
        <div className="mb-12">
          <div className="relative">
            {/* Linha de Conexão Fina no Fundo */}
            <div className="hidden sm:block absolute top-4 left-8 right-8 h-[2px] bg-slate-200 dark:bg-white/10 -z-0" />
            
            {/* Linha de Progresso Roxa com Transição Suave */}
            <div
              className="hidden sm:block absolute top-4 left-8 h-[2px] bg-brand-600 transition-all duration-500 ease-out -z-0"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 84}%`,
              }}
            />

            {/* Grid dos 4 Marcadores da Linha do Tempo */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {steps.map((item, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer p-2 transition-all"
                  >
                    {/* Marcador Circular Fino */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-brand-600 text-white shadow-sm ring-4 ring-brand-100 dark:ring-brand-950 scale-110"
                          : isPassed
                          ? "bg-emerald-600 text-white"
                          : "bg-white dark:bg-dark-surface border border-slate-300 dark:border-white/15 text-slate-400 group-hover:border-brand-500 group-hover:text-brand-600"
                      }`}
                    >
                      {isPassed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : item.step}
                    </div>

                    {/* Rótulo da Etapa */}
                    <span
                      className={`text-xs font-semibold mt-3 transition-colors ${
                        isActive
                          ? "text-brand-600 dark:text-brand-400 font-bold"
                          : "text-slate-700 dark:text-slate-300 group-hover:text-brand-600"
                      }`}
                    >
                      {item.shortTitle}
                    </span>

                    <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {item.timeframe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Palco da Etapa: Visual Limpo, Fino e Editorial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 sm:p-10 lg:p-12 border border-light-border dark:border-white/[0.08] bg-white dark:bg-dark-surface shadow-sm space-y-8"
          >
            {/* Barra Superior Fina: Navegação e Status */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  Fase {current.step} de 04
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {current.timeframe}
                </span>
              </div>

              {/* Botões Minimalistas de Passagem */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeStep === 0
                      ? "opacity-30 cursor-not-allowed text-slate-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Anterior</span>
                </button>

                <button
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeStep === steps.length - 1
                      ? "opacity-30 cursor-not-allowed text-slate-400"
                      : "bg-brand-600 hover:bg-brand-700 text-white shadow-sm"
                  }`}
                >
                  <span>Próxima</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Conteúdo em Duas Colunas com Tipografia Elegante */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Coluna 1: A Lógica e Intenção da Desenvolvedora */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">
                    <IconCurrent className="w-4 h-4" />
                    <span>Objetivo desta etapa</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {current.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {current.reasoning}
                </p>

                {/* Premissas Estratégicas em Linhas Finas */}
                <div className="space-y-3 pt-2">
                  {current.premises.map((p) => (
                    <div key={p.label} className="text-xs sm:text-sm">
                      <span className="font-bold text-slate-900 dark:text-white">{p.label}: </span>
                      <span className="text-slate-600 dark:text-slate-400">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2: Mão na Massa e Entregável Tangível */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    O que acontece na prática:
                  </span>
                  <div className="divide-y divide-slate-100 dark:divide-white/[0.06]">
                    {current.actions.map((act) => (
                      <div key={act} className="py-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                        <span className="leading-relaxed">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cartão Fino de Entregável */}
                <div className="rounded-2xl p-4 sm:p-5 border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      Entregável validado no WhatsApp
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {current.deliverable.title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {current.deliverable.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Rodapé Fino e Discreto */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 px-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MessageSquare className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
            <span>Comunicação direta no WhatsApp · Sem reuniões cansativas ou burocracia.</span>
          </div>

          <a
            href={`https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
              "Olá Júlia! Gostaria de conversar sobre o processo de criação do meu site."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-brand-600 dark:text-brand-400 hover:underline"
          >
            <span>Tirar dúvidas sobre o processo</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}


