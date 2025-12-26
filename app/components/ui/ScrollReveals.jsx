"use client";

import { useEffect } from "react";

export default function ScrollReveals() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) {
      for (const element of elements) element.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target;
          const once = element.getAttribute("data-reveal-once") !== "false";
          if (entry.isIntersecting) {
            element.classList.add("is-revealed");
            if (once) observer.unobserve(element);
          } else if (!once) {
            element.classList.remove("is-revealed");
          }
        }
      },
      { threshold: 0.15, rootMargin: "90px 0px -12% 0px" }
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return null;
}

