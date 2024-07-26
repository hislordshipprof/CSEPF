"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PastSpeakerDetailPopUp from "../elements/PastSpeakerDetailPopUp";
import { useState } from "react";
import { FEATURED_SPEAKERS } from "@/utils/data";
import CustomModal from "../layout/CustomModal";

const LOREM_IPSUM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 0,
  loop: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
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
};

export default function FeaturedPastSpeakers() {
  const [isOpen, setOpen] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  // const handleModalOpen = () => setOpen(!isOpen);
  const handleModalOpen = (speaker) => {
    setCurrentSpeaker(speaker);
    setOpen(!isOpen);
  };
  return (
    <>
      <section
        className="service-section fix section-padding bg-cover "
       
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")', }}
        id="service"
      >
        <div className="container" >
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">Policy Speakers</span>
              <h3 className="wow fadeInUp" data-wow-delay=".3s">
                See below Speakers who shared insights <br /> With the
                Fellows on various topics in Policy Making
              </h3>
            </div>

            <div className="section-title-area">
              <Link
                href="/pastSpeakers"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                View All Presentations
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
          <div className="service-wrapper" >
            <div className="swiper service-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {FEATURED_SPEAKERS.map((speaker) => (
                  <SwiperSlide key={speaker.id}>
                    <div className="service-box-items">
                      <div className="icon">
                        <img
                          src={speaker.img || "/assets/img/hero/education.svg"} // Use speaker's image if available, otherwise default
                          width={40}
                          height={40}
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">{speaker.name}</Link>
                        </h4>
                        <p>{speaker.presentation.substring(0, 60)}</p>
                        <a
                          // href="#"
                          onClick={() => handleModalOpen(speaker)}
                          className="theme-btn-2 mt-3"
                        >
                          Read More{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              
              </Swiper>
            </div>
            
            <CustomModal
          isOpen={isOpen}
          handleModalOpen={handleModalOpen}
          speaker={currentSpeaker}
        />
            <div className="service-text wow fadeInUp" data-wow-delay=".4s">
              
              <div className="array-button justify-content-end">
                
                <button className="array-prev">
                  <i className="fal fa-arrow-right" />
                </button>
                <button className="array-next">
                  <i className="fal fa-arrow-left" />
                </button>
              </div>
             
             
            </div>
          </div>
        
        </div>
      
           
      </section>
    </>
  );
}