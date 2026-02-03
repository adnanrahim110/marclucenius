"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cx } from "@/lib/cx";
import Container from "@/components/ui/Container";

const EASE_OUT = [0.22, 1, 0.36, 1];

export default function PageHero({
  title,
  subtitle,
  tone = "light",
  className = "",
  bg,
  headingAs = "h1",
}) {
  const isDark = tone === "dark";
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  const transition = (delay) =>
    reduceMotion ? { duration: 0 } : { duration: 0.85, ease: EASE_OUT, delay };

  const Heading = motion?.[headingAs] ?? motion.h1;

  return (
    <section
      className={cx(
        "relative overflow-hidden py-20 lg:py-28",
        isDark ? "bg-primary-950" : "bg-cream-200",
        className,
      )}
    >
      {bg ? (
        <div
          className={cx(
            "absolute inset-0 z-5 pointer-events-none bg-cover bg-center bg-no-repeat",
            bg,
          )}
        />
      ) : null}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 z-6",
          isDark ? "bg-mesh-ink opacity-90" : "bg-paper opacity-70",
        )}
      />
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute -inset-10 z-6 parallax-soft",
          isDark
            ? "bg-[radial-gradient(900px_500px_at_50%_0%,rgba(168,138,91,0.20),transparent_60%)] opacity-90"
            : "bg-mesh-warm opacity-70",
        )}
      />
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 z-6",
          isDark
            ? "bg-linear-to-b from-primary-950/10 via-primary-950/40 to-primary-950 opacity-100"
            : "bg-linear-to-b from-cream-200/30 via-transparent to-transparent opacity-100",
        )}
      />

      <Container size="4xl" pad className="relative z-10 text-center">
        {subtitle ? (
          <motion.p
            variants={item}
            initial="hidden"
            animate="show"
            transition={transition(0)}
            className={cx(
              "font-script mb-3 -rotate-1 text-2xl md:text-3xl",
              isDark ? "text-accent-300" : "text-earth-500",
            )}
          >
            {subtitle}
          </motion.p>
        ) : null}

        <Heading
          variants={item}
          initial="hidden"
          animate="show"
          transition={transition(0.12)}
          className={cx(
            "text-4xl md:text-6xl font-serif font-semibold tracking-tight",
            isDark ? "text-cream-100" : "text-charcoal-900",
          )}
        >
          {title}
        </Heading>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={transition(0.24)}
          className={cx(
            "mt-6 mx-auto h-1 w-16 rounded-full",
            isDark ? "bg-accent-500" : "bg-earth-400",
          )}
        />
      </Container>
    </section>
  );
}
