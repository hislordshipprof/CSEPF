
import Link from 'next/link'

export default function News1() {
    return (
        <>
            <section className="news-section section-padding fix" id="blog">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">Article</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Read Our Latest Blog</h2>
                    </div>
                </div>
                <div className="news-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}>
                                    <div className="post-date">
                                        <span>Feb, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                            Top 5 Most Famous <br />
                                            Technology Trend In 2024
                                        </Link>
                                    </h3>
                                    <p>
                                        Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus tincidunt. Duis mi tellus,
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}>
                                    <div className="post-date">
                                        <span>May, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                            Top 5 Most Famous <br />
                                            Technology Trend In 2024
                                        </Link>
                                    </h3>
                                    <p>
                                        Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus tincidunt. Duis mi tellus,
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}>
                                    <div className="post-date">
                                        <span>July, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                            Top 5 Most Famous <br />
                                            Technology Trend In 2024
                                        </Link>
                                    </h3>
                                    <p>
                                        Nulla ut turpis a nisi vulputate varius non ut lectus. Ut vulputate tempus tincidunt. Duis mi tellus,
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
