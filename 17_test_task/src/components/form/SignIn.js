import React, { useState, useEffect, useRef } from "react";
import { Button } from "../button";
import { toast } from "react-toastify";
import validation from "../../validateForm";
import "react-toastify/dist/ReactToastify.css";
import styles from "./signIn.module.scss";

toast.configure();

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const refMail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    if (isSubmitted) {
      setErrors(validation({ email, password }));
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const errObj = validation({ email, password });
    setErrors(errObj);
    
    if (!Object.keys(errObj).length) {
      const dataObj = { email, password, store }; // dataObj is ready for further processing
      setEmail("");
      setPassword("");
      setStore(false);
      setIsSubmitted(false);
       toast.success(`Form successfully submitted`, {
         autoClose: 2500,
       });
    } else if (errObj.email) {
      refMail.current.focus();
    } else {
      refPassword.current.focus();
    }
  };

  return (
    <div className="container">
      <form className={styles.logIn} onSubmit={handleSubmit}>
        {/* ------------------------------ Form heading-------------------------------- */}

        <h1 className={styles.logIn__title}>Log in</h1>
        <p className={styles.logIn__registerText}>
          Don’t have an account?
          <a className={styles.logIn__registerLink} href="#">
            Sign up
          </a>
        </p>
        {/* ------------------------------ Accounts login-------------------------------- */}

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
        <span className={styles.logIn__choice}>or</span>
        {/* ------------------------------ Email input-------------------------------- */}

        <div className={styles.logIn__email}>
          <label htmlFor="email" className={styles.logIn__label}>
            user email
          </label>
          <input
            ref={refMail}
            className={`${styles.logIn__input} ${
              errors.email && styles.logIn__danger
            }`}
            value={email}
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className={styles.logIn__error}>{errors.email}</p>
          )}
        </div>
        {/* ------------------------------ Password input-------------------------------- */}

        <div className={styles.logIn__password}>
          <label htmlFor="password" className={styles.logIn__label}>
            user password
          </label>
          <input
            ref={refPassword}
            className={`${styles.logIn__input} ${
              errors.password && styles.logIn__danger
            }`}
            value={password}
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className={styles.logIn__error}>{errors.password}</p>
          )}
        </div>

        <div className={styles.logIn__recovery}>
          <a className={styles.logIn__recoveryLink} href="#">
            Forgot password?
          </a>
        </div>
        {/* ------------------------------ Checkbox-------------------------------- */}

        <div className={styles.logIn__check}>
          <input
            type="checkbox"
            checked={store}
            onChange={(e) => setStore(e.currentTarget.checked)}
            id="check"
          />
          <span className={styles.logIn__checkBox}></span>
          <label htmlFor="check">Remember me</label>
        </div>
        {/* ------------------------------ Submit button-------------------------------- */}

        <button className={styles.logIn__submitBtn} type="submit">
          continue
        </button>
      </form>
    </div>
  );
};
