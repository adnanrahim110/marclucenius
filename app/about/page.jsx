import Image from "next/image";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <div className="bg-primary-900 min-h-screen">
      <PageHero title="About Marc" subtitle="The Story" />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-accent-800/30">
            <div className="absolute inset-0 bg-primary-800 animate-pulse flex items-center justify-center text-primary-600">
              {/* Placeholder for Author Image */}
              <span className="font-serif text-lg tracking-widest uppercase">
                Marc Lucenius
              </span>
            </div>
            {/* Note: Once real image is available, use next/image here */}
            {/* <Image src="/path/to/image.jpg" alt="Marc Lucenius" fill className="object-cover" /> */}
          </div>

          {/* Content Column */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
            <h2 className="text-3xl font-serif text-white mb-6">
              A voice for the <span className="text-accent-400">weary</span>.
            </h2>
            <p>
              Marc Lucenius is a pastor, speaker, and author dedicated to
              helping people find true rest in a chaotic world. With over a
              decade of ministry experience, Marc understands the burdens that
              modern life places on the soul.
            </p>
            <p>
              His journey to writing <em>Rest for the Restless</em> began with
              his own struggle against burnout and the realization that "hustle
              culture" was incompatible with a life of faith and peace.
            </p>
            <div className="p-6 border-l-2 border-accent-500 bg-primary-950/50 italic text-accent-100 my-8">
              "True rest isn't just about stopping work; it's about starting to
              trust."
            </div>
            <p>
              When he's not writing or speaking, Marc enjoys spending time with
              his family, hiking the trails of the Pacific Northwest, and
              brewing the perfect cup of coffee.
            </p>

            <div className="pt-8">
              <h3 className="text-xl font-serif text-white mb-4">
                Connect with Marc
              </h3>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                {["Instagram", "Twitter", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-400 hover:border-accent-400 hover:text-accent-400 transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="py-20 bg-primary-950 border-t border-primary-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "Speaking truth with love and transparency.",
              },
              {
                title: "Rest",
                desc: "Believing that peace is a promise, not a prize.",
              },
              {
                title: "Community",
                desc: "Walking together through the highs and lows.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-accent-900/50 bg-primary-900/50 hover:border-accent-600 transition-colors"
              >
                <h3 className="text-xl font-serif text-accent-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
