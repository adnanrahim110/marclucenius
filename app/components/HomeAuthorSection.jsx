import Image from "next/image";
import Link from "next/link";

export default function HomeAuthorSection() {
  return (
    <section className="py-24 bg-primary-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 size-150 bg-accent-900/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <p className="font-script text-accent-400 text-3xl md:text-4xl mb-4">
              Who Wrote This Book?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
              Meet Marc Lucenius
            </h2>
            <div className="w-24 h-1 bg-accent-500 mt-6 opacity-60"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg font-sans leading-relaxed">
            <p>
              Marc Lucenius <strong className="text-white">(MDiv, DMin)</strong>{" "}
              has spent his career pastoring the tired, coaching the driven, and
              writing for the restless. He blends biblical wisdom with
              real-world struggle, recovery, honesty, and a passion for helping
              people live well, not just work hard. He lives in Pennsylvania
              with his family and an undying loyalty to Philadelphia sports. As
              a pastor, leadership coach, and restless soul himself, he’s spent
              over two decades helping ambitious people find freedom without
              losing their fire.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about" className="inline-flex items-center group">
              <span className="text-white font-bold uppercase tracking-widest text-sm border-b-2 border-accent-500 pb-1 group-hover:text-accent-300 group-hover:border-accent-300 transition-all">
                Read Full Bio
              </span>
              <svg
                className="w-5 h-5 ml-3 text-accent-500 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-4/5 w-full max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-accent-500/30 transform translate-x-4 translate-y-4" />
            <Image
              src="/imgs/author.jpg"
              fill
              objectFit="cover"
              alt="Marc Lucenius"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
