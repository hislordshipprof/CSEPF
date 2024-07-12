import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";

export default function Hero1() {
  return (
    <>
      <section
        className="hero-section fix hero-1 bg-cover"
        style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}
      >
        <div className="text-transparent">
          <h2>Technology</h2>
        </div>
        <div className="line-shape">
          {/* <Image src={line_shape} alt="shape-img" /> */}
          <img src="/assets/img/hero/line-shape.png" alt="shape-img" />
        </div>
        <div className="dot-shape">
          <img src="/assets/img/hero/dot-shape.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="/assets/img/hero/frame.png" alt="shape-img" />
        </div>
        <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
          <img src="/assets/img/hero/mask-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 pb-5">
              <div className="hero-content">
                <h6 className="wow fadeInUp" data-wow-delay=".2s">
                  Welcome Everyone to CSEPF
                </h6>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{ fontSize: 52 }}
                >
                  Colorado Science & Engineering Policy Fellowship
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Developing the next generation of policy and <br /> science
                  leaders in Colorado and beyond.
                </p>
                <div className="hero-button">
                  <Link
                    href="/apply"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Apply Now
                    {/* <i className="fa-solid fa-arrow-right-long" /> */}
                  </Link>
                  <VideoPopup style={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
