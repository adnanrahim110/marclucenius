import Link from "next/link";

export default function HomeAuthorSection() {
  return (
    <section className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <p className="font-script text-accent-400 text-3xl md:text-4xl mb-4 transform -rotate-2">
              Meet the Author
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
              Marc Lucenius
            </h2>
            <div className="w-24 h-1 bg-accent-500 mt-6 opacity-60"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg font-sans leading-relaxed">
            <p>
              Marc is a pastor, speaker, and author who knows firsthand the
              crushing weight of burnout. After years of running on empty, he
              discovered a life-changing truth:{" "}
              <strong className="text-white">
                Meaningful work requires deep rest.
              </strong>
            </p>
            <p>
              His mission is to help high-capacity leaders and weary souls alike
              find the courage to stop, breathe, and trust God with the outcome.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about" className="inline-flex items-center group">
              <span className="text-white font-bold uppercase tracking-widest text-sm border-b-2 border-accent-500 pb-1 group-hover:text-accent-300 group-hover:border-accent-300 transition-all">
                Read Full Bio
              </span>
              <svg
                className="w-5 h-5 ml-3 text-accent-500 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            {/* Border effect */}
            <div className="absolute inset-0 border-2 border-accent-500/30 transform translate-x-4 translate-y-4"></div>

            {/* Image Container */}
            <div className="absolute inset-0 bg-primary-800 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              {/* Placeholder for real image */}
              <div className="w-full h-full flex items-center justify-center bg-primary-900 border border-primary-800">
                <span className="font-serif text-primary-700 text-6xl opacity-20">
                  ML
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
