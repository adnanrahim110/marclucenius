"use client";

import Button from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";

const EASE_OUT = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: reduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-paper overflow-hidden pt-20 lg:pt-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-cream-200/50 via-cream-100 to-cream-50" />
        <div className="absolute inset-0 bg-mesh-warm opacity-70" />

        <div className="absolute top-[10%] right-[5%] w-32 h-32 opacity-[0.08] bg-charcoal-400 rounded-full blur-3xl parallax-soft" />
        <div className="absolute bottom-[15%] left-[8%] w-48 h-48 opacity-[0.06] bg-earth-400 rounded-full blur-3xl parallax-strong" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-charcoal-200/60 bg-cream-50/60 backdrop-blur-sm px-4 py-2 shadow-sm shadow-charcoal-900/5"
          >
            <Sparkles className="w-4 h-4 text-earth-600" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal-700 font-semibold">
              New release — Available now
            </span>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h1 className="font-serif">
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-charcoal-700 font-light tracking-tight">
                Rest for the
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 font-semibold leading-none tracking-tight mt-2">
                Restless
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-earth-600 font-serif italic font-light">
              Releasing Your Ambition Through a Well-Rested Life
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg text-charcoal-500 max-w-lg font-light leading-relaxed"
          >
            I'm Marc Lucenius — a pastor, author, coach and entrepreneur. Join
            me as I discover Jesus' way of living both restless and rested.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
          >
            <Button
              href="/resources"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Join the Restoration Reset
              <Download className="w-4 h-4 opacity-90" aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="hidden lg:flex items-center gap-3 pt-2 text-charcoal-400"
          >
            <div className="h-px w-10 bg-charcoal-300/80" />
            <span className="text-xs uppercase tracking-[0.22em]">Scroll</span>
            <ArrowDown
              className="w-4 h-4 motion-safe:animate-bounce motion-reduce:animate-none"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.9, ease: EASE_OUT, delay: 0.15 }
          }
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-64 sm:w-72 lg:w-80 group">
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-charcoal-900/15 blur-2xl rounded-[100%] transition-all duration-500 group-hover:w-[90%] group-hover:bg-charcoal-900/20" />

            <div className="relative motion-safe:animate-float motion-reduce:animate-none">
              <div className="relative aspect-2/3 rounded-r-lg rounded-l-sm overflow-hidden shadow-xl border border-cream-400/50 transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-[1.02]">
                <Image
                  src="/imgs/book.png"
                  alt="Rest for the Restless Book Cover"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-[3%] bg-linear-to-r from-charcoal-900/20 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
