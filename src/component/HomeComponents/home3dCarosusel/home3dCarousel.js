"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import TopBannerCard from "@/component/Cards/TopBannerCard/topbannercard";
import Image from "next/image";
import styles from "./home3dCarousel.module.scss";

const Home3dCouresel = () => {
  let responsiveSlide = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };
  let data = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
  ];
  return (
    <div className={styles.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={responsiveSlide}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={2}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide accessKey="2" key={index}>
              <Image src={item} alt="" height={300} width={300} unoptimized />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Home3dCouresel;
