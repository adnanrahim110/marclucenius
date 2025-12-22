import { Great_Vibes, Lato, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
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
        className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
