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
          {...{
            text: "Continue with Google",
            src: "./icons/google.svg",
            mb: "1rem",
          }}
        />
        <Button
          {...{
            text: "Continue with Micrsoft",
            src: "./icons/microsoft.svg",
            mb: "0.75rem",
          }}
        />
        <span>or</span>

        <div className={styles.logIn__email}>
          <label htmlFor="email" className={styles.logIn__label}>
            user email
          </label>
          <input
            className={styles.logIn__input}
            id="email"
            type="email"
            placeholder="email"
            required
          />
        </div>

        <div className={styles.logIn__password}>
          <label htmlFor="password" className={styles.logIn__label}>
            user password
          </label>
          <input
            className={styles.logIn__input}
            id="password"
            type="password"
            placeholder="password"
            required
          />
        </div>
      </form>
    </div>
  );
};
