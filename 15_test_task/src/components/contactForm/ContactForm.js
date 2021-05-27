import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, date, message };
    console.log(data); // got data object and can send to server for further processing
    setName("");
    setEmail("");
    setDate("");
    setMessage("");
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contactInner}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Request info</h2>
            <p className={styles.contactText}>
              Got a question? Need to see a demo? Want to start your free trial
              subscription? We'd love to hear from you! Contact us and we will
              get back to you shortly.
            </p>
            <img
              className={styles.contactImg}
              src="./img/formImg.png"
              alt="contact form img"
            />
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              className={styles.contactInput}
              value={name}
              type="text"
              placeholder="Name*"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              className={styles.contactInput}
              value={email}
              type="email"
              placeholder="Email*"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              className={styles.contactInput}
              value={date}
              type="date"
              placeholder="Date of birth*"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <textarea
              className={styles.contactMessage}
              value={message}
              placeholder="Message*"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            ></textarea>
            <Button type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
