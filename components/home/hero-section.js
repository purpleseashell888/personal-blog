import Link from "next/link";
import Image from "next/image";
import classes from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <div className={classes.container}>
      <div>
        <h1>
          <span>Hello, I am</span>
          <br></br>
          Lili
        </h1>
        <p className={classes.text}>
          I am a fresh person in front-end development. I practice my ability
          through the projects.
        </p>
        <div className={classes.resume}>
          <Link href="/about/resume.pdf" target="_blank">
            Resume
          </Link>
        </div>
      </div>
      <div className={classes.hero}>
        <Image
          src="/images/hero-image.png"
          width={340}
          height={300}
          alt="hero-image"
        />
      </div>
    </div>
  );
}
