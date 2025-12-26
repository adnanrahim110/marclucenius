import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAuthorSection() {
  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden" data-reveal>
      <div className="absolute top-0 right-0 w-64 h-64 bg-earth-200/30 rounded-full blur-3xl pointer-events-none parallax-soft"></div>
      <div className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <span className="font-script text-earth-500 text-3xl md:text-4xl block mb-4 transform -rotate-2">
              About the Author
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
              Meet Marc <span className="text-charcoal-400">Lucenius</span>
            </h2>
            <div className="w-24 h-1 bg-earth-400 mt-6 rounded-full"></div>
          </div>

          <div className="space-y-5 text-charcoal-600 text-lg font-light leading-relaxed">
            <p>
              I'm a husband, dad, and the lead pastor of{" "}
              <strong className="font-medium text-charcoal-800">
                938 Church
              </strong>{" "}
              in West Chester, PA.
            </p>
            <p>
              For years, I lived at full speed—working hard for God while
              quietly running on fumes.
              <em className="text-earth-600 font-serif">
                {" "}
                Rest for the Restless
              </em>{" "}
              is how Jesus taught me to release my ambition, find real rest, and
              work from grace.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center group text-charcoal-800"
            >
              <span className="font-semibold uppercase tracking-widest text-sm border-b-2 border-earth-400 pb-1 group-hover:border-charcoal-800 transition-colors">
                Read More About Marc
              </span>
              <ArrowRight
                className="w-4 h-4 ml-3 text-earth-500 group-hover:translate-x-2 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="relative aspect-4/5 w-full max-w-md mx-auto">
            <div className="absolute inset-0 border border-charcoal-200 transform translate-x-4 translate-y-4 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

            <div className="relative w-full h-full overflow-hidden shadow-lg z-10 bg-cream-200">
              <Image
                src="/imgs/author.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                alt="Marc Lucenius"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-900/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
