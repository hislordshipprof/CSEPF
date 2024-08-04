"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { getFellows } from "@/utils/apiRequestHooks";
import { DEFAULT_AVATAR } from "@/utils/utils";
import Link from "next/link";
export default function CohortDetails({ searchParams }) {
  const { fellows, isLoading, isError } = getFellows({
    fellow_id: searchParams._id,
  });
  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );
  const getSocialLinks = (socials) => {
    const socialLinks = {
      facebook: socials?.facebook || "",
      twitter: socials?.twitter || "",
      linkedin: socials?.linkedin || "",
    };
    return socialLinks;
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Cohort Details">
        <section className="team-details-section fix section-padding">
          <div className="container">
            <div className="team-details-wrapper">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5 "  >
                  <div className="team-details-image">
                    <img
                      src={fellows?.picture || DEFAULT_AVATAR}
                      alt="team-img"
                      style={{height:"450px",objectFit:"cover",}}
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-details-content">
              
                    <div className="progress-area mt-0">
                    <div className="details-info">
                      <h3>{fellows?.full_name}</h3>

                      <span>School: {fellows?.school}</span>
                      <br />
                      <span>Program: {fellows?.program}</span>
                      <br />
                      <span>Email:{fellows?.email}</span>
                    </div>
                    <p className="mt-3">{fellows?.bio}</p>
                      <div className="progress-wrap">
                        <div className="pro-items">
                          <div className="pro-head">
                            <h6 className="title">
                              <i className="fas fa-file-alt"></i>{" "}
                              <a
                              href={fellows?.resume}
                              download
                              className="point"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Download Resume
                            </a>
                            </h6>
                           
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="social-icon">
                      <span>Social Media:</span>

                      <Link
                        target="_blank"
                        href={getSocialLinks(fellows?.info?.socials)?.facebook}
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>

                      <Link
                        target="_blank"
                        href={getSocialLinks(fellows?.info?.socials)?.twitter}
                      >
                        <i className="fa-brands fa-twitter" />
                      </Link>

                      <Link
                        target="_blank"
                        href={getSocialLinks(fellows?.info?.socials)?.linkedin}
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-single-history pt-5">
                <div className="title">
                  {/* <h3>Education Background</h3> */}
                </div>
                <h5 className="pt-5">{/* {fellows?.applicant?.program} */}</h5>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
