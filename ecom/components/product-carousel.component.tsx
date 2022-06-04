import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from '../assets/icons/laptop-asus.png'
import { DiscountCard } from "./discount-card.component";
import styles from '../styles/carouselStyles.module.scss'
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function ProductCarouselComponent() {
  return (
    <>
      <Swiper
        style={{
          padding: 10,
          width: '100%',
        }}
        // slidesPerView={4}
        navigation={true}
        spaceBetween={50}
        loopFillGroupWithBlank={false}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper3}
        breakpoints={{
          1700: {
            slidesPerGroup: 1,
            slidesPerView: 1,
          },
          // 1520: {
          //   slidesPerGroup: 3,
          //   slidesPerView: 3,
          // },
          // 1000: {
          //   slidesPerGroup: 2,
          //   slidesPerView: 2,
          // },
          // 700: {
          //   slidesPerGroup: 2,
          //   slidesPerView: 2,
          // }
        }}
      >
        <SwiperSlide
        >
          {/* <DiscountCard
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate={3}
            actualPrice={3000}
            discountPrice={2899}
            inStock={50}
          /> */}
          <div style={{ border: '1px solid brown' }}>
            <Image src={Laptop} />
          </div>
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate={3}
            actualPrice={3000}
            discountPrice={2899}
            inStock={40}
          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate={3}
            actualPrice={3000}
            discountPrice={2899}
            inStock={40}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

