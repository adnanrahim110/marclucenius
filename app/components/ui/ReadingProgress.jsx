"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? doc.scrollTop / max : 0;
      const clamped = Math.max(0, Math.min(1, next));
      if (barRef.current) barRef.current.style.transform = `scaleX(${clamped})`;
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full bg-linear-to-r from-earth-500 via-earth-400 to-cream-100 shadow-[0_0_22px_rgba(168,138,91,0.35)]"
        style={{ transform: "scaleX(0)", transformOrigin: "left" }}
      />
    </div>
  );
}
