export default function InfoGrid() {
  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "About the Author",
      description:
        "Marc Lucenius is a pastor and leader helping people find rest in a chaotic world.",
      linkText: "Learn More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Book Synopsis",
      description:
        "Discover the journey of releasing ambition to find a life of true peace.",
      linkText: "Learn More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      title: "Endorsements",
      description:
        "See what leaders and readers are saying about 'Rest for the Restless'.",
      linkText: "read reviews", // Lowercase in design? I'll keep it title case for consistency but maybe check image. Image says "Sethem Wirtch"? hard to read.
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Events",
      description:
        "Join Marc at upcoming speaking engagements and book signings.",
      linkText: "View Calendar",
    },
  ];

  return (
    <section className="bg-primary-950 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-accent-600/50 p-8 flex flex-col items-center text-center hover:border-accent-400 transition-colors group"
          >
            <div className="text-white mb-6 group-hover:text-accent-400 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
              {item.description}
            </p>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:border-accent-500 hover:text-accent-400 transition-colors">
              {item.linkText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
