
import Link from 'next/link'

export default function Service4() {
    return (
        <>
            <section className="service-section-3 section-padding pt-0" id="service">
                <div className="line-shape-2">
                    <img src="/assets/img/service/line-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">OUR SERVICES</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">We Provide the Best Quality</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items style-3">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-6.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Data Analytics
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items style-3 mt-70 active">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-7.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Database Security
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-box-items style-3">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-8.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Artificial Intelligence
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="service-box-items style-3 mt-70">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-9.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Cyber Security
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
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
