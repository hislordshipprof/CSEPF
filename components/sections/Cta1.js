
import Link from 'next/link'

export default function Cta1() {
    return (
        <>
            <section className="cta-section">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="mask-shape">
                            <img src="/assets/img/cta-mask.png" alt="shape-img" />
                        </div>
                        <div className="circle-shape">
                            <img src="/assets/img/circle.png" alt="shape-img" />
                        </div>
                        <div className="cta-image wow fadeInUp" data-wow-delay=".3s">
                            <img src="/assets/img/cta.png" alt="cta-img" />
                        </div>
                        <div className="cta-items">
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Stay Connected With <br /> Cutting Edge IT</h3>
                            <Link href="/contact" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".7s">
                                get A Quote
                                <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
