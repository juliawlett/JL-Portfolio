"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

interface AnimatedMetricProps {
  value: string;
  className?: string;
  delay?: number;
}

export function AnimatedMetric({ value, className, delay = 0 }: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();
  const match = value.match(/-?\d+(?:[.,]\d+)?/);
  const target = match ? Number(match[0].replace(",", ".")) : null;
  const decimals = match?.[0].includes(".") || match?.[0].includes(",") ? 1 : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  const [displayValue, setDisplayValue] = useState(reduceMotion && target !== null ? target : 0);

  useEffect(() => {
    if (!isInView || target === null) return;

    if (reduceMotion) {
      setDisplayValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplayValue,
    });

    return () => controls.stop();
  }, [delay, isInView, reduceMotion, target]);

  if (target === null) return <span className={className}>{value}</span>;

  const formatted = decimals ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{prefix}{formatted}{suffix}</span>
    </span>
  );
}

interface AnimatedProgressProps {
  value: number;
  className: string;
  delay?: number;
}

export function AnimatedProgress({ value, className, delay = 0 }: AnimatedProgressProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ width: `${value}%`, transformOrigin: "left" }}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: reduceMotion ? 0 : 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
