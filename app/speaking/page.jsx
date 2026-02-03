import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Mail,
  User,
} from "lucide-react";
import PageHero from "@/components/layouts/PageHero";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Speaking | Rest for the Restless",
  description: "Invite Marc to speak at your church, conference, or event.",
};

export default function Speaking() {
  return (
    <div className="min-h-screen">
      <PageHero
        bg="bg-[url(/imgs/speaking.png)]"
        className="min-h-155 flex items-center justify-start"
        tone="dark"
        title="Speaking"
      />

      <Reveal as="section" className="section-padding relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none"
        />
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-charcoal-600 font-serif leading-relaxed italic">
            Marc teaches on ambition, rest, the gospel, recovery and sustainable
            discipleship for churches, conferences, staff teams, and retreats.
            His speaking combines biblical depth, practical application,
            relatable humor, and real-life honesty.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif text-charcoal-900 mb-8 border-l-4 border-earth-400 pl-6">
                Signature Topics
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    id: "1",
                    title: "Rest for the Restless",
                    description:
                      "Why ambition isn't the enemy-and how Jesus gives us a way to lead with peace instead of pressure.",
                  },
                  {
                    id: "2",
                    title: "The Work Beneath the Work",
                    description:
                      "Understanding the inner drivers that quietly exhaust us-and how the gospel frees us from needing to prove ourselves.",
                  },
                  {
                    id: "3",
                    title: "Recovery",
                    description:
                      "How do we make it back when life or ambitions have taken us too far.",
                  },
                  {
                    id: "4",
                    title: "Ambition & Calling",
                    description:
                      "How to pursue big vision without burning out your soul, family, or faith.",
                  },
                  {
                    id: "5",
                    title: "Gospel",
                    description:
                      "how the grace of God is the fountain for an evergreen life of faith and impact",
                  },
                  {
                    id: "6",
                    title: "Leadership",
                    description:
                      "Leaders secure, and rooted in grace can lead forward and stand in the face of every calling",
                  },
                ].map((topic) => (
                  <SpotlightCard key={topic.id} className="group p-8">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-11 h-11 rounded-full bg-cream-100 border border-cream-300 flex items-center justify-center text-earth-700 font-serif text-lg shadow-sm shadow-charcoal-900/5">
                        {topic.id}
                      </div>
                      <div>
                        <h3 className="text-xl text-charcoal-900 font-serif mb-2 group-hover:text-earth-700 transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-charcoal-500 font-light leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            <SpotlightCard className="p-8">
              <h3 className="text-lg font-serif text-charcoal-900 mb-6">
                What Audiences Can Expect
              </h3>
              <ul className="space-y-2">
                {[
                  "Clear biblical teaching",
                  "Practical next steps",
                  "Honest stories from real life",
                  "A relatable, pastoral tone",
                  "Hope for people who feel stuck",
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
            </SpotlightCard>
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <SpotlightCard className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-earth-200/30 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-2xl font-serif text-charcoal-900 mb-2">
                Speaking Inquiry
              </h3>
              <p className="text-charcoal-500 text-sm mb-8">
                Interested in having Marc speak at your church or event? Fill
                out the short form below.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="speaking-name"
                      className="text-xs text-charcoal-800 font-semibold uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400"
                        aria-hidden="true"
                      />
                      <input
                        id="speaking-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        className="w-full bg-cream-100/70 border border-charcoal-200/70 rounded-md pl-10 pr-4 py-3 text-charcoal-800 focus:outline-none focus:border-earth-500/70 focus:ring-2 focus:ring-earth-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="speaking-email"
                      className="text-xs text-charcoal-800 font-semibold uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400"
                        aria-hidden="true"
                      />
                      <input
                        id="speaking-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        className="w-full bg-cream-100/70 border border-charcoal-200/70 rounded-md pl-10 pr-4 py-3 text-charcoal-800 focus:outline-none focus:border-earth-500/70 focus:ring-2 focus:ring-earth-500/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="speaking-organization"
                    className="text-xs text-charcoal-800 font-semibold uppercase tracking-wider"
                  >
                    Church / Organization
                  </label>
                  <div className="relative">
                    <Building2
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400"
                      aria-hidden="true"
                    />
                    <input
                      id="speaking-organization"
                      name="organization"
                      autoComplete="organization"
                      type="text"
                      className="w-full bg-cream-100/70 border border-charcoal-200/70 rounded-md pl-10 pr-4 py-3 text-charcoal-800 focus:outline-none focus:border-earth-500/70 focus:ring-2 focus:ring-earth-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="speaking-details"
                    className="text-xs text-charcoal-800 font-semibold uppercase tracking-wider"
                  >
                    Date & Event Details
                  </label>
                  <div className="relative">
                    <CalendarDays
                      className="absolute left-3 top-4 w-4 h-4 text-charcoal-400"
                      aria-hidden="true"
                    />
                    <textarea
                      id="speaking-details"
                      name="details"
                      rows="4"
                      className="w-full bg-cream-100/70 border border-charcoal-200/70 rounded-md pl-10 pr-4 py-3 text-charcoal-800 focus:outline-none focus:border-earth-500/70 focus:ring-2 focus:ring-earth-500/20 transition-all"
                    ></textarea>
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Inquire About Speaking
                  <ArrowRight
                    className="w-4 h-4 opacity-90"
                    aria-hidden="true"
                  />
                </Button>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
