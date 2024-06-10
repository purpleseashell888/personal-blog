import PostGrid from "./post-grid";
import classes from "./all-post.module.css";

export default function AllPostsPage(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
