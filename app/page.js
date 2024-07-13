import Layout from "@/components/layout/Layout"
import About from "@/components/sections/About"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import HomeBanner from "@/components/sections/HomeBanner"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={4}>
                <HomeBanner />
                {/* <Marque1 /> */}
                <About />
                <Brand1 />
                <Service1 />
                <Achievement1 />
                <Project1 />
                {/* <Marque2 /> */}
                <Testimonial3 />
                <Team3 />
                
                <News1 />
                <Cta1 />
            </Layout>
        </>
    )
}