"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import Link from "next/link";
export default function Apply() {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    program: '',
    school: '',
    resume: null,
    picture: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form Data sent:', formData);
  };
return (
<>
  <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Apply for this year fellowship">
    <div>
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="contact-left-items">
                  <div className="contact-info-area-2">
                    <div className="contact-info-items mb-4">
                      <div className="icon">
                        <svg width={70} height={80} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 10.5L8 13.5L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div className="content">
                        <p>
                          The 2024 Fellowship is scheduled to run from late
                          June to early August. Fellows are expected to be
                          at the Capitol full-time Monday through Friday
                          (approximately 40 hour weeks) and will receive a
                          $4,000 stipend for the summer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="video-image">
                    <img src="/assets/img/video.jpg" alt="img" />
                    <VideoPopup style={1} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <h2>Ready to Get Started?</h2>
                  <p>
                    Excited about joining the next cohort? Fill out the form
                    below to get your application processed!. We cant wait
                    to have you!
                  </p>
                  <form onSubmit={handleSubmit} id="contact-form" className="contact-form-items">
                    <div className="row g-4">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <span>Name in Full</span>
                          <input type="text" name="name" id="name" placeholder="John Doe" value={formData.name}
            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Email Address</span>
                          <input type="text" name="email" id="email" placeholder="JohnDoe@example.com"  value={formData.email}
            onChange={handleChange}/>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <span>Program of Study</span>
                          <input type="text" name="program" id="program" placeholder="Msc/Bsc/Phd Electrical Engineering " value={formData.program}
            onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Your School</span>
                          <input type="text" name="school" id="school" placeholder="Your School" value={formData.school}
            onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="form-clt">
                          <span>Upload Resume</span>
                          <input
            type="file"
            name="resume"
            id="resume"
            accept=".pdf,.doc,.docx"
            placeholder="Upload Resume"
            onChange={handleChange}
          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="form-clt">
                          <span>Upload Your Picture</span>
                          <input
            type="file"
            name="picture"
            id="picture"
            accept="image/png, image/jpeg"
            placeholder="Upload Your Picture"
            onChange={handleChange}
          />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                          <span>
                            What motivate's you to join this fellowship?
                          </span>
                          <textarea
            name="message"
            id="message"
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
          />
                          </div>
                          </div>
                          <div
                            className="col-lg-7 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <button type="submit" className="theme-btn">
                              Submit Application{" "}
                              <i className="fa-solid fa-arrow-right-long" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}