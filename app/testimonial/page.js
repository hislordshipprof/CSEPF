"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Testimonial2 from "@/components/sections/Testimonial2";
import SchoolsSlider from "@/components/slider/SchoolsSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial_2023, testimonial_2024 } from "@/utils/data";

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
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    if (selectedClass === "2024") {
      setFilteredProjects(testimonial_2024);
    } else if (selectedClass === "2023") {
      setFilteredProjects(testimonial_2023);
    }
  }, [selectedClass]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Testimonial">
        <div>
          <section className="service-section-3 fix section-padding">
            <div className="container">
            <div style={{ position: "absolute",left:120, right: 0, top: 2, justifyContent: "center", alignItems: "center",zIndex:100 }}>
                <button
                  onClick={toggleDropdown}
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Select Testimonial Years
                </button>
                {isDropdownOpen && (
                  <div
                    className="dropdown-content"
                    style={{
                      position: "absolute",
                      backgroundColor: "#f9f9f9",
                      minWidth: "160px",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                      zIndex: 1,
                    }}
                  >
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedClass("2024");
                        toggleDropdown();
                      }}
                      style={{
                        padding: "12px 16px",
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                      }}
                    >
                      Testimonial for 2024
                    </a>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedClass("2023");
                        toggleDropdown();
                      }}
                      style={{
                        padding: "12px 16px",
                        textDecoration: "none",
                        display: "block",
                        color: "black",
                      }}
                    >
                      Testimonial for 2023
                    </a>
                    {/* Add more classes as needed */}
                  </div>
                )}
              </div>
              <div className="swiper service-slider-2">
                <div>
                  <p style={{ fontSize: "20px", marginBottom: "40px" }}>
                    Have sometime to read through what the past Fellows who
                    participated <br /> in the Fellowship has to say about us
                    and the expericence they gained <br /> throughout the entire
                    program.
                  </p>
                </div>
                <Testimonial2 filteredProjects={filteredProjects}/>

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
