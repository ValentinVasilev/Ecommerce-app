import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from '../assets/icons/laptop-asus.png'

import styles from '../styles/carouselStyles.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function DiscountCarouselComponent() {
  return (
    <>
      <Swiper
        style={{
          padding: 0
        }}
        slidesPerView={4}
        navigation={true}
        spaceBetween={30}
        loopFillGroupWithBlank={false}
        // loop={true}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide
        // style={{
        //   paddingBottom: 50,
        //   height: 'auto',
        // }}
        >
          {/* <CategoryCard title={'Shoes'} subTitle={'Best brands in one place! We have all you need!'} bgImg={ShoeImg} linkTo="/" /> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

