import React from "react";
import Button from "../button/Button";
import { useGlobalContext } from "../../context";
import styles from "./banner.module.css";

const Banner = () => {
  const { bannerInfo } = useGlobalContext();

  const { title, img, content } = bannerInfo;
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <p className={styles.bannerHeading}>{title}</p>
          <p className={styles.bannerText}>{content}</p>
          <Button size="3.15rem" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
