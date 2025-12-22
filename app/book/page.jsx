import PageHero from "../components/PageHero";

export default function Book() {
  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero title="Rest for the Restless" subtitle="The Book" />

      {/* Main Book Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Preview / 3D Mockup area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] md:w-[400px] aspect-[2/3] bg-primary-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-r-4 border-b-4 border-primary-900 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-in-out cursor-pointer group">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border border-accent-600/20">
                {/* Visual Placeholder for Cover */}
                <p className="font-serif text-3xl text-accent-200 mb-2">REST</p>
                <p className="font-serif text-xl text-white mb-8">
                  FOR THE RESTLESS
                </p>
                <div className="w-16 h-1 bg-accent-500 mb-8"></div>
                <p className="font-script text-accent-400 text-2xl">
                  Marc Lucenius
                </p>
              </div>
              {/* Spine effect */}
              <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-accent-800 to-primary-900 -translate-x-full"></div>
            </div>
          </div>

          {/* Purchase & Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              Stop Running.
              <br />
              <span className="text-accent-400">Start Trusting.</span>
            </h2>
            <p className="text-lg text-gray-400 font-sans leading-relaxed">
              In a world that equates busyness with worth,{" "}
              <em>Rest for the Restless</em> offers a different path. Drawing
              from ancient wisdom and modern struggles, Marc Lucenius invites
              you to break free from the cycle of burnout and discover the peace
              you were made for.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              <div className="flex items-start">
                <span className="text-accent-500 mr-3 text-xl">01.</span>
                <p className="text-gray-300 text-sm">
                  Understand the root of your restlessness.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-500 mr-3 text-xl">02.</span>
                <p className="text-gray-300 text-sm">
                  Practical habits for a slower pace.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-500 mr-3 text-xl">03.</span>
                <p className="text-gray-300 text-sm">
                  Faith-based perspective on work and rest.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-500 mr-3 text-xl">04.</span>
                <p className="text-gray-300 text-sm">
                  A 7-day guide to resetting your soul.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-400 text-primary-950 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 shadow-[0_0_20px_rgba(206,165,93,0.3)] transition-all">
                Buy on Amazon
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-accent-400 hover:text-accent-400 transition-colors">
                Download Sample
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / endorsements could go here */}
    </div>
  );
}
