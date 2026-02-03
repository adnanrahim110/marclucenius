import BlogCard from "@/components/blog/BlogCard";
import PageHero from "@/components/layouts/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { BLOGS } from "@/content/blogs";

export const metadata = {
  title: "Blog | Rest for the Restless",
  description:
    "Read the latest thoughts and reflections from Marc Lucenius on faith, culture, and the spiritual life.",
};

export default function Blog() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Reflections on rest, ambition and the work beneath the work"
        subtitle="The Restoration Log"
      />

      <Reveal as="section" className="section-padding relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-mesh-warm opacity-50 pointer-events-none"
        />
        <Container size="5xl" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOGS.map((post, index) => (
              <Reveal
                key={post.id}
                delay={index * 0.09}
                as="div"
                className="h-full"
              >
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Reveal>
    </div>
  );
}
