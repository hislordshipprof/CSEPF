import CounterUp from "../elements/CounterUp"


export default function Achievement3() {
    return (
        <>
            <section className="achievement-section-3 fix section-bg-2">
                <div className="shape-image">
                    <img src="/assets/img/achiv-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="achievement-wrapper style-2">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">achievement</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                We Are Increasing <br /> Business Success
                            </h2>
                        </div>
                        <div className="counter-area">
                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/01.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={6561}/>+</h2>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/02.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={600}/>+</h2>
                                    <p>Finished Projects</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={250}/>+</h2>
                                    <p>Skilled Experts</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/04.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={590}/>+</h2>
                                    <p>Media Posts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
