"use client";
import { useStaff } from "@/utils/apiRequestHooks";
import { staff_members } from "@/utils/data";
import { DEFAULT_AVATAR } from "@/utils/utils";
import Link from "next/link";

export default function FeaturedStaff() {
  const { staff, isLoading, isError } = useStaff({is_featured: true});
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
      <section
        className="team-section-3 fix section-padding section-bg"
        id="team"
      >
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">Official Members</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our  Official Members
              </h2>
            </div>
            <Link
              href="/staff"
              className="theme-btn wow fadeInUp pt-2"
              data-wow-delay=".5s"

            >
              View all Official Members
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <div className="row">
            {staff?.map((member) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
                key={member.id}
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src={member?.user?.picture || DEFAULT_AVATAR} alt="team-img" />
                    <div className="social-profile">
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
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3>
                      <Link href="/staff-details">{member?.user?.full_name}</Link>
                    </h3>
                    <p>{member.role}</p>
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
