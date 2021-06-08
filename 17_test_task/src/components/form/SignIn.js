import React from "react";
import { Button } from "../button";
import styles from "./signIn.module.scss";

export const SignIn = () => {
  return (
    <div className="container">
      <form className={styles.logIn}>
        <h1 className={styles.logIn__title}>Log in</h1>
        <p className={styles.logIn__registerText}>
          Don’t have an account?
          <a className={styles.logIn__registerLink} href="#">
            Sign up
          </a>
        </p>
        <Button
          style={{ marginBottom: "1rem" }}
          {...{ text: "Continue with Google", src: "./icons/google.svg" }}
        />
        <Button
          {...{ text: "Continue with Micrsoft", src: "./icons/microsoft.svg" }}
        />
      </form>
    </div>
  );
};
