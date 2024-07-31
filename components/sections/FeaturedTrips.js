"use client"
import { useTrips } from "@/utils/apiRequestHooks";
import { DEFAULT_AVATAR } from "@/utils/utils";
import Link from "next/link";

export default function FeaturedTrips() {
  const { trips, isLoading, isError } = useTrips({is_featured:true});

 
  const get_day_month = (date) => {
    const d = new Date(date);
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
      <section className="news-section section-padding fix" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Article</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Read Our Latest Trips
            </h2>
          </div>
        </div>
        <div className="news-wrapper">
          <div className="row">
          {trips?.slice(0, 3).map((trip) => (
            <div
              className="col-xl-6 col-lg-8 col-md-8 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url(${trip?.images[0]?.image || DEFAULT_AVATAR})`,
                  height: "320px" }}
                >
                  <div className="post-date">
                 <span>{get_day_month(trip?.date).day}</span> <span>{get_day_month(trip?.date).month}</span> <span>{get_day_month(trip?.date).year}</span>
                  </div>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href={{ pathname: "/trips-details", query: { _id: trip?.id } }}>
                    {trip?.location}
                    </Link>
                  </h3>
                  <p style={{textAlign:"justify"}}>
                  {trip?.summary?.substring(0, 150)}...
                  </p>
                  <Link href={{ pathname: "/trips-details", query: { _id: trip?.id } }} className="theme-btn-2 mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          
          </div>
        </div>
      </section>
    </>
  );
}
