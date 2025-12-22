export default function EndorsementBanner() {
  return (
    <section className="bg-primary-900 border-y border-primary-800 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <blockquote className="relative">
          <span className="text-6xl text-accent-700 absolute -top-8 -left-8 font-serif">
            “
          </span>
          <p className="text-2xl md:text-3xl font-serif text-paper italic leading-relaxed">
            In a world that celebrates burnout, Marc offers a different way—a
            way that leads to life, peace, and longevity. This book is the
            exhale you’ve been waiting for.
          </p>
          <span className="text-6xl text-accent-700 absolute -bottom-12 -right-8 font-serif">
            ”
          </span>

          <footer className="mt-8 text-accent-400 font-bold tracking-widest uppercase text-sm">
            — Dr. John Doe, Author of The Quiet Life
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
