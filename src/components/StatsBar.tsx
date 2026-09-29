"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { Zap, Smartphone, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedMetric } from "./AnimatedMetric";

export default function StatsBar() {
  const configs = [
    {
      icon: Zap,
      accentColor: "text-emerald-600 dark:text-emerald-400",
      bgAccent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      dotColor: "bg-emerald-500",
      glowBorder: "hover:border-emerald-500/40",
    },
    {
      icon: Smartphone,
      accentColor: "text-brand-600 dark:text-brand-400",
      bgAccent: "bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20",
      dotColor: "bg-brand-500",
      glowBorder: "hover:border-brand-500/40",
    },
    {
      icon: Sparkles,
      accentColor: "text-violet-600 dark:text-violet-400",
      bgAccent: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
      dotColor: "bg-violet-500",
      glowBorder: "hover:border-violet-500/40",
    },
    {
      icon: ShieldCheck,
      accentColor: "text-sky-600 dark:text-sky-400",
      bgAccent: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      dotColor: "bg-sky-500",
      glowBorder: "hover:border-sky-500/40",
    },
  ];

  return (
    <section className="relative -mt-4 mb-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-[2.5rem] bg-slate-50/90 dark:bg-[#10141f]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-3 sm:p-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {siteConfig.stats.map((stat, index) => {
              const cfg = configs[index % configs.length];
              const IconComponent = cfg.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161a26] border border-slate-200/70 dark:border-white/[0.06] ${cfg.glowBorder} transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.07)] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Status Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`w-10 h-10 rounded-xl ${cfg.bgAccent} border flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {stat.badge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08] text-[10px] font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor} animate-pulse`} />
                          <span>{stat.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Middle: Value & Metric Title */}
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                        {stat.label}
                      </p>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-2">
                        <AnimatedMetric value={stat.value} delay={index * 0.06} className={cfg.accentColor} />
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed min-h-[36px]">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom Technical Spec Pill */}
                  {stat.highlight && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/[0.06]">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{stat.highlight}</span>
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
