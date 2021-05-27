import React from "react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import styles from "./slider.module.css";
import { useGlobalContext } from "../../context";

SwiperCore.use([Keyboard, Pagination, Navigation]);

const Slider = () => {
  const { sliderItems, size } = useGlobalContext();

  const nav = size <= 768 ? false : true;  
  const slides = size <= 576 ? 2 : 6;

  return (
    <section className={styles.slider}>
      <h2 className={styles.sliderHeading}>
        {nav
          ? "iCaria Living - Explore the wonders of life"
          : "Choose your profession for more details"}
      </h2>
      <Swiper
        spaceBetween={32}
        slidesPerView={slides}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={nav}
        style={{ padding: "2rem 1.6rem 2.75rem", width: "100%" }}
      >
        {sliderItems.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SliderItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slider;
