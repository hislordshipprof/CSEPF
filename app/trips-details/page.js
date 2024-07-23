'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import 'swiper/css'; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function TripsDetails() {
  const images = [
    "assets/img/news/post-1.jpg",
    "assets/img/news/post-2.jpg",
    "assets/img/news/post-3.jpg",
    "assets/img/news/post-4.jpg",
  ];
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay:  1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
  
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Trips Details">
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="news-details-area">
              <div className="row g-5">
                <div className="col-12 col-lg-8">
                  <div className="blog-post-details">
                    <div className="single-blog-post">
                    <Swiper
                     {...swiperOptions} className="swiper-wrapper"
                      >
                        {images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <div
                              className="post-featured-thumb bg-cover"
                              style={{ backgroundImage: `url("${image}")`,width: "100%", height: 400 }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {/* <div
                        className="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/news/post-4.jpg")',
                        }}
                      /> */}
                      <div className="post-content">
                        <ul className="post-list d-flex align-items-center">
                          <li>
                            <i className="fa-regular fa-user" />
                            By Admin
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            18 Dec, 2024
                          </li>
                          <li>
                            <i className="fa-solid fa-tag" />
                            IT Services
                          </li>
                        </ul>
                        <h3>Tackling the Changes of Retail Industry</h3>
                        <p className="mb-3">
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore of magna aliqua. Ut
                          enim ad minim veniam, made of owl the quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          dolor commodo consequat. Duis aute irure and dolor in
                          reprehenderit.
                        </p>
                        <p className="mb-3">
                          The is ipsum dolor sit amet consectetur adipiscing
                          elit. Fusce eleifend porta arcu In hac habitasse the
                          is platea augue thelorem turpoi dictumst. In lacus
                          libero faucibus at malesuada sagittis placerat eros
                          sed istincidunt augue ac ante rutrum sed the is
                          sodales augue consequat.
                        </p>
                        <p>
                          Nulla facilisi. Vestibulum tristique sem in eros
                          eleifend imperdiet. Donec quis convallis neque. In id
                          lacus pulvinar lacus, eget vulputate lectus. Ut
                          viverra bibendum lorem, at tempus nibh mattis in. Sed
                          a massa eget lacus consequat auctor.
                        </p>
                       
                       
                
                      </div>
                    </div>
                
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="main-sidebar">
                   
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Recent Post</h3>
                      </div>
                      <div className="recent-post-area">
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/news/pp3.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="fa-solid fa-calendar-days" />
                                18 Dec, 2024
                              </li>
                            </ul>
                            <h6>
                              <Link href="/trips-details">
                                Keep Your Business Safe &amp; <br />
                                Endure High Availability
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/news/pp4.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="fa-solid fa-calendar-days" />
                                18 Dec, 2024
                              </li>
                            </ul>
                            <h6>
                              <Link href="/trips-details">
                                Tacking the Changes of <br />
                                Retail Industry
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/news/pp5.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="fa-solid fa-calendar-days" />
                                18 Dec, 2024
                              </li>
                            </ul>
                            <h6>
                              <Link href="/trips-details">
                                What’s the Holding Back <br />
                                the It Solution
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );

}
