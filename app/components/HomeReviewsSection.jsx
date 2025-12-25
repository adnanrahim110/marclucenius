"use client";
import { useEffect, useState } from "react";

export default function HomeReviewsSection() {
  const reviews = [
    {
      text: "“Finally, a book that doesn’t shame my drive but redeems it.",
      author: "Jonathan Ryan",
    },
    {
      text: "Loved the book!!! I felt seen on every page.",
      author: "Sebastian Morgan",
    },
    {
      text: "A must-have piece of literature for sure! This is the book I needed ten years ago, and still need today.",
      author: "Emily Rogers",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-primary-950 border-t border-primary-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent-500 mb-12">
          What Readers Are Saying?
        </p>

        <div className="relative min-h-75 flex items-center justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute bg-primary-950 inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                index === activeIndex
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none"
              }`}
            >
              <div className="mb-8 text-accent-600 opacity-30">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <blockquote className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-8 max-w-3xl">
                "{review.text}"
              </blockquote>
              <div className="flex flex-col items-center space-y-2">
                <cite className="text-accent-400 font-bold tracking-widest text-sm not-italic uppercase">
                  {review.author}
                </cite>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-accent-500"
                  : "bg-primary-800 hover:bg-primary-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
