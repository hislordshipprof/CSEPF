"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../elements/VideoPopup";
import { useTestimonials } from "@/utils/apiRequestHooks";
import Preloader from "../elements/Preloader";
import { DEFAULT_AVATAR } from "@/utils/utils";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
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

  const {testimonials,isLoading, isError} = useTestimonials({is_featured:true});
  
  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );
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
              {testimonials?.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-box-items">
                    <div className="client-items">
                      <div
                        className="client-image style-2 bg-cover"
                        style={{ backgroundImage: `url("${testimonial?.user?.picture || DEFAULT_AVATAR}")` }}
                      />
                      <div className="client-content">
                        <h4>{testimonial?.user?.full_name}</h4>
                        <p>{testimonial?.user?.school}</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      {testimonial?.media !== null &&
                      <VideoPopup  style={3} url={testimonial?.media}/>}

                    </div>
                    <p className="scrollable-bio-2">{testimonial?.content}</p>
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
