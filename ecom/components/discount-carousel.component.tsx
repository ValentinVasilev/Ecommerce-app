import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from '../assets/icons/laptop-asus.png'
import { DiscountCard } from "./discount-card.component";
import styles from '../styles/carouselStyles.module.scss'
import Products from '../assets/data/products';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function DiscountCarouselComponent() {

  const products = Products.slice(0, 7);
  return (
    <>
      <Swiper
        style={{
          padding: 10
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
        className={styles.mySwiper2}
        breakpoints={{
          1700: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          1520: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1000: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          700: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          }
        }}
      >
        {products.map(item => {
          return (
            <SwiperSlide key={item.id}
            >
              <DiscountCard
                cardImg={item.thumbnail}
                brand={item.brand}
                model={item.title}
                rate={item.rating}
                actualPrice={item.price}
                discountPrice={item.price}
                inStock={item.stock}
              />
            </SwiperSlide>
          )
        })}

        {/* <SwiperSlide
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
            rate={3.5}
            actualPrice={3000}
            discountPrice={2899}
            inStock={25}

          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate={5}
            actualPrice={3000}
            discountPrice={2899}
            inStock={1}

          />
        </SwiperSlide>
        <SwiperSlide
        >
          <DiscountCard
            cardImg={Laptop}
            brand="Asus"
            model="ASUS ZenBook Pro Duo UX581GV"
            rate={1}
            actualPrice={3000}
            discountPrice={2899}
            inStock={5}
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
