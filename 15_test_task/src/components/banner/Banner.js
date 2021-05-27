import React from "react";
import Button from "../button/Button";
import { useGlobalContext } from "../../context";
import styles from "./banner.module.css";

const Banner = () => {
  const { bannerInfo, size } = useGlobalContext();
  const { title, img, imgMob,content } = bannerInfo;
  const source = size<=576 ? imgMob : img;
  
  return (
    <div style={{ backgroundImage: `url(${source})` }} className={styles.banner}>
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
