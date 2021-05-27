import React from "react";
import ServicesItem from './ServicesItem';
import { useGlobalContext } from '../../context'
import styles from "./services.module.css";

const Services = () => {
    const { serviceItems } = useGlobalContext();

  return (
    <div className="container">
      <section className={styles.services}>
        <h2 className={styles.title}>why our directory</h2>
        <div className={styles.itemsContainer}>
          {serviceItems.map((item) => {
            return <ServicesItem key={item.id} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
