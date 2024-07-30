"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { useTrips } from "@/utils/apiRequestHooks";
import Link from "next/link";
export default function Trips() {
  const Tags = [{ id: 1, name: "Healthcare" }, { id: 2 }];

  const { trips, isLoading, isError } = useTrips({});

  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );

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
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="Our Various Trips"
      >
        <section className="news-standard fix section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-lg-8">
                <div className="news-standard-wrapper">
                  {trips.map((trip) => (
                    <div className="news-standard-items">
                      <div className="news-thumb">
                        <img src={trip?.images[0]?.image} alt="img" />
                        <div className="post-date">
                          <h3>
                            {get_day_month(trip?.date).day} <br />
                            <span>{get_day_month(trip?.date).month}</span>
                            <br /> <span>{get_day_month(trip?.date).year}</span>
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
                            Site Tour
                          </li>
                          <li>
                            <i className="fa-regular fa-calendar" />
                            {get_day_month(trip?.date).niceDate}
                          </li>
                        </ul>
                        <h3>
                          <Link
                            href={{
                              pathname: "/trips-details",
                              query: { _id: trip?.id },
                            }}
                          >
                            {trip?.location}
                          </Link>
                        </h3>
                        <p style={{ textAlign: "justify" }}>
                          {trip?.summary?.substring(0, 300)}...
                        </p>
                        <Link
                          href={{
                            pathname: "/trips-details",
                            query: { _id: trip?.id },
                          }}
                          className="theme-btn mt-4"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
