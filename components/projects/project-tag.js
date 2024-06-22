import classes from "./project-tag.module.css";

export default function ProjectTag({ onClick, name, isSelected }) {
  const buttonClasses = isSelected ? "buttonSelected" : "notSelected";

  return (
    <button
      className={`${classes.button} ${buttonClasses}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
