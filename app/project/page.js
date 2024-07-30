"use client";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { fellow_project_2023, fellow_project_2024 } from "@/utils/data";
import Link from "next/link";
import { useProjects } from "@/utils/apiRequestHooks";
import Preloader from "@/components/elements/Preloader";
export default function Project() {
  const [selectedClass, setSelectedClass] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {}, [selectedClass]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { projects, isLoading, isError } = useProjects({
    cohort: selectedClass,
  });

  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );


  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="All Fellows Projects"
      >
        <section className="project-section section-padding fix">
          <div className="container">
            {/* <div className="section-title ">
           
            </div> */}
            <div style={{ justifyContent: "flex-end", display: "flex" }}>
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
                Select Project Years
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
                    Projects for 2024
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
                    Projects for 2023
                  </a>
                  {/* Add more classes as needed */}
                </div>
              )}
            </div>
            <div className="section-title mb-5 pb-2" style={{ left: 18 }}>
              <h3>
                {selectedClass
                  ? `Class of ${selectedClass} Projects`
                  : "All Projects"}{" "}
              </h3>
            </div>
            <div className="row g-4">
              {projects?.map((data) => (
                <div
                  key={data.id}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-items">
                    <div className="project-image">
                      <img
                        src={data?.fellow?.picture || DEFAULT_AVATAR}
                        alt="project-img"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                      <div className="project-content">
                        <p>{data?.fellow?.full_name}</p>
                        <h4>
                          <Link
                            href={{
                              pathname: "/project-details",
                              query: { _id: data?.id },
                            }}
                          >
                            {data?.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
