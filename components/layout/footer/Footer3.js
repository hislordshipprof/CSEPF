import Link from "next/link"

export default function Footer3() {
    return (
        <>

            <footer className="footer-section footer-bg">
                <div className="footer-shape-4">
                    <img src="/assets/img/footer-shape-4.png" alt="shape-img" />
                </div>
                <div className="shape-2">
                    <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
                </div>
                <div className="footer-widgets-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Phasellus ultricies aliquam volutpat
                                            ullamcorper laoreet neque, a lacinia
                                            curabitur lacinia mollis
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                Infotech About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQ’S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>IT Solution</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                IT Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Web Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Cyber Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                SEO Optimization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                App Development
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Sign up to seargin weekly newsletter to get the latest updates.
                                        </p>
                                        <div className="footer-input">
                                            <input type="email" id="email2" placeholder="Enter Email Address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fab fa-telegram-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-3">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <div className="footer-logo wow fadeInLeft" data-wow-delay=".3s">
                                <Link href="/">
                                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <p className="wow fadeInRight color-2" data-wow-delay=".5s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">Infotech</Link>
                            </p>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
