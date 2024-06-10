import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/post-utils";
import { Fragment } from "react";

export default function PostDetailPage(props) {
  return (
    <Fragment>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(content) {
  const { params } = content;
  const { slug } = params;

  const postData = getPostData(slug);

  return { props: { post: postData }, revalidate: 600 };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();
  const slugs = postFiles.map((postFile) => postFile.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
