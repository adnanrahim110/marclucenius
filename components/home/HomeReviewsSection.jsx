"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function HomeReviewsSection() {
  const reviews = [
    {
      text: "Marc writes with the honesty of a pastor who has lived in the tension between ambition and soul-level exhaustionâ€”and found a better way in Jesus.",
      author: "Anonymous",
      role: "",
    },
    {
      text: "Finally, a book that doesn't shame my drive but redeems it.",
      author: "Jonathan Ryan",
      role: "Entrepreneur",
    },
    {
      text: "A must-have piece of literature for sure! This is the book I needed ten years ago, and still need today.",
      author: "Emily Rogers",
      role: "Pastor",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reduceMotion, reviews.length]);

  const activeReview = reviews[activeIndex] ?? reviews[0];

  return (
    <Reveal
      as="section"
      className="section-padding bg-cream-200 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-paper opacity-50 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-warm opacity-60 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <span className="text-xs font-semibold text-earth-600 uppercase tracking-widest mb-4 block">
            What Readers Say
          </span>
          <h2 className="text-3xl md:text-4xl text-charcoal-900 font-serif">
            Words from the{" "}
            <span className="italic text-charcoal-500">Community</span>
          </h2>
        </div>

        <div className="relative min-h-72 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 16, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -16, scale: 0.98 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <div className="paper-card-elevated px-8 py-10 md:px-12 md:py-12 w-full">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-cream-100 border border-cream-300 flex items-center justify-center text-earth-500 shadow-sm shadow-charcoal-900/5">
                    <Quote className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <blockquote className="text-2xl md:text-3xl font-serif text-charcoal-800 leading-relaxed mb-8 italic">
                  â€œ{activeReview.text}â€
                </blockquote>

                <div className="flex flex-col items-center space-y-1">
                  <cite className="text-earth-700 font-semibold tracking-wide text-sm not-italic">
                    {activeReview.author}
                  </cite>
                  {activeReview.role ? (
                    <span className="text-charcoal-400 text-xs uppercase tracking-widest">
                      {activeReview.role}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                index === activeIndex
                  ? "w-10 bg-earth-500"
                  : "w-4 bg-charcoal-300 hover:bg-charcoal-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
