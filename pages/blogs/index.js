import AllPostsPage from "@/components/posts/all-post";
import { getAllPosts } from "@/lib/post-utils";
import { Fragment } from "react";

export default function Blogs(props) {
  return (
    <Fragment>
      <AllPostsPage posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}
