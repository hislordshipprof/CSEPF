
import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project4() {
    return (
        <>
            <section className="project-section fix section-padding pt-0 mt-4" id="project">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp"> Our Projects</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Latest showcase and solutions <br /> to our customers
                        </h2>
                    </div>
                </div>
                <ProjectSlider1 />
            </section>
        </>
    )
}
