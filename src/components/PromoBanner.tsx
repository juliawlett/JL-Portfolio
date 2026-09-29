"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { Sparkles, ArrowRight } from "lucide-react";

export default function PromoBanner() {
  if (!siteConfig.promo.isActive) return null;

  return (
    <div className="relative z-50 bg-brand-50 dark:bg-brand-950/40 border-b border-brand-200 dark:border-brand-900/60 px-4 py-2.5 text-xs sm:text-sm text-center text-brand-900 dark:text-brand-200 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300 font-bold text-[11px] border border-brand-300/60 uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-brand-600 dark:text-brand-400 animate-pulse" />
          {siteConfig.promo.badgeText}
        </span>
        <span className="text-slate-700 dark:text-slate-200 font-medium">
          {siteConfig.promo.bannerText}
        </span>
        <a
          href="#planos"
          className="inline-flex items-center gap-1 font-semibold text-brand-700 dark:text-brand-300 hover:underline transition-colors"
        >
          Ver condições
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
