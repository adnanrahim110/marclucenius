import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SpotlightCard from "../components/ui/SpotlightCard";

export const metadata = {
  title: "Coaching | Rest for the Restless",
  description: "Personal and group coaching with Marc Lucenius.",
};

export default function Coaching() {
  return (
    <div className="min-h-screen">
      <PageHero title="Coaching" subtitle="Work with Marc" />

      <section className="section-padding relative" data-reveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-charcoal-600 font-serif leading-relaxed italic">
            Marc offers one-on-one and small group coaching for leaders,
            pastors, and anyone seeking to cultivate a life of sustainable
            ambition and deep rest.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotlightCard className="p-8 flex flex-col">
            <h3 className="text-2xl font-serif text-charcoal-900 mb-4">
              Individual Coaching
            </h3>
            <p className="text-charcoal-500 font-light leading-relaxed mb-6 grow">
              Personalized sessions designed to help you identify your inner
              drivers, develop sustainable rhythms, and find clarity in your
              calling.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "10 one-on-one sessions",
                "Personalized action plan",
                "Email support between sessions",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-charcoal-600 text-sm"
                >
                  <Check
                    className="w-4 h-4 text-earth-600 mr-3"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-outline w-full gap-2">
              Inquire
              <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
            </button>
          </SpotlightCard>

          <SpotlightCard className="p-8 flex flex-col border-2 border-earth-400/70 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-earth-500 text-cream-100 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
              Popular
            </span>
            <h3 className="text-2xl font-serif text-charcoal-900 mb-4">
              Small Group Coaching
            </h3>
            <p className="text-charcoal-500 font-light leading-relaxed mb-6 grow">
              Ideal for leadership teams or cohorts. A guided journey through
              the themes of rest, ambition, and gospel-centered leadership.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "10 group sessions",
                "Facilitation guide",
                "Shared resources & community",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-charcoal-600 text-sm"
                >
                  <Check
                    className="w-4 h-4 text-earth-600 mr-3"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-charcoal-200/60 pt-6">
              <p className="text-xs uppercase tracking-widest text-charcoal-500 mb-3 flex items-center justify-center gap-2">
                <Sparkles
                  className="w-4 h-4 text-earth-600"
                  aria-hidden="true"
                />
                Cohort experience + community
              </p>
              <button className="btn-primary w-full gap-2">
                Inquire
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </button>
            </div>
          </SpotlightCard>
        </div>

        <div className="max-w-2xl mx-auto text-center mt-20">
          <p className="text-charcoal-500 font-light">
            Not sure which is right for you?{" "}
            <Link
              href="/speaking"
              className="text-earth-600 underline underline-offset-4 font-medium hover:text-charcoal-900"
            >
              Contact Marc directly
            </Link>{" "}
            to discuss your needs.
          </p>
        </div>
      </section>
    </div>
  );
}
