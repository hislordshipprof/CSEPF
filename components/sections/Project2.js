
import ProjectSlider2 from '../slider/ProjectSlider2'

export default function Project2() {
    return (
        <>
            <section className="project-section-2 section-padding fix" id="project">
                <div className="left-shape">
                    <img src="/assets/img/project/left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img src="/assets/img/project/right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">PROJECTS</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Our Latest Incredible <br /> Client's Projects
                            </h2>
                        </div>
                        <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <ProjectSlider2 />
                    </div>
                </div>
            </section>
        </>
    )
}
