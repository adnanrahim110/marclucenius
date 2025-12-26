import EndorsementBanner from "./components/EndorsementBanner";
import HeroSection from "./components/HeroSection";
import HomeAuthorSection from "./components/HomeAuthorSection";
import HomeBookSection from "./components/HomeBookSection";
import HomeExtraSections from "./components/HomeExtraSections";
import HomeReviewsSection from "./components/HomeReviewsSection";
import InfoGrid from "./components/InfoGrid";

export const metadata = {
  title: "Marc Lucenius | Author & Pastor",
  description:
    "Welcome to the official website of Marc Lucenius, author of 'Rest for the Restless' and 'The Sabbath Life'. Explore his books, blog, and speaking schedule.",
};

export default function Home() {
  return (
    <div className="space-y-0 odd-sections-textured">
      <HeroSection />
      <HomeBookSection />
      <EndorsementBanner />
      <HomeAuthorSection />
      <HomeReviewsSection />
      <HomeExtraSections />
      <InfoGrid />
    </div>
  );
}
