"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import { ChevronDown, HelpCircle, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  // Todas as perguntas iniciam fechadas ao abrir o site
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Ao clicar em uma pergunta aberta ela fecha; ao clicar em outra, a anterior fecha e a nova abre
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappFaqUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Tenho uma dúvida sobre a criação do meu site que não encontrei no FAQ."
  )}`;

  return (
    <section id="faq" className="section-base py-24 relative border-t border-light-border dark:border-dark-border overflow-hidden">
      {/* Luz ambiente decorativa e sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-500/5 dark:bg-brand-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Container com a mesma largura padrão das demais seções (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Perguntas frequentes</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Tire todas as suas <span className="text-brand-600 dark:text-brand-400">dúvidas</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Respostas diretas e transparentes sobre prazos, pagamentos, suporte e entrega.
          </p>
        </motion.div>

        {/* Grade 100% Simétrica em 2 Colunas: todos os cards fechados possuem o mesmo tamanho exato */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-dark-surface border-brand-300 dark:border-brand-500/50 shadow-md shadow-brand-500/5"
                    : "bg-white/90 dark:bg-dark-surface/70 border-light-border dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[88px] sm:min-h-[96px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span
                    className={`font-heading text-base sm:text-lg font-bold transition-colors leading-snug ${
                      isOpen
                        ? "text-brand-600 dark:text-brand-400"
                        : "text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-50 dark:bg-brand-950/60 border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 shadow-sm"
                        : "bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-slate-400 group-hover:border-brand-300 group-hover:text-brand-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/[0.06] mt-1">
                        <div className="pt-3">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Campo 100% da Largura do Container (max-w-7xl) com design premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-8 lg:mt-10 w-full"
        >
          <div className="w-full card-clean rounded-3xl p-6 sm:p-8 lg:p-9 border border-light-border dark:border-white/[0.08] bg-white dark:bg-dark-surface shadow-sm relative overflow-hidden">
            {/* Filete luminoso superior sutil em dark mode */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 flex items-center justify-center shrink-0 text-brand-600 dark:text-brand-400 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Ainda tem alguma dúvida específica sobre o seu projeto?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Converse diretamente comigo no WhatsApp para analisarmos o seu caso sem compromisso.
                  </p>
                </div>
              </div>

              <a
                href={whatsappFaqUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all shrink-0 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Perguntar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
