"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--cursor-x", "50vw");
    root.style.setProperty("--cursor-y", "30vh");
    root.style.setProperty("--cursor-nx", "0");
    root.style.setProperty("--cursor-ny", "0");

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    if (prefersReducedMotion || !finePointer) return;

    let rafId = 0;
    let nextX = window.innerWidth / 2;
    let nextY = window.innerHeight * 0.35;

    const commit = () => {
      rafId = 0;
      root.style.setProperty("--cursor-x", `${nextX}px`);
      root.style.setProperty("--cursor-y", `${nextY}px`);

      const nx = (nextX / window.innerWidth - 0.5) * 2;
      const ny = (nextY / window.innerHeight - 0.5) * 2;
      root.style.setProperty("--cursor-nx", `${Math.max(-1, Math.min(1, nx)).toFixed(4)}`);
      root.style.setProperty("--cursor-ny", `${Math.max(-1, Math.min(1, ny)).toFixed(4)}`);
    };

    const onMove = (event) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (!rafId) rafId = window.requestAnimationFrame(commit);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}

