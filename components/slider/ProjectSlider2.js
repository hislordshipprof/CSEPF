"use client";
import { featured_class_of_2024 } from "@/utils/data";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";

const swiperOptions = {
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
};
export default function ProjectSlider2({ showDots }) {
  return (
    <>
      <div className="swiper project-slider-2">
        <Slider options={swiperOptions}>
          {featured_class_of_2024?.map((data) => (
            <SwiperSlide>
              <div className="project-items style-2">
                <div className="project-image">
                  <img src={data.img} alt="project-img" />
                  <div className="project-content">
                    <p>{data.name}</p>
                    <h4>
                      <Link href="/project-details">{data.project}</Link>
                    </h4>
                    <Link href="/project-details" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      {showDots && (
        <div className="swiper-dot-2">
          <div className="dot-2" />
        </div>
      )}
    </>
  );
}
