import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achievement2 from "@/components/sections/Achievement2"
import Brand2 from "@/components/sections/Brand2"
import ChooseUs1 from "@/components/sections/ChooseUs1"
import Contact1 from "@/components/sections/Contact1"
import Hero2 from "@/components/sections/Hero2"
import Marque3 from "@/components/sections/Marque3"
import News2 from "@/components/sections/News2"
import Offer1 from "@/components/sections/Offer1"
import Project2 from "@/components/sections/Project2"
import Service2 from "@/components/sections/Service2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2Single() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} onePageNav>
                <Hero2 />
                <Service2 />
                <About2 />
                <Marque3 />
                <Offer1 />
                <Project2 />
                <Brand2 />
                <Team2 />
                <ChooseUs1 />
                <Achievement2 />
                <Contact1 />
                <Testimonial2 />
                <News2 />
            </Layout>
        </>
    )
}