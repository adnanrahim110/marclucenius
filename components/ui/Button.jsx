"use client";

import Link from "next/link";
import { cx } from "@/lib/cx";

const BASE =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:pointer-events-none disabled:opacity-60";

const SHEEN =
  "after:pointer-events-none after:absolute after:inset-[-2px] after:left-[-50%] after:w-[40%] after:skew-x-[-18deg] after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)] after:opacity-0 after:content-[''] motion-safe:hover:after:animate-sheen motion-reduce:hover:after:opacity-0";

const VARIANTS = {
  primary:
    "bg-charcoal-900 text-cream-100 shadow-md shadow-charcoal-900/10 hover:bg-charcoal-800 hover:shadow-lg hover:shadow-charcoal-900/15 active:scale-[0.98]",
  outline:
    "border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-900 hover:text-cream-100 active:scale-[0.98]",
  subtle:
    "bg-cream-200 text-charcoal-700 hover:bg-cream-300 active:scale-[0.99] shadow-sm shadow-charcoal-900/5 hover:shadow-md hover:shadow-charcoal-900/5",
};

const SIZES = {
  sm: "px-6 py-3 text-xs",
  md: "px-8 py-4 text-sm",
  lg: "px-10 py-6 text-sm",
};

function isExternalHref(href) {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  sheen = true,
  target,
  rel,
  type,
  ...props
}) {
  const classes = cx(
    BASE,
    sheen ? SHEEN : "",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  );

  if (href) {
    const nextRel = target === "_blank" ? rel ?? "noreferrer noopener" : rel;

    if (isExternalHref(href)) {
      return <a href={href} className={classes} target={target} rel={nextRel} {...props} />;
    }

    return <Link href={href} className={classes} {...props} />;
  }

  return <button type={type ?? "button"} className={classes} {...props} />;
}
