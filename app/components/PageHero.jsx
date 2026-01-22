import React from "react";
import { cx } from "../lib/cx";

export default function PageHero({
  title,
  subtitle,
  tone = "light",
  className = "",
  bg,
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden ${isDark ? "bg-primary-950" : "bg-cream-200"} ${className}`}
    >
      {bg && (
        <div
          className={cx(
            "absolute inset-0 z-5 pointer-events-none bg-cover bg-center bg-no-repeat",
            bg,
          )}
        />
      )}
      <div
        className={`absolute inset-0 z-6 pointer-events-none ${
          isDark ? "bg-mesh-ink opacity-90" : "bg-paper opacity-70"
        }`}
      />
      <div
        className={`absolute -inset-10 z-6 pointer-events-none parallax-soft ${
          isDark
            ? "bg-[radial-gradient(900px_500px_at_50%_0%,rgba(168,138,91,0.20),transparent_60%)] opacity-90"
            : "bg-mesh-warm opacity-70"
        }`}
      />
      <div
        className={`absolute inset-0 z-6 pointer-events-none ${
          isDark
            ? "bg-linear-to-b from-primary-950/10 via-primary-950/40 to-primary-950 opacity-100"
            : "bg-linear-to-b from-cream-200/30 via-transparent to-transparent opacity-100"
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {subtitle && (
          <p
            className={`font-script text-2xl md:text-3xl mb-3 transform -rotate-1 animate-fade-in-up ${
              isDark ? "text-accent-300" : "text-earth-500"
            }`}
          >
            {subtitle}
          </p>
        )}
        <h1
          className={`text-4xl md:text-6xl font-serif font-semibold tracking-tight animate-fade-in-up ${
            isDark ? "text-cream-100" : "text-charcoal-900"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        <div
          className={`mt-6 w-16 h-1 mx-auto rounded-full animate-fade-in-up ${
            isDark ? "bg-accent-500" : "bg-earth-400"
          }`}
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
    </section>
  );
}
