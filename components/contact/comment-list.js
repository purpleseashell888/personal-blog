import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import classes from "./comment-list.module.css";

async function deleteHandler(itemEmail) {
  const response = await fetch("api/contact", {
    method: "DELETE",
    body: JSON.stringify({ email: itemEmail }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function CommentsList(props) {
  const { items } = props;
  const { status } = useSession();
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [status, setLogin]);

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.message}</p>
          <div>
            By <address>{item.name}</address>
            {isLogin && (
              <button onClick={() => deleteHandler(item.email)}>Delete</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
