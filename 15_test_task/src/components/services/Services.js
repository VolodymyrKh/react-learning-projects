import React from "react";
import ServicesItem from "./ServicesItem";
import { useGlobalContext } from "../../context";
import styles from "./services.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

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
        <div className={styles.sliderContainer}>
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {serviceItems.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ServicesItem key={item.id} {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Services;
