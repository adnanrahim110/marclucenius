export default function WhoIsThisFor() {
  const audienceList = [
    {
      title: "The Ambitious Leader",
      description:
        "You have big dreams and high capacity, but you're starting to feel the weight of sustaining it all.",
    },
    {
      title: "The Exhausted Creative",
      description:
        "You pour your soul into your work, but lately, the well feels dry and the joy is fading.",
    },
    {
      title: "The Faithful Servant",
      description:
        "You serve others tirelessly in non-profit or ministry work, often at the expense of your own soul.",
    },
    {
      title: "The Restless Achiever",
      description:
        "You've achieved success, but you can't shake the feeling that there must be more peace than this.",
    },
  ];

  return (
    <section className="bg-primary-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent-300 mb-2 font-bold tracking-widest uppercase text-sm">
              Target Audience
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Is This Book For You?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              "Rest for the Restless" isn't for everyone. It's for those who
              have tried to simply "do less" and found it insufficient. It's for
              the high-capacity leader who needs a rest that works relative to
              their ambition.
            </p>
            <div className="w-20 h-1 bg-accent-500"></div>
          </div>

          <div className="space-y-8">
            {audienceList.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full border border-accent-600 flex items-center justify-center text-accent-500 group-hover:bg-accent-600 group-hover:text-primary-950 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-white font-serif mb-2 group-hover:text-accent-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
