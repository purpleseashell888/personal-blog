import { useEffect, useState } from "react";
import CommentsList from "./comment-list";
import ContactForm from "./contact-form";

import classes from "./comments-page.module.css";

export default function CommentsPage() {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch("/api/contact")
        .then((response) => response.json())
        .then((data) => setComments(data.comments));
    }
  }, [showComments]);

  function showCommentsHandler() {
    setShowComments((prev) => !prev);
  }

  return (
    <section className={classes.comments}>
      <ContactForm />
      <button onClick={showCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <CommentsList items={comments} />}
    </section>
  );
}
