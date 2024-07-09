
import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/img/about/06.png" alt="about-img" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">ABOUT INFOTECK</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            We Can Clients with the <br /> About Solution
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.
                                    </p>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Branding and design Identity
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Web site Marketing Solutions
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Unlimited Download Data
                                            </li>
                                        </ul>
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Branding and design Identity
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Web site Marketing Solutions
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                Unlimited Download Data
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-button wow fadeInUp" data-wow-delay=".9s">
                                        <Link href="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
