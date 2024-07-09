'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, maximus eu mauris.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, maximus eu mauris.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, maximus eu mauris.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque nisi dui eget dapibus enim ornare eu. Morbi nunc metus, maximus eu mauris.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
