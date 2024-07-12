import Link from "next/link";

export default function About1() {

  return (
    <>
      <section className="about-section section-padding fix" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="col-lg-12 mt-4 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">About CSEPF</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    We Are Engineers with <br />
                    focus on <span>Policy making</span>
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  The Colorado Science and Engineering Policy Fellowship is a
                  first of its kind program <br /> in Colorado for STEM students
                  to learn how to impact the future in policy making.  <Link href="/about"><span style={{color:'blue', fontWeight:'bold'}}>Learn More</span></Link>
                </p>
                <div className="about-icon-items">
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
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
