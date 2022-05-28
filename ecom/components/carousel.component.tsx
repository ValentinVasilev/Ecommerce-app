import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryCard } from "./category-card.component";
import ShoeImg from '../assets/icons/shoe3.png'
import ElectronicsImg from '../assets/icons/headset.png'
import FurnitureImg from '../assets/icons/furniture.png'
import ClothsImg from '../assets/icons/cloths.png'
import styles from '../styles/carouselStyles.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function CarouselComponent() {
  return (
    <>
      <Swiper
        style={{
          padding: 0
        }}
        slidesPerView={3}
        navigation={true}
        spaceBetween={30}
        loopFillGroupWithBlank={false}
        // loop={true}
        pagination={{
          clickable: true,
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',

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
          <CategoryCard title={'Shoes'} subTitle={'Best brands in one place. We have all you need! Your feet deserve it.'} bgImg={ShoeImg} linkTo="/" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Electronics'} subTitle={'World is full of electronics! Just pick one!'} bgImg={ElectronicsImg} linkTo="/" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Furniture'} subTitle={'Home, is the best place to be! Make it comfy and style!'} bgImg={FurnitureImg} linkTo="/" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Cloths'} subTitle={'Dress yourself well, you deserve it! Best Cloths in one place.'} bgImg={ClothsImg} linkTo="/" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

