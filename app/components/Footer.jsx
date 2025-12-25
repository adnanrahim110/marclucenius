import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-950 border-t border-primary-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-accent-300 uppercase tracking-widest mb-6">
              Marc Lucenius
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Marc Lucenius is a pastor and former high-achieving executive who
              burned out chasing success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-accent-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Marc
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rest for the Restless
                </Link>
              </li>
              <li>
                <Link
                  href="/speaking"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Speaking
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-6">
              Stay Connected
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Join the email list for monthly reflections and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-primary-900 border border-primary-700 text-white px-4 py-3 focus:outline-none focus:border-accent-500 transition-colors"
              />
              <button className="bg-accent-600 text-white font-bold uppercase tracking-widest px-4 py-3 hover:bg-accent-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Marc Lucenius. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-600">
            <Link href="#" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
