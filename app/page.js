import HeroSection from "@/components/home/HeroSection";
import HomeAuthorSection from "@/components/home/HomeAuthorSection";
import HomeBookSection from "@/components/home/HomeBookSection";
import HomeReviewsSection from "@/components/home/HomeReviewsSection";
import InfoGrid from "@/components/home/InfoGrid";
import EndorsementBanner from "@/components/sections/EndorsementBanner";

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
      {/* <HomeReviewsSection /> */}
      <InfoGrid />
    </div>
  );
}
