import { Cormorant_Garamond, Great_Vibes, Lato, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollReveals from "./components/ui/ScrollReveals";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Marc Lucenius | Rest for the Restless",
  description: "Official website of author and pastor Marc Lucenius.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${lato.variable} ${greatVibes.variable} antialiased min-h-screen flex flex-col`}
      >
        <div aria-hidden="true" className="fixed inset-0 -z-10 bg-paper">
          <div className="absolute inset-0 bg-mesh-warm opacity-80" />
          <div
            className="pointer-events-none absolute left-0 top-0 opacity-0 md:opacity-100 transition-opacity duration-300 will-change-transform"
            style={{
              width: "var(--cursor-glow-size)",
              height: "var(--cursor-glow-size)",
              transform:
                "translate3d(calc(var(--cursor-x) - (var(--cursor-glow-size) / 2)), calc(var(--cursor-y) - (var(--cursor-glow-size) / 2)), 0)",
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(168, 138, 91, 0.16), transparent 62%)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-charcoal-950/5" />
          <div className="absolute inset-0 mask-fade-y opacity-70" />
        </div>
        <CursorGlow />
        <ScrollReveals />
        <Navigation />
        <main className="grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
