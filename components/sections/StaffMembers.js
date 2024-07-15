
import Link from 'next/link'

export default function StaffMembers() {
    return (
        <>
            <section className="team-section-3 fix section-padding section-bg" id="team">
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
                                Our Dedicated Supporting <br /> Official Members
                            </h2>
                        </div>
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            View all Official Members
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/04.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Staff Position</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/05.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Staff Position</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/04.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Staff Position</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-team-items">
                                <div className="team-image">
                                    <img src="/assets/img/team/05.jpg" alt="team-img" />
                                    <div className="social-profile">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">Marvin McKinney</Link>
                                    </h3>
                                    <p>Staff Position</p>
                                </div>
                            </div>
                        </div>
                       
                       
                    </div>
                </div>
            </section>
        </>
    )
}
