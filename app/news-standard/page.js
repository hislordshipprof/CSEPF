
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NewsStandard() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Standard">
                <section className="news-standard fix section-padding">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-lg-8">
                                <div className="news-standard-wrapper">
                                    <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img src="/assets/img/news/post-1.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                                    17 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">Keep Your Business Safe &amp; Ensure High Availability</Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img src="/assets/img/news/post-2.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                                    19 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">Tackling the Changes of Retail Industry</Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img src="/assets/img/news/post-3.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                                    28 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">What’s the Holding Back the It Solution</Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="page-nav-wrap pt-5 text-center">
                                        <ul>
                                            <li><Link className="page-numbers" href="#">01</Link></li>
                                            <li><Link className="page-numbers" href="#">02</Link></li>
                                            <li><Link className="page-numbers" href="#">03</Link></li>
                                            <li><Link className="page-numbers" href="#"><i className="fa-solid fa-arrow-right-long" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="search-widget">
                                            <form action="#">
                                                <input type="text" placeholder="Search here" />
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul>
                                                <li><Link href="/news-details">Database Security</Link> <span>(08)</span></li>
                                                <li><Link href="/news-details">IT Consultancy</Link> <span>(11)</span></li>
                                                <li className="active"><Link href="/news-details">App Development</Link><span>(12)</span></li>
                                                <li><Link href="/news-details">UI/UX Design</Link> <span>(18)</span></li>
                                                <li><Link href="/news-details">Cyber Security</Link> <span>(07)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Recent Post</h3>
                                        </div>
                                        <div className="recent-post-area">
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/news/pp3.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Keep Your Business Safe &amp; <br />
                                                            Endure High Availability
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/news/pp4.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Tacking the Changes of <br />
                                                            Retail Industry
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/news/pp5.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            What’s the Holding Back <br />
                                                            the It Solution
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Tags</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <div className="tagcloud">
                                                <Link href="/news-standard">News</Link>
                                                <Link href="/news-details">business</Link>
                                                <Link href="/news-details">marketing</Link>
                                                <Link href="/news-details">solution</Link>
                                                <Link href="/news-details">SMM</Link>
                                                <Link href="/news-details">strategy</Link>
                                                <Link href="/news-details">SEO</Link>
                                            </div>
                                        </div>
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