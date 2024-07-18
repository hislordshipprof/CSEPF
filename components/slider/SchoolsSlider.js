"use client";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";

const swiperOptions = {};
export default function SchoolsSlider({ data }) {
  return (
    <>
      <div className="swiper brand-slider">
        <Slider options={swiperOptions}>
          {data?.map((school) => (
            <SwiperSlide key={school.id}>
              <div className="brand-image">
                <img
                  src={school.img}
                  style={{ width: 200, height: 200, objectFit: "contain" }}
                  alt="brand-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </>
  );
}
