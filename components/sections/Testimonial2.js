"use client";
import { useState } from "react";
import { testimonial } from "@/utils/data";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../elements/VideoPopup";
import { DEFAULT_AVATAR } from "@/utils/utils";

import "swiper/css/grid";

export default function Testimonial2({filteredProjects}) {

  const swiperOptions = {
    modules: [Autoplay,Grid, Pagination, Navigation],
    // spaceBetween: 2,
    grid: {
      rows: 2,
      fill: "row",
      gap: 10,
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
                Hear from <br />
                our past fellows
              </h2>
            </div>
          
          </div>
          <div className="row">
              {filteredProjects.map((testimonial) => (
                <div key={testimonial.id} className="col-md-6 col-sm-12 col xl-4">
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
                        style={{ backgroundImage: `url("${testimonial?.user?.picture}")` }}
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
                     {
                        testimonial?.media != null && <VideoPopup  style={3} url={testimonial?.media} />
                      }
                    </div>
                    <p className="scrollable-bio-2">{testimonial?.content}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
