"use client";
import React from "react";
import styles from "./topbanner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import Img1 from "../../../../public/assets/homeCollection1/collection1.png";
import Img2 from "../../../../public/assets/homeCollection1/collection2.png";
import SubCollection from "@/component/Cards/SubcollectionCard/subcollection";
import TopBannerCard from "@/component/Cards/TopBannerCard/topbannercard";

function TopBanner() {
  let responsiveSlide = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    700: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };
  return (
    <div className={styles.container}>
      <Swiper
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={false}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={responsiveSlide}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {[Img1, Img2]?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TopBannerCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopBanner;
