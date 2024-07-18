import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="about-section section-padding fix" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="col-lg-12 mt-4 mt-lg-0">
              <div className="about-content">
                <div className="row mb-5">
                  <div className="col-lg-9">
                    <div className="section-title">
                      <span className="wow fadeInUp">About CSEPF</span>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        We Are Engineers with <br />
                        focus on <span>Policy making</span>
                      </h2>
                    </div>
                    <p
                      className="mt-3 mt-md-0 wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{ maxWidth: "70%" }}
                    >
                      The Colorado Science and Engineering Policy Fellowship is
                      a first of its kind program in Colorado for STEM students
                      to learn how to impact the future in policy making.
                      students to learn how to impact the future in policy
                      making{" "}
                      <Link href="/about">
                        <span style={{ color: "blue", fontWeight: "bold" }}>
                          Learn More
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <img
                        src="/assets/img/senator.jpg"
                        alt="senator-img"
                        height={250}
                      />
                      <div className="content center mt-2">
                        <h6>Senator Chris Hansen</h6>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-icon-items mt-3 ">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="/assets/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Problem Solving</h4>
                      <p>
                        Give Engineers the ability to solve problems using
                        policy making.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="icon">
                      <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Mission &amp; Vision</h4>
                      <p>
                        Give policy-making experience to undergraduate and
                        graduate students with backgrounds in (STEM)
                      </p>
                    </div>
                  </div>

                  <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="icon">
                      <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Mission &amp; Vision</h4>
                      <p>
                        Give policy-making experience to undergraduate and
                        graduate students with backgrounds in (STEM)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
