import Link from "next/link";
import PageHero from "../../components/PageHero";

export async function generateMetadata({ params }) {
  // In a real app, fetch data based on params.id
  // const { id } = await params;

  // For now, we'll return static metadata that matches the static content
  return {
    title: "Why Rest is an Act of Resistance | Marc Lucenius",
    description:
      "In a culture that demands constant production, choosing to stop is a radical act of faith.",
  };
}

export default async function BlogPost({ params }) {
  // In a real app, fetch data based on params.id
  // const { id } = await params;
  // For now, we'll just mock it or assume the build passes without it being strict.
  // Note: params is async in latest Next.js versions.

  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero
        title="Why Rest is an Act of Resistance"
        subtitle="Spiritual Formation"
        className="min-h-[50vh]"
      />

      <article className="py-20 px-6 max-w-3xl mx-auto">
        <div className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-gray-300 prose-a:text-accent-400 prose-blockquote:border-accent-500 prose-blockquote:bg-primary-900/30 prose-blockquote:p-6 prose-blockquote:not-italic mx-auto">
          <p className="lead text-xl text-gray-200">
            In a culture that demands constant production, choosing to stop is a
            radical act of faith. It says, "I am not what I do."
          </p>
          <p>
            We live in a world that is obsessed with output. From the moment we
            wake up, we are bombarded with messages that tell us we need to do
            more, be more, and achieve more. But the ancient wisdom of the
            Sabbath tells us a different story.
          </p>
          <h2>The IDOL of Productivity</h2>
          <p>
            Productivity is not a sin, but it can easily become an idol. When
            our worth is tied to our work, we become slaves to the clock. We
            fear that if we stop, everything will fall apart.
          </p>
          <blockquote>
            "Rest is not the absence of work; it is the presence of trust."
          </blockquote>
          <p>
            When we rest, we declare that the world can keep spinning without
            our help. We acknowledge that God is God, and we are not. This is a
            profound act of humility and resistance against the ego that wants
            to be the center of the universe.
          </p>
          <h3>Practical Steps</h3>
          <ul>
            <li>Set a hard stop time for your work day.</li>
            <li>Turn off notifications after 8 PM.</li>
            <li>Practice a weekly Sabbath (24 hours of no work).</li>
          </ul>
        </div>

        <div className="mt-20 border-t border-primary-800 pt-10">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            &larr; Back to Journal
          </Link>
        </div>
      </article>
    </div>
  );
}
