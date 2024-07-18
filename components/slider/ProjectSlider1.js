"use client";
import { featured_class_of_2024 } from "@/utils/data";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";

const swiperOptions = {
  pagination: {
    el: ".dot-3",
    clickable: true,
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
                  <img src={student.img} alt="project-img" />
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
