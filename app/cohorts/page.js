"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ParticipatingSchools from "@/components/sections/ParticipatingSchools";
import { useFellows } from "@/utils/apiRequestHooks";
import { DEFAULT_AVATAR, YEARS } from "@/utils/utils";
import Preloader from "@/components/elements/Preloader";

export default function Cohorts() {
  const [selectedClass, setSelectedClass] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // fetch
  }, [selectedClass]);

  const { fellows, isLoading, isError } = useFellows({ cohort: selectedClass });

  const getSocialLinks = (socials) => {
    const socialLinks = {
      facebook: socials?.facebook || "",
      twitter: socials?.twitter || "",
      linkedin: socials?.linkedin || "",
    };
    return socialLinks;
  };

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
        breadcrumbTitle="Our Presents and Past Cohorts"
      >
        <div>
          <section className="team-section-4 fix section-padding">
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
                  <option value="">Select Cohort</option>
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year} Cohort
                    </option>
                  ))}
                </select>
              </div>
              <div className="row g-4">
                <div className="col-xl-12 col-lg-12 col-md-12 p-4">
                  <h2>
                    {selectedClass ? `Class of ${selectedClass}` : "All Cohort"}
                  </h2>
                </div>

                {fellows?.length ? (
                  fellows?.map((data) => (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp mb-4"
                      data-wow-delay=".5s"
                    >
                      <div className="team-card-items mt-0">
                        <div className="team-image">
                          <img
                            src={data?.picture || DEFAULT_AVATAR}
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
                                <Link
                                  target="_blank"
                                  href={
                                    getSocialLinks(data?.info?.socials)
                                      ?.facebook
                                  }
                                >
                                  <i className="fab fa-facebook-f" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  href={
                                    getSocialLinks(data?.info?.socials)?.twitter
                                  }
                                >
                                  <i className="fa-brands fa-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  target="_blank"
                                  href={
                                    getSocialLinks(data?.info?.socials)
                                      ?.linkedin
                                  }
                                >
                                  <i className="fab fa-linkedin-in" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="team-content text-center">
                          <h3>
                            <Link
                              href={{
                                pathname: "/cohort-details",
                                query: { _id: data?.id },
                              }}
                            >
                              {data?.full_name}
                            </Link>
                          </h3>
                          <p>{data?.school}</p>

                          <p style={{ color: "purple", fontWeight: "bold" }}>
                            {data.project?.title || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    No Fellow found for this class
                  </div>
                )}
              </div>
            </div>
          </section>
          <ParticipatingSchools />
        </div>
      </Layout>
    </>
  );
}
