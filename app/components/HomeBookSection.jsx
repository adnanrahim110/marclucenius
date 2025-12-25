import Image from "next/image";
import Link from "next/link";

export default function HomeBookSection() {
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-primary-950"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section className="py-24 bg-primary-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[320px] aspect-2/3 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <Image src="/imgs/book.png" fill alt="Book Cover" />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Tired of “hustle culture”
                <br />
                <span className="text-accent-400">
                  but still want to make a difference?
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-sans">
                REST FOR THE RESTLESS is a radical rethinking of ambition, work,
                and soul-deep rest. It’s not about working less—it’s about
                working from a place of restoration, not desperation. But why
                This Book Is Different:
              </p>
            </div>

            <div className="bg-primary-950/50 p-8 border border-primary-800 rounded-sm">
              <h3 className="text-xl font-serif text-white mb-6">
                Who is this for?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Not a productivity hack.",
                  "Spiritually rooted, practically applied.",
                  "Honest, relatable, and hopeful..",
                  "Written from the other side of burnout",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent-400 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-accent-400 text-primary-950 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 shadow-[0_0_15px_rgba(206,165,93,0.3)] text-center transition-all"
              >
                Get Your Copy
              </Link>
              <Link
                href="/book"
                className="border border-gray-600 text-gray-300 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-accent-400 hover:text-accent-400 text-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
