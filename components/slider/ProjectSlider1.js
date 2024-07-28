"use client";
import { featured_class_of_2024 } from "@/utils/data";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },

  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function ProjectSlider1({ showDots }) {
  return (
    <>
      <div className="swiper project-slider pt-5">
        <Slider options={swiperOptions}>
          {featured_class_of_2024.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="project-items">
                <div className="project-image">
                  <img src={student.img} style={{objectFit:"cover"}} alt="project-img" />
                  <div className="project-content">
                    <p>{student.name}</p>
                    <h4>
                      <Link href="/project-details">{student.school}</Link>
                    </h4>
                    <Link href="/project-details" className="icon">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>

        {showDots && (
          <div className="swiper-dot-2">
            <div className="dot-3" />
          </div>
        )}
      </div>
    </>
  );
}
