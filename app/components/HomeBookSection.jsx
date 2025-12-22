import Link from "next/link";

export default function HomeBookSection() {
  // Icons provided directly to avoid dependency issues if lucide isn't set up
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Book Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-[320px] aspect-[2/3] transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black shadow-2xl border-r border-b border-white/10">
                {/* Placeholder Design */}
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-accent-500/30 m-2">
                  <h3 className="font-serif text-3xl text-white mb-2">REST</h3>
                  <p className="font-serif text-lg text-accent-400 tracking-widest mb-12">
                    FOR THE RESTLESS
                  </p>
                  <div className="w-8 h-8 rounded-full border border-accent-500 mb-4"></div>
                  <p className="font-sans text-xs uppercase tracking-widest text-gray-500">
                    Bestseller
                  </p>
                </div>
              </div>
              {/* Shadow/Glow */}
              <div className="absolute -inset-4 bg-accent-500/20 blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Discover the peace
                <br />
                <span className="text-accent-400">you were made for.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-sans max-w-2xl">
                This isn't just another book about time management. It's a
                spiritual manifesto for reclaiming your soul in a
                hustle-obsessed world.
              </p>
            </div>

            {/* Who is this for grid */}
            <div className="bg-primary-950/50 p-8 border border-primary-800 rounded-sm">
              <h3 className="text-xl font-serif text-white mb-6">
                Who is this for?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "The burnt-out leader",
                  "The anxious creative",
                  "The tired parent",
                  "The spiritual seeker",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-400 flex items-center justify-center">
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
                Read a Chapter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
