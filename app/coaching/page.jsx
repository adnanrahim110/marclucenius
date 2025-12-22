import PageHero from "../components/PageHero";

export default function Coaching() {
  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero title="1-on-1 Coaching" subtitle="Go Deeper" />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Navigating life's{" "}
              <span className="text-accent-400">transitions</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Sometimes we need a guide to help us see the path ahead. Whether
              you're a pastor, a leader, or just someone seeking clarity, Marc
              offers limited spots for personal coaching and spiritual
              direction.
            </p>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Package 1 */}
            <div className="border border-primary-800 bg-primary-900/20 p-8 flex flex-col hover:border-accent-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">
                Spiritual Direction
              </h3>
              <p className="text-accent-400 font-serif italic mb-6">
                Monthly / 60 min sessions
              </p>
              <p className="text-gray-400 text-sm mb-8 flex-grow">
                A slow, contemplative space to discern the movement of God in
                your life. Focus is on listening and prayerful reflection.
              </p>
              <button className="w-full border border-gray-600 text-white py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary-950 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Package 2 */}
            <div className="border border-primary-800 bg-primary-900/20 p-8 flex flex-col hover:border-accent-500/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-500 text-primary-950 text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Leadership Coaching
              </h3>
              <p className="text-accent-400 font-serif italic mb-6">
                3-Month Cohort or 1-on-1
              </p>
              <p className="text-gray-400 text-sm mb-8 flex-grow">
                Strategic guidance for navigating organizational challenges,
                burnout, and personal growth. Goal-oriented and practical.
              </p>
              <button className="w-full bg-accent-400 text-primary-950 py-3 uppercase tracking-widest text-xs font-bold hover:bg-accent-300 transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* FAQ / Expectations */}
          <div className="space-y-8 border-t border-primary-800 pt-16">
            <h3 className="text-2xl font-serif text-white text-center mb-8">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-full border border-accent-500 flex items-center justify-center mx-auto mb-4 text-accent-400">
                  i
                </div>
                <h4 className="text-white font-bold mb-2">Clarity</h4>
                <p className="text-gray-500 text-sm">
                  Uncover the "why" behind your current challenges.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full border border-accent-500 flex items-center justify-center mx-auto mb-4 text-accent-400">
                  ii
                </div>
                <h4 className="text-white font-bold mb-2">Accountability</h4>
                <p className="text-gray-500 text-sm">
                  Honest feedback and encouragement to keep moving.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full border border-accent-500 flex items-center justify-center mx-auto mb-4 text-accent-400">
                  iii
                </div>
                <h4 className="text-white font-bold mb-2">Growth</h4>
                <p className="text-gray-500 text-sm">
                  Practical steps to implement change in your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
