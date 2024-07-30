'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import 'swiper/css'; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Preloader from "@/components/elements/Preloader";
import { useGetTrip } from "@/utils/apiRequestHooks";

export default function TripsDetails({ searchParams }) {

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
  const { trip, isLoading, isError } = useGetTrip({trip_id:searchParams?._id});

  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );



    const images = trip?.images?.map((image) => image.image) || [];

    const get_day_month = () => {
      const d = new Date(trip?.date);
      return {
        day: d.getDate(),
        month: d.toLocaleString("default", { month: "short" }),
        year: d.getFullYear(),
        niceDate:
          d.toLocaleString("default", { month: "short" }) +
          " " +
          d.getDate() +
          ", " +
          d.getFullYear(),
      };
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
                              style={{ backgroundImage: `url("${image}")`,width: "100%", height: 400, objectFit: "contain" }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="post-content">
                        <ul className="post-list d-flex align-items-center">
                          <li>
                            <i className="fa-regular fa-user" />
                            By Admin
                          </li>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            {get_day_month().niceDate}
                          </li>
                        </ul>
                        <h3>{trip?.location}</h3>
                        <p className="mb-3" style={{textAlign:'justify'}}>
                          {trip?.summary}
                        </p>    
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
