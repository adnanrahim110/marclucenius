import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function HomeBookSection() {
  return (
    <Reveal
      as="section"
      className="section-padding bg-cream-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-earth-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none parallax-soft"></div>
      <div className="absolute inset-0 bg-mesh-warm opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_auto] gap-16 lg:gap-24 items-center">
          <div className="relative flex justify-center lg:justify-start group">
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
              <span className="text-earth-600 font-semibold tracking-widest uppercase text-xs mb-4 block">
                Who This Book Is For
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6 leading-tight">
                For the restless in life who want to live with both{" "}
                <span className="italic text-earth-600">ambition and rest</span>
                .
              </h2>
              <p className="text-lg text-charcoal-500 leading-relaxed font-light">
                We can chase after our ambitions without succumbing to
                exhaustion
              </p>
            </div>

            <SpotlightCard className="p-8">
              <h3 className="text-lg font-serif text-charcoal-800 mb-6">
                This book is for you if you...
              </h3>
              <div className="space-y-4">
                {[
                  "Love getting things done but feel your soul getting thinner",
                  "Want to follow Jesus wholeheartedly but struggle with overcommitment",
                  "Know rest is important but can't seem to access it",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-charcoal-800 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-4 h-4 text-cream-100"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-charcoal-600 font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/book" className="w-full sm:w-auto text-center">
                See What's Inside
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </Button>
              <Button
                href="/resources"
                variant="outline"
                className="w-full sm:w-auto text-center"
              >
                join the Restoration log
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
