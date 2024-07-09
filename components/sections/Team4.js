
import Link from 'next/link'

export default function Team4() {
    return (
        <>
            <section className="team-section-4 fix section-padding pt-0" id="team">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Team Members</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Dedicated Team <br /> Members</h2>
                        </div>
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/08.jpg" alt="team-img" />
                                </div>
                                <div className="team-content">
                                    <h3>
                                        <Link href="/team-details">Leslie Alexander</Link>
                                    </h3>
                                    <p>CTO &amp; Founder</p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fa-brands fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/09.jpg" alt="team-img" />
                                </div>
                                <div className="team-content">
                                    <h3>
                                        <Link href="/team-details">Kristin Watson</Link>
                                    </h3>
                                    <p>CTO &amp; Founder</p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fa-brands fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/10.jpg" alt="team-img" />
                                </div>
                                <div className="team-content">
                                    <h3>
                                        <Link href="/team-details">Brooklyn Simmons</Link>
                                    </h3>
                                    <p>CTO &amp; Founder</p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fa-brands fa-pinterest-p" /></Link>
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
