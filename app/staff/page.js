"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useStaff } from "@/utils/apiRequestHooks";
import { DEFAULT_AVATAR } from "@/utils/utils";
import Preloader from "@/components/elements/Preloader";
import Error404 from "../404/page";


export default function Staff() {
  
  const { staff, isLoading, isError } = useStaff({is_featured: true});
 
  if (isLoading){
    <div><Preloader /></div>
  } else{
    <Error404 />
  } ;

  const getSocialLinks = (socials) => {
    const socialLinks = {
      facebook: socials?.facebook || "",
      twitter: socials?.twitter || "",
      linkedin: socials?.linkedin || "",
    };
    return socialLinks;
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={4}
        breadcrumbTitle="Our Staff Members"
      >
        <section className="team-section-4 section-padding">
          <div className="container">
            <div className="row g-4">
              {staff?.map((data) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-card-items mt-0">
                    <div className="team-image">
                      <img
                        src={data?.user?.picture || DEFAULT_AVATAR}
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
                            <Link target="_blank" href={getSocialLinks(staff?.user?.info?.socials).facebook}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" href={getSocialLinks(staff?.user?.info?.socials).twitter}>
                              <i className="fa-brands fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" href={getSocialLinks(staff?.user?.info?.socials).linkedin}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h3>
                        <Link href={{pathname:"/staff-details", query:{_id: data?.id}}}>{data?.user?.full_name}</Link>
                      </h3>
                      <p>{data.role}</p>
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
