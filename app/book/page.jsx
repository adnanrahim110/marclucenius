import Image from "next/image";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Books | Marc Lucenius",
  description:
    "Discover books by Marc Lucenius, including 'Rest for the Restless' and 'The Sabbath Life'.",
};

export default function Book() {
  return (
    <div className="bg-primary-950 min-h-screen">
      <PageHero title="Rest for the Restless" subtitle="The Book" />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-75 md:w-100 aspect-2/3 bg-primary-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-r-4 border-b-4 border-primary-900 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-in-out cursor-pointer group">
              <Image src="/imgs/book.png" fill alt="Book Cover" />
              <div className="absolute top-0 left-0 bottom-0 w-4 bg-linear-to-r from-accent-800 to-primary-900 -translate-x-full"></div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              Find Your Way Home to Peace
              <br />
              <span className="text-accent-400 md:text-7xl">
                With Rest For Restless
              </span>
            </h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                Rest for the Restless is a field guide for the soul. It's an
                invitation to step off the frantic treadmill of performance and
                rediscover the deep, quiet peace that many of us have forgotten,
                or have never truly known.
              </p>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                This book is born from Marc's own journey through the wilderness
                of burnout, where the constant pressure to achieve drowned out
                the voice of true purpose. Here, he doesn't just offer
                platitudes about slowing down. Instead, he provides a
                compassionate and practical roadmap for dismantling the myth
                that your worth is tied to your output.
              </p>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                Through honest storytelling, grounded wisdom, and gentle
                guidance, the book walks you through the process of releasing
                the heavy burden of ambition to find a lighter, more anchored
                life. It’s about trading the exhaustion of striving for the
                profound strength that comes from true rest.
              </p>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                If you are tired of being tired, this book is a hand to hold,
                showing you that peace isn't a distant destination for the lucky
                few, but a place you can call home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-400 text-primary-950 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 shadow-[0_0_20px_rgba(206,165,93,0.3)] transition-all">
                Buy on Amazon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
