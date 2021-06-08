import React from "react";
import styles from "./button.module.scss";

export const Button = ({ text, src }) => {
  return (
    <a className={styles.btn} href="#">
      <div className={styles.btn__icon}>
        <img src={src} alt="button icon" />
      </div>
      <p className={styles.btn__text}>{text}</p>
    </a>
  );
};
