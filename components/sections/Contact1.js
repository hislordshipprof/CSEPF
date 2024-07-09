

export default function Contact1() {
    return (
        <>
            <section className="contact-section fix section-padding" id="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="arrow-shape">
                            <img src="/assets/img/arrow-shape.png" alt="shape-img" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-image wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/img/contact.png" alt="contact-img" />
                                    <div className="cricle-shape">
                                        <img src="/assets/img/circle-shape.png" alt="shape-img" />
                                    </div>
                                    <div className="small-cricle-shape">
                                        <img src="/assets/img/choose/circle.png" alt="shape-img" />
                                    </div>
                                    <div className="frame-shape">
                                        <img src="/assets/img/frame.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <div className="section-title">
                                        <span className="text-white wow fadeInUp">TALK TO US</span>
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">How May We Help You!</h2>
                                    </div>
                                    <form action="#" id="contact-form" method="POST" className="contact-form-items">
                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <span>Your name*</span>
                                                    <input type="text" name="name" id="name" placeholder="Robot fox" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email" placeholder="info@example.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                <div className="form-clt">
                                                    <span>Message*</span>
                                                    <textarea name="message" id="message" placeholder="Write Message" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                <button type="submit" className="theme-btn bg-white">
                                                    Sand Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
