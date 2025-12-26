import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SpotlightCard from "../components/ui/SpotlightCard";
import EndorsementBanner from "../components/EndorsementBanner";
import WhoIsThisFor from "../components/WhoIsThisFor";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const metadata = {
  title: "The Book | Rest for the Restless",
  description: "Releasing Your Ambition Through a Well-Rested Life.",
};

export default function Book() {
  return (
    <div className="min-h-screen odd-sections-textured">
      <PageHero title="The Book" subtitle="Rest for the Restless" />

      <section className="section-padding overflow-hidden relative" data-reveal>
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div className="relative flex justify-center group">
              <div className="relative w-56 sm:w-64 lg:w-72">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-charcoal-900/10 blur-xl rounded-[100%]"></div>
                <div className="relative aspect-2/3 rounded-r-md rounded-l-sm overflow-hidden shadow-xl border border-cream-300 transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <Image
                    src="/imgs/book.png"
                    fill
                    alt="Rest for the Restless Book Cover"
                    className="object-cover"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-[3%] bg-linear-to-r from-charcoal-900/15 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 leading-tight mb-4">
                  You don't need less ambition.{" "}
                  <span className="italic text-earth-600">
                    You need less restlessness.
                  </span>
                </h2>
                <p className="text-lg text-charcoal-500 leading-relaxed font-light">
                  This book is for believers who want to show up to life with
                  everything God has given without living exhausted, anxious, or
                  endlessly driven by inner pressure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Buy on Amazon</button>
                <button className="btn-outline">Buy from Publisher</button>
              </div>
              <Link
                href="/resources"
                className="text-earth-600 hover:text-charcoal-900 underline underline-offset-4 text-sm font-semibold uppercase tracking-widest flex items-center gap-2"
              >
                Download Chapter One + Guide
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <SpotlightCard className="p-8">
              <h3 className="text-xl font-serif text-charcoal-900 mb-6 border-b border-charcoal-200 pb-4">
                What This Book Will Help You Do
              </h3>
              <ul className="space-y-3">
                {[
                  "Understand why ambition itself isn't the enemy",
                  "Recognize the 'work beneath the work' that keeps you striving",
                  "Learn rhythms of rest for your mind, heart, body, and relationships",
                  "Discover how Sabbath is a gift—not a legalistic burden",
                  "Practice slow, sustainable habits rooted in grace",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-charcoal-600">
                    <span className="text-earth-600 mr-3 mt-1.5 shrink-0">
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>

            <SpotlightCard className="p-8">
              <h3 className="text-xl font-serif text-charcoal-900 mb-6 border-b border-charcoal-200 pb-4">
                Inside the Book
              </h3>
              <p className="text-charcoal-500 italic mb-5">
                A gentle but practical guide, filled with:
              </p>
              <ul className="space-y-3">
                {[
                  "Biblical teaching that meets you where you really live",
                  "Personal stories from leadership, family life, and faith",
                  "Reflection questions at the end of each chapter",
                  "Realistic practices you can begin immediately",
                  "A hopeful vision of ambition surrendered to Jesus",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-charcoal-600">
                    <Check className="w-4 h-4 text-earth-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          <div className="bg-cream-200 border border-cream-400/50 rounded-xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-10">
              <div>
                <h3 className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-4">
                  Who This Book Is For
                </h3>
                <p className="text-xl md:text-2xl font-serif text-charcoal-800 leading-relaxed">
                  Ambitious Christians, leaders, pastors, entrepreneurs,
                  parents, students—anyone who loves the idea of rest but
                  struggles to actually live rested.
                </p>
              </div>

              <div className="divider-line"></div>

              <div>
                <h3 className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-4">
                  Perfect For
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Small group studies",
                    "Leadership teams",
                    "Church-wide rhythms",
                    "Personal reflection",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-cream-50/70 border border-cream-400 text-charcoal-700 font-medium text-sm hover:border-earth-400 hover:bg-earth-100/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EndorsementBanner
        eyebrow="Praise for the Book"
        quote="Marc’s writing carries both honesty and hope — the kind that makes you breathe deeper and live slower, without losing your calling."
        attribution="— Early reader"
      />

      <WhoIsThisFor />
    </div>
  );
}
