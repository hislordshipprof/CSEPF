
'use client'
import { featured_class_of_2024 } from "@/utils/data"
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
        el: ".dot-2",
        clickable: true,
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
export default function ProjectSlider2({ showDots }) {
    return (
        <>

            <div className="swiper project-slider-2">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    
                   
            
{featured_class_of_2024?.map(  (data)=>(                  <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src={data.img} alt="project-img" />
                                <div className="project-content">
                                    <p>{data.name}</p>
                                    <h4>
                                        <Link href="/project-details">{data.project}</Link>
                                    </h4>
                                    <Link href="/project-details" className="arrow-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {showDots &&
                <div className="swiper-dot-2">
                    <div className="dot-2" />
                </div>
            }

        </>
    )
}
