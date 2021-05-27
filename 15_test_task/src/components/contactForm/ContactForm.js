import React from "react";
import Button from "../button/Button";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <section
      className={styles.contact}
    //   style={{ backgroundImage: "url(./img/formImg.png)" }}
    >
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
          <form className="contactForm">
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="date" placeholder="Date of birth*" required />
            <textarea placeholder="Message*" required></textarea>
            <Button type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
