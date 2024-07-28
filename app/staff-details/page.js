"use client";
import Preloader from "@/components/elements/Preloader";
import Layout from "@/components/layout/Layout";
import { useGetStaff } from "@/utils/apiRequestHooks";
import Link from "next/link";
export default function StaffDetails({searchParams}) {

  const { staffData, isLoading, isError } = useGetStaff({staff_id: searchParams._id});
 console.log("========satffData=====",JSON.stringify(staffData, null, 2))
  if (isLoading) return <div><Preloader /></div>;
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
      <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Staff Details">
        <section className="team-details-section fix section-padding">
          <div className="container">
            <div className="team-details-wrapper">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="team-details-image">
                    <img src={staffData?.user?.picture} alt="team-img" className="pb-3" />
                    <h4>Position: {staffData?.role}</h4>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-details-content">
                    <div className="details-info">
                      <h3>{staffData?.user?.full_name}</h3>
                      <span>{staffData?.user?.email}</span>
                      <span>{staffData?.user?.phone_number}</span>

                    </div>
                    <p className="mt-3">
                     {staffData?.bio}
                    </p>
                    
                    <div className="social-icon">
                      <span>Social Media:</span>
                      <Link target="_blank" href={getSocialLinks(staffData?.user?.info?.socials).facebook}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link target="_blank" href={getSocialLinks(staffData?.user?.info?.socials).twitter}>
                              <i className="fa-brands fa-twitter" />
                            </Link>
                            <Link target="_blank" href={getSocialLinks(staffData?.user?.info?.socials).linkedin}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                     
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
