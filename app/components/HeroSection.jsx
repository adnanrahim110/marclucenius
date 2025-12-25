"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-primary-950 pt-20 lg:pt-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-accent-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-accent-400/5 rounded-full blur-[100px] mix-blend-screen"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-primary-950/0 via-primary-950/0 to-primary-950/80 z-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-12 pb-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div
          className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all duration-1000 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500/10 text-accent-300 text-xs font-bold tracking-[0.2em] uppercase border border-accent-500/20 backdrop-blur-md">
              The New Book by Marc Lucenius
            </span>
            <h1 className="flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl lg:text-7xl text-gray-100 font-bold leading-[1.1] tracking-tight">
                Tired of running on
              </span>
              <span className="font-serif text-5xl sm:text-6xl lg:text-8xl text-accent-400 font-bold leading-none lg:-mt-2 tracking-tight drop-shadow-2xl">
                empty?
              </span>
            </h1>
          </div>

          <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
            You’re driven, maybe even a little restless. You love the thrill of
            the goal, but lately,{" "}
            <span className="text-white font-medium">
              all you feel is the grind.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto pt-4">
            <button className="group relative w-full sm:w-auto overflow-hidden bg-accent-500 text-primary-950 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_-5px_rgba(194,142,67,0.4)] transition-all hover:shadow-[0_0_50px_-5px_rgba(194,142,67,0.6)] hover:scale-105 active:scale-95">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Order The Book
              </span>
              <div className="absolute inset-0 bg-primary-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            <button className="group w-full sm:w-auto px-8 py-4 border border-white/10 text-gray-200 font-sans font-bold uppercase tracking-widest text-sm hover:border-accent-400/50 hover:bg-accent-400/5 transition-all hover:text-accent-300 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-400 font-serif italic opacity-80">
            <div className="h-px w-12 bg-accent-500/30"></div>
            <span>"A must-read for the modern achiever."</span>
          </div>
        </div>

        <div
          className={`relative flex justify-center lg:justify-end lg:order-last mb-10 lg:mb-0 transition-all duration-1000 delay-300 ease-out transform ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-500/20 blur-[60px] rounded-full animate-pulse-slow pointer-events-none"></div>

          <div className="relative w-70 sm:w-90 lg:w-105 aspect-2/3 transform transition-transform duration-500 hover:scale-[1.02] perspective-1000 group">
            <div className="absolute -bottom-10 left-10 right-10 h-8 bg-black/60 blur-xl rounded-[100%] group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl animate-float">
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-white/20 to-transparent z-20 mix-blend-overlay"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/40 z-20 mix-blend-multiply"></div>

              <Image
                src="/imgs/book.png"
                alt="Rest for the Restless Book Cover"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
