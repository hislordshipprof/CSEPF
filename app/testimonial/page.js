"use client";
import Layout from "@/components/layout/Layout";
import Testimonial2 from "@/components/sections/Testimonial2";
import SchoolsSlider from "@/components/slider/SchoolsSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
export default function ServiceCarousel() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Testimonial">
        <div>
          <section className="service-section-3 fix section-padding">
            <div className="container">
              <div className="swiper service-slider-2">
                <div>
                  <p style={{ fontSize: "20px", marginBottom: "40px" }}>
                    Have sometime to read through what the past Fellows who
                    participated <br /> in the Fellowship has to say about us
                    and the expericence they gained <br /> throughout the entire
                    program.
                  </p>
                </div>
                <Testimonial2 />

                <div className="swiper-dot-2">
                  <div className="dot-2" />
                </div>
              </div>
            </div>
          </section>
          {/* Brand Section Start */}
          <div className="brand-section fix section-padding pt-0 mt-5">
            <div className="container">
              <div className="brand-wrapper">
                <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
                  Participation Schools
                </h6>
                <SchoolsSlider />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
