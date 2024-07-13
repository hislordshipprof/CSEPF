'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function News3() {
    return (
        <>
            <section className="news-section-3 fix section-padding" id="blog">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Latest Blog</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Checkout Our Latest <br /> News &amp; Articles
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="swiper news-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img src="/assets/img/news/04.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                17 <br />
                                                <span>Feb</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                IT Services
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-details">Simplify Streamline Succeed  IT Solutions</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn-2 mt-3">
                                            read More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img src="/assets/img/news/07.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                20 <br />
                                                <span>May</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                UI/UX Design
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-details">Unlocking Potential Through Technology</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn-2 mt-3">
                                            read More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img src="/assets/img/news/08.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                10 <br />
                                                <span>Feb</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                Cyber Security
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-details">Supervisor Disapproved of Latest Work.</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn-2 mt-3">
                                            read More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-card-items style-2">
                                    <div className="news-image">
                                        <img src="/assets/img/news/08.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                10 <br />
                                                <span>Feb</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                Cyber Security
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-details">Supervisor Disapproved of Latest Work.</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn-2 mt-3">
                                            read More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
