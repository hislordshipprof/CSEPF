import Layout from "@/components/layout/Layout";
import { staff_members } from "@/utils/data";
import Link from "next/link";
export default function Team() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Our Staff Members"
      >
        <section className="team-section-4 section-padding">
          <div className="container">
            <div className="row g-4">
              {staff_members.map((data) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-card-items mt-0">
                    <div className="team-image">
                      <img
                        src={data.img}
                        alt="team-img"
                        style={{
                          width: 430,
                          height: 400,
                          objectFit: "contain",
                        }}
                      />
                      <div className="social-profile">
                        <span className="plus-btn">
                          <i className="fas fa-share-alt" />
                        </span>
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h3>
                        <Link href="/team-details">{data.name}</Link>
                      </h3>
                      <p>{data.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
