"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Testimonial2 from "@/components/sections/Testimonial2";
import SchoolsSlider from "@/components/slider/SchoolsSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial_2023, testimonial_2024 } from "@/utils/data";
import { useTestimonials } from "@/utils/apiRequestHooks";
import Preloader from "@/components/elements/Preloader";
import { YEARS } from "@/utils/utils";

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
  const [selectedClass, setSelectedClass] = useState("2024");
  useEffect(() => {
  }, [selectedClass]);
 
  const {testimonials,isLoading, isError} = useTestimonials({});


  
  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );

  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Testimonial">
        <div>
          <section className="service-section-3 fix section-padding">
            <div className="container">
            
              <div className="swiper service-slider-2">
              <div
                style={{
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <select
                  style={{ maxWidth: 200 }}
                  class="form-select"
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">Select Testimonial</option>
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year} Testimonial
                    </option>
                  ))}
                </select>
              </div>
                <div>
                  <p style={{ fontSize: "20px", marginBottom: "40px" }}>
                    Have sometime to read through what the past Fellows who
                    participated <br /> in the Fellowship has to say about us
                    and the expericence they gained <br /> throughout the entire
                    program.
                  </p>
                </div>
                <Testimonial2 filteredProjects={testimonials}/>

               
              </div>
            </div>
          </section>
        
        </div>
      </Layout>
    </>
  );
}
