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
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">IT services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Database Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    IT Consultancy
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cyber Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Database Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    IT Consultancy
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cyber Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Database Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    IT Consultancy
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cyber Security
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                                Mauris ultrices ligula eget volutpat aliquet nullam
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Need Any Kind Of IT Solution For Your Business.  <Link href="/service">View Services </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
