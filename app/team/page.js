
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
                <section className="team-section-4 section-padding">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/01.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Marvin McKinney</Link>
                                        </h3>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/02.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Bessie Cooper</Link>
                                        </h3>
                                        <p>President of Sales</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/03.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Dianne Russell</Link>
                                        </h3>
                                        <p>Marketing manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/11.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Leslie Alexander</Link>
                                        </h3>
                                        <p>Software Tester</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/12.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Kathryn Murphy</Link>
                                        </h3>
                                        <p>General manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/13.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <Link href="/team-details">Darrell Steward</Link>
                                        </h3>
                                        <p>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}