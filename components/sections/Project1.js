
import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project1() {
    return (
        <>
            <section className="project-section section-padding pt-0 fix" id="project">
                <div>
                    <p style={{fontSize: 30, fontWeight: 600,marginLeft: 20,color:'#483D8B'}}>Class of 2024</p>
                </div>
                <ProjectSlider1 showDots/>
            </section>
        </>
    )
}
