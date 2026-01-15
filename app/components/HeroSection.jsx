"use client";

import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-paper overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-cream-200/50 via-cream-100 to-cream-50"></div>
        <div className="absolute inset-0 bg-mesh-warm opacity-70"></div>

        <div className="absolute top-[10%] right-[5%] w-32 h-32 opacity-[0.08] bg-charcoal-400 rounded-full blur-3xl parallax-soft"></div>
        <div className="absolute bottom-[15%] left-[8%] w-48 h-48 opacity-[0.06] bg-earth-400 rounded-full blur-3xl parallax-strong"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        <div
          className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all duration-1000 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-charcoal-200/60 bg-cream-50/60 backdrop-blur-sm px-4 py-2 shadow-sm shadow-charcoal-900/5"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-4 h-4 text-earth-600" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal-700 font-semibold">
              New release • Available now
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="font-serif">
              <span
                className="block text-4xl sm:text-5xl lg:text-6xl text-charcoal-700 font-light tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Rest for the
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 font-semibold leading-none tracking-tight mt-2 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Restless
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-earth-600 font-serif italic font-light animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Releasing Your Ambition Through a Well-Rested Life
            </p>
          </div>

          <p
            className="text-lg text-charcoal-500 max-w-lg font-light leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            I'm Marc Lucenius—pastor, author, coach and entrepreneur. Join me as
            I discover Jesus' way of living both restless and rested.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link href="/book" className="btn-primary w-full sm:w-auto gap-2">
              Get the Book
              <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
            </Link>
            <Link
              href="/resources"
              className="btn-outline w-full sm:w-auto gap-2"
            >
              Download 21-Day Reset
              <Download className="w-4 h-4 opacity-90" aria-hidden="true" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 pt-2 text-charcoal-400">
            <div className="h-px w-10 bg-charcoal-300/80" />
            <span className="text-xs uppercase tracking-[0.22em]">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
          </div>
        </div>

        <div
          className={`relative flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-1000 delay-300 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-64 sm:w-72 lg:w-80 group">
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-charcoal-900/15 blur-2xl rounded-[100%] transition-all duration-500 group-hover:w-[90%] group-hover:bg-charcoal-900/20"></div>

            <div className="relative animate-float">
              <div className="relative aspect-2/3 rounded-r-lg rounded-l-sm overflow-hidden shadow-xl border border-cream-400/50 transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-[1.02]">
                <Image
                  src="/imgs/book.png"
                  alt="Rest for the Restless Book Cover"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                <div className="absolute left-0 top-0 bottom-0 w-[3%] bg-linear-to-r from-charcoal-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
