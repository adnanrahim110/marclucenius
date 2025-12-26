import { Flame, HandHeart, Leaf, Trophy } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

export default function InfoGrid() {
  const items = [
    {
      icon: Flame,
      title: "To Escape the Burnout Cycle",
      description:
        "Learn to identify and break the patterns of overwork and anxiety that lead to exhaustion.",
    },
    {
      icon: Trophy,
      title: "To Redefine Success",
      description:
        "Discover a healthier, soul-centered definition of success that isn't tied to productivity or prestige.",
    },
    {
      icon: HandHeart,
      title: "To Find Practical Solace",
      description:
        "Gain tangible, daily practices that create space for rest and spiritual renewal amidst your obligations.",
    },
    {
      icon: Leaf,
      title: "To Build a Sustainable Life",
      description:
        "Move from surviving to thriving by constructing a life rhythm that prioritizes peace and purpose.",
    },
  ];

  return (
    <section className="relative z-10 bg-primary-950 pb-24 px-6 overflow-hidden" data-reveal>
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-ink opacity-80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(168,138,91,0.22),transparent_60%)] opacity-100"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-primary-950/0 via-primary-950/40 to-primary-950" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl pt-24 pb-12">
          <span className="text-xs font-semibold text-accent-300 uppercase tracking-widest mb-4 block">
            What You’ll Gain
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
            Rest, without losing your drive.
          </h2>
          <p className="text-primary-300 mt-5">
            A grounded path for ambitious believers who want sustainable rhythms, not endless pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={index}
                className="group p-8 bg-primary-900/45 border-primary-800/80 text-center"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent-500/0 via-accent-500/0 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-16 h-16 mb-6 mx-auto rounded-full bg-primary-900/60 border border-primary-800/70 flex items-center justify-center text-accent-500 group-hover:text-white group-hover:bg-accent-500 group-hover:border-accent-500 transition-all duration-500 shadow-lg shadow-charcoal-950/30 group-hover:shadow-accent-500/25">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                </div>

                <h3 className="relative text-xl font-serif text-white mb-4 group-hover:text-accent-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="relative text-primary-300 text-sm leading-relaxed grow">
                  {item.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
