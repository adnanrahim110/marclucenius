import { Check } from "lucide-react";

export default function WhoIsThisFor() {
  const items = [
    {
      title: "The Ambitious Leader",
      description:
        "You have big dreams and high capacity, but you're starting to feel the weight of sustaining it all.",
    },
    {
      title: "The Exhausted Creative",
      description:
        "You pour your soul into your work, but lately, the well feels dry and the joy is fading.",
    },
    {
      title: "The Faithful Servant",
      description:
        "You serve others tirelessly in non-profit or ministry work, often at the expense of your own soul.",
    },
    {
      title: "The Restless Achiever",
      description:
        "You've achieved success, but you can't shake the feeling that there must be more peace than this.",
    },
  ];

  return (
    <section className="bg-primary-950 py-24 relative overflow-hidden" data-reveal>
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-ink opacity-80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(168,138,91,0.22),transparent_60%)] opacity-100 parallax-soft"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-primary-950/0 via-primary-950/35 to-primary-950" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent-300 mb-2 font-bold tracking-widest uppercase text-sm">
              Target Audience
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Is This Book For You?
            </h3>
            <p className="text-primary-300 text-lg mb-8">
              "Rest for the Restless" isn't for everyone. It's for those who
              have tried to simply "do less" and found it insufficient. It's for
              the high-capacity leader who needs a rest that works relative to
              their ambition.
            </p>
            <div className="w-20 h-1 bg-accent-500"></div>
          </div>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full border border-accent-600 flex items-center justify-center text-accent-500 group-hover:bg-accent-600 group-hover:text-primary-950 transition-colors duration-300">
                    <Check className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-white font-serif mb-2 group-hover:text-accent-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-primary-300 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
