"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    let rafId = 0;
    let observer = null;
    let mutationObserver = null;
    const observed = new WeakSet();

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const handleEntry = (element) => {
      if (prefersReducedMotion) {
        element.classList.add("is-revealed");
        return;
      }

      if (observed.has(element)) return;
      observed.add(element);
      observer?.observe(element);
    };

    const scanNode = (node) => {
      if (!node || node.nodeType !== 1) return;
      const element = node;
      if (element.matches?.("[data-reveal]")) handleEntry(element);
      element.querySelectorAll?.("[data-reveal]").forEach(handleEntry);
    };

    const setup = () => {
      if (!prefersReducedMotion) {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              const element = entry.target;
              const once = element.getAttribute("data-reveal-once") !== "false";
              if (entry.isIntersecting) {
                element.classList.add("is-revealed");
                if (once) observer?.unobserve(element);
              } else if (!once) {
                element.classList.remove("is-revealed");
              }
            }
          },
          { threshold: 0.15, rootMargin: "90px 0px -12% 0px" }
        );
      }

      scanNode(document.body);

      mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          mutation.addedNodes.forEach(scanNode);
        }
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });
    };

    rafId = window.requestAnimationFrame(setup);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
