"use client";

import { useEffect, useState } from "react";

const logoWords = ["@devjulia", "#devjulia", ".devjulia"];

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [logoText, setLogoText] = useState(logoWords[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const criticalImages = Array.from(document.querySelectorAll<HTMLImageElement>("[data-loader-critical]"));
    const total = criticalImages.length + 2;
    let completed = 0;
    const advance = () => {
      completed += 1;
      if (!cancelled) setProgress(Math.min(96, Math.round((completed / total) * 100)));
    };
    const imagePromises = criticalImages.map((image) => new Promise<void>((resolve) => {
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        image.removeEventListener("load", finish);
        image.removeEventListener("error", finish);
        advance();
        resolve();
      };

      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });

      // Imagens vindas do cache podem não emitir load após a hidratação.
      if (image.complete) finish();
      else window.setTimeout(finish, 1500);
    }));
    const fontsReady = document.fonts?.ready.then(advance) ?? Promise.resolve().then(advance);
    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else {
        const finish = () => resolve();
        window.addEventListener("load", finish, { once: true });
        window.setTimeout(finish, 1500);
      }
    }).then(advance);
    Promise.all([...imagePromises, fontsReady, pageReady]).then(() => {
      if (cancelled) return;
      setProgress(100);
      window.setTimeout(() => setVisible(false), 350);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const currentWord = logoWords[wordIndex];
    const delay = deleting ? 55 : logoText === currentWord ? 1400 : 95;
    const timer = window.setTimeout(() => {
      if (!deleting && logoText === currentWord) return setDeleting(true);
      if (deleting && logoText === "") {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % logoWords.length);
        return;
      }
      setLogoText((text) => deleting ? text.slice(0, -1) : currentWord.slice(0, text.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, logoText, wordIndex]);

  if (!visible) return null;

  return (
    <div role="status" aria-live="polite" aria-label={`Carregando site: ${progress}%`} className="initial-loader">
      <div className="initial-loader__brand">
        <span>{logoText}</span><span className="initial-loader__cursor" aria-hidden="true" />
      </div>
      <div className="initial-loader__meta"><span>Carregando experiência</span><span>{progress}%</span></div>
      <div className="initial-loader__track" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
    </div>
  );
}
