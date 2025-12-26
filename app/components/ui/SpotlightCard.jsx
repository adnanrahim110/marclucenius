"use client";

import { useEffect, useRef } from "react";
import { cx } from "../../lib/cx";

export default function SpotlightCard({
  as: As = "div",
  className = "",
  children,
  spotlightClassName = "",
  maxTilt = 3,
  ...props
}) {
  const ref = useRef(null);
  const rafId = useRef(0);
  const rectRef = useRef(null);
  const latest = useRef({ x: 0, y: 0 });
  const enabled = useRef(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    const canHover = window.matchMedia?.("(hover: hover)")?.matches;
    enabled.current = !prefersReducedMotion && !!finePointer && !!canHover;

    return () => {
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  const commit = () => {
    rafId.current = 0;
    if (!ref.current || !enabled.current) return;
    const rect = rectRef.current ?? ref.current.getBoundingClientRect();
    rectRef.current = rect;

    const x = Math.max(0, Math.min(rect.width, latest.current.x - rect.left));
    const y = Math.max(0, Math.min(rect.height, latest.current.y - rect.top));

    ref.current.style.setProperty("--spotlight-x", `${x.toFixed(2)}px`);
    ref.current.style.setProperty("--spotlight-y", `${y.toFixed(2)}px`);

    const px = rect.width ? x / rect.width - 0.5 : 0;
    const py = rect.height ? y / rect.height - 0.5 : 0;
    const max = Math.max(0, Math.min(6, maxTilt));
    ref.current.style.setProperty("--rx", `${(-py * max).toFixed(3)}deg`);
    ref.current.style.setProperty("--ry", `${(px * max).toFixed(3)}deg`);
  };

  const schedule = () => {
    if (rafId.current) return;
    rafId.current = window.requestAnimationFrame(commit);
  };

  return (
    <As
      ref={ref}
      onPointerEnter={(event) => {
        if (enabled.current && ref.current) {
          rectRef.current = ref.current.getBoundingClientRect();
          ref.current.style.setProperty("--rx", "0deg");
          ref.current.style.setProperty("--ry", "0deg");

          const rect = rectRef.current;
          latest.current.x = rect.left + rect.width / 2;
          latest.current.y = rect.top + rect.height / 2;
          schedule();
        }

        props.onPointerEnter?.(event);
      }}
      onPointerMove={(event) => {
        if (enabled.current) {
          latest.current.x = event.clientX;
          latest.current.y = event.clientY;
          schedule();
        }

        props.onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        rectRef.current = null;
        if (ref.current) {
          ref.current.style.setProperty("--rx", "0deg");
          ref.current.style.setProperty("--ry", "0deg");
        }

        props.onPointerLeave?.(event);
      }}
      className={cx(
        "group relative overflow-hidden rounded-xl border border-charcoal-200/40 bg-cream-50 shadow-sm shadow-charcoal-900/5 transition-[transform,box-shadow,border-color] duration-500 transform-gpu",
        "[transform:translate3d(0,var(--lift,0px),0)_perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        "hover:[--lift:-4px] hover:shadow-xl hover:shadow-charcoal-900/12 hover:border-earth-500/45",
        "will-change-transform",
        className
      )}
      {...(() => {
        const { onPointerEnter, onPointerLeave, onPointerMove, ...rest } = props;
        return rest;
      })()}
    >
      <div
        aria-hidden="true"
        className={cx("pointer-events-none absolute inset-0", spotlightClassName)}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(168,138,91,0.22),transparent_58%)] group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] opacity-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] skew-x-[-18deg] group-hover:opacity-100 group-hover:animate-sheen"
      />
      {children}
    </As>
  );
}
