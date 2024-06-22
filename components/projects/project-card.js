import Link from "next/link";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import classes from "./project-card.module.css";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <section>
      <div
        className={classes.background}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <div className={classes.picture}>
          <div className={classes.link}>
            <Link href={gitUrl}>
              <CodeBracketIcon className={classes.icon} />
            </Link>
          </div>
          <div className={classes.link}>
            <Link href={previewUrl}>
              <EyeIcon className={classes.icon} />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>
          {readMore ? description : `${description.substring(0, 50)}...`}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
    </section>
  );
}
