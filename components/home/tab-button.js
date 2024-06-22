import classes from "./tab-button.module.css";

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "black" : "#848181";

  return (
    <button
      style={{ color: buttonClasses }}
      onClick={selectTab}
      className={classes.button}
    >
      {children}
    </button>
  );
}
