import { Download, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import PageHero from "../components/PageHero";
import SpotlightCard from "../components/ui/SpotlightCard";

export const metadata = {
  title: "About Marc | Rest for the Restless",
  description:
    "Learn about Marc Lucenius, Lead Pastor of 938 Church and author of Rest for the Restless.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHero title="About Marc" subtitle="The Story" />

      <section className="section-padding relative overflow-hidden" data-reveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-mesh-warm opacity-60 pointer-events-none"
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative aspect-3/4 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/imgs/author2.jpg"
                  alt="Marc Lucenius"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <SpotlightCard className="p-6 mt-8">
                <h3 className="text-earth-600 font-semibold uppercase tracking-widest text-xs mb-4">
                  Short Bio
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed mb-5">
                  Marc Lucenius is the Lead Pastor of 938 Church in West
                  Chester, Pennsylvania, and the author of{" "}
                  <em className="text-charcoal-800">Rest for the Restless</em>.
                </p>
              </SpotlightCard>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="w-16 h-1 bg-earth-400 mb-6"></div>
              <h2 className="text-4xl lg:text-5xl font-serif text-charcoal-900 leading-tight">
                The Longer Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-charcoal-600 prose-em:text-charcoal-800">
              <p>
                I've always been driven. Whether in ministry, leadership, or
                family life, I pushed hard- convinced that if I wasn't
                producing, I wasn't valuable. From the outside, things looked
                great. On the inside, I was running on fumes.
              </p>
              <p>
                I wasn't burned out. Not yet. But I was restless—always pushing,
                always striving, always feeling like there was one more thing I
                needed to do to prove that I belonged.
              </p>

              <blockquote className="border-l-4 border-earth-400 pl-6 my-10 italic text-charcoal-700 text-2xl font-serif">
                Then Jesus interrupted me.
              </blockquote>

              <p>
                Through Scripture, wise mentors, honest community, and some
                painful moments of hitting my limits, I began to see that the
                rest Jesus promised in Matthew 11 wasn't a metaphor—it was a way
                of life.
              </p>
              <p>
                <em className="text-charcoal-800">Rest for the Restless</em> is
                the story of that journey. It's written for every people who
                wants to serve God wholeheartedly without losing themselves in
                the process.
              </p>
              <p>
                Today, I pastor 938 Church, where we are learning how to live
                out God's vision with joy, not exhaustion. I live in West
                Chester, PA, with my family, and I love hiking, coaching
                leaders, and helping people rediscover the grace of a rested
                life.
              </p>
            </div>

            <div className="pt-8 border-t border-charcoal-200">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-charcoal-900 mb-4">
                Connect with Marc
              </h3>
              <div className="flex space-x-3">
                {[
                  { name: "Instagram", icon: Instagram },
                  { name: "Twitter", icon: Twitter },
                  { name: "Facebook", icon: Facebook },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-charcoal-300 text-charcoal-400 hover:border-charcoal-800 hover:bg-charcoal-800 hover:text-cream-100 transition-all duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
