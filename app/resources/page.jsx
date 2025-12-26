import PageHero from "../components/PageHero";
import SpotlightCard from "../components/ui/SpotlightCard";
import { ArrowRight, BookOpen, CalendarDays, Headphones, Users } from "lucide-react";

export const metadata = {
  title: "Resources | Rest for the Restless",
  description: "Free guides, tools, and downloads to help you practice rest.",
};

export default function Resources() {
  return (
    <div className="min-h-screen">
      <PageHero title="Resources" subtitle="Free Tools" />

      <section className="section-padding relative" data-reveal>
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          {/* Free Chapter */}
          <SpotlightCard className="p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-4">
              <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs">
                Free Chapter
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900">
                Free Chapter + Reflection Guide
              </h2>
              <p className="text-charcoal-500 font-light leading-relaxed">
                Get Chapter One of{" "}
                <em className="text-charcoal-700">Rest for the Restless</em>{" "}
                plus a guided reflection tool for personal or group use.
              </p>
              <button className="btn-primary gap-2">
                Download Free Chapter
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-xl border border-cream-300 bg-cream-200 relative overflow-hidden">
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-cream-200 via-cream-50 to-earth-100 opacity-90" />
              <div aria-hidden="true" className="absolute inset-0 bg-paper opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-cream-50 border border-cream-300 flex items-center justify-center text-earth-600 shadow-sm shadow-charcoal-900/5">
                  <BookOpen className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* 7-Day Rest Reset */}
          <SpotlightCard className="p-8 md:p-10 flex flex-col md:flex-row-reverse gap-10 items-center relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-earth-200/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex-1 space-y-4 relative z-10">
              <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs">
                Daily Practice
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900">
                7-Day Rest Reset
              </h2>
              <p className="text-charcoal-500 font-light leading-relaxed">
                A simple, daily practice designed to help you slow down,
                breathe, and experience the presence of Jesus in practical ways.
              </p>
              <button className="btn-primary gap-2">
                Get the 7-Day Reset
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </button>
            </div>
            <div className="w-full md:w-1/4 aspect-square rounded-full border border-cream-300 bg-cream-200 relative overflow-hidden flex items-center justify-center">
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-cream-200 via-cream-50 to-earth-100 opacity-90" />
              <div aria-hidden="true" className="absolute inset-0 bg-paper opacity-45" />
              <div className="relative w-14 h-14 rounded-full bg-cream-50 border border-cream-300 flex items-center justify-center text-earth-600 shadow-sm shadow-charcoal-900/5">
                <CalendarDays className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>
          </SpotlightCard>

          {/* Small Group Guide & Sermons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="p-8">
              <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-3 block">
                Discussion Guide
              </span>
              <h3 className="text-xl font-serif text-charcoal-900 mb-3">
                Small Group Guide
              </h3>
              <p className="text-charcoal-500 mb-6 font-light leading-relaxed">
                A 4-6 week discussion guide for churches and groups who want to
                explore rest, ambition, and the way of Jesus.
              </p>
              <button className="btn-outline w-full text-center text-sm gap-2">
                Download Group Guide
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </button>
              <div className="mt-6 flex items-center gap-3 text-charcoal-400 text-xs uppercase tracking-widest">
                <Users className="w-4 h-4" aria-hidden="true" />
                Built for groups & teams
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-8">
              <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-3 block">
                Listen
              </span>
              <h3 className="text-xl font-serif text-charcoal-900 mb-3">
                Related Sermons & Teachings
              </h3>
              <p className="text-charcoal-500 mb-6 font-light leading-relaxed">
                Listen to sermons and messages connected to the themes of the
                book.
              </p>
              <button className="btn-outline w-full text-center text-sm gap-2">
                View Sermons
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </button>
              <p className="text-xs text-center mt-3 text-charcoal-400">
                (Links to 938 Church messages)
              </p>
              <div className="mt-6 flex items-center gap-3 text-charcoal-400 text-xs uppercase tracking-widest">
                <Headphones className="w-4 h-4" aria-hidden="true" />
                Audio + teaching series
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}
