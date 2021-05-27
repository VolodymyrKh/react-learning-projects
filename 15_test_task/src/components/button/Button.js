import React from "react";
import styles from "./button.module.css";

const Button = ({ text, type, size }) => {
  return (
    <button
      type={type}
      className={styles.btn}
      style={{ paddingLeft: size, paddingRight: size }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "request info",
  type: "button",
  size: "2.5rem",
};

export default Button;
