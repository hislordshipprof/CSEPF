import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import PolicyIdeas from "@/components/sections/PolicyIdeas";
import Link from "next/link";
export default function Curriculum() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Our Curriculum">
        <div>
          <section className="contact-section fix section-padding">
            <div className="container">
              <div className="contact-wrapper-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div
                      style={{
                        display: "block",
                        width: "80%",
                        marginBottom: 30,
                      }}
                    >
                      <p
                        style={{
                          textAlign: "justify",
                          lineHeight: "30px",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        As the world becomes more complex, public policy makers
                        will need to call on STEM experts and technical problem
                        solvers for consultation, advice, and collaboration.
                        Fellows will see this interaction firsthand through site
                        visits, speakers, and individual research for a capstone
                        public policy project.
                      </p>
                    </div>
                    <h2 className="mb-3">Fellow Activities </h2>
                    <div className="contact-left-items">
                      <div
                        className="contact-info-area-2"
                        style={{ backgroundColor: "#4169E1" }}
                      >
                        <div className="contact-info-items mb-4">
                          <div className="icon">
                            <svg
                              width={70}
                              height={80}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10.5L8 13.5L15 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <p>
                              Fellows attend an introductory policy “boot camp”,
                              during which they will learn about the
                              policy-making process at the Capitol and acquire
                              the skills they will need to be a part of it.
                            </p>
                          </div>
                        </div>
                        <div className="contact-info-items mb-4">
                          <div className="icon">
                            <svg
                              width={70}
                              height={80}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10.5L8 13.5L15 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <p>
                              Fellows visit external sites where technology and
                              policy intersect to experience that interaction
                              firsthand and to engage with stakeholders.
                            </p>
                          </div>
                        </div>
                        <div className="contact-info-items">
                          <div className="icon">
                            <svg
                              width={70}
                              height={80}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10.5L8 13.5L15 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <p>
                              Fellows attend presentations from guest speakers
                              who are knowledgeable on the intersection between
                              technology and policy.
                            </p>
                          </div>
                        </div>
                        {/* <div className="contact-info-items">
                                                <div className="icon">
                                                        <svg width={70} height={80} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10.5L8 13.5L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                           
                                                        </svg>
                                                    </div>
                                                    <div className="content">
                                                        <p>Fellows attend presentations from guest speakers who are knowledgeable on the intersection between technology and policy.</p>
                                                   
                                                    </div>
                                                </div>
                                                <div className="contact-info-items">
                                                <div className="icon">
                                                        <svg width={70} height={80} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10.5L8 13.5L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                           
                                                        </svg>
                                                    </div>
                                                    <div className="content">
                                                        <p>Fellows are be provided with the time, space, and resources necessary to research, design, and write their own policy proposal, which they will present during the final week of the fellowship.</p>
                                                   
                                                    </div>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 " style={{ bottom: -30 }}>
                    <div className="contact-left-items">
                      <div
                        className="contact-info-area-2"
                        style={{ backgroundColor: "#4169E1" }}
                      >
                        <div className="contact-info-items">
                          <div className="icon">
                            <svg
                              width={70}
                              height={80}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10.5L8 13.5L15 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <p>
                              Fellows attend presentations from guest speakers
                              who are knowledgeable on the intersection between
                              technology and policy.
                            </p>
                          </div>
                        </div>
                        <div className="contact-info-items">
                          <div className="icon">
                            <svg
                              width={70}
                              height={80}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10.5L8 13.5L15 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <p>
                              Fellows are be provided with the time, space, and
                              resources necessary to research, design, and write
                              their own policy proposal, which they will present
                              during the final week of the fellowship.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PolicyIdeas />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
