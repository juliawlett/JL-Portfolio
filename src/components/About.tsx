"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import {
  Sparkles,
  MapPin,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Check,
  Copy,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function About() {
  const [copied, setCopied] = useState(false);
  const [maxTravel, setMaxTravel] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  // Monitora o scroll através do container da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  // Amortecimento físico com spring para deslize amanteigado
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  // O deslize vertical acompanha o scroll de 0 até o alinhamento exato com o fim do texto
  const y = useTransform(smoothProgress, (val) => val * maxTravel);

  // Mede com precisão a diferença de altura entre o texto (direita) e a imagem (esquerda)
  useEffect(() => {
    const updateTravel = () => {
      if (window.innerWidth >= 1024 && rightTextRef.current && imageRef.current) {
        const textHeight = rightTextRef.current.offsetHeight;
        const imageHeight = imageRef.current.offsetHeight;
        const diff = Math.max(0, textHeight - imageHeight);
        setMaxTravel(diff);
      } else {
        setMaxTravel(0);
      }
    };

    updateTravel();
    window.addEventListener("resize", updateTravel);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateTravel);
      if (rightTextRef.current) resizeObserver.observe(rightTextRef.current);
      if (imageRef.current) resizeObserver.observe(imageRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateTravel);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.profile.whatsapp}?text=${encodeURIComponent(
    "Olá Júlia! Conheci você pelo seu portfólio e gostaria de conversar diretamente sobre meu projeto."
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sobre" className="section-surface py-24 relative overflow-hidden border-t border-light-border dark:border-dark-border">
      {/* Luz ambiente decorativa e sutil */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-500/5 dark:bg-brand-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Proporção 40% (2 colunas) e 60% (3 colunas) em grid de 5 colunas */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start"
        >
          
          {/* LADO ESQUERDO (40%): Inicia no topo e desliza conforme o scroll até o fim do texto */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start w-full">
            <motion.div
              ref={imageRef}
              style={{ y }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[400px] lg:max-w-[420px] aspect-[4/4.6] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/50 border border-slate-200/80 dark:border-white/10 group bg-slate-100 dark:bg-dark-surface"
            >
              <Image
                src="/images/foto-julia.png"
                alt="Júlia Letícia - Desenvolvedora Web & UI/UX"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
              />

              {/* Vinheta suave inferior para acabamento refinado */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Badge discreta de disponibilidade na foto */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Disponível para projetos</span>
              </div>

              {/* Assinatura visual na base da foto */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-heading text-xl font-bold tracking-tight">
                  Júlia Letícia
                </p>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  Desenvolvimento Web &amp; UX/UI
                </p>
              </div>
            </motion.div>
          </div>

          {/* LADO DIREITO (60%): Tipografia Editorial Direta, Concisa e Pessoal */}
          <motion.div
            ref={rightTextRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-3 space-y-6 flex flex-col justify-start"
          >
            {/* Badge de Seção */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Quem está por trás do código</span>
            </div>

            {/* Título Principal de Apresentação */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Muito prazer, sou a <span className="text-brand-600 dark:text-brand-400">Júlia Letícia</span>.
            </h2>

            {/* Declaração de Posicionamento Pessoal */}
            <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Desenvolvedora web e designer, criando presenças digitais que unem estética de alto padrão e engenharia de conversão.
            </p>

            {/* Texto Pessoal e Humano — Conciso e com Respiro */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/80 dark:border-white/10 pt-4">
              <p>
                Atuo de Cuiabá, MT, desenvolvendo sites e landing pages sob medida para empresas, clínicas e profissionais em todo o Brasil.
              </p>
              <p>
                Acredito no poder do trabalho autoral e do relacionamento direto. Em vez de lidar com a burocracia ou o repasse para estagiários típico de grandes agências, aqui você conversa diretamente comigo desde o primeiro rascunho visual até a publicação final do seu projeto.
              </p>
            </div>

            {/* Metadados Pessoais Discretos */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <span>Cuiabá, MT • Atendimento remoto para todo o Brasil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Atendimento humanizado sem intermediários</span>
              </div>
            </div>

            {/* Linha de Ação: Ambos os botões com o mesmo tamanho, padrão e altura */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                title={`Copiar e-mail: ${siteConfig.profile.email}`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-emerald-600 dark:text-emerald-400">E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>Copiar e-mail</span>
                    <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0 opacity-75" />
                  </>
                )}
              </button>
            </div>

            {/* Links Profissionais Oficiais */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-600 dark:text-slate-300">Conecte-se comigo:</span>
              {siteConfig.profile.linkedin && (
                <a
                  href={siteConfig.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px]">↗</span>
                </a>
              )}
              {siteConfig.profile.github && (
                <a
                  href={siteConfig.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span className="text-[10px]">↗</span>
                </a>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

