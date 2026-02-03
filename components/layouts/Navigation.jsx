"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20;
      setScrolled((current) => (current === next ? current : next));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Book", href: "/book" },
    { name: "Resources", href: "/resources" },
    { name: "Speaking", href: "/speaking" },
    { name: "Coaching", href: "/coaching" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative transition-[background-color,backdrop-filter,border-color,box-shadow,transform] duration-500 ${
          scrolled
            ? "bg-cream-100/80 backdrop-blur-lg border-b border-charcoal-200/40 shadow-[0_12px_40px_rgba(15,14,13,0.08)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${
            scrolled ? "opacity-100 bg-paper" : "opacity-0"
          }`}
        />

        <div
          className={`relative max-w-7xl mx-auto px-6 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group inline-flex items-baseline gap-3"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-serif text-2xl font-semibold text-charcoal-900 tracking-wide group-hover:text-earth-600 transition-colors">
                Marc Lucenius
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                      active
                        ? "text-earth-700"
                        : "text-charcoal-600 hover:text-charcoal-900"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-earth-500 transform origin-left transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/book"
                className="btn-primary text-xs py-3 px-6 gap-2"
              >
                Get the Book
                <ArrowRight className="w-4 h-4 opacity-90" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                className="inline-flex items-center justify-center rounded-full border border-charcoal-200/60 bg-cream-50/60 backdrop-blur-md p-2 text-charcoal-800 shadow-sm shadow-charcoal-900/5 hover:bg-cream-50 hover:border-charcoal-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div
          className="absolute inset-0 bg-charcoal-950/35"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-0 transition-transform duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-3"
          }`}
        >
          <div className="relative bg-cream-50 border-b border-charcoal-200/40 shadow-[0_18px_60px_rgba(15,14,13,0.18)] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-paper opacity-80"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-mesh-warm opacity-70"
            />

            <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-10">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="font-serif text-2xl font-semibold text-charcoal-900 tracking-wide hover:text-earth-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Marc Lucenius
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-charcoal-200/60 bg-cream-50/60 backdrop-blur-md p-2 text-charcoal-800 hover:bg-cream-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between rounded-lg px-4 py-4 border transition-all ${
                        active
                          ? "bg-earth-100/60 border-earth-400/50 text-earth-700"
                          : "bg-cream-50/40 border-cream-300 text-charcoal-800 hover:border-earth-400/40 hover:bg-earth-100/40"
                      }`}
                    >
                      <span className="font-serif text-xl">{link.name}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-charcoal-200/40">
                <Link
                  href="/book"
                  className="btn-primary w-full text-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get the Book
                  <ArrowRight
                    className="w-4 h-4 opacity-90"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
