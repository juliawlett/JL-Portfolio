"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  RefreshCw,
  Sparkles,
  Zap,
  CalendarCheck,
  AlertTriangle,
  ArrowRight,
  Send,
  Check,
  Headphones,
  Sliders,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CarePlanSection() {
  const [activeTab, setActiveTab] = useState<"included" | "workflow" | "comparison" | "pricing">(
    "included"
  );
  const care = siteConfig.carePlan;

  const whatsappCareUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Gostaria de entender mais sobre o plano de cuidado contínuo para o meu site."
  )}`;

  const tabs = [
    { id: "included", label: "O que está incluso", icon: ShieldCheck },
    { id: "workflow", label: "Como funciona na prática", icon: MessageSquare },
    { id: "comparison", label: "Com plano vs. sem plano", icon: Sliders },
    { id: "pricing", label: "Formatos e valores", icon: DollarSign },
  ] as const;

  return (
    <section className="section-accent py-16 sm:py-20 relative border-y border-light-border dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Pós-entrega e tranquilidade total</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seu site sempre atualizado com o{" "}
            <span className="text-brand-600 dark:text-brand-400">plano de cuidado contínuo</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Não fique desamparado após o lançamento. Tenha uma desenvolvedora sênior cuidando de
            alterações de textos, fotos, ofertas e da renovação do seu domínio sem você se preocupar.
          </p>
        </motion.div>

        {/* Barra de Abas Interativas */}
        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-inner gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Conteúdo Dinâmico por Aba */}
        <div>
          <AnimatePresence mode="wait">
            {/* ABA 1: O que está incluso */}
            {activeTab === "included" && (
              <motion.div
                key="included"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <div className="card-clean rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Até 4 alterações/mês
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Mudanças de preços, novos depoimentos, novos textos, fotos da equipe ou links de novas campanhas.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 text-[11px] font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Sem custos adicionais</span>
                  </div>
                </div>

                <div className="card-clean rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Domínio .com.br garantido
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      A anuidade do seu registro no Registro.br fica por nossa conta enquanto o plano estiver ativo. Sem risco de esquecer.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Renovação anual inclusa</span>
                  </div>
                </div>

                <div className="card-clean rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Atendimento no mesmo dia
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Comunicação direta comigo pelo WhatsApp. Solicitações simples são concluídas no mesmo dia ou no próximo dia útil.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Fila prioritária de clientes</span>
                  </div>
                </div>

                <div className="card-clean rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                      Monitoramento e backup
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Revisões periódicas de velocidade, checagem de formulários, certificado SSL e cópias de segurança salvas em nuvem.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/60 text-[11px] font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>99.9% de estabilidade</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ABA 2: Como funciona na prática (Simulação de WhatsApp) */}
            {activeTab === "workflow" && (
              <motion.div
                key="workflow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="card-clean rounded-3xl p-6 sm:p-10 border border-light-border dark:border-dark-border shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Zero burocracia ou chamados complicados</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Você manda um áudio no WhatsApp. Eu publico no seu site.
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Nada de abrir tickets demorados em sistemas difíceis ou falar com robôs de atendimento.
                      Você fala diretamente comigo e a alteração é feita com cuidado profissional.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400 shrink-0">
                          1
                        </div>
                        <span>Você envia o texto, imagem ou instrução pelo WhatsApp.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400 shrink-0">
                          2
                        </div>
                        <span>Eu aplico a mudança, otimizo o layout para celular e valido o carregamento.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400 shrink-0">
                          3
                        </div>
                        <span>O site é atualizado na nuvem e você recebe a confirmação pronta.</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulação Visual do Chat WhatsApp */}
                  <div className="lg:col-span-6 bg-slate-50 dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-2xl p-5 sm:p-6 shadow-inner space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-light-border dark:border-dark-border">
                      <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                        JL
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Júlia Letícia · Suporte prioritário</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Online para clientes ativos</p>
                      </div>
                    </div>

                    {/* Mensagem do Cliente */}
                    <div className="flex justify-end">
                      <div className="bg-brand-600 text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-[85%] shadow-sm space-y-1">
                        <p>
                          "Oi Júlia! Mudamos o horário de atendimento da clínica e subimos o valor de uma das consultas. Segue a foto nova também!"
                        </p>
                        <span className="text-[10px] text-brand-200 block text-right">10:14 · Enviado</span>
                      </div>
                    </div>

                    {/* Resposta da Júlia */}
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200 p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm max-w-[85%] shadow-sm space-y-1">
                        <p>
                          "Olá! Recebido! Já ajustei a tabela, otimizei a foto nova para não pesar no celular e fiz o deploy. Já está no ar!"
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Concluído em 42 min
                          </span>
                          <span className="text-[10px] text-slate-400">10:56</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ABA 3: Com plano vs. Sem plano */}
            {activeTab === "comparison" && (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
              >
                {/* Lado Sem Plano */}
                <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-surface/60 border border-rose-200/70 dark:border-rose-900/30 shadow-sm flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-rose-100 dark:border-rose-950/40">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          Sem plano de cuidado
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Manutenção individual por conta própria
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span>Risco de esquecer a anuidade do domínio e perder o site do ar.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span>Cobranças avulsas que custam a partir de R$ 80 a R$ 150 por alteração simples.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span>O site vai ficando desatualizado com promoções antigas e fotos desatualizadas.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span>Falta de monitoramento preventivo de links quebrados ou falhas de contato.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/60 text-xs text-rose-700 dark:text-rose-400 font-medium">
                    Resultado: dor de cabeça para resolver detalhes técnicos e perda de tempo precioso.
                  </div>
                </div>

                {/* Lado Com Plano */}
                <div className="relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-surface/90 border-2 border-brand-500/40 dark:border-brand-500/50 shadow-md flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-light-border dark:border-dark-border">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          Com plano de cuidado contínuo
                        </h3>
                        <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                          Paz de espírito e desenvolvedora dedicada
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>Domínio .com.br renovado anualmente pela Júlia sem custo extra.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>Até 4 alterações mensais inclusas por apenas R$ 130/mês (menos de R$ 4,35/dia).</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>Site sempre moderno, veloz e alinhado às novidades do seu negócio.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>Contato direto e acolhedor no WhatsApp com resolução no mesmo dia.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    Resultado: você foca 100% em vender e atender seus clientes. O resto está seguro.
                  </div>
                </div>
              </motion.div>
            )}

            {/* ABA 4: Formatos e Valores */}
            {activeTab === "pricing" && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Opção 1: Junto com o Site */}
                <div className="relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-dark-surface/90 border-2 border-brand-500/50 shadow-md flex flex-col justify-between">
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-bold tracking-wide">
                    Mais escolhido
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                      Contratado junto com o site
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Tarifa exclusiva de lançamento
                    </p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">R$</span>
                      <span className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">
                        {care.priceTogether}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">/mês</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Fidelidade de 6 ou 12 meses</p>

                    <div className="mt-6 space-y-2.5 border-t border-slate-100 dark:border-dark-border/60 pt-4 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Até 4 manutenções mensais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Domínio .com.br renovado incluso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Atendimento no mesmo dia</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappCareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    <span>Contratar junto com o projeto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Opção 2: Contratação Avulsa */}
                <div className="card-clean rounded-3xl p-6 sm:p-7 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                      Contratação posterior
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Para ativar a qualquer momento
                    </p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">R$</span>
                      <span className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">
                        {care.priceLater}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">/mês</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Sem permanência mínima</p>

                    <div className="mt-6 space-y-2.5 border-t border-slate-100 dark:border-dark-border/60 pt-4 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Até 4 manutenções mensais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Domínio gerenciado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Cancele quando desejar</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappCareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-surface/80 text-slate-800 dark:text-white font-semibold text-xs transition-colors"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Opção 3: Sem Mensalidade */}
                <div className="card-clean rounded-3xl p-6 sm:p-7 border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                      Sem mensalidade fixa
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Apenas sob demanda pontual
                    </p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">a partir de</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">R$</span>
                      <span className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">
                        50
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">/ajuste</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Total liberdade e autonomia</p>

                    <div className="mt-6 space-y-2.5 border-t border-slate-100 dark:border-dark-border/60 pt-4 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>O site continua 100% seu</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Pague somente se precisar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Orçamento prévio sem surpresa</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappCareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-surface/80 text-slate-800 dark:text-white font-semibold text-xs transition-colors"
                  >
                    <span>Falar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Barra de Conclusão / CTA de Fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 sm:mt-8 rounded-2xl p-5 sm:p-6 bg-white dark:bg-dark-surface/90 border border-light-border dark:border-dark-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Transparência total: nenhuma mensalidade é obrigatória.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                O código é 100% seu. O plano de cuidado existe para quem deseja foco total no seu negócio, delegando as rotinas técnicas para uma especialista.
              </p>
            </div>
          </div>

          <a
            href={whatsappCareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-brand-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tirar dúvidas sobre o plano no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
