import classes from "./comment-list.module.css";
import { ObjectId } from "mongodb";

async function deleteHandler(itemId) {
  const objectId = new mongoose.Types.ObjectId(itemId);
  const response = await fetch("api/contact", {
    method: "DELETE",
    body: JSON.stringify({ id: objectId }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function CommentsList(props) {
  const { items } = props;

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.message}</p>
          <div>
            By <address>{item.name}</address>
            <button onClick={() => deleteHandler(item._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
