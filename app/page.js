import HeroSection from "./components/HeroSection";
import HomeAuthorSection from "./components/HomeAuthorSection";
import HomeBookSection from "./components/HomeBookSection";
import HomeReviewsSection from "./components/HomeReviewsSection";
import InfoGrid from "./components/InfoGrid";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      {/* Book Highlights & Who is this for */}
      <HomeBookSection />
      {/* Mini Author Bio */}
      <HomeAuthorSection />
      {/* Testimonials */}
      <HomeReviewsSection />
      {/* Feature Grid */}
      <InfoGrid />
    </div>
  );
}
