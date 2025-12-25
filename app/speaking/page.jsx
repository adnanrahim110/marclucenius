import PageHero from "../components/PageHero";

export const metadata = {
  title: "Speaking | Marc Lucenius",
  description:
    "Invite Marc Lucenius to speak at your church, conference, or event about rest, sabbath, and spiritual formation.",
};

export default function Speaking() {
  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero title="Speaking" subtitle="Invite Marc" />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center space-y-6">
            <p className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed">
              "Marc has a unique ability to cut through the noise and speak
              directly to the heart of the issue. His messages are{" "}
              <span className="text-accent-400 italic">
                timely, biblical, and transformative
              </span>
              ."
            </p>
            <div className="w-16 h-px bg-gray-700 mx-auto"></div>
          </div>

          {/* Signature Topics */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-white text-center mb-12">
              Signature Topics
            </h2>

            {[
              {
                title: "Rest for the Restless",
                desc: "Based on his book, this talk explores the spiritual crisis of burnout and how to find true rest in God.",
              },
              {
                title: "Leading from a Place of Peace",
                desc: "For leaders and pastors who feel the weight of their calling. How to lead without losing your soul.",
              },
              {
                title: "The Rhythm of Grace",
                desc: "Rediscovering the sabbath and spiritual disciplines in a 24/7 world.",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 p-8 border border-primary-800 bg-primary-900/30 hover:border-accent-700 transition-colors rounded-sm"
              >
                <div className="flex-shrink-0 text-accent-500 font-serif text-4xl opacity-50">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Form Wrapper */}
          <div className="pt-16 border-t border-primary-800">
            <h2 className="text-3xl font-serif text-white text-center mb-8">
              Start the Conversation
            </h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-primary-900 border border-primary-700 p-3 text-white focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-primary-900 border border-primary-700 p-3 text-white focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="org"
                  className="text-xs uppercase tracking-widest text-gray-500"
                >
                  Organization / Church
                </label>
                <input
                  type="text"
                  id="org"
                  className="w-full bg-primary-900 border border-primary-700 p-3 text-white focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-gray-500"
                >
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-primary-900 border border-primary-700 p-3 text-white focus:border-accent-500 focus:outline-none transition-colors"
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <button
                  type="button"
                  className="bg-accent-400 text-primary-950 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 transition-colors w-full md:w-auto"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
