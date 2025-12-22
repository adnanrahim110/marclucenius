import Link from "next/link";

export default function MiniBio() {
  return (
    <section className="bg-primary-900 py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] bg-primary-800 order-2 md:order-1">
            {/* Placeholder for Author Photo */}
            <div className="absolute inset-0 bg-primary-700/50 mix-blend-overlay"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 uppercase tracking-widest">
                Portrait of Marc
              </span>
            </div>
            {/* <Image src="/path-to-marc-photo.jpg" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Marc Lucenius" /> */}
          </div>

          {/* Text Side */}
          <div className="py-20 md:py-0 order-1 md:order-2">
            <h2 className="text-accent-500 font-bold tracking-widest uppercase text-sm mb-4">
              About the Author
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Meeting You in the{" "}
              <span className="italic text-accent-300">Messy Middle</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Marc Lucenius is not a guru on a mountain top. He is a pastor, a
              leader, and a fellow traveler who has learned the hard way that
              burnout is not a badge of honor.
            </p>
            <p className="text-gray-300 text-lg mb-10">
              With over 20 years of ministry experience and a passion for
              healthy leadership, Marc helps high-capacity individuals find a
              rhythm of rest that propels them into their greatest purpose.
            </p>
            <Link href="/about" className="btn-outline">
              Read His Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
