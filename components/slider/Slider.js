"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },

    575: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
};

export default function Slider({ options, children }) {
  let sliderOptions = { ...swiperOptions, ...options };
  return (
    <div className="swiper brand-slider">
      <Swiper {...sliderOptions} className="swiper-wrapper">
        {children}
      </Swiper>
    </div>
  );
}
