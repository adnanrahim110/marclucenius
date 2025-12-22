import React from "react";

export default function PageHero({ title, subtitle, className = "" }) {
  return (
    <section
      className={`relative py-20 bg-primary-950 overflow-hidden ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-900/10 rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {subtitle && (
          <p className="font-script text-accent-400 text-3xl md:text-4xl mb-2 transform -rotate-1">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
          {title}
        </h1>
        <div className="mt-6 w-24 h-1 bg-accent-500 mx-auto rounded-full opacity-60"></div>
      </div>
    </section>
  );
}
