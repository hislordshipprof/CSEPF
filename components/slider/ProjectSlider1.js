
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
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
export default function ProjectSlider1({ showDots }) {
    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/01.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Technology</p>
                                    <h4>
                                        <Link href="/project-details">Platform Integration</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/02.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Security</p>
                                    <h4>
                                        <Link href="/project-details">Network Security</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/03.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Solution</p>
                                    <h4>
                                        <Link href="/project-details">Web Development</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/04.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Technology</p>
                                    <h4>
                                        <Link href="/project-details">IT Management</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/03.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Solution</p>
                                    <h4>
                                        <Link href="/project-details">Web Development</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items">
                            <div className="project-image">
                                <img src="/assets/img/project/04.jpg" alt="project-img" />
                                <div className="project-content">
                                    <p>Technology</p>
                                    <h4>
                                        <Link href="/project-details">IT Management</Link>
                                    </h4>
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
            </div>
        </>
    )
}
