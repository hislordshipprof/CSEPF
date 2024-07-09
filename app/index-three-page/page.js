import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Achievement3 from "@/components/sections/Achievement3"
import Brand3 from "@/components/sections/Brand3"
import Hero3 from "@/components/sections/Hero3"
import Marque4 from "@/components/sections/Marque4"
import News3 from "@/components/sections/News3"
import Project3 from "@/components/sections/Project3"
import Service3 from "@/components/sections/Service3"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
import WorkProcess1 from "@/components/sections/WorkProcess1"
export default function Home3Single() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={3} onePageNav>
                <Hero3 />
                <About3 />
                <Brand3 />
                <Service3 />
                <WorkProcess1 />
                <Achievement3 />
                <Project3 />
                <Marque4 />
                <Team3 />
                <Testimonial3 />
                <News3 />
            </Layout>
        </>
    )
}