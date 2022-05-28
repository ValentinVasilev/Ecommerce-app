import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from '../assets/icons/laptop-asus.png'
import { DiscountCard } from "./discount-card.component";
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
        spaceBetween={50}
        loopFillGroupWithBlank={false}
        // loop={true}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper2}
      >
        <SwiperSlide
        >
          <DiscountCard
            totalSave={'100'}
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate="3"
            actualPrice="3,000"
            discountPrice="2,899.99"
            inStock={50}
          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            totalSave={'100'}
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate="3"
            actualPrice="3000"
            discountPrice="2,899.99"
            inStock={40}
          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            totalSave={'100'}
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate="3"
            actualPrice="3000"
            discountPrice="2,899.99"
            inStock={25}

          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            totalSave={'100'}
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate="3"
            actualPrice="3000"
            discountPrice="2,899.99"
            inStock={20}

          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            totalSave={'100'}
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate="3"
            actualPrice="3000"
            discountPrice="2,899.99"
            inStock={5}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

