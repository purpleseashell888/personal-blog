import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/post-utils";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <Fragment>
      This is home page.
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
