import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import styles from "./slider.module.css";
import { useGlobalContext } from "../../context";

SwiperCore.use([Keyboard, Pagination, Navigation]);

const Slider = () => {
  const { sliderItems } = useGlobalContext();

  return (
    <section className={styles.slider}>
      <h2 className={styles.sliderHeading}>
        iCaria Living - Explore the wonders of life
      </h2>
      <Swiper
        spaceBetween={32}
        slidesPerView={6}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        style={{ padding: "2rem 1.6rem 2.75rem" }}
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
