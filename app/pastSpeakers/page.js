"use client";
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { past_speakers_list, staff_members } from '@/utils/data';

export default function PastSpeakers() {
 
  return (
    <>
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Our Past Speakers"
    >
       <section className="team-section-4 section-padding">
          <div className="container">
            <div className="row g-4">
              {past_speakers_list.map((data) => {
                  const [showFullPresentation, setShowFullPresentation] = useState(false);

                  // Function to toggle the full presentation for each speaker
                  const togglePresentation = () => {
                    setShowFullPresentation(!showFullPresentation);
                  };
    
                  // Split the presentation text
                  const words = data.presentation.split(' ');
                  const preview = words.slice(0, 20).join(' ');
                  const rest = words.length > 20 ? words.slice(20).join(' ') : '';
return(    
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
                          width: 430,
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
                      <h3>
                        {data.name}
                      </h3>
                      <p>{data.position}</p>
                      <p>
                      {showFullPresentation ? `${preview} ${rest}` : `${preview}... `}
                      {words.length > 20 && (
                        <button className="btn btn-link" onClick={togglePresentation}>
                          {showFullPresentation ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </p>
                    <p>
  <a href="URL_TO_YOUR_FILE" className="btn btn-primary" download="filename.ext">
    Download Presentation
  </a>
</p>
                    </div>
                    
                  </div>
                </div>
              )})}
            </div>
          </div>
        </section>
    </Layout>

    </>
  )
}


