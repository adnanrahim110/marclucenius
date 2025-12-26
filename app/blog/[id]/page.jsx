import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import SpotlightCard from "../../components/ui/SpotlightCard";
import ReadingProgress from "../../components/ui/ReadingProgress";
import CopyLinkButton from "../../components/ui/CopyLinkButton";
import { BLOGS, getBlogById } from "@/content/blogs";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Link2,
  Quote,
  Tag,
  UserRound,
} from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOGS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getBlogById(id);

  if (!post) {
    return {
      title: "Journal | Marc Lucenius",
      description:
        "Read the latest thoughts and reflections from Marc Lucenius on faith, culture, and the spiritual life.",
    };
  }

  return {
    title: `${post.title} | Marc Lucenius`,
    description: post.excerpt,
  };
}

function BlogContent({ blocks }) {
  const leadIndex = blocks.findIndex((block) => block.type === "p");
  const headingIds = buildHeadingIds(blocks);

  return blocks.map((block, index) => {
    if (block.type === "h2") {
      const id = headingIds[index];
      return (
        <h2 key={index} id={id} className="scroll-mt-28">
          <a
            href={`#${id}`}
            className="group inline-flex items-center gap-3 !no-underline !text-charcoal-900 hover:!text-earth-700 transition-colors"
          >
            <span>{block.text}</span>
            <Link2
              className="h-4 w-4 opacity-0 text-earth-600 transition-opacity group-hover:opacity-70"
              aria-hidden="true"
            />
          </a>
        </h2>
      );
    }

    if (block.type === "blockquote") {
      return (
        <blockquote key={index}>
          <p>{block.text}</p>
        </blockquote>
      );
    }

    if (block.type === "ol") {
      return (
        <ol key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ol>
      );
    }

    if (block.type === "ul") {
      return (
        <ul key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.type === "p") {
      const className =
        index === leadIndex ? "lead text-xl text-charcoal-800 font-serif italic" : undefined;
      return (
        <p key={index} className={className}>
          {block.text}
        </p>
      );
    }

    return null;
  });
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = getBlogById(id);
  if (!post) notFound();

  const related = BLOGS.filter((candidate) => candidate.id !== post.id).slice(0, 2);
  const position = BLOGS.findIndex((candidate) => candidate.id === post.id);
  const previous = position > 0 ? BLOGS[position - 1] : null;
  const next = position >= 0 && position < BLOGS.length - 1 ? BLOGS[position + 1] : null;

  const toc = buildToc(post.blocks);
  const highlightQuote = post.blocks.find((block) => block.type === "blockquote")?.text ?? null;
  const highlightList = post.blocks.find((block) => block.type === "ul" || block.type === "ol") ?? null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ReadingProgress />
      <PageHero
        title="Journal"
        subtitle={post.category}
        className="min-h-[50vh]"
      />

      <section className="relative z-10 -mt-16 md:-mt-24 pb-24 px-6">
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-warm opacity-35 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <main className="min-w-0">
            <article
              className="paper-card-elevated !rounded-3xl border-cream-300/70 shadow-[0_50px_140px_rgba(15,14,13,0.16)]"
              data-reveal
            >
              <div aria-hidden="true" className="absolute inset-0 bg-paper opacity-90" />
              <div aria-hidden="true" className="absolute inset-0 bg-mesh-warm opacity-55" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(900px_500px_at_16%_0%,rgba(168,138,91,0.18),transparent_64%)] opacity-90 parallax-soft"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-cream-50/0 via-cream-50/70 to-cream-50"
              />

              <div className="relative p-7 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    Back to Journal
                  </Link>

                  <div className="flex items-center gap-2">
                    <CopyLinkButton className="bg-cream-50/70 border-cream-300/70 text-charcoal-700 hover:text-charcoal-900 hover:border-earth-400/60" />
                  </div>
                </div>

                <header className="mb-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-charcoal-900 leading-tight">
                    {post.title}
                  </h1>
                  {post.excerpt ? (
                    <p className="mt-4 text-lg text-charcoal-600 font-light leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  ) : null}
                  <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-cream-400 to-transparent" />
                </header>

                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-widest text-charcoal-500 mb-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream-300/70 bg-cream-50/70 px-4 py-2">
                    <Tag className="w-3.5 h-3.5 text-earth-600" aria-hidden="true" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream-300/70 bg-cream-50/70 px-4 py-2">
                    <CalendarDays className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream-300/70 bg-cream-50/70 px-4 py-2">
                    <Clock3 className="w-3.5 h-3.5 text-charcoal-500" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-charcoal-900 prose-headings:scroll-mt-28 prose-p:text-charcoal-600 prose-strong:text-charcoal-900 prose-li:text-charcoal-600 prose-li:marker:text-earth-500 prose-a:text-earth-700 prose-a:font-medium prose-hr:border-cream-300/70 prose-blockquote:border-earth-400 prose-blockquote:bg-earth-100/55 prose-blockquote:p-6 prose-blockquote:not-italic">
                  <BlogContent blocks={post.blocks} />
                </div>
              </div>
            </article>

            {(previous || next) && (
              <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal>
                {previous ? (
                  <Link href={`/blog/${previous.id}`} className="group block h-full">
                    <SpotlightCard className="h-full !rounded-2xl border-cream-300/70 bg-cream-50/70 shadow-none hover:shadow-2xl hover:shadow-charcoal-900/10 hover:border-earth-500/40">
                      <div className="p-7 flex flex-col h-full">
                        <p className="text-[11px] uppercase tracking-widest text-charcoal-400 mb-3 font-semibold">
                          Previous
                        </p>
                        <h3 className="text-lg font-serif text-charcoal-900 mb-3 group-hover:text-earth-700 transition-colors leading-snug">
                          {previous.title}
                        </h3>
                        <p className="text-charcoal-600 text-sm leading-relaxed mb-6 grow font-light">
                          {previous.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-earth-700 text-xs font-semibold uppercase tracking-widest group-hover:-translate-x-1 transition-transform duration-300">
                          Read
                          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                ) : (
                  <div />
                )}

                {next ? (
                  <Link href={`/blog/${next.id}`} className="group block h-full">
                    <SpotlightCard className="h-full !rounded-2xl border-cream-300/70 bg-cream-50/70 shadow-none hover:shadow-2xl hover:shadow-charcoal-900/10 hover:border-earth-500/40">
                      <div className="p-7 flex flex-col h-full">
                        <p className="text-[11px] uppercase tracking-widest text-charcoal-400 mb-3 font-semibold">
                          Next
                        </p>
                        <h3 className="text-lg font-serif text-charcoal-900 mb-3 group-hover:text-earth-700 transition-colors leading-snug">
                          {next.title}
                        </h3>
                        <p className="text-charcoal-600 text-sm leading-relaxed mb-6 grow font-light">
                          {next.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-earth-700 text-xs font-semibold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                          Read
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                ) : (
                  <div />
                )}
              </section>
            )}

            {related.length > 0 && (
              <section className="mt-16" data-reveal>
                <h2 className="text-sm font-bold uppercase tracking-widest text-charcoal-500 mb-6">
                  More From The Journal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {related.map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}`} className="group block h-full">
                      <SpotlightCard className="h-full !rounded-2xl border-cream-300/70 bg-cream-50/70 shadow-none hover:shadow-2xl hover:shadow-charcoal-900/10 hover:border-earth-500/40">
                        <div className="p-7 flex flex-col h-full">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest mb-4">
                            <span className="inline-flex items-center gap-2 text-earth-700 font-semibold">
                              <Tag className="w-3.5 h-3.5 text-earth-600" aria-hidden="true" />
                              {item.category}
                            </span>
                            <span className="inline-flex items-center gap-2 text-charcoal-400">
                              <Clock3 className="w-3.5 h-3.5 text-charcoal-400" aria-hidden="true" />
                              {item.readingTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-serif text-charcoal-900 mb-3 group-hover:text-earth-700 transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-charcoal-600 text-sm leading-relaxed mb-6 grow font-light">
                            {item.excerpt}
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
              </section>
            )}
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {toc.length > 0 && (
                <div className="paper-card !rounded-2xl">
                  <div className="p-7">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-5">
                      On This Page
                    </h3>
                    <nav aria-label="Table of contents">
                      <ul className="space-y-2">
                        {toc.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="group inline-flex items-start gap-3 text-sm text-charcoal-600 hover:text-charcoal-900 transition-colors leading-snug"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-charcoal-300 group-hover:bg-earth-500 transition-colors" />
                              <span>{item.text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}

              {(highlightQuote || highlightList) && (
                <div className="paper-card !rounded-2xl">
                  <div className="p-7">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-5 flex items-center gap-2">
                      <Quote className="w-4 h-4 text-earth-600" aria-hidden="true" />
                      Highlight
                    </h3>

                    {highlightQuote ? (
                      <p className="text-charcoal-700 leading-relaxed font-serif italic">
                        {highlightQuote}
                      </p>
                    ) : (
                      <ul className="space-y-2 text-charcoal-700 text-sm leading-relaxed">
                        {highlightList.items.slice(0, 4).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-earth-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              <div className="paper-card !rounded-2xl">
                <div className="p-7">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-5 flex items-center gap-2">
                    <UserRound className="w-4 h-4 text-earth-600" aria-hidden="true" />
                    About The Author
                  </h3>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-cream-300/70">
                      <Image
                        src="/imgs/author2.jpg"
                        alt="Marc Lucenius"
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-charcoal-900 font-serif text-lg leading-none">Marc Lucenius</p>
                      <p className="text-charcoal-400 text-xs uppercase tracking-widest mt-1">
                        Rest for the Restless
                      </p>
                    </div>
                  </div>

                  <p className="text-charcoal-600 text-sm leading-relaxed mb-6 font-light">
                    Writing at the intersection of faith, formation, and the hidden stories underneath our
                    work.
                  </p>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-earth-700 hover:text-charcoal-900 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/["“”]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildHeadingIds(blocks) {
  const counts = new Map();
  return blocks.map((block, index) => {
    if (block.type !== "h2") return null;
    const raw = slugify(block.text);
    const base = raw || `section-${index + 1}`;
    const count = (counts.get(base) ?? 0) + 1;
    counts.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  });
}

function buildToc(blocks) {
  const headingIds = buildHeadingIds(blocks);
  return blocks
    .map((block, index) => {
      if (block.type !== "h2") return null;
      return {
        id: headingIds[index],
        text: block.text,
      };
    })
    .filter(Boolean);
}
