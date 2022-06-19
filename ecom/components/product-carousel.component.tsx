import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Laptop from '../assets/icons/laptop-asus.png'
import { DiscountCard } from "./discount-card.component";
import styles from '../styles/carouselStyles.module.scss'
import Image, { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);


type SomeProps = {
  // link: string | undefined
  link: string[]
}

export default function ProductCarouselComponent(props: SomeProps) {

  const { link } = props;

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
        {
          link?.map(items => {
            return (
              <SwiperSlide key={items}
              >
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
                  <Image src={items} width={500} height={400} alt="product image" />
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </>
  );
}

