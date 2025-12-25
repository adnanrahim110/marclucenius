import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Focal Point Blog | Marc Lucenius",
  description:
    "Read the latest thoughts and reflections from Marc Lucenius on faith, culture, and the spiritual life.",
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why Rest is an Act of Resistance",
      excerpt:
        "In a culture that demands constant production, choosing to stop is a radical act of faith.",
      date: "October 12, 2023",
      category: "Spiritual Formation",
    },
    {
      id: 2,
      title: "The Myth of a Balanced Life",
      excerpt:
        "We often chase balance, but what if we were actually made for rhythm instead?",
      date: "September 28, 2023",
      category: "Culture",
    },
    {
      id: 3,
      title: "3 Books That Changed My View on Work",
      excerpt:
        "A curated list of reads that helped me dissociate my value from my output.",
      date: "September 15, 2023",
      category: "Resources",
    },
  ];

  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero title="Journal" subtitle="Thoughts & Musings" />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blogs/${post.id}`}
                key={post.id}
                className="group block h-full"
              >
                <div className="flex flex-col h-full bg-primary-900/30 border border-primary-800/50 hover:border-accent-500/50 transition-all duration-300">
                  <div className="w-full aspect-video bg-primary-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900 group-hover:scale-105 transition-transform duration-700"></div>
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center justify-between text-xs text-accent-500 uppercase tracking-widest mb-4">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-accent-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                      {post.excerpt}
                    </p>
                    <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-accent-500 inline-block w-max pb-1 transition-all">
                      Read Article
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-20 space-x-2">
            <button className="w-10 h-10 border border-primary-700 text-gray-400 hover:text-white hover:border-accent-500 flex items-center justify-center transition-colors">
              1
            </button>
            <button className="w-10 h-10 border border-transparent text-gray-500 hover:text-white flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 border border-transparent text-gray-500 hover:text-white flex items-center justify-center transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
