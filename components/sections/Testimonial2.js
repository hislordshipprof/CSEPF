"use client";
import { useState } from "react";
import { testimonial } from "@/utils/data";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../elements/VideoPopup";
import { DEFAULT_AVATAR } from "@/utils/utils";



export default function Testimonial2({filteredProjects}) {
 
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed:0,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    // grid: {
    //   rows: 2,
    // },
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
  return (
    <>
      <section
        className="tesimonial-section-2 pb-0 section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/testimonial/bg.jpg")' }}
      >
        <div className="container" >
          <div className="section-title-area" >
            <div className="section-title">
              <span className="text-black wow fadeInUp">Testimonials</span>
              <h2 className="text-black wow fadeInUp" data-wow-delay=".3s">
                Get to hear from <br />
                our past fellows
              </h2>
            </div>
          
          </div>
          <div className="swiper testimonial-slider-2 ">
              <div className="testimonial-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {filteredProjects?.map((testimonial) => (
                  <div className="testimonial-box-items wow fadeInUp col-lg-5"   style={{
                    flex: '0 0 calc(50% - 20px)', 
                    marginBottom: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  }}>
                    {/* <div className="icon">
                      <img
                        src="/assets/img/testimonial/icon.png"
                        alt="icon-img"
                      />
                    </div> */}
                    <div className="client-items">
                      <div
                        className="client-image style-2 bg-cover"
                        style={{ backgroundImage: `url("${testimonial?.user?.applicant?.picture || DEFAULT_AVATAR}")` }}
                      />
                      <div className="client-content">
                        <h4>{testimonial?.user?.applicant?.full_name}</h4>
                        <p>{testimonial?.user?.applicant?.school}</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      {
                        testimonial?.media && <VideoPopup  style={3} url={testimonial?.media} />
                      }

                    </div>
                    <p>{testimonial.content}</p>
                  </div>
              ))}
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
