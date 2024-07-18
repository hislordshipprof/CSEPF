"use client";
import { testimonial } from "@/utils/data";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  speed: 1500,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 1,
    },

    575: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
};

export default function Testimonial3() {
  return (
    <>
      <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
        </div>
        <div className="array-button">
          <button className="array-prev">
            <i className="fal fa-arrow-left" />
          </button>
          <button className="array-next">
            <i className="fal fa-arrow-right" />
          </button>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="text-white">Testimonials</span>
            <h2 className="text-white">
              Checkout what our past fellows have to say
            </h2>
          </div>
          <div className="swiper testimonial-slider-2">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {testimonial.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/testimonial/icon.png"
                        alt="icon-img"
                      />
                    </div>
                    <div className="client-items">
                      <div
                        className="client-image style-2 bg-cover"
                        style={{ backgroundImage: `url("${testimonial.img}")` }}
                      />
                      <div className="client-content">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.school}</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
