"use client";

import { cx } from "@/lib/cx";

const SIZES = {
  default: "py-20 md:py-28 lg:py-32",
  tight: "py-16 md:py-20 lg:py-24",
  loose: "py-24 md:py-32 lg:py-40",
};

export default function Section({
  as: As = "section",
  size = "default",
  className = "",
  ...props
}) {
  return <As className={cx("relative", SIZES[size] ?? SIZES.default, className)} {...props} />;
}

