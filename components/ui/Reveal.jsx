"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cx } from "@/lib/cx";

const DEFAULT_EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  as = "div",
  className = "",
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  y = 16,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion?.[as] ?? motion.div;

  if (reduceMotion) {
    return (
      <Component className={cx(className)} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: DEFAULT_EASE, delay },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

