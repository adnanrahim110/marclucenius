import Image from "next/image";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "About Marc | Marc Lucenius",
  description:
    "Learn about Marc Lucenius, a pastor, author, and speaker passionate about spiritual formation and the rhythms of rest.",
};

export default function About() {
  return (
    <div className="bg-primary-900 min-h-screen">
      <PageHero title="About Marc" subtitle="The Story" />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl border border-accent-800/30">
            <Image
              src="/imgs/author2.jpg"
              alt="Marc Lucenius"
              fill
              objectFit="cover"
            />
          </div>

          <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-sans">
            <h2 className="text-5xl font-serif text-white mb-6">
              Meet Marc Lucenius
            </h2>
            <p>
              Marc Lucenius is a pastor, speaker, and author who helps people
              find genuine rest in a world that rarely slows down. With more
              than ten years of ministry experience, he understands how deeply
              modern life exhausts the mind, body, and spirit.
            </p>
            <p>
              The inspiration behind <em>Rest for the Restless</em> grew out of
              Marc’s own battle with burnout and his realization that hustle
              culture clashes with a life grounded in faith and peace. Through
              his work, he invites readers to step away from constant striving
              and rediscover trust as the foundation of proper rest.
            </p>
            <div className="p-6 border-l-2 border-accent-500 bg-primary-950/50 italic text-accent-100 my-7">
              "True rest isn’t just about stopping work; it’s about starting to
              trust."
            </div>
            <p>
              Outside of writing and speaking, Marc enjoys time with his family,
              hiking the trails of the Pacific Northwest, and crafting the
              perfect cup of coffee.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-serif text-white mb-4">
                Connect with Marc
              </h3>
              <div className="flex space-x-4">
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
