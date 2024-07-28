"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { getFellows } from "@/utils/apiRequestHooks";
import Link from "next/link";
export default function CohortDetails({searchParams}) {
  const { fellows, isLoading, isError } = getFellows({ fellow_id: searchParams._id });
  if (isLoading) return <div><Preloader /></div>;

  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Cohort Details">
        <section className="team-details-section fix section-padding">
          <div className="container">
            <div className="team-details-wrapper">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="team-details-image">
                    <img src={fellows?.applicant?.picture} alt="team-img" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-details-content">
                    <div className="details-info">
                      <h3>{fellows?.applicant?.full_name}</h3>
                      <span>{fellows?.applicant.school}</span>
                      <br/>
                      <span>{fellows?.applicant.email}</span>

                    </div>
                    <p className="mt-3">
                      {fellows?.bio}
                    </p>
                    <div className="progress-area mt-4">
                      <div className="progress-wrap">
                
                        <div className="pro-items">
                          <div className="pro-head">
                            <h6 className="title">Resume</h6>
                            <a href={fellows?.applicant?.resume} download className="point" style={{color:'blue',cursor:'pointer'}}>Download Resume</a>
                          </div>
                          <div className="progress">
                            <div className="progress-value style-two" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="social-icon">
                      <span>Social Media:</span>
                      <Link href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link href="#" className="active">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-single-history pt-5">
                <div className="title">
                  <h3>Education Background</h3>
                </div>
                <h5 className="pt-5">
                  {fellows?.applicant?.program}
                </h5>
            
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
