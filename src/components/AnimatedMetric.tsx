"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedMetricProps { value: string; className?: string; delay?: number; }

function useViewportAnimation(target: number | null, delay: number) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!ref.current || target === null) return;
    let frame = 0;
    let started = false;

    const animateValue = () => {
      if (started) return;
      started = true;
      const startTime = performance.now() + delay * 1000;
      const tick = (now: number) => {
        if (now < startTime) { frame = requestAnimationFrame(tick); return; }
        const progress = Math.min((now - startTime) / 900, 1);
        setValue(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { animateValue(); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [delay, target]);

  return { ref, value };
}

export function AnimatedMetric({ value: text, className, delay = 0 }: AnimatedMetricProps) {
  const match = text.match(/-?\d+(?:[.,]\d+)?/);
  const target = match ? Number(match[0].replace(",", ".")) : null;
  const decimals = match?.[0].includes(".") || match?.[0].includes(",") ? 1 : 0;
  const prefix = match ? text.slice(0, match.index) : "";
  const suffix = match ? text.slice((match.index ?? 0) + match[0].length) : "";
  const { ref, value } = useViewportAnimation(target, delay);
  if (target === null) return <span className={className}>{text}</span>;
  const formatted = decimals ? value.toFixed(decimals) : Math.round(value).toString();
  return <span ref={ref} className={className} aria-label={text}><span aria-hidden="true">{prefix}{formatted}{suffix}</span></span>;
}

interface AnimatedProgressProps { value: number; className: string; delay?: number; }

export function AnimatedProgress({ value, className, delay = 0 }: AnimatedProgressProps) {
  const { ref, value: progress } = useViewportAnimation(value, delay);
  return <span ref={ref} className={className} aria-hidden="true" style={{ display: "block", width: "100%", transform: `scaleX(${progress / 100})`, transformOrigin: "left center", willChange: "transform" }} />;
}

export function AnimatedGauge({ value, className = "text-emerald-500", delay = 0 }: { value: number; className?: string; delay?: number }) {
  const { ref, value: progress } = useViewportAnimation(value, delay);
  const circumference = 169.6;
  return (
    <circle
      ref={ref as unknown as React.RefObject<SVGCircleElement>}
      cx="32"
      cy="32"
      r="27"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray={circumference}
      strokeDashoffset={circumference - (circumference * Math.min(progress, 100)) / 100}
      strokeLinecap="round"
      className={className}
      fill="transparent"
    />
  );
}
