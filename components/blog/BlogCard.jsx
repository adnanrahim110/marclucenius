import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { cx } from "@/lib/cx";

export default function BlogCard({ post, variant = "default", className = "" }) {
  const href = `/blog/${post.slug}`;

  const meta = (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-charcoal-400">
      {variant === "compact" ? (
        <span className="inline-flex items-center gap-2 text-earth-700 font-semibold">
          <Tag className="w-3.5 h-3.5 text-earth-600" aria-hidden="true" />
          {post.category}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-2">
        <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
        {post.date}
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock3 className="w-3.5 h-3.5" aria-hidden="true" />
        {post.readingTime}
      </span>
    </div>
  );

  return (
    <article className={cx("h-full", className)}>
      <Link
        href={href}
        aria-label={`Read: ${post.title}`}
        className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
      >
        <SpotlightCard className="h-full !rounded-3xl border-cream-300/70 bg-cream-50/70 shadow-none hover:shadow-2xl hover:shadow-charcoal-900/10">
          <div aria-hidden="true" className="absolute inset-0 bg-paper opacity-70" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-mesh-warm opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-cream-50/0 via-cream-50/60 to-cream-50"
          />

          <div className="relative flex flex-col h-full">
            {variant === "default" ? (
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-cream-300/60">
                <div className="absolute inset-0 bg-linear-to-tr from-cream-100 via-cream-100 to-earth-100" />
                <div className="absolute inset-0 bg-paper opacity-55" />
                <div className="absolute inset-0 bg-mesh-warm opacity-75" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-cream-50/70" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/70 border border-cream-300/70 text-[11px] uppercase tracking-widest text-earth-700 font-semibold backdrop-blur-sm">
                    <Tag className="w-3.5 h-3.5 text-earth-600" aria-hidden="true" />
                    {post.category}
                  </div>
                </div>
              </div>
            ) : null}

            <div
              className={cx(
                "flex flex-col grow",
                variant === "compact" ? "p-6" : "p-8",
              )}
            >
              <div className={cx(variant === "compact" ? "mb-4" : "mb-6")}>
                {meta}
              </div>

              <h3
                className={cx(
                  "font-serif text-charcoal-900 group-hover:text-earth-700 transition-colors leading-snug text-balance",
                  "line-clamp-2",
                  variant === "compact" ? "text-lg mb-3" : "text-xl mb-3",
                )}
              >
                {post.title}
              </h3>

              <p
                className={cx(
                  "text-charcoal-600 text-sm leading-relaxed font-light grow",
                  "line-clamp-3",
                  variant === "compact" ? "mb-6" : "mb-8",
                )}
              >
                {post.excerpt}
              </p>

              <div className="flex items-center text-earth-700 text-xs font-semibold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                Read Article
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </article>
  );
}
