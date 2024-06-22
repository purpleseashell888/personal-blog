import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import { getFeaturedPosts } from "@/lib/post-utils";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
