"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SchoolsSlider from "@/components/slider/SchoolsSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fellow_project_2023, fellow_project_2024, staff_members } from "@/utils/data";
import ParticipatingSchools from "@/components/sections/ParticipatingSchools";
import { fellow_project_2023, fellow_project_2024, staff_members } from "@/utils/data";
import ParticipatingSchools from "@/components/sections/ParticipatingSchools";

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
export default function Cohorts() {
  const [selectedClass, setSelectedClass] = useState("2024");
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    if (selectedClass === "2024") {
      setFilteredProjects(fellow_project_2024);
    } else if (selectedClass === "2023") {
      setFilteredProjects(fellow_project_2023);
    }
  }, [selectedClass]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="Our Presents and Past Cohorts"
      >
        <div>
          <section className="team-section-4 fix section-padding">
            
            <div className="container">
            <div style={{ justifyContent: "flex-end",display: "flex",zIndex: 100 }}>
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
                  Select Cohorts Years
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
                    Cohorts for 2024
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
                    Cohorts for 2023
                    </a>
                    {/* Add more classes as needed */}
                  </div>
                )}
                
              </div>
              <div className="row g-4">
                <div className="col-xl-12 col-lg-12 col-md-12 p-4">
              <h2 >Class of {selectedClass}</h2>

                </div>

              {filteredProjects.map((data) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-card-items mt-0">
                    <div className="team-image">
                      <img
                        src={data.img}
                        alt="team-img"
                        style={{
                          // width: 430,
                          height: 400,
                          objectFit: "cover",
                        }}
                      />
                      <div className="social-profile">
                        <span className="plus-btn">
                          <i className="fas fa-share-alt" />
                        </span>
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h3>
                        <Link href="/team-details">{data.name}</Link>
                      </h3>
                      <p>{data.school}</p>

                      <p>{data.project}</p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          
          </section>
          {/* Brand Section Start */}
          <ParticipatingSchools />

        </div>
      </Layout>
    </>
  );
}
