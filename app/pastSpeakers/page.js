"use client";
import React, { useState,useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { past_speakers_list, past_speakers_list_b } from '@/utils/data';
import { usePastSpeakers } from '@/utils/apiRequestHooks';
import Preloader from '@/components/elements/Preloader';
import { DEFAULT_AVATAR, YEARS } from '@/utils/utils';


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
  useEffect(() => {
  }, [selectedClass]);
  
  
  const { pastSpeakers, isLoading, isError } = usePastSpeakers({});

  if (isLoading) return <div><Preloader /></div>;
  console.log("pastSpeakers", JSON.stringify(pastSpeakers, null, 2));

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="Our Past Speakers"
      >
        <section className="team-section-4 section-padding">
       
          <div className="container">
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
                  <option value="">Select Speakers</option>
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year} Speakers
                    </option>
                  ))}
                </select>
              </div>
            <div>
              
             
            </div>
            <div className="row g-4 justify-content-center pt-5">
              {pastSpeakers?.map((data, index) => {
                const words = data?.summary?.split(' ');
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
                          src={data?.picture || DEFAULT_AVATAR}
                          alt="team-img"
                          style={{
                            width: "100%",
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
                                <i className="fab fa-google-plus-g" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content text-center">
                        <h3>{data?.presenter}</h3>
                        <p >{data?.title}</p>
                        <p className='scrollable-bio'>
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
                            href={data?.media}
                            target='_blank'
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


