"use client";

import { cx } from "@/lib/cx";

const WIDTHS = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function Container({
  as: As = "div",
  size = "7xl",
  pad = false,
  className = "",
  ...props
}) {
  return (
    <As
      className={cx(
        "mx-auto w-full",
        pad ? "px-6" : "",
        WIDTHS[size] ?? WIDTHS["7xl"],
        className,
      )}
      {...props}
    />
  );
}
