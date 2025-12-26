import Link from "next/link";
import PageHero from "../components/PageHero";
import SpotlightCard from "../components/ui/SpotlightCard";
import { ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react";
import { BLOGS } from "@/content/blogs";

export const metadata = {
  title: "Blog | Rest for the Restless",
  description:
    "Read the latest thoughts and reflections from Marc Lucenius on faith, culture, and the spiritual life.",
};

export default function Blog() {
  return (
    <div className="min-h-screen">
      <PageHero title="Journal" subtitle="Thoughts & Musings" />

      <section className="section-padding relative" data-reveal>
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((post, index) => (
              <Link
                href={`/blog/${post.id}`}
                key={post.id}
                className="group block h-full"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <SpotlightCard className="flex flex-col h-full rounded-2xl">
                  <div className="w-full aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-cream-200 via-cream-100 to-earth-100" />
                    <div className="absolute inset-0 bg-paper opacity-50" />
                    <div className="absolute inset-0 bg-mesh-warm opacity-70" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-cream-50/60" />
                  </div>

                  <div className="p-7 flex flex-col grow">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest mb-5">
                      <span className="inline-flex items-center gap-2 text-earth-700 font-semibold">
                        <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-charcoal-400">
                        <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-2 text-charcoal-400">
                        <Clock3 className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-charcoal-900 mb-3 group-hover:text-earth-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed mb-7 grow font-light">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-earth-700 text-xs font-semibold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
