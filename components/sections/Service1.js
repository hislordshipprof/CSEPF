'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import PastSpeakerDetailPopUp from '../elements/PastSpeakerDetailPopUp'
import { useState } from 'react'

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
    const [isOpen, setOpen] = useState(false)
const handleModalOpen = () => setOpen(!isOpen)
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Past Speakers</span>
                            <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                See below Past Speaker who shared insights <br /> With the Fellows on various topics in Policy Making
                            </h3>
                        </div>
                       
                        <div className="section-title-area">
                        
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/hero/education.svg" width={40} height={40} alt="icon-img" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Governor Jared Polis
                                                </Link>
                                            </h4>
                                            <p>
                                            George Sparks & Kristan Uhlenbrock, Denver Museum of Nature and Science
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
                                        <img src="/assets/img/hero/government.svg" width={40} height={40} alt="icon-img" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Congressman Joe Neguse
                                                </Link>
                                            </h4>
                                            <p>
                                            Allie Morgan, Colorado Health Institute
                                            </p>
                                            <a onClick={handleModalOpen} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <PastSpeakerDetailPopUp handleModalOpen={handleModalOpen} setOpen={setOpen} isOpen={isOpen} />
                             
                                {/* <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                        <img src="/assets/img/hero/education.svg" width={40} height={40} alt="icon-img" />

                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                Phil Weiser, Colorado Attorney General
                                                </Link>
                                            </h4>
                                            <p>
                                            Tanuj Deora, Simple Energy
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               */}
                                
                                {/* <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/hero/government.svg" width={40} height={40} alt="icon-img" />
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
                                */}
                               
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                        <div className="array-button justify-content-end">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
