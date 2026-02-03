import { Quote } from "lucide-react";

export default function EndorsementBanner({
  quote = "You have made us for yourselves and our hearts are restless until they find their rest in thee.",
  attribution = "— Austine of Hippo",
  eyebrow = "Endorsement",
}) {
  return (
    <section
      className="relative py-16 md:py-20 bg-primary-950 overflow-hidden"
      data-reveal
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-ink opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-primary-950/0 via-primary-950/40 to-primary-950"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-accent-300 uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>

        <div className="relative border border-primary-800/80 rounded-2xl bg-primary-900/45 shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(520px_circle_at_50%_0%,rgba(168,138,91,0.25),transparent_55%)]"
          />
          <div className="relative p-10 md:p-14 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-14 h-14 rounded-full border border-primary-800/80 bg-primary-950/40 flex items-center justify-center text-accent-400 shadow-sm shadow-black/30">
                <Quote className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl font-serif text-cream-100 leading-relaxed italic">
              “{quote}”
            </blockquote>

            <p className="mt-8 text-accent-300/90 font-semibold tracking-widest uppercase text-xs">
              {attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
