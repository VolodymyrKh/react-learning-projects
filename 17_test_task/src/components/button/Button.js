import React from "react";
import styles from "./button.module.scss";

export const Button = ({ text, src, mb }) => {
  return (
    <div className={styles.btn} style={{marginBottom: mb}}>
      <a className={styles.btn__link} href="#">
        <div className={styles.btn__icon}>
          <img src={src} alt="button icon" />
        </div>
        <p className={styles.btn__text}>{text}</p>
      </a>
    </div>
  );
};

Button.defaultProps = {
  text: "Default button",
  src: "./icons/google.svg",
  mb: '0',
};