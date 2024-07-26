"use client";
import React, { useState,useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { past_speakers_list, past_speakers_list_b } from '@/utils/data';

export default function PastSpeakers() {
  // Initialize state to keep track of expanded presentations
  const [expandedPresentations, setExpandedPresentations] = useState(
    new Array(past_speakers_list.length).fill(false)
  );

  // Function to toggle the full presentation for each speaker
  const togglePresentation = (index) => {
    setExpandedPresentations((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };
  const [selectedClass, setSelectedClass] = useState("2024");
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    if (selectedClass === "2024") {
      setFilteredProjects(past_speakers_list);
    } else if (selectedClass === "2023") {
      setFilteredProjects(past_speakers_list_b);
    }
  }, [selectedClass]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="Our Past Speakers"
      >
        <section className="team-section-4 section-padding">
       
          <div className="container">
          <div style={{ justifyContent:'flex-end', display:'flex',width:'90%'}}>
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
                  Select Speaker Years
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
            <div>
              
              <h5 className="section-title mb-0 p-4">
                Get to know our past speakers and their various excellent
                presentation which they<br /> rendered to the fellows as a
                resource to help them in their Research.
              </h5>
            </div>
            <div className="row g-4">
              {filteredProjects.map((data, index) => {
                // Split the presentation text
                const words = data.presentation.split(' ');
                const preview = words.slice(0, 20).join(' ');
                const rest = words.length > 20 ? words.slice(20).join(' ') : '';

                return (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                    key={index}
                  >
                    <div className="team-card-items mt-0">
                      <div className="team-image">
                        <img
                          src={data.image}
                          alt="team-img"
                          style={{
                            width: "100%",
                            height: 400,
                            objectFit: "contain",
                          }}
                        />
                        <div className="social-profile">
                          <span className="plus-btn">
                            <i className="fas fa-share-alt" />
                          </span>
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="fab fa-google-plus-g" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content text-center">
                        <h3>{data.name}</h3>
                        <p className='scrollable-bio'>{data.position}</p>
                        <p>
                          {expandedPresentations[index]
                            ? `${preview} ${rest}`
                            : `${preview}... `}
                          {words.length > 20 && (
                            <button
                              className="btn btn-link"
                              onClick={() => togglePresentation(index)}
                            >
                              {expandedPresentations[index]
                                ? 'Read Less'
                                : 'Read More'}
                            </button>
                          )}
                        </p>
                        <p>
                          <a
                            href="URL_TO_YOUR_FILE"
                            className="btn btn-primary"
                            download="filename.ext"
                          >
                            Download Presentation
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}


