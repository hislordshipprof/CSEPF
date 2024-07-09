
import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Achievement4 from "@/components/sections/Achievement4"
import Brand4 from "@/components/sections/Brand4"
import Faq2 from "@/components/sections/Faq2"
import Hero4 from "@/components/sections/Hero4"
import News4 from "@/components/sections/News4"
import Project4 from "@/components/sections/Project4"
import Service4 from "@/components/sections/Service4"
import Team4 from "@/components/sections/Team4"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home4() {

    return (
        <>

            <Layout headerStyle={4} footerStyle={4}>
                <Hero4 />
                <Brand4 />
                <Service4 />
                <About4 />
                <Project4 />
                <Team4 />
                <Testimonial4 />
                <Achievement4 />
                <Faq2 />
                <News4 />
            </Layout>
        </>
    )
}