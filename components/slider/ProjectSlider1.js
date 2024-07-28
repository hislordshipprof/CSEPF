"use client";
import { featured_class_of_2024 } from "@/utils/data";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { DEFAULT_AVATAR } from "@/utils/utils";

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

export default function ProjectSlider1({ fellows }) {
  return (
    <>
      <div className="swiper project-slider pt-5">
        <Slider options={swiperOptions}>
          {fellows?.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="project-items">
                <div className="project-image">
                  <img src={student?.applicant?.picture || DEFAULT_AVATAR} style={{objectFit:"cover"}} alt="project-img" />
                  <div className="project-content">
                    <p>{student?.applicant?.full_name}</p>
                    <h4>
                      <Link href="/project-details">{student?.applicant?.school}</Link>
                    </h4>
                    <Link href={{pathname:"/project-details", query:{_id:student?.id}}} className="icon">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </>
  );
}
