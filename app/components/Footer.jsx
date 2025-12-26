import Link from "next/link";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-cream-200 border-t border-charcoal-200/20 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 bg-paper pointer-events-none"></div>
      <div className="absolute inset-0 opacity-60 bg-mesh-warm pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-charcoal-900">
              Marc Lucenius
            </h3>
            <p className="text-charcoal-500 text-sm leading-relaxed max-w-sm font-light">
              Marc Lucenius is a pastor and former high-achieving executive who
              burned out chasing success. Now, he helps others find the rhythm
              of rest.
            </p>
            <div className="flex space-x-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-11 h-11 border border-charcoal-300/80 rounded-full flex items-center justify-center text-charcoal-600 bg-cream-50/50 backdrop-blur-sm hover:text-cream-100 hover:border-charcoal-800 hover:bg-charcoal-900 transition-all duration-300 shadow-sm shadow-charcoal-900/5 hover:shadow-md hover:shadow-charcoal-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-5 h-5 group-hover:scale-[1.03] transition-transform" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Marc", href: "/about" },
                { name: "The Book", href: "/book" },
                { name: "Resources", href: "/resources" },
                { name: "Speaking", href: "/speaking" },
                { name: "Coaching", href: "/coaching" },
                { name: "Journal", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-500 hover:text-charcoal-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 md:col-start-9">
            <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-widest mb-6">
              Stay Connected
            </h4>
            <div className="paper-card p-6">
              <p className="text-charcoal-500 text-sm mb-5 font-light">
                Stay encouraged with monthly reflections, practices, and updates
                on new resources.
              </p>
              <form className="flex flex-col space-y-3">
                <label className="relative">
                  <span className="sr-only">Email address</span>
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-cream-100/70 border border-charcoal-200/70 text-charcoal-800 pl-10 pr-4 py-3 text-sm rounded-md focus:outline-none focus:border-earth-500/70 focus:ring-2 focus:ring-earth-500/20 transition-all placeholder-charcoal-400"
                  />
                </label>
                <button className="btn-primary w-full text-xs">
                  Join the Email List
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-200/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-charcoal-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Marc Lucenius. All rights
            reserved.
          </p>
          <div className="flex space-x-8 text-xs text-charcoal-400">
            <Link
              href="#"
              className="hover:text-charcoal-800 transition-colors underline decoration-transparent hover:decoration-charcoal-400 underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-charcoal-800 transition-colors underline decoration-transparent hover:decoration-charcoal-400 underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
