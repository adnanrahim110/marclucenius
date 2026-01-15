import { ArrowRight, Download, Mic } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./ui/SpotlightCard";

export default function HomeExtraSections() {
  return (
    <>
      <section
        className="section-padding bg-earth-100/50 relative overflow-hidden"
        data-reveal
      >
        <div className="absolute inset-0 bg-paper opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-mesh-warm opacity-70 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-4 block">
            Free Resource
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
            Start a 21-Days Rest Reset
          </h2>
          <p className="text-lg text-charcoal-500 font-light mb-10 max-w-xl mx-auto">
            Short, practical daily practices designed to help you slow down,
            breathe, notice God's presence, and work from rest-starting today.
          </p>

          <SpotlightCard className="p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-cream-100 border border-cream-300 flex items-center justify-center text-earth-600 shadow-sm shadow-charcoal-900/5">
                <Download className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
            <p className="text-charcoal-700 font-serif italic text-lg mb-6">
              “Get the Reset + ongoing insights to help you live rested.”
            </p>
            <Link href="/resources" className="btn-primary w-full gap-2">
              Download Free Guide
              <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
            </Link>
          </SpotlightCard>
        </div>
      </section>

      <section className="section-padding bg-cream-50 relative" data-reveal>
        <div className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SpotlightCard className="relative rounded-xl overflow-hidden aspect-4/3 group bg-cream-200 border-cream-300">
            <div className="absolute inset-0 bg-linear-to-tr from-cream-200 via-cream-50 to-earth-100 opacity-90" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-paper opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <div className="w-14 h-14 rounded-full bg-cream-50 border border-cream-300 flex items-center justify-center text-earth-600 shadow-sm shadow-charcoal-900/5 mb-5">
                <Mic className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="text-charcoal-700 font-serif text-xl mb-2">
                Speaking & Events
              </span>
              <span className="text-charcoal-500 text-sm font-light max-w-sm">
                Invite Marc for a message on ambition, rest, and sustainable
                discipleship.
              </span>
            </div>
          </SpotlightCard>

          <div>
            <span className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-4 block">
              Invite Marc
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
              Book Marc to Speak
            </h2>
            <p className="text-lg text-charcoal-500 font-light mb-8 leading-relaxed">
              Marc teaches on ambition, rest, and sustainable discipleship for
              churches, conferences, and leadership events.
            </p>
            <Link
              href="/speaking"
              className="btn-outline inline-flex items-center group gap-2"
            >
              Inquire About Speaking
              <ArrowRight
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
