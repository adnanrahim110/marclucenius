import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-950 pt-10 pb-20">
      {/* Background Subtle Grid/Lines Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Vertical Lines mimicking the design */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-500"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-accent-500"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-accent-500"></div>
      </div>

      {/* Glow behind book */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-6">
          <h1 className="leading-none flex flex-col items-center lg:items-start">
            <span className="text-4xl lg:text-5xl text-gray-200 font-serif font-bold tracking-tight">
              REST FOR
            </span>
            <span className="text-6xl lg:text-8xl text-accent-300 font-serif font-bold tracking-tighter">
              RESTLESS
            </span>
          </h1>
          <p className="font-script text-white text-4xl lg:text-5xl -mt-4 transform -rotate-2">
            Rest for the Restless
          </p>
          <button className="bg-accent-400 text-primary-950 px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-accent-300 shadow-[0_0_20px_rgba(206,165,93,0.4)] mt-4">
            Order Now
          </button>
        </div>

        {/* Center Column Book */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
          <div className="relative w-[300px] md:w-[360px] aspect-[2/3] shadow-2xl shadow-black transform transition-transform duration-500 hover:scale-105">
            {/* Placeholder for Book Cover */}
            <div className="w-full h-full bg-[#1a1a1a] border border-primary-800 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-950 to-primary-800 opacity-90"></div>
              <div className="relative z-10 text-accent-300 border-2 border-accent-600/50 p-6 w-full h-full flex flex-col justify-between">
                <div className="text-2xl font-serif">REST</div>
                <div className="text-4xl font-bold font-serif text-white">
                  RESTLESS
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-400">
                  Marc Lucenius
                </div>
                {/* Simple illustration placeholder */}
                <div className="my-4 text-6xl text-center opacity-20">📖</div>
              </div>
            </div>
            {/* Real Image Tag (Commented out until asset is ready) */}
            {/* <Image src="/book-cover.png" alt="Rest for the Restless Book" fill className="object-cover" /> */}
          </div>
        </div>

        {/* Right Column Text */}
        <div className="lg:col-span-4 text-center lg:text-right order-3 flex flex-col items-center lg:items-end space-y-6">
          <h1 className="leading-none flex flex-col items-center lg:items-end">
            <span className="text-4xl lg:text-5xl text-accent-600 font-serif font-bold tracking-tight">
              REST FOR THE
            </span>
            <span className="text-6xl lg:text-8xl text-gray-100 font-serif font-bold tracking-tighter">
              RESTLESS
            </span>
          </h1>
          <p className="font-script text-accent-300 text-4xl lg:text-5xl -mt-4 transform -rotate-2">
            author Marc Lucenius
          </p>
          <button className="border border-accent-400 text-accent-400 px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-accent-400 hover:text-primary-950 transition-colors mt-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
