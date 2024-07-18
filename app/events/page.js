
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Events() {
const Tags=[
    {id:1,
    name:"Healthcare",},
    {id:2,
    
    }
]
    return (
        <>

            <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Our Various Trips">
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
                                                    Site Tour
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">See the amazing  &amp; moments fellows had at Google</Link>
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
                                                    Site Tour
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">Check our fellows visit to Steel manufacturing company</Link>
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
                                                    Industry
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">Fellows had an exciting time at Holcim cement company</Link>
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
                                    {/* <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="search-widget">
                                            <form action="#">
                                                <input type="text" placeholder="Search here" />
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                            </form>
                                        </div>
                                    </div> */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul>
                                                <li><Link href="/news-details">Visit to Google(Boulder)</Link> <span>(08)</span></li>
                                                <li><Link href="/news-details">Visit to Holcim</Link> <span>(11)</span></li>
                                                <li className="active"><Link href="/news-details">Visit to Ute tribe</Link><span>(12)</span></li>
                                                <li><Link href="/news-details">Solar Farms</Link> <span>(18)</span></li>
                                                <li><Link href="/news-details">Visit to Data Center</Link> <span>(07)</span></li>
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
                                                            5th July, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Fellows Site Tour to <br />
                                                            Steel Manufacturing at Pueblo
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
                                                            1st July, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Fellows site tour to <br />
                                                            Google at CU Boulder
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
                                                            25th June, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Fellows Visit to the Ute <br />
                                                            tribe as part of 2days Visit in Alamosa
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="single-sidebar-widget">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}