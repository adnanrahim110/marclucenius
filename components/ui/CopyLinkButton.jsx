"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Link2 } from "lucide-react";
import { cx } from "../../lib/cx";

export default function CopyLinkButton({
  className = "",
  label = "Copy Link",
  copiedLabel = "Copied",
  timeoutMs = 1600,
  ...props
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const onClick = async (event) => {
    props.onClick?.(event);
    if (event.defaultPrevented) return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), timeoutMs);
    } catch {
      // Clipboard can be denied in some contexts; silently no-op.
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 focus-visible:ring-offset-2",
        "border-cream-300/70 bg-cream-50/70 text-charcoal-600 hover:text-charcoal-900 hover:border-earth-400/60 hover:bg-cream-100/70",
        "focus-visible:ring-offset-cream-100",
        className
      )}
      {...(() => {
        const { onClick: _onClick, ...rest } = props;
        return rest;
      })()}
    >
      {copied ? (
        <Check className="h-4 w-4 text-earth-600" aria-hidden="true" />
      ) : (
        <Link2 className="h-4 w-4 text-charcoal-500" aria-hidden="true" />
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
