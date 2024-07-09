'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
}

import Link from 'next/link'

export default function Hero3() {
    return (
        <>
            <section className="hero-section fix hero-3">
                <div className="bottom-shape">
                    <img src="/assets/img/hero/bottom-shape.png" alt="shape-img" />
                </div>
                <div className="array-button">
                    <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                    <button className="array-next"><i className="fal fa-arrow-left" /></button>
                </div>
                <div className="swiper hero-slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}>
                                <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                    <img src="/assets/img/hero/mask-shape-2.png" alt="shape-img" />
                                </div>
                                <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/hero/border-shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                    <img src="/assets/img/choose/circle.png" alt="shape-img" />
                                </div>
                                <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/frame.png" alt="shape-img" />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content">
                                            <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                            <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                                Get Our Business <br />
                                                This It Solution
                                            </h1>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                                Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                            </p>
                                            <div className="hero-button">
                                                <Link href="/about" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn hover-white">
                                                    Explore More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                                <Link href="/contact" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                    Contact Us
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}>
                                <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                    <img src="/assets/img/hero/mask-shape-2.png" alt="shape-img" />
                                </div>
                                <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/hero/border-shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                    <img src="/assets/img/choose/circle.png" alt="shape-img" />
                                </div>
                                <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/frame.png" alt="shape-img" />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content">
                                            <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                            <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                                Get Our Business <br />
                                                This It Solution
                                            </h1>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                                Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                            </p>
                                            <div className="hero-button">
                                                <Link href="/about" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn hover-white">
                                                    Explore More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                                <Link href="/contact" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                    Contact Us
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}>
                                <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                    <img src="/assets/img/hero/mask-shape-2.png" alt="shape-img" />
                                </div>
                                <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/hero/border-shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                    <img src="/assets/img/choose/circle.png" alt="shape-img" />
                                </div>
                                <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                    <img src="/assets/img/frame.png" alt="shape-img" />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content">
                                            <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                            <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                                Get Our Business <br />
                                                This It Solution
                                            </h1>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                                Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                            </p>
                                            <div className="hero-button">
                                                <Link href="/about" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn hover-white">
                                                    Explore More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                                <Link href="/contact" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                    Contact Us
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
