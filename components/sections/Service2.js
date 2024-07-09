
import Link from 'next/link'

export default function Service2() {
    return (
        <>
            <section className="service-section-2 fix section-padding pb-0" id="service">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">OUR SERVICES</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            We Provide the Best Quality
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
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
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items style-2 active">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            IT Consultancy
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
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
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            App Development
                                        </Link>
                                    </h4>
                                    <p>
                                        Mauris ultrices ligula eget volutpat aliquet nullam
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
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
