import Image from "next/image";
import TabButton from "./tab-button";
import { useState, useTransition } from "react";

import classes from "./about-section.module.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Quantitative Finance, University of Glasgow</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className={classes.container}>
      <Image
        src="/images/about-image.png"
        width={500}
        height={500}
        alt="about me"
      />
      <div className={classes.content}>
        <h1>About Me</h1>
        <p>
          Front-end development is my true passion and modifying code will not
          make me feel bored. My work can visually present results and give me a
          sense of achievement. Although majoring in Quantitative Finance for my
          master degree, I have seized every free moment to self-learn the front
          end for over one year. My knowledge base covers a wide range of
          programming languages, including JavaScript, css, html, basic
          knowledge of react, and how to use nodejs and mongodb.
        </p>
        <div className={classes.tab}>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
        </div>
        <div className={classes.data}>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
  );
}
