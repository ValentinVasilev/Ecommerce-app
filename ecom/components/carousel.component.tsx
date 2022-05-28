import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryCard } from "./category-card.component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function CarouselComponent() {
  return (
    <>
      <Swiper
        style={{
          padding: 0
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CategoryCard title={'Just a test'} subTitle={'Awesome sub title'} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Just a test'} subTitle={'Awesome sub title'} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Just a test'} subTitle={'Awesome sub title'} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard title={'Just a test'} subTitle={'Awesome sub title'} />
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
