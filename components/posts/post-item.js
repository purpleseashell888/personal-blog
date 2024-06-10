import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

export default function PostItem(props) {
  const { slug, title, date, image, excerpt } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/blogs/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <date>{formattedDate}</date>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
